<?php 

	require 'dbconnect.php';

	if(isset($_POST['adm_test1'])){									//fetch all the degrees
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM degree");
		$stmt->execute();
		$degrees = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($degrees);
	}

	if(isset($_POST['adm_test2'])){									//fetch all the intakes
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM intake");
		$stmt->execute();
		$intakes = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($intakes);
	}

	if(isset($_POST['adm_test3'])){									//fetch all the semesters
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM semester");
		$stmt->execute();
		$semesters = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($semesters);
	}

	if(isset($_POST['adm_stu_int'],$_POST['adm_stu_deg'])) {			//Fetch All Students Details From Database Table Students
		$db = new DbConnect;
		$conn = $db->connect();
		$sql = "SELECT * FROM students WHERE intake= " . $_POST['adm_stu_int'] . " and DID = " . $_POST['adm_stu_deg'] . " ";
		$stmt = $conn->prepare($sql);
		$stmt->execute();
		$list = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($list);
	}

	if(isset($_POST['adm_id1'],$_POST['adm_id2'])) {				//Fetch All Students Details From Database Table admin update attendance
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT relmsd.ID,MID,shortname FROM relmsd,modules,intake35sem1attendace WHERE relmsd.MID=modules.ID and intake35sem1attendace.RELID=relmsd.ID and DID = " . $_POST['adm_id1']. " and SID = " . $_POST['adm_id2']. "  GROUP BY relmsd.ID ORDER BY relmsd.ID ASC;");
		$stmt->execute();
		$modules = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($modules);
	}

	if(isset($_POST['did'],$_POST['iid'])) {
		$db = new DbConnect;
		$conn = $db->connect();

		$stmt = $conn->prepare("SELECT RegNo,Name FROM students WHERE intake= " . $_POST['iid'] . " and DID = " . $_POST['did'] . " ");
		$stmt->execute();
		$Namss = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($Namss);
	}																//Fetch All Students Details From Database Table admin update attendance ends

	if(isset($_POST['id6'],$_POST['id7'])) {
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM intake35sem1attendace where RELID = (SELECT `ID` FROM `relmsd` WHERE `MID`=\"" . $_POST['id7'] . "\" and DID=" . $_POST['id6'] . ") ORDER BY Date ASC;");
		$stmt->execute();
		$modules = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($modules);
	}	

	if(isset($_POST['intid'])) {
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM intake35sem1attendace where ID = " . $_POST['intid'] . ";");
		$stmt->execute();
		$modules = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($modules);
	}

	if(isset($_POST['rel1'],$_POST['rel2'],$_POST['rel3'])) {
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT RELID,(SUM(`" . $_POST['rel1'] . "`)/COUNT(*)) * 100 Pct FROM `intake35sem1attendace`,`relmsd` where intake35sem1attendace.RELID IN (SELECT relmsd.ID FROM relmsd WHERE DID = " . $_POST['rel2']. " and SID = " . $_POST['rel3']. " ORDER BY relmsd.ID ASC)  GROUP BY RELID;");
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

	if(isset($_POST['adm_test7'])){									//fetch all the lecturers in timetable
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM lecturer");
		$stmt->execute();
		$lecturers = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($lecturers);
	}
	
	if(isset($_POST['adm_view_timetbl'])) {				//Admin View Time Table
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM timetblmaster");
		$stmt->execute();
		$time = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($time);
	}

	if(isset($_POST['adm_view_notice_lec'])) {				//Fetch Notices Admin View Notice
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT `NID`,`notice`,`date`, `name`, `intake`, `post`, `lec_pic`, `file` FROM notice,lecturer where notice.lec_id = lecturer.ID and notice.admin = 0 and notice.lec_id > 0 ORDER BY date DESC");
		$stmt->execute();
		$notice = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($notice);
	}

	if(isset($_POST['adm_view_notice_admin'])) {				//Fetch Notices Admin View Notice
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT `notice`,`date`, `intake`,`file` FROM notice where notice.admin = 1 and notice.lec_id = 0 ORDER BY date DESC");
		$stmt->execute();
		$notice = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($notice);
	}

	if(isset($_POST['ivt'],$_POST['svt'],$_POST['dvt'])) {		//admin view time tavle
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT week FROM timetblmaster WHERE intake = " . $_POST['ivt']. " and degree = " . $_POST['dvt']. " and semester = " . $_POST['svt']. " ORDER BY week DESC;");
		$stmt->execute();
		$weeks = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($weeks);
	}

	if(isset($_POST['ivt1'],$_POST['svt1'],$_POST['dvt1'],$_POST['wvt1'])) {		//admin view time tavle
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT `TSID`, `lec_id`, `MID`, `Slot`, `lec_hall`, `no_stu`, `date`, `dayname`, `day_type` FROM `timetblsub` WHERE  `TID` IN ( SELECT TID FROM timetblmaster WHERE intake = " . $_POST['ivt1']. " and degree = " . $_POST['dvt1']. " and semester = " . $_POST['svt1']. " and week = " . $_POST['wvt1']. ");");
		$stmt->execute();
		$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($results);
	}

	if(isset($_POST['adm_view_staff'])) {				//Fetch Staff Details
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM lecturer");
		$stmt->execute();
		$staff = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($staff);
	}

	if(isset($_POST['medical'])) {				//Admin view medical Form
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT `stu_id`,`submit_date`,`Name`,`email`,`med_id` FROM `medicalmaster`,`students` WHERE medicalmaster.stu_id=students.RegNO");
		$stmt->execute();
		$medical = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($medical);
	}

	if(isset($_POST['medical_all'])) {				//Admin view medical Form
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT degree.Name AS D_name,`med_id`, `stu_id`, `medicalmaster`.`intake`, `degree`, `type`, `medicalmaster`.`Address`, `phone_no`, `no_dates`, `startingdate`, `enddate`, `file_name`, `submit_date`, `status`,`stu_id`,students.Name AS s_name,`email` FROM `medicalmaster`,`students`,`degree` WHERE medicalmaster.med_id=" . $_POST['medical_all']. "  and medicalmaster.stu_id=students.RegNO and medicalmaster.degree=degree.DID");
		$stmt->execute();
		$medical_all = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($medical_all);
	}

	if(isset($_POST['Accept_med'])) {				//Accept medical
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("UPDATE `medicalmaster` SET `status`=1 WHERE med_id=" . $_POST['Accept_med']. ";");
		$stmt->execute();
	}

	if(isset($_POST['Reject_med'])) {				//Reject medical
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("UPDATE `medicalmaster` SET `status`=-1 WHERE med_id=" . $_POST['Reject_med']. ";");
		$stmt->execute();
	}

	if(isset($_POST['load_marks'])) {				//Admin view medical Form
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("");
		$stmt->execute();
		$marks = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($marks);
	}

 ?>