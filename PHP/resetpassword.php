<?php
    require 'dbconnect.php';
    require 'send_mail.php';

    if(isset($_POST['reset_pass'])){
        $username = $_POST['email'];
        if(empty($username))
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
					
                    $ID;
                    
					foreach ($result as $rows){
                        $ID = $rows['ID'];
                    }

                    $new_pass = randomPassword();
                    $desc = "<h1>Password reset</h1><br><p>Your new password is ".$new_pass."<br><br><p>Thank You!</p>";
                    sendmail($username,'Resetting Password',$desc);
                    //UPDATE `users` SET `password`=[value-3] WHERE `ID`=[value-1]
                    $sql1 = "UPDATE `users` SET `password`= \"".$new_pass."\" WHERE `ID`= ".$ID." ;";
                    $stmt = $conn->prepare($sql1);
                    $stmt->execute();
                    echo'<script language="javascript">
						window.alert("Your new password is sent your email!")
						window.location.href = "../index.html"
						</script>';
						exit();
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

    function randomPassword() {
        $alphabet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
        $pass = array(); //remember to declare $pass as an array
        $alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
        for ($i = 0; $i < 8; $i++) {
            $n = rand(0, $alphaLength);
            $pass[] = $alphabet[$n];
        }
        return implode($pass); //turn the array into a string
    }

?>