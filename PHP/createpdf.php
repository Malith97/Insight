<?php

    // Require composer autoload
    require_once  '../vendor/autoload.php';
    require 'dbconnect.php';
    // Create an instance of the class:
    $mpdf = new \Mpdf\Mpdf(['mode' => 'utf-8', 'format' => [270, 297]]);        //can change output file size changing format => []

    $data = "<h3 align=\"center\">Attendance Summery</h3><h4 align=\"center\">" . $_POST['degreename']. "</h4><h4 align=\"center\">Semester " . $_POST['semdrop1']. "</h4><h4 align=\"center\">Intake " . $_POST['intdrop1'] . "</h4><br>";

    $data .= "<table border=\"1|0\"><tr><th>No</th><th>Reg No</th><th>Name</th>";

    $db = new DbConnect;
    $conn = $db->connect();

    $stmt = $conn->prepare("SELECT relmsd.ID,MID,shortname FROM relmsd,modules,intake35sem1attendace WHERE relmsd.MID=modules.ID and intake35sem1attendace.RELID=relmsd.ID and DID = " . $_POST['degdrop1']. " and SID = " . $_POST['semdrop1']. "  GROUP BY relmsd.ID ORDER BY relmsd.ID ASC;");
    $stmt->execute();
    $modules = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $stmt = $conn->prepare("SELECT RegNo,Name FROM students WHERE intake= " . $_POST['intdrop1'] . " and DID = " . $_POST['degdrop1'] . " ");
    $stmt->execute();
    $Names = $stmt->fetchAll(PDO::FETCH_ASSOC);


    foreach($modules as $module){
        $data .= '<th>'. $module["MID"] .'<br>'. $module["shortname"] .'</th>';
    }

        $data .= "</tr>";

    $Nanearr = array();

    foreach($Names as $Name){
        array_push($Nanearr,$Name["RegNo"] );
        $data .= '<tr><td>1</td>';
        $data .= '<td>'. $Name["RegNo"] .'</td>';
        $data .= '<td>'. $Name["Name"] .'</td>';
        loadpercent($Name["RegNo"]);
        $data .= "</tr>";
    }


    function loadpercent($temp){

        $conn = $GLOBALS['conn'];
        $stmt = $conn->prepare("SELECT RELID,(SUM(`" . $temp . "`)/COUNT(*)) * 100 Pct FROM `intake35sem1attendace`,`relmsd` where intake35sem1attendace.RELID IN (SELECT relmsd.ID FROM relmsd WHERE DID = " . $_POST['degdrop1']. " and SID = " . $_POST['semdrop1']. " ORDER BY relmsd.ID ASC)  GROUP BY RELID;");

    	$stmt->execute();
        $Percents = $stmt->fetchAll(PDO::FETCH_ASSOC);

        foreach($Percents as $Percent){
            $pct = round($Percent["Pct"], 0);
            $GLOBALS['data'] .= '<td>'. $pct .' %</td>';
        }
    }





    $data .= "</table>";
    // Write some HTML code:
    $mpdf->WriteHTML($data);

    // Output a PDF file directly to the browser
    $mpdf->Output('Attendance_Summery.pdf','D');

?>