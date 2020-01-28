<?php 
	require 'dbconnect.php';

	if(isset($_POST['id1'],$_POST['id2'])) {
		$db = new DbConnect;
		$conn = $db->connect();

		$stmt = $conn->prepare("SELECT relmsd.ID,MID,shortname FROM relmsd,modules WHERE relmsd.MID=modules.ID and DID = " . $_POST['id1']. " ORDER BY relmsd.ID ASC;");
		$stmt->execute();
		$modules = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($modules);
	}

	if(isset($_POST['itd1'],$_POST['itd2'],$_POST['itd3'])) {
		$db = new DbConnect;
		$conn = $db->connect();

		$stmt = $conn->prepare("SELECT relmsd.ID,MID,shortname FROM relmsd,modules WHERE relmsd.MID=modules.ID and DID = " . $_POST['itd1']. " and SID = " . $_POST['itd3']. " ORDER BY relmsd.ID ASC;");
		$stmt->execute();
		$modules = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($modules);
	}




	if(isset($_POST['id6'],$_POST['id7'])) {
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM intake35sem1attendace where RELID = (SELECT `ID` FROM `relmsd` WHERE `MID`=\"" . $_POST['id7'] . "\" and DID=" . $_POST['id6'] . ") ORDER BY Date ASC;");
		$stmt->execute();
		$modules = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($modules);
	}


//
	if(isset($_POST['did'],$_POST['iid'])) {
		$db = new DbConnect;
		$conn = $db->connect();

		$stmt = $conn->prepare("SELECT RegNo,Name FROM students WHERE intake= " . $_POST['iid'] . " and DID = " . $_POST['did'] . " ");
		$stmt->execute();
		$Namss = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($Namss);
	}

	if(isset($_POST['intid'])) {
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM intake35sem1attendace where ID = " . $_POST['intid'] . ";");
		$stmt->execute();
		$modules = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($modules);
	}

	if(isset($_POST['rel1'])) {
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT RELID,(SUM(`" . $_POST['rel1'] . "`)/COUNT(*)) * 100 Pct FROM `intake35sem1attendace` GROUP BY RELID;");
		$stmt->execute();
		$modules = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($modules);
	}

	if(isset($_POST['test1'])) {
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM degree");
		$stmt->execute();
		$degrees = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($degrees);
	}

	if(isset($_POST['test2'])) {
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM intake");
		$stmt->execute();
		$intakes = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($intakes);
	}

	if(isset($_POST['test3'])) {				//Exam Log
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM examdeplog");
		$stmt->execute();
		$log = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($log);
	}

	if(isset($_POST['test4'])) {				//Exam Log
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM semester");
		$stmt->execute();
		$semesters = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($semesters);
	}

	if(isset($_POST['test5'],$_POST['test6'],$_POST['test7'])) {
		$db = new DbConnect;
		$conn = $db->connect();
		$sql = "SELECT * FROM relids WHERE sid=" . $_POST['test6'] . " AND iid =" . $_POST['test7'] . " AND did =" . $_POST['test5'] . ";";
		//echo $sql;
		$stmt = $conn->prepare($sql);
		$stmt->execute();
		$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($results);
	}

	if(isset($_POST['test8'])) {
		$db = new DbConnect;
		$conn = $db->connect();
		$sql = "SELECT * FROM mark_" . $_POST['test8'] . " ;";
		//echo $sql;
		$titles[] = array();
		$stmt = $conn->prepare($sql);
		$stmt->execute();
		$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($results);
	}

	if(isset($_POST['test9'])) {
		$db = new DbConnect;
		$conn = $db->connect();
		$sql = "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N'mark_" . $_POST['test9'] . "';";
		//echo $sql;
		$titles[] = array();
		$stmt = $conn->prepare($sql);
		$stmt->execute();
		$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($results);
	}
	// SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N'Customers'
	//SELECT (SUM('D/18/CS/0001')/COUNT(*)) * 100 FROM `intake35sem1attendace` WHERE RELID=1;


	function loadDegree() {
		$db = new DbConnect;
		$conn = $db->connect();

		$stmt = $conn->prepare("SELECT * FROM degree");
		$stmt->execute();
		$degrees = $stmt->fetchAll(PDO::FETCH_ASSOC);
		return $degrees;
	}

	function loadIntake() {
		$db = new DbConnect;
		$conn = $db->connect();

		$stmt = $conn->prepare("SELECT * FROM intake");
		$stmt->execute();
		$intakes = $stmt->fetchAll(PDO::FETCH_ASSOC);
		return $intakes;
	}

	function grade($grd){ 
        $number ="";

        switch($grd){

            case 1 : $number ="A+";
            break;

            case 2 : $number ="A";
            break;

            case 3 : $number ="A-";
            break;

            case 4 : $number ="B+";
            break;

            case 5 : $number ="B";
            break;

            case 6 : $number ="B-";
            break;

            case 7 : $number ="C+";
            break;

            case 8 : $number ="C";
            break;

            case 9 : $number ="C-";
            break;

            case 10 : $number ="D+";
            break;

            case 11 : $number ="ab";
            break;

            case 12 : $number ="NE";
            break;
            
            case 13 : $number ="Ia";
            break;
            
            case 14 : $number ="Ie";
            break;
            
            case 15 : $number ="Ib";
            break;

            case 16 : $number ="ex";
            break;

            default : echo "Fuck You";
            break;    
        }
        return $number;
}

 ?>