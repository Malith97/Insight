<?php 

	require 'dbconnect.php';
	require 'Upload_file.php';

	if(isset($_POST['stu_up_medical'])){		//student Upload medical
	
		
		$intdrop_stu = $_POST['intdrop_stu'];
        $degdrop_stu = $_POST['degdrop_stu'];
        $reg_no = $_POST['reg_no'];
        $type = $_POST['type'];
        $address = $_POST['address'];
		$contact = $_POST['contact'];
		$no_of_dates = $_POST['no_of_dates'];
		$start_date = $_POST['start_date'];
		$end_date = $_POST['end_date'];

		$file_new_name ="0";
		
		if ($_FILES['file']['size'] <> 0){
			$file = $_FILES['file'];
			$allowd = array('jpg', 'jpeg', 'png', 'pdf');
			$fileDestination = '../Upload/Medical';
			$file_new_name = uploadfile($file,$allowd,$fileDestination);
		}

        $db = new DbConnect;
		$sql = "INSERT INTO `medicalmaster`(`stu_id`, `intake`, `degree`, `type`, `Address`, `phone_no`, `no_dates`, `startingdate`, `enddate`,`file_name`) VALUES (\"" . $reg_no . "\"," . $intdrop_stu . "," . $degdrop_stu . "," . $type . ",\"" . $address . "\"," . $contact . ",\"" . $no_of_dates . "\",\"" . $start_date . "\",\"" . $end_date . "\",\"" . $file_new_name . "\");";

		echo $sql;

		if(!$conn = $db->connect())
			
		{
			echo'<script language="javascript">
					window.alert("SQL ERROR. Please check the SQL code ")
					window.location.href = "../stu_upload_medical.html"
					</script>';
					exit();
		}
		else
		{
			$stmt = $conn->prepare($sql);
			$stmt->execute();
			echo '<script language="javascript">
					window.location.href = "../stu_index.html"
					window.alert("Medical Upload Successfull !")
					</script>';
					exit();
    	}
	}


	if(isset($_POST['stu_up_assignments']))		//student Upload Assignments //havent filled yet
	{
		
		$Stu_id = $_POST['Stu_id'];
        $Ass_id = $_POST['Ass_id'];
        $description = $_POST['description'];

        $file_new_name ="0";
		
		if ($_FILES['file']['size'] <> 0){
			$file = $_FILES['file'];
			$allowd = array('jpg', 'jpeg', 'png', 'pdf');
			$fileDestination = '../Upload/Assignment_submit';
			$file_new_name = uploadfile($file,$allowd,$fileDestination);
		}

        $db = new DbConnect;
		$sql = "INSERT INTO `assignment_submit`(`assID`, `SID`, `late_submition`, `description`, `file`, `status`) VALUES (" . $Ass_id . ",\"" . $Stu_id . "\",0,\"" . $description . "\",\"" . $file_new_name . "\",1);";

		echo $sql;

		if(!$conn = $db->connect())
			
		{
			echo'<script language="javascript">
					window.alert(" Error in uploading assignment ")
					window.location.href = "../stu_view_assignments.html"
					</script>';
					exit();
		}
		else
		{
			$stmt = $conn->prepare($sql);
			$stmt->execute();
			echo '<script language="javascript">
					window.location.href = "../stu_assignments.html"
					window.alert("Assignment Uploaded Successfull !")
					</script>';
					exit();
    	}
	}


	if(isset($_POST['stu_up_quiz'])){		//student Upload Assignments //havent filled yet
	
		
		$sid = $_POST['sid'];
        $qmid = $_POST['qmid'];
        $quizs = $_POST['quiz'];

        $db = new DbConnect;

        $sql2 = "INSERT INTO `quiz_submit`(`stu_id`, `qsid`, `qmaster`, `answer`) VALUES ";
				foreach ($quizs as &$quiz) {
					$sql2 .= "(\"" . $sid . "\"," . $quiz['qst'] . "," . $qmid . "," . $quiz['CA'] . "),";
				}
				$sql2 = substr_replace($sql2 ,";",-1);;


		//$sql = "INSERT INTO `quiz_submit`(`stu_id`, `qsid`, `qmaster`, `answer`) VALUES (\"" . $sid . "\"," . $qid . "," . $answer . ");";

		echo $sql2;

		if(!$conn = $db->connect())
			
		{
			echo'<script language="javascript">
					window.alert(" Error in uploading assignment ")
					window.location.href = "../stu_view_assignments.html"
					</script>';
					exit();
		}
		else
		{
			$stmt = $conn->prepare($sql2);
			$stmt->execute();
			echo '<script language="javascript">
					window.location.href = "../stu_assignments.html"
					window.alert("Assignment Uploaded Successfull !")
					</script>';
					exit();
    	}
	}

 ?>