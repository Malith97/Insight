<?php
date_default_timezone_set("asia/colombo");
require 'dbconnect.php';
$output = '';
if(isset($_POST["import"]))
    {
        $db = new DbConnect;
        $conn = $db->connect();
        

        $SID = $_POST["semdrop"];
        $IID = $_POST["intdrop"];
        $DID = $_POST["degdrop"];
        $NO_Stu = 0;
        $NO_Sub = 0;
        $NO_GPA_Sub = 0;
        $NO_totcr = 0;
        $NO_acr = 0;
        $NO_bcr = 0;
        $date = '';

        
        $extension = end(explode(".", $_FILES["excel"]["name"])); // For getting Extension of selected file
        $allowed_extension = array("xls", "xlsx", "csv"); //allowed extension
        if(in_array($extension, $allowed_extension)) //check selected file extension is present in allowed extension array
            {
                $file = $_FILES["excel"]["tmp_name"]; // getting temporary source of excel file
                include("PHPExcel/IOFactory.php"); // Add PHPExcel Library in this code
                $objPHPExcel = PHPExcel_IOFactory::load($file); // create object of PHPExcel library by using load() method and in load method define path of selected file

                $output .= "<label class='text-success'>Data Inserted</label><br /><table class='table table-bordered'>";
                foreach ($objPHPExcel->getWorksheetIterator() as $worksheet)
                    {
                        $NO_Stu = $worksheet->getCellByColumnAndRow(2,7)->getValue();
                        $NO_Sub = $worksheet->getCellByColumnAndRow(2,8)->getValue();
                        $NO_GPA_Sub = $worksheet->getCellByColumnAndRow(2,9)->getValue();
                        $date = '2018 jan/feb';
                        
                        $temp = $NO_Sub + 5;
                        $NO_totcr = $worksheet->getCellByColumnAndRow($temp,7)->getValue();
                        $NO_acr = $worksheet->getCellByColumnAndRow($temp,8)->getValue();
                        $NO_bcr = $worksheet->getCellByColumnAndRow($temp,9)->getValue();

                        $sql = "INSERT INTO `relids`(`sid`, `iid`, `did`, `totcredit`, `acredit`, `bcredit`, `nosubs`, `nostudents`, `date`) VALUES (\"".$SID."\",\"".$IID."\",\"".$DID."\",\"".$NO_totcr."\",\"".$NO_acr."\",\"".$NO_bcr."\",\"".$NO_Sub."\",\"".$NO_Stu."\",\"".$date."\");";
                        echo $sql;
                        $stmt = $conn->prepare($sql);
                        if($stmt->execute()){
                            echo "Update1 Successfull! <br>";
                        }

                        $relids = '';
                        $sql3 = "SELECT MAX(ID) AS ID FROM relids;";
                        $stmt1 = $conn->prepare($sql3);
                        $stmt1->execute();
                        if($result = $stmt1->fetchAll(PDO::FETCH_ASSOC))
                        {
                            foreach ($result as $rows) {
                                                        $relids = $rows['ID'];
                                                        }
                        }

                        $sql31 = "CREATE TABLE `softwareprojectdb`.`mark_$relids` ( `ID` INT NOT NULL AUTO_INCREMENT , `regno` VARCHAR(15) NOT NULL ";
                        $sql33 = ", `SGPA` FLOAT NOT NULL , `NO` INT NOT NULL , `complete` VARCHAR(50) NOT NULL , `remark` VARCHAR(100) NOT NULL , PRIMARY KEY (`ID`), UNIQUE (`regno`)) ENGINE = InnoDB;";
                        
                        for($col=5; $col<=($temp-1); $col++)
                            {
                                $subname = $worksheet->getCellByColumnAndRow($col,6)->getValue();
                                $sql31 .= ',`'.$subname.'` varchar(15) NOT NULL';
                            }
                        
                            $sql31 .= $sql33;
                            $stmt2 = $conn->prepare($sql31);
                            if($stmt2->execute()){
                                echo "Update2 Successfull! <br>";
                            }
                        
                        for($row=12; $row<=$NO_Stu; $row++)
                            {
                                $ID = $worksheet->getCellByColumnAndRow(0, $row)->getValue();
                                $reg = $worksheet->getCellByColumnAndRow(1, $row)->getValue();
                                $SGPA = $worksheet->getCellByColumnAndRow($temp+1, $row)->getValue();
                                $NO = $worksheet->getCellByColumnAndRow($temp, $row)->getValue();
                                $complete = $worksheet->getCellByColumnAndRow($temp+2, $row)->getValue();
                                //(`ID`, `regno`, `CS1013`, `CS1022`, `CS1016`, `CS1043`, `CM1022`, `CM1012`, `CS1052`, `DL1172`, `MS1014`, `SGPA`, `NO`, `complete`, `remark`) 
                                $sql4 = "INSERT INTO `mark_$relids` VALUES ($ID,\"$reg\"";

                                for($col=5; $col<=($temp-1); $col++)
                                    {
                                        $temp2 = $worksheet->getCellByColumnAndRow($col,$row)->getValue();
                                        //$temp3 = grade($temp2);
                                        $sql4 .= ',"'.$temp2.'"';
                                    }
                                    $sql5 = ",$SGPA,$NO,\"$complete\",\"$complete\");";
                                    $sql4 .= $sql5;
                                    echo $sql4;
                                    $stmt3 = $conn->prepare($sql4);
                                    $stmt3->execute();
                            }
                            $date1= date("Ymd");
                            $time1= date("His");
                            $sql5 = "INSERT INTO `examdeplog`(`ID`, `date`, `time`, `states`) VALUES ($relids,$date1,$time1,'Uploaded')";
                            echo $sql5;
                            echo "<br>";
                            $stmt4 = $conn->prepare($sql5);
                            if($stmt4->execute()){
                                echo "Update3 Successfull! <br>";
                                echo'<script language="javascript">
                                window.location.href = "../Exdept_view_file.html"
                                </script>';
                                exit();
                            }
                    } 
            }
            else
                {
                $output = '<label class="text-danger">Invalid File</label>'; //if non excel file then
                }
}

function grade($grd){
        $number =0;

        switch($grd){

            case "A+" : $number =1;
            break;

            case "A" : $number =2;
            break;

            case "A-" : $number =3;
            break;

            case "B+" : $number =4;
            break;

            case "B" : $number =5;
            break;

            case "B-" : $number =6;
            break;

            case "C+" : $number =7;
            break;

            case "C" : $number =8;
            break;

            case "C-" : $number =9;
            break;

            case "D+" : $number =10;
            break;

            case "ab" : $number =11;
            break;

            case "NE" : $number =12;
            break;
            
            case "Ia" : $number =13;
            break;
            
            case "Ie" : $number =14;
            break;
            
            case "Ib" : $number =15;
            break;

            case "ex" : $number =16;
            break;

            default : echo "You're Failed";
            break;    
        }
        return $number;
}

?>