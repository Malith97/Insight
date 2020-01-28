<?php 

	require 'dbconnect.php';

	if(isset($_POST['id1'],$_POST['id2'])) { //id1 degree id2 intake
		$db = new DbConnect;
		$conn = $db->connect();

		$stmt = $conn->prepare("SELECT RegNO,Name,fname FROM `students` WHERE DID = " . $_POST['id1']. " and intake = " . $_POST['id2']. ";");
		$stmt->execute();
		$modules = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($modules);
	}

	if(isset($_POST['stu_test1'])){									//fetch all the degrees
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM degree");
		$stmt->execute();
		$degrees = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($degrees);
	}

	if(isset($_POST['stu_test2'])){									//fetch all the intakes
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM intake");
		$stmt->execute();
		$intakes = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($intakes);
	}

	if(isset($_POST['stu_view_notice_lec'])) {				//Fetch Notices Student View Notice
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT `NID`,`notice`,`date`, `name`, `intake`, `post`, `lec_pic`, `file` FROM notice,lecturer where notice.lec_id = lecturer.ID and notice.admin = 0 and notice.lec_id > 0 ORDER BY date DESC");
		$stmt->execute();
		$notice = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($notice);
	}

	if(isset($_POST['stu_view_notice_admin'])) {				//Fetch Notices Student View Notice
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT `notice`,`date`, `intake`,`file` FROM notice where notice.admin = 1 and notice.lec_id = 0 ORDER BY date DESC");
		$stmt->execute();
		$notice = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($notice);
	}

	if(isset($_POST['stu_view_assign'])) {				//Fetch Assignments 
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT assignments.ASS_ID,modules.ModuleName,assignments.title,assignments.end_date_and_time FROM `assignments`,`relmsd`,`students`,`modules` WHERE assignments.relmID=relmsd.ID and relmsd.SID=1 and relmsd.MID=modules.ID and assignments.intake=students.Intake and relmsd.DID=students.DID and students.RegNO=\"" . $_POST['stu_view_assign']. "\" ORDER BY end_date_and_time DESC");
		$stmt->execute();
		$assignments = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($assignments);
	}

	//$sql = "SELECT assignments.ASS_ID,modules.ModuleName,assignments.title,assignments.end_date_and_time FROM `assignments`,`relmsd`,`students`,`modules` WHERE assignments.relmID=relmsd.ID and relmsd.SID=1 and relmsd.MID=modules.ID and assignments.intake=students.Intake and relmsd.DID=students.DID and students.RegNO=\"" . $_POST['stu_view_assign']. "\" ORDER BY end_date_and_time DESC";


	if(isset($_POST['stu_down_assign'])) {				//Fetch Notices Student View Notice
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM `assignments`,`lecturer`,`relmsd`,`modules` WHERE assignments.relmID=relmsd.ID and relmsd.SID=1 and relmsd.MID=modules.ID AND ASS_ID=" . $_POST['stu_down_assign']. " AND assignments.lec_id=lecturer.ID;");
		$stmt->execute();
		$stu_assign = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($stu_assign);
	}

	if(isset($_POST['student_view_module'])) {				//Fetch Modules 
		$db = new DbConnect;
		$conn = $db->connect();
		$sql = "SELECT modules.ModuleName,modules.ID,modules.Credits FROM `relmsd`,`students`,`modules` WHERE relmsd.SID=1 and relmsd.MID=modules.ID and relmsd.DID=students.DID and students.RegNO=\"" . $_POST['student_view_module']. "\" ORDER BY relmsd.ID DESC";
		$stmt = $conn->prepare($sql);
		$stmt->execute();
		$stu_modules = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($stu_modules);
	}

	if(isset($_POST['mid'],$_POST['sid'])) {				//Fetch All Lecturenotes 
		$db = new DbConnect;
		$conn = $db->connect();
		$sql = "SELECT * FROM `lecnotes`,`students`,`relmsd` WHERE students.Intake=lecnotes.intake and lecnotes.relmID=relmsd.ID and relmsd.DID=students.DID and relmsd.SID=1 and students.RegNO=\"" . $_POST['sid']. "\" and relmsd.MID=\"" . $_POST['mid']. "\"";
		$stmt = $conn->prepare($sql);
		$stmt->execute();
		$stu_lecnotes = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($stu_lecnotes);
	}

	if(isset($_POST['stu_att_subs'])) {				//attendance summery table
		$db = new DbConnect;
		$conn = $db->connect();
		$SQL = "SELECT RELID,relmsd.ID,modules.ModuleName,(SUM(`" . $_POST['stu_att_subs']. "`)/COUNT(*)) * 100 Pct FROM `intake35sem1attendace`,`relmsd`,`modules` where intake35sem1attendace.RELID=relmsd.ID and relmsd.MID=modules.ID and intake35sem1attendace.RELID IN (SELECT relmsd.ID FROM `relmsd`,`students` WHERE relmsd.DID=students.DID and relmsd.SID = 1 and RegNO=\"" . $_POST['stu_att_subs']. "\" ORDER BY relmsd.ID ASC) GROUP BY RELID;";
		$stmt = $conn->prepare($SQL);
		$stmt->execute();
		$stu_att_sum = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($stu_att_sum);
	}

	if(isset($_POST['stu_att_tot'])) {				//attendance summery widget
		$db = new DbConnect;
		$conn = $db->connect();
		$SQL = "SELECT RELID,relmsd.ID,modules.ModuleName,(SUM(`" . $_POST['stu_att_tot']. "`)/COUNT(*)) * 100 Pct FROM `intake35sem1attendace`,`relmsd`,`modules` where intake35sem1attendace.RELID=relmsd.ID and relmsd.MID=modules.ID and intake35sem1attendace.RELID IN (SELECT relmsd.ID FROM `relmsd`,`students` WHERE relmsd.DID=students.DID and relmsd.SID = 1 and RegNO=\"" . $_POST['stu_att_tot']. "\" ORDER BY relmsd.ID ASC);";
		//echo $SQL;
		$stmt = $conn->prepare($SQL);
		$stmt->execute();
		$stu_tot_att = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($stu_tot_att);
	}

	if(isset($_POST['stu_att_medical'])) {				//attendance summery widget
		$db = new DbConnect;
		$conn = $db->connect();
		$SQL = "SELECT `med_id`,`no_dates`,`submit_date`,`status` FROM `medicalmaster` WHERE medicalmaster.stu_id=\"" . $_POST['stu_att_medical']. "\";";
		//echo $SQL;
		$stmt = $conn->prepare($SQL);
		$stmt->execute();
		$stu_att_med = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($stu_att_med);
	}

	if(isset($_POST['Regno'],$_POST['sem_marks'])) {
		$db = new DbConnect;
		$conn = $db->connect();
		$sql = "SELECT relids.ID FROM relids,students WHERE relids.sid=" . $_POST['sem_marks'] . " AND relids.iid = students.intake AND relids.did = students.DID AND students.RegNO =\"" . $_POST['Regno'] . "\";";
		//echo $sql;
		$stmt = $conn->prepare($sql);
		$stmt->execute();
		$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($results);
	}

	if(isset($_POST['Regno'],$_POST['Mark_ID'])) {
		$db = new DbConnect;
		$conn = $db->connect();
		$sql = "SELECT * FROM `mark_" . $_POST['Mark_ID'] . "` WHERE regno =\"" . $_POST['Regno'] . "\";";
		//echo $sql;
		$stmt = $conn->prepare($sql);
		$stmt->execute();
		$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($results);
	}

	if(isset($_POST['stu_view_quiz'])) {				//Fetch Quizzes According to Student ID
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT `qid`, `title`, `edate` FROM quizmaster,lecturer,students,relmsd,modules where quizmaster.lec_id = lecturer.ID and quizmaster.intake = students.Intake AND relmsd.ID=quizmaster.relmsid AND relmsd.MID=modules.ID AND relmsd.DID=students.DID AND students.RegNO=\"" . $_POST['stu_view_quiz']. "\" ORDER BY edate DESC;");
		$stmt->execute();
		$stu_quiz = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($stu_quiz);
	}

	if(isset($_POST['stu_view_quiz_paper'])) {				//Fetch Quizzes According to Student ID
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM `quizsub` WHERE qmid = " . $_POST['stu_view_quiz_paper']. " ORDER BY qsid ASC");
		$stmt->execute();
		$quize = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($quize);
	}

	if(isset($_POST['Regno_gpa'])) {
		$db = new DbConnect;
		$conn = $db->connect();
		$sql = "SELECT relids.ID FROM relids,students WHERE relids.iid = students.intake AND relids.did = students.DID AND students.RegNO =\"" . $_POST['Regno_gpa'] . "\";";
		//echo $sql;
		$stmt = $conn->prepare($sql);
		$stmt->execute();
		$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($results);
	}

	if(isset($_POST['Regno_quz'],$_POST['master_quz'])) {
		$db = new DbConnect;
		$conn = $db->connect();
		$sql = "Select `id`, `q_name`, `answer`,`correct` from `quizsub`,`quiz_submit` WHERE quiz_submit.qsid=quizsub.qsid AND quiz_submit.qmaster =" . $_POST['master_quz'] . " and quiz_submit.stu_id=\"" . $_POST['Regno_quz'] . "\";";
		//echo $sql;
		$stmt = $conn->prepare($sql);
		$stmt->execute();
		$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($results);
	}

 ?>