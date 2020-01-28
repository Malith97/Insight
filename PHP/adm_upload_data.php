<?php 

	require 'dbconnect.php';
	require 'Upload_file.php';

	if(isset($_POST['Export'])) {
		$db = new DbConnect;
		$conn = $db->connect();

		$stmt3 = $conn->prepare("SELECT `ID` FROM `relmsd` WHERE `MID`=\"".$_POST['moduledrop']."\" and DID=".$_POST['degdrop']."");
		$stmt3->execute();
		$dds = $stmt3->fetchAll(PDO::FETCH_ASSOC);
		$tempp = "";
		foreach ($dds as $dd) {
									$tempp = $dd['ID'];
	                    	  }
	    //echo $tempp;
	    //echo "";

		$sql = "INSERT INTO `intake35sem1attendace`(`Date`, `Slot`, `RELID`";
		$sql2 = "(\"".$_POST['date']."\",".$_POST['Slot'].",\"".$tempp."\"";
		$stmt = $conn->prepare("SELECT RegNo FROM `students` WHERE DID=".$_POST['degdrop']." and intake =".$_POST['intdrop']."");
		$stmt->execute();
		$datas = $stmt->fetchAll(PDO::FETCH_ASSOC);
		foreach ($datas as $data) {
									$sql .=",`".$data['RegNo']."`";
									$temp = $data['RegNo'];
									$sql2 .=",".$_POST[$temp]."";
		                    	  }
	    $sql .=") VALUES";
	    $sql .= $sql2;
	    $sql .=");";
	    //echo $sql;
	    //echo "";
	    $stmt2 = $conn->prepare($sql);
		if($stmt2->execute()){
				echo'<script language="javascript">
				window.alert("Attendance Updated !! ")
				window.location.href = "../adm_update_attendance.html"
				</script>';
				exit();
		}else{
				echo '<script language="javascript">
				window.location.href = "../adm_update_attendance.html"
				window.alert("Attence Update Error !! Please check again")
				</script>';
				exit();
		}
    }

    //Admin upload timetable

    if(isset($_POST['up_timetable'])){		//change submit56
		//intake , regno , name , degree , type , address , contact , totno ,start date , end date , file
		$intake = $_POST['intdrop2'];
        $degree = $_POST['degdrop2'];
        $semester = $_POST['semdrop2'];
		$week = $_POST['weekno'];
		$sdate = $_POST['start_date'];
		$edate = $_POST['end_date'];

		//monday
		$lecdrop_mon_1 = $_POST['lecdrop_mon_1'];
        $lecdrop_mon_2 = $_POST['lecdrop_mon_2'];
        $moduledrop_mon_1 = $_POST['moduledrop_mon_1'];
		$moduledrop_mon_2 = $_POST['moduledrop_mon_2'];
		$mon_slot_1 = $_POST['mon_slot_1'];
		$mon_hall_1 = $_POST['mon_hall_1'];
		$mon_slot_2 = $_POST['mon_slot_2'];
		$mon_hall_2 = $_POST['mon_hall_2'];
		$mon_stu_no = $_POST['mon_stu_no'];
		$mon_date = $_POST['mon_date'];
		$mon_date_status = $_POST['mon_date_status'];

		//tuesday
		$lecdrop_tue_1 = $_POST['lecdrop_tue_1'];
        $lecdrop_tue_2 = $_POST['lecdrop_tue_2'];
        $moduledrop_tue_1 = $_POST['moduledrop_tue_1'];
		$moduledrop_tue_2 = $_POST['moduledrop_tue_2'];
		$tue_slot_1 = $_POST['tue_slot_1'];
		$tue_hall_1 = $_POST['tue_hall_1'];
		$tue_slot_2 = $_POST['tue_slot_2'];
		$tue_hall_2 = $_POST['tue_hall_2'];
		$tue_stu_no = $_POST['tue_stu_no'];
		$tue_date = $_POST['tue_date'];
		$tue_date_status = $_POST['tue_date_status'];

		//wednesday
		$lecdrop_wed_1 = $_POST['lecdrop_wed_1'];
        $lecdrop_wed_2 = $_POST['lecdrop_wed_2'];
        $moduledrop_wed_1 = $_POST['moduledrop_wed_1'];
		$moduledrop_wed_2 = $_POST['moduledrop_wed_2'];
		$wed_slot_1 = $_POST['wed_slot_1'];
		$wed_hall_1 = $_POST['wed_hall_1'];
		$wed_slot_2 = $_POST['wed_slot_2'];
		$wed_hall_2 = $_POST['wed_hall_2'];
		$wed_stu_no = $_POST['wed_stu_no'];
		$wed_date = $_POST['wed_date'];
		$wed_date_status = $_POST['wed_date_status'];

		//thursday
		$lecdrop_thu_1 = $_POST['lecdrop_thu_1'];
        $lecdrop_thu_2 = $_POST['lecdrop_thu_2'];
        $moduledrop_thu_1 = $_POST['moduledrop_thu_1'];
		$moduledrop_thu_2 = $_POST['moduledrop_thu_2'];
		$thu_slot_1 = $_POST['thu_slot_1'];
		$thu_hall_1 = $_POST['thu_hall_1'];
		$thu_slot_2 = $_POST['thu_slot_2'];
		$thu_hall_2 = $_POST['thu_hall_2'];
		$thu_stu_no = $_POST['thu_stu_no'];
		$thu_date = $_POST['thu_date'];
		$thu_date_status = $_POST['thu_date_status'];

		//friday
		$lecdrop_fri_1 = $_POST['lecdrop_fri_1'];
        $lecdrop_fri_2 = $_POST['lecdrop_fri_2'];
        $moduledrop_fri_1 = $_POST['moduledrop_fri_1'];
		$moduledrop_fri_2 = $_POST['moduledrop_fri_2'];
		$fri_slot_1 = $_POST['fri_slot_1'];
		$fri_hall_1 = $_POST['fri_hall_1'];
		$fri_slot_2 = $_POST['fri_slot_2'];
		$fri_hall_2 = $_POST['fri_hall_2'];
		$fri_stu_no = $_POST['fri_stu_no'];
		$fri_date = $_POST['fri_date'];
		$fri_date_status = $_POST['fri_date_status'];

		$TID = updatetimemaster($intake,$degree,$semester,$week,$sdate,$edate);
		//echo $TID;
		$db = new DbConnect;
		
		$sql = "INSERT INTO `timetblsub`(`TID`, `lec_id`, `MID`, `Slot`, `lec_hall`, `no_stu`, `date`, `dayname`, `day_type`)
		 VALUES (" . $TID . "," . $lecdrop_mon_1 . ",\"" . $moduledrop_mon_1 . "\",\"" . $mon_slot_1 . "\",\"" . $mon_hall_1 . "\"," . $mon_stu_no . ",\"" . $mon_date . "\",\"Monday\"," . $mon_date_status . "),
		 (" . $TID . "," . $lecdrop_mon_2 . ",\"" . $moduledrop_mon_2 . "\",\"" . $mon_slot_2 . "\",\"" . $mon_hall_2 . "\"," . $mon_stu_no . ",\"" . $mon_date . "\",\"Monday\"," . $mon_date_status . "),
		 (" . $TID . "," . $lecdrop_tue_1 . ",\"" . $moduledrop_tue_1 . "\",\"" . $tue_slot_1 . "\",\"" . $tue_hall_1 . "\"," . $tue_stu_no . ",\"" . $tue_date . "\",\"Tuesday\"," . $tue_date_status . "),
		 (" . $TID . "," . $lecdrop_tue_2 . ",\"" . $moduledrop_tue_2 . "\",\"" . $tue_slot_2 . "\",\"" . $tue_hall_2 . "\"," . $tue_stu_no . ",\"" . $tue_date . "\",\"Tuesday\"," . $tue_date_status . "),
		 (" . $TID . "," . $lecdrop_wed_1 . ",\"" . $moduledrop_wed_1 . "\",\"" . $wed_slot_1 . "\",\"" . $wed_hall_1 . "\"," . $wed_stu_no . ",\"" . $wed_date . "\",\"Wednesday\"," . $wed_date_status . "),
		 (" . $TID . "," . $lecdrop_wed_2 . ",\"" . $moduledrop_wed_2 . "\",\"" . $wed_slot_2 . "\",\"" . $wed_hall_2 . "\"," . $wed_stu_no . ",\"" . $wed_date . "\",\"Wednesday\"," . $wed_date_status . "),
		 (" . $TID . "," . $lecdrop_thu_1 . ",\"" . $moduledrop_thu_1 . "\",\"" . $thu_slot_1 . "\",\"" . $thu_hall_1 . "\"," . $thu_stu_no . ",\"" . $thu_date . "\",\"Thursday\"," . $thu_date_status . "),
		 (" . $TID . "," . $lecdrop_thu_2 . ",\"" . $moduledrop_thu_2 . "\",\"" . $thu_slot_2 . "\",\"" . $thu_hall_2 . "\"," . $thu_stu_no . ",\"" . $thu_date . "\",\"Thursday\"," . $thu_date_status . "),
		 (" . $TID . "," . $lecdrop_fri_1 . ",\"" . $moduledrop_fri_1 . "\",\"" . $fri_slot_1 . "\",\"" . $fri_hall_1 . "\"," . $fri_stu_no . ",\"" . $fri_date . "\",\"Friday\"," . $fri_date_status . "),
		 (" . $TID . "," . $lecdrop_fri_2 . ",\"" . $moduledrop_fri_2 . "\",\"" . $fri_slot_2 . "\",\"" . $fri_hall_2 . "\"," . $fri_stu_no . ",\"" . $fri_date . "\",\"Friday\"," . $fri_date_status . ");";


		

		if(!$conn = $db->connect()){
			echo'<script language="javascript">
					window.alert("SQL ERROR. Please check the SQL code ")
					</script>';
					exit();
		}
		else{
			$stmt = $conn->prepare($sql);
			$stmt->execute();
			echo '<script language="javascript">
					window.location.href = "../adm_view_timetable.html"
					window.alert("New Time Table Created !")
					</script>';
					exit();
    	}
	}

	function updatetimemaster($intake,$degree,$semester,$week,$sdate,$edate){
		
		$sql = "INSERT INTO `timetblmaster`(`intake`, `degree`, `semester`, `week`, `startdate`, `enddate`) VALUES (" . $intake . "," . $degree . "," . $semester . "," . $week . ",\"" . $sdate . "\",\"" . $edate . "\");";
		$db = new DbConnect;
		if(!$conn = $db->connect())		
		{
			echo'<script language="javascript">
					window.alert("SQL ERROR. Please check the SQL code ")
					</script>';
					exit();
		}
		$conn->exec($sql);
    	$last_id = $conn->lastInsertId();
		return $last_id;
	}

	//Student Medical Form Upload Form Ends


	if(isset($_POST['adm_up_notice']))		//Admin Upload Notice
	{
		
		$intdrop_notice = $_POST['intdrop_notice'];
        $it = $_POST['it'];
        $is = $_POST['is'];
        $cs = $_POST['cs'];
        $ce = $_POST['ce'];
        $se = $_POST['se'];
		$desc = $_POST['desc'];
		$file_new_name ="0";
		
		if ($_FILES['file']['size'] <> 0){
			$file = $_FILES['file'];
			$allowd = array('jpg', 'jpeg', 'png', 'pdf');
			$fileDestination = '../Upload/Notice';
			$file_new_name = uploadfile($file,$allowd,$fileDestination);
		}
		$admin =1; //admin

        $db = new DbConnect;
		$sql = "INSERT INTO `notice`(`intake`, `it`, `is`, `cs`, `ce`, `se`, `notice`, `admin`, `file`) VALUES (" . $intdrop_notice . "," . $it . "," . $is . "," . $cs . "," . $ce . "," . $se . ",\"" . $desc . "\"," . $admin . ",\"" . $file_new_name  . "\");";

		echo $sql;

		if(!$conn = $db->connect())
			
		{
			echo'<script language="javascript">
					window.alert("SQL ERROR. Please check the SQL code ")
					window.location.href = "../adm_upload_notice.html"
					</script>';
					exit();
		}
		else
		{
			$stmt = $conn->prepare($sql);
			$stmt->execute();
			echo '<script language="javascript">
					window.location.href = "../adm_view_notice.html"
					window.alert("Notice Board Updated !")
					</script>';
					exit();
    	}
	}


	if(isset($_POST['add_lec'])){		//Admin Add Lecturers Starts
	
		$name = $_POST['name'];
        $email = $_POST['email'];
        $post = $_POST['post'];
        $contact = $_POST['contact'];
        $deg = $_POST['deg'];

        $file = $_FILES['photo'];
		$allowd = array('jpg', 'jpeg', 'png');
		$fileDestination = '../Upload/Notice';
		$photo = uploadfile($file,$allowd,$fileDestination);
		
        $db = new DbConnect;
		$sql = "INSERT INTO `lecturer`(`name`, `email`, `lec_pic`, `post`, `qualification`, `contact`) VALUES (\"" . $name . "\",\"" . $email . "\",\"" . $photo . "\",\"" . $post . "\",\"" . $deg . "\",\"" . $contact . "\");";

		echo $sql;

		if(!$conn = $db->connect())
			
		{
			echo'<script language="javascript">
					window.alert("SQL ERROR. Please check the SQL code ")
					window.location.href = "../adm_add_professors.html"
					</script>';
					exit();
		}
		else
		{
			$stmt = $conn->prepare($sql);
			$stmt->execute();
			echo '<script language="javascript">
					window.location.href = "../adm_view_staff.html"
					window.alert("New Lecturer Profile Added !")
					</script>';
					exit();
    	}
	}						//Admin Add Lecturers Ends

 ?>