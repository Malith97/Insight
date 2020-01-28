<?php 

	require 'dbconnect.php';
	require 'Upload_file.php';

	if(isset($_POST['lec_up_notice'])){				//Admin Upload Notice
	
		
		$intdrop_notice = $_POST['intdrop_notice'];
        $it = $_POST['it'];
        $is = $_POST['is'];
        $cs = $_POST['cs'];
        $ce = $_POST['ce'];
        $se = $_POST['se'];
		$desc = $_POST['desc'];
		$lec_id = $_POST['lid'];

		echo $lec_id;

		$file_new_name ="0";
		
		if ($_FILES['file']['size'] <> 0){
			$file = $_FILES['file'];
			$allowd = array('jpg', 'jpeg', 'png', 'pdf');
			$fileDestination = '../Upload/Notice';
			$file_new_name = uploadfile($file,$allowd,$fileDestination);
		}


        $db = new DbConnect;
		$sql = "INSERT INTO `notice`(`intake`, `it`, `is`, `cs`, `ce`, `se`, `notice` ,`file` , `lec_id`) VALUES (" . $intdrop_notice . "," . $it . "," . $is . "," . $cs . "," . $ce . "," . $se . ",\"" . $desc . "\",\"" . $file_new_name . "\"," . $lec_id . ");";

		echo $sql;

		if(!$conn = $db->connect())
			
		{
			echo'<script language="javascript">
					window.alert("SQL ERROR. Please check the SQL code ")
					window.location.href = "../lec_upload_notice.html"
					</script>';
					exit();
		}
		else
		{
			$stmt = $conn->prepare($sql);
			$stmt->execute();
			echo '<script language="javascript">
					window.location.href = "../lec_view_notice.html"
					window.alert("Notice Board Updated !")
					</script>';
					exit();
    	}
	}


	if(isset($_POST['up_lec_notes'])){				//Lecturer Upload LectureNotes into the database
	
		
		$lec_intdrop = $_POST['lec_intdrop'];
        $lec_moduledrop3 = $_POST['lec_moduledrop3'];
        $name = $_POST['name'];
        $module_desc = $_POST['module_desc'];
        $lec_id = $_POST['lid'];

        $file_new_name ="0";
		
		if ($_FILES['file']['size'] <> 0){
			$file = $_FILES['file'];
			$allowd = array('jpg', 'jpeg', 'png', 'pdf');
			$fileDestination = '../Upload/Lec_Notes';
			$file_new_name = uploadfile($file,$allowd,$fileDestination);
		}


        $db = new DbConnect;
		$sql = "INSERT INTO `lecnotes`(`intake`, `relmID`, `name`, `module_desc`, `module_file`, `lec_id`) VALUES (" . $lec_intdrop . "," . $lec_moduledrop3 . ",\"" . $name . "\",\"" . $module_desc . "\",\"" . $file_new_name . "\"," . $lec_id . ");";

		echo $sql;

		if(!$conn = $db->connect())
			
		{
			echo'<script language="javascript">
					window.alert("Error in Uploading Lecture Notes ")
					window.location.href = "../lec_upload_lecnotes.html"
					</script>';
					exit();
		}
		else
		{
			$stmt = $conn->prepare($sql);
			$stmt->execute();
			echo '<script language="javascript">
					window.location.href = "../lec_view_lecnotes.html"
					window.alert("Lecture Notes Upload Successfull !")
					</script>';
					exit();
    	}
	}


	if(isset($_POST['lec_up_assignments'])){				//Lecturer Upload Assignments into the database
	
		
		$lec_intdrop = $_POST['lec_intdrop'];
        $lec_moduledrop = $_POST['lec_moduledrop'];
        $title = $_POST['title'];
        $ass_desc = $_POST['ass_desc'];
        $start_date = $_POST['start_date'];
        $end_date = $_POST['end_date'];
        $lec_id = $_POST['lid'];
        $file_new_name ="0";

		$start_date = date_create($_POST['start_date']);
		$start_date = date_format($start_date,"Y-m-d H:i:s");
		$end_date = date_create($_POST['end_date']);
		$end_date = date_format($end_date,"Y-m-d H:i:s");
		
		if ($_FILES['file']['size'] <> 0){
			$file = $_FILES['file'];
			$allowd = array('jpg', 'jpeg', 'png', 'pdf');
			$fileDestination = '../Upload/Assignment';
			$file_new_name = uploadfile($file,$allowd,$fileDestination);
		}


        $db = new DbConnect;
		$sql = "INSERT INTO `assignments`(`intake`, `relmID`, `start_date_and_time`, `end_date_and_time`, `title`, `description`, `attachments`, `lec_id`) VALUES (" . $lec_intdrop . "," . $lec_moduledrop . ",\"" . $start_date . "\",\"" . $end_date . "\",\"" . $title . "\",\"" . $ass_desc . "\",\"" . $file_new_name . "\"," . $lec_id . ");";

		echo $sql;

		if(!$conn = $db->connect())
			
		{
			echo'<script language="javascript">
					window.alert("Error in Uploading Assignments ")
					window.location.href = "../lec_upload_assignments.html"
					</script>';
					exit();
		}
		else
		{
			$stmt = $conn->prepare($sql);
			$stmt->execute();
			echo '<script language="javascript">
					window.location.href = "../lec_view_assignments.html"
					window.alert("Assignments Successfully Uploaded !!")
					</script>';
					exit();
    	}
	}


	if(isset($_POST['lec_upload_quiz'])){				//Lecturer upload quiz
	
		
		$lec_intdrop = $_POST['lec_intdrop'];
        $lec_moduledrop3 = $_POST['lec_moduledrop3'];
        $quiz_title = $_POST['quiz_title'];
        $lec_id = $_POST['lid'];
        $start_date = date_create($_POST['start_date']);
		$start_date = date_format($start_date,"Y-m-d H:i:s");
		$end_date = date_create($_POST['end_date']);
		$end_date = date_format($end_date,"Y-m-d H:i:s");
		
		$quizs=$_POST['quiz'];
		//echo($info);
		//print_r($info);


        $db = new DbConnect;
		$sql = "INSERT INTO `quizmaster`(`lec_id`, `intake`, `relmsid`, `title`, `sdate`, `edate`) VALUES (" . $lec_id . "," . $lec_intdrop . "," . $lec_moduledrop3 . ",\"" . $quiz_title . "\",\"" . $start_date . "\",\"" . $end_date . "\");";

		//echo $sql;

		if(!$conn = $db->connect()){
			echo'<script language="javascript">
					window.location.href = "../lec_upload_quiz.html"
					</script>';
					exit();
		}else{
			if($conn->exec($sql)){
				$last_id = $conn->lastInsertId();
				echo $last_id;
				//INSERT INTO `quizsub`(`qmid`, `q_name`, `a1`, `a2`, `a3`, `a4`, `correct`) VALUES
				$sql2 = "INSERT INTO `quizsub`(`qmid`, `q_name`, `a1`, `a2`, `a3`, `a4`, `correct`) VALUES ";
				foreach ($quizs as &$quiz) {
					$sql2 .= "(" . $last_id . ",\"" . $quiz['name'] . "\",\"" . $quiz['A1'] . "\",\"" . $quiz['A2'] . "\",\"" . $quiz['A3'] . "\",\"" . $quiz['A4'] . "\"," . $quiz['CA'] . "),";
				}
				$sql2 = substr_replace($sql2 ,";",-1);;
				echo $sql2;
				if(!$conn = $db->connect())
					
				{
					echo'<script language="javascript">
							window.alert("Error in Uploding quiz sub ")
							window.location.href = "../lec_upload_quiz.html"
							</script>';
							exit();
				}
				else
				{
					$stmt = $conn->prepare($sql2);
					$stmt->execute();
					echo '<script language="javascript">
							window.alert("Quiz Upload Successfull !")
							window.location.href = "../lec_view_quiz.html"
							</script>';
							exit();
				}
			}
    		
    	}
	}


 ?>