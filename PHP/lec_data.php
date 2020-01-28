<?php 

	require 'dbconnect.php';

	if(isset($_POST['lec_test1'])){									//fetch all the degrees
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM degree");
		$stmt->execute();
		$degrees = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($degrees);
	}

	if(isset($_POST['lec_test2'])){									//fetch all the intakes
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM intake");
		$stmt->execute();
		$intakes = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($intakes);
	}

	if(isset($_POST['lec_test3'])){									//fetch all the semesters
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM semester");
		$stmt->execute();
		$semesters = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($semesters);
	}

	if(isset($_POST['itd1'],$_POST['itd2'],$_POST['itd3'])) {			//lecturer upload lecture notes
		$db = new DbConnect;
		$conn = $db->connect();

		$stmt = $conn->prepare("SELECT relmsd.ID,MID,shortname FROM relmsd,modules WHERE relmsd.MID=modules.ID and DID = " . $_POST['itd1']. " and SID = " . $_POST['itd3']. " ORDER BY relmsd.ID ASC;");
		$stmt->execute();
		$modules = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($modules);
	}

	if(isset($_POST['id1'],$_POST['id2'],$_POST['id3'])) {			//lecturer view lecture notes
		$db = new DbConnect;
		$conn = $db->connect();

		$stmt = $conn->prepare("SELECT relmsd.ID,MID,shortname FROM relmsd,modules WHERE relmsd.MID=modules.ID and DID = " . $_POST['id1']. " and SID = " . $_POST['id3']. " ORDER BY relmsd.ID ASC;");
		$stmt->execute();
		$modules = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($modules);
	}

	if(isset($_POST['lec_view_note1'],$_POST['lec_view_note2'],$_POST['lec_view_note3'])){						
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT intake,lecnotes.name,lecnotes.module_file,date,module_desc,modules.ModuleName,degree.Name,module_file FROM lecnotes,relmsd,modules,degree WHERE lecnotes.relmID = relmsd.ID AND lecnotes.relmID = " . $_POST['lec_view_note3']. " AND relmsd.MID=modules.ID AND relmsd.DID=degree.DID AND lec_id=" . $_POST['lec_view_note1']. " AND intake=" . $_POST['lec_view_note2']. ";");
		$stmt->execute();
		$notes = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($notes);
	}

	
	if(isset($_POST['lec_id_viewlecnotes'])){									
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT intake,lecnotes.name,date,module_desc,modules.ModuleName,degree.Name,module_file FROM lecnotes,relmsd,modules,degree WHERE lecnotes.relmID = relmsd.ID AND relmsd.MID=modules.ID AND relmsd.DID=degree.DID AND lec_id=" . $_POST['lec_id_viewlecnotes']. ";");
		$stmt->execute();
		$notes1 = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($notes1);
	}


	if(isset($_POST['lec_view_ass1'],$_POST['lec_view_ass2'],$_POST['lec_view_ass3'])){						
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT intake,assignments.title,assignments.attachments,start_date_and_time,end_date_and_time,description,modules.ModuleName,degree.Name FROM assignments,relmsd,modules,degree WHERE assignments.relmID = relmsd.ID AND assignments.relmID = " . $_POST['lec_view_ass3']. " AND relmsd.MID=modules.ID AND relmsd.DID=degree.DID AND assignments.lec_id=" . $_POST['lec_view_ass1']. " AND assignments.intake=" . $_POST['lec_view_ass2']. ";");
		$stmt->execute();
		$assign = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($assign);
	}


	if(isset($_POST['lec_view_assignments'])){									
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT assignments.ASS_ID,intake,degree.Code,assignments.title,end_date_and_time,description,attachments,modules.ModuleName,degree.Name FROM assignments,relmsd,modules,degree WHERE assignments.relmID = relmsd.ID AND relmsd.MID=modules.ID AND relmsd.DID=degree.DID AND lec_id=" . $_POST['lec_view_assignments']. ";");
		$stmt->execute();
		$assign1 = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($assign1);
	}

	if(isset($_POST['lec_view_notice_lec'])) {				//Fetch LEcture Notices
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT `NID`,`notice`,`date`, `name`, `intake`, `post`, `lec_pic`, `file` FROM notice,lecturer where notice.lec_id = lecturer.ID and notice.admin = 0 and notice.lec_id = " . $_POST['lid']. " ORDER BY date DESC");
		$stmt->execute();
		$notice = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($notice);
	}

	if(isset($_POST['lec_view_quiz'])) {				//Fetch Quizzes According to Lecture ID
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT `qid`, `intake`, `title`, `edate` FROM quizmaster,lecturer where quizmaster.lec_id = lecturer.ID and quizmaster.lec_id = " . $_POST['lid']. " ORDER BY edate DESC");
		$stmt->execute();
		$quiz = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($quiz);
	}

	if(isset($_POST['lec_view_quiz_paper'])) {				//Fetch Quizzes According to Lecture ID
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM `quizsub` WHERE qmid = " . $_POST['lec_view_quiz_paper']. " ORDER BY qsid ASC");
		$stmt->execute();
		$quizs = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($quizs);
	}

		if(isset($_POST['lec_view_asssub'])) {				//Fetch Notices Student View Notice
		$db = new DbConnect;
		$conn = $db->connect();
		$sql = "SELECT * FROM `assignment_submit` WHERE assID=" . $_POST['lec_view_asssub']. ";";
		$stmt = $conn->prepare($sql);
		//echo $sql;
		$stmt->execute();
		$stu_assignsub = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($stu_assignsub);
	}
	if(isset($_POST['lec_quiz_res'])) {				//Fetch Notices Student View Notice
		$db = new DbConnect;
		$conn = $db->connect();
		$sql = "SELECT qsid FROM `quizsub` WHERE qmid =" . $_POST['lec_quiz_res']. " Group By qsid;";
		$stmt = $conn->prepare($sql);
		//echo $sql;
		$stmt->execute();
		$stu_assignsub = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($stu_assignsub);
	}

	if(isset($_POST['lec_quiz_res_qid'])) {				//Fetch Notices Student View Notice
		$db = new DbConnect;
		$conn = $db->connect();
		$sql = "Select qsid,answer, (Count(answer)* 100 / (Select Count(*) From quiz_submit WHERE qsid=" . $_POST['lec_quiz_res_qid']. ")) as Score From quiz_submit WHERE qsid=" . $_POST['lec_quiz_res_qid']. " Group By answer;";
		$stmt = $conn->prepare($sql);
		//echo $sql;
		$stmt->execute();
		$stu_assignsub = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($stu_assignsub);
	}

	if(isset($_POST['lec_quiz_res_pct'])) {				//Fetch Notices Student View Notice
		$db = new DbConnect;
		$conn = $db->connect();
		$sql = "SELECT (Count(*)*100 / (SELECT Count(*) FROM `quiz_submit`,`quizsub` WHERE quiz_submit.qsid=quizsub.qsid and quiz_submit.qsid=" . $_POST['lec_quiz_res_pct']. ")) AS pct FROM `quiz_submit`,`quizsub` WHERE quiz_submit.qsid=quizsub.qsid and quiz_submit.answer=quizsub.correct AND quiz_submit.qsid=" . $_POST['lec_quiz_res_pct']. ";";
		$stmt = $conn->prepare($sql);
		//echo $sql;
		$stmt->execute();
		$stu_assignsub = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($stu_assignsub);
	}

	if(isset($_POST['lec_quiz_master_id'])) {				//Fetch Notices Student View Notice
		$db = new DbConnect;
		$conn = $db->connect();
		$sql = "Select COUNT(`id`) AS count,`stu_id`,students.Name from `quizsub`,`quiz_submit`,`students` WHERE quiz_submit.qsid=quizsub.qsid AND `answer`=`correct` AND stu_id=students.RegNO AND quiz_submit.qmaster =" . $_POST['lec_quiz_master_id']. " GROUP BY `stu_id`;";
		$stmt = $conn->prepare($sql);
		//echo $sql;
		$stmt->execute();
		$stu_assignsub = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($stu_assignsub);
	}

 ?>