<?php
	
	if(isset($_POST['log-in']))
	{
		require 'dbconnect.php';
		
		$username = $_POST['uname'];
		$password = $_POST['pword'];

		if(empty($username) || empty($password))
		{
			echo'<script language="javascript">
						window.alert("Please fill the empty fields")
						window.location.href = "../index.html"
						</script>';
						exit();
		}
		else{
			$sql = "SELECT * FROM users WHERE username=\"" . $username . "\"";

			$db = new DbConnect;

			if(!$conn = $db->connect())
				
			{
				echo'<script language="javascript">
						window.alert("SQL ERROR. Please check the SQL code ")
						window.location.href = "../index.html"
						</script>';
						exit();
			}
			else
			{
				$stmt = $conn->prepare($sql);
				$stmt->execute();
				
				if($result = $stmt->fetchAll(PDO::FETCH_ASSOC))
				{
					//$pwdcheck = password_verify($password, $row['fname']);
					$passveri;
					$ID;
					$Sts;
					foreach ($result as $rows) {
                                                 $passveri = $rows['password'];
                                                 $ID = $rows['ID'];
                                                 $Sts = $rows['status'];
                                                }
					$pwdcheck = false;
					if ($password == $passveri){
						$pwdcheck = true;
					}
					if($pwdcheck == false)
					{
						echo'<script language="javascript">
						window.alert("You entered a Wrong Password !")
						window.location.href = "../index.html"
						</script>';
						exit();
						
					}else if($pwdcheck == true)
					{
						$status = $Sts;
						switch ($status) {
							case '1':
							//echo $ID;
								$SQLsub = "SELECT `RegNO`,`fname` FROM `students` WHERE userid = " . $ID . "";
								$stmt = $conn->prepare($SQLsub);
								$stmt->execute();
								if($result = $stmt->fetchAll(PDO::FETCH_ASSOC))
								{
									$SID;
									$RegName;
									foreach ($result as $rows) {
				                                                 $SID = $rows['RegNO'];
				                                                 $RegName = $rows['fname'];
				                                                }
                                    //echo $SID;
                                    //echo $RegName;
                                    echo '<script language="javascript">
									localStorage.setItem("sid","'.$SID.'");
									localStorage.setItem("sname","'.$RegName.'");
									window.location.href = "../stu_index.html"
									</script>';
									exit();
                                }
								break;

							case '2':
								echo $ID;
								$SQLsub = "SELECT `ID`, `name` FROM `lecturer` WHERE userid = " . $ID . "";
								echo $SQLsub;
								$stmt = $conn->prepare($SQLsub);
								$stmt->execute();
								if($result = $stmt->fetchAll(PDO::FETCH_ASSOC))
								{
									$LID;
									$LName;
									foreach ($result as $rows) {
				                                                 $LID = $rows['ID'];
				                                                 $LName = $rows['name'];
				                                                }
                                    echo $LID;
                                    echo $LName;
                                    echo '<script language="javascript">
									localStorage.setItem("lid",'.$LID.');
									localStorage.setItem("lname","'.$LName.'");
									window.location.href = "../lec_index.html"
									</script>';
									exit();
                                }
								
								break;

							case '3':
								echo '<script language="javascript">
								window.location.href = "../adm_index.html"
								</script>';
								exit();
								break;

							case '4':
								echo '<script language="javascript">
								localStorage.setItem("eid",'.$ID.');
								localStorage.setItem("ename","'.$username.'");
								window.location.href = "../Exdept_upload_file.html"
								</script>';
								exit();
								break;
	
							default:
								echo'<script language="javascript">
								window.alert("Error")
								window.location.href = "../index.html"
								</script>';
								exit();
								break;
						}
				
					}else
					{
						echo'<script language="javascript">
						window.alert("You entered a Wrong Password !")
						window.location.href = "../index.html"
						</script>';
						exit();
						
						
						
					}
				}else
				{
					echo'<script language="javascript">
						window.alert("Username incorrect! Please check the username and try again..")
						window.location.href = "../index.html"
						</script>';
						exit();
				}
			}
		}
	}	
	else
	{
		echo'<script language="javascript">
		window.alert("Wrong connection")
		window.location.href = "../index.html"
		</script>';
		exit();

	}
	
?>