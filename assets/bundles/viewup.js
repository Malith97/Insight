x		$(document).ready(function(){
			var countt;
			var regsss = [];
			var attt = [];
			var modd = [];

			$("#Intake").change(function(){
				var id1 = $("#degree").val();
				var id2 = $("#Intake").val();
				
			})

			$("#degree").change(function(){
				var id3 = $("#degree").val();
				var id4 = $("#Intake").val();
				
			})

			$("#Semester").change(function(){
				var id3 = $("#degree").val();
				var id4 = $("#Intake").val();
				var id5 = $("#Semester").val();
				$.ajax({
					url: 'data.php',
					method: 'post',
					data: 'id1='+ id3 +'&id2='+ id4 +'&id3='+ id5
				}).done(function(modules){
					console.log(modules);
					modules = JSON.parse(modules);
					$('#Modules').empty();
					modules.forEach(function(module){
						$('#Modules').append('<option value="'+ module.MID +'">' + module.MID + ' - ' + module.shortname + '</option>')
					})
				})
			})

			$("#Loadatt").click(function(){
				$('#Tbl1').empty();
				countt=3;
				var deg = $("#degree").val();
				var mod = $("#Modules").val();
				var intk = $("#Intake").val();
				$.ajax({
					url: 'data.php',
					method: 'post',
					data: 'id6='+ deg +'&id7='+ mod
				}).done(function(colms){
					colms = JSON.parse(colms);
					$('#Tbl1').empty();
					attt =[];
					var ttt = '<tr><th style="text-align:center">No</th><th style="text-align:center">Reg No</th><th style="text-align:center">Name</th>';
					colms.forEach(function(colm){
							ttt += '<th style="text-align:center">' + colm.Date + '</th>';
							
							attt.push(colm.ID);
					})
						ttt += '</tr>';
						$('#Tbl1').append(ttt)
						ldname();
				})

				function ldname(){
					$.ajax({
						url: 'data.php',
						method: 'post',
						data: 'did='+ deg +'&iid='+ intk
					}).done(function(Namss){
						//console.log(Namss);
						Namss = JSON.parse(Namss);
						var NO=1;
						regsss =[];
						Namss.forEach(function(name){
							$('#Tbl1').append('<tr><td>' + NO + '</td><td>' + name.RegNo + '</td><td  style="text-align:left">' + name.Name + '</td></tr>');
							regsss.push(name.RegNo);
							NO++;
						})

						attt.forEach(loadatt);
					})
				}

				function appendColumn(){
				    var tbl = document.getElementById('Tbl1'), // table reference
				        i;
				    // open loop for each row and append cell
				    for (i = 1; i < tbl.rows.length; i++) {
				        createCell(tbl.rows[i].insertCell(3), i, 'col');
				    }
				}

				function loadatt(value){
						console.log(value);
						var tbl = document.getElementById('Tbl1')
						var tempp = value;
						var temp,temp2;
						$.ajax({
									url: 'data.php',
									method: 'post',
									data: 'intid='+ tempp
								}).done(function(modules){
									var myObject = eval('(' + modules + ')');
									for (i in myObject)
									{
										for (k = 1; k < regsss.length+1; k++) {
												temp = regsss[k-1];
												//console.log(temp.toString());
												temp2 = myObject[i][temp.toString()];
												temp3 = myObject[i]["Date"];
												//console.log(tempp+"  "+temp3+"  "+temp+"  "+temp2);
												createCell(tbl.rows[k].insertCell(countt),temp2, 'col');
											}
									}
								countt++;
								})
				}

				function createCell(cell, text, style) {
				    var div = document.createElement('div'), // create DIV element
				        txt = document.createTextNode(text); // create text node
				    div.appendChild(txt);                    // append text node to the DIV
				    div.setAttribute('class', style);        // set DIV class attribute
				    div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
				    cell.appendChild(div);                   // append DIV to the table cell
				}

			})


			$("#Loadattsumm").click(function(){

				var deg = $("#degree").val();
				var mod = $("#Modules").val();
				var intk = $("#Intake").val();
				var j;
				$.ajax({
					url: 'data.php',
					method: 'post',
					data: 'id1='+ deg +'&id2='+ intk
				}).done(function(modules){
					modules = JSON.parse(modules);
					$('#Tbl1').empty();
					modd =[];
					var ttt = '<tr><th style="text-align:center;vertical-align: middle;">No</th><th style="text-align:center;vertical-align: middle;">Reg No</th><th style="text-align:center;vertical-align: middle;">Name</th>';
					modules.forEach(function(module){
							ttt += '<th style="text-align:center">' + module.MID + '<p>\n</p>' + module.shortname + '</th>';
							modd.push( module.ID);
					})
						ttt += '</tr>';
						$('#Tbl1').append(ttt);
						ldname();
				})

				function ldname(){

					$.ajax({
						url: 'data.php',
						method: 'post',
						data: 'did='+ deg +'&iid='+ intk
					}).done(function(Namss){
						console.log(Namss);
						Namss = JSON.parse(Namss);
						var NO=1;
						regsss =[];
						Namss.forEach(function(name){
							$('#Tbl1').append('<tr><td>' + NO + '</td><td>' + name.RegNo + '</td><td  style="text-align:left">' + name.Name + '</td></tr>');
							regsss.push(name.RegNo);
							NO++;
						})
						j=1;
						regsss.forEach(loadatt);
					})
				}

				function loadatt(value,i){
						console.log(value);
						var tbl = document.getElementById('Tbl1')
						var tempp = value;
						var temp =3;
						var temp2,temp3,intvalue;
						$.ajax({
									url: 'data.php',
									method: 'post',
									data: 'rel1='+ tempp
								}).done(function(modules){
									modules = JSON.parse(modules);
									modules.forEach(function(module){
											//console.log(modules);
												temp2=module.Pct;
												temp3=module.RELID;
												intvalue = Math.trunc(temp2);
												console.log((i+1)+"  "+tempp+"  "+temp3+"  "+intvalue);
												createCell(tbl.rows[i+1].insertCell(temp),intvalue+"%", 'col');
												temp++;
										})
								})

					j++;
				}


				function createCell(cell, text, style) {
				    var div = document.createElement('div'), // create DIV element
				        txt = document.createTextNode(text); // create text node
				    div.appendChild(txt);                    // append text node to the DIV
				    div.setAttribute('class', style);        // set DIV class attribute
				    div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
				    cell.appendChild(div);                   // append DIV to the table cell
				}
			})
		})
