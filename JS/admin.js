$(document).ready(function () {

    $.ajax({        //Degree Fetch Start
        url: 'PHP/adm_data.php',
        method: 'post',
        data: 'adm_test1=' + 5
    }).done(function (degrees) {
        //console.log(modules);
        degrees = JSON.parse(degrees);
        //console.log(degrees);
        $('.degdropclass').empty();
        $('.degdropclass').append('<option value="" disabled selected>Select Degree Program..</option>');
        degrees.forEach(function (degrees) {
            $('.degdropclass').append('<option data-degname="' + degrees.Name + '" value="' + degrees.DID + '">' + degrees.Name + '</option>');
        })
    });             //Degree Fetch End



    $.ajax({        //Intake Fetch Start
        url: 'PHP/adm_data.php',
        method: 'post',
        data: 'adm_test2=' + 5
    }).done(function (intakes) {
        //console.log(modules);
        intakes = JSON.parse(intakes);
        //console.log(intakes);
        $('.intdropclass').empty();
        $('.intdropclass').append('<option value="" disabled selected>Select Intake..</option>');
        intakes.forEach(function (intakes) {
            $('.intdropclass').append('<option value="' + intakes.ID + '">' + intakes.ID + '</option>');
        })
    });             //Intake Fetch Ends


    $.ajax({        //Semester Fetch Start
        url: 'PHP/adm_data.php',
        method: 'post',
        data: 'adm_test3=' + 5
    }).done(function (semesters) {
        //console.log(semesters);
        semesters = JSON.parse(semesters);
        console.log(semesters);
        $('.semdropclass').empty();
        $('.semdropclass').append('<option value="" disabled selected>Select Semester..</option>');
        semesters.forEach(function (semesters) {
            $('.semdropclass').append('<option value="' + semesters.ID + '">' + semesters.ID + '</option>');
        })
    }); //end of load by class


    $("#intdrop").change(function () {
        var intake = $("#degdrop").val();
        var degree = $("#intdrop").val();
        viewstudent(intake, degree);
    })

    $("#degdrop").change(function () {
        var degree = $("#degdrop").val();
        var intake = $("#intdrop").val();
        viewstudent(intake, degree);
    })

    function viewstudent(intake, degree) {
        if (intake > 0 && degree > 0) {

            $.ajax({        //Load Student List To adm_students_list.html
                url: 'PHP/adm_data.php',
                method: 'post',
                data: 'adm_stu_int=' + intake + '&adm_stu_deg=' + degree
            }).done(function (list) {
                //console.log(list);
                list = JSON.parse(list);
                console.log(list);
                $('#view_student_list').empty();
                $('#view_student_list').append('<thead class="thead-dark"><tr><th>Reg No</th><th>Name with Initials</th><th>First Name</th><th>Email</th><th>Contact</th><th>Intake</th><th>NIC No</th></tr></thead><tbody>');

                list.forEach(function (list) {
                    $('#view_student_list').append('<tr><td>' + list.RegNO + '</td><td>' + list.Name + '</td><td>' + list.fname + '</td><td>' + list.email + '</td><td>' + list.phone + '</td><td>' + list.Intake + '</td><td>' + list.NIC + '</td></tr>');
                })
                $('#view_student_list').append('</tbody>');
            });             //Load Student List To adm_students_list.html ends


        }
    }

    //Student List Filter Ends

    //Admin Update Attendance start

    $("#intdrop").change(function () {
        var id1 = $("#degdrop").val();
        var id2 = $("#intdrop").val();
        var id3 = $("#semdrop").val();
        $.ajax({
            url: 'PHP/adm_data.php',
            method: 'post',
            data: 'itd1=' + id1 + '&itd2=' + id2 + '&itd3=' + id3
        }).done(function (modules) {
            //console.log(modules);
            modules = JSON.parse(modules);
            $('#moduledrop').empty();
            modules.forEach(function (module) {
                $('#moduledrop').append('<option value="' + module.MID + '">' + module.MID + ' - ' + module.shortname + '</option>')
            })
        })
    })

    $("#degdrop").change(function () {
        var id1 = $("#degdrop").val();
        var id2 = $("#intdrop").val();
        var id3 = $("#semdrop").val();
        $.ajax({
            url: 'PHP/adm_data.php',
            method: 'post',
            data: 'itd1=' + id1 + '&itd2=' + id2 + '&itd3=' + id3
        }).done(function (modules) {
            //console.log(modules);
            modules = JSON.parse(modules);
            $('#moduledrop').empty();
            modules.forEach(function (module) {
                $('#moduledrop').append('<option value="' + module.MID + '">' + module.MID + ' - ' + module.shortname + '</option>')
            })
        })
    })

    $("#semdrop").change(function () {
        var id1 = $("#degdrop").val();
        var id2 = $("#intdrop").val();
        var id3 = $("#semdrop").val();
        $.ajax({
            url: 'PHP/adm_data.php',
            method: 'post',
            data: 'itd1=' + id1 + '&itd2=' + id2 + '&itd3=' + id3
        }).done(function (modules) {
            //console.log(modules);
            modules = JSON.parse(modules);
            $('#moduledrop').empty();
            modules.forEach(function (module) {
                $('#moduledrop').append('<option value="' + module.MID + '">' + module.MID + ' - ' + module.shortname + '</option>')
            })
        })
    })

    $("#moduledrop").change(function () {
        var did = $("#degdrop").val();
        var iid = $("#intdrop").val();
        $.ajax({
            url: 'PHP/adm_data.php',
            method: 'post',
            data: 'did=' + did + '&iid=' + iid
        }).done(function (Namss) {
            console.log(Namss);
            Namss = JSON.parse(Namss);
            $('#update_attendance').empty();
            var NO = 1;
            $('#update_attendance').append('<tr><th>No</th><th>Reg No</th><th>Name</th><th style="margin-left:10%;">Attandence</th></tr>');
            Namss.forEach(function (name) {
                $('#update_attendance').append('<tr><td style="text-align:center">' + NO + '</td><td>' + name.RegNo + '</td><td>' + name.Name + '</td><td style="text-align:center"><input type="hidden" name=' + name.RegNo + ' value="0" /><input type="checkbox" name=' + name.RegNo + ' value="1" class="checkSingle" /></td></tr>');
                NO++;
            })
        })
    })

    $("#checkedAll").click(function () {
        $('input:checkbox').not(this).prop('checked', this.checked);
    });

    //Admin Update Attendance ends

    //Admin view Attendance starts

    var countt;
    var regsss = [];
    var attt = [];
    var modd = [];

    $("#intdrop1").change(function () {
        var id1 = $("#degdrop1").val();
        var id2 = $("#intdrop1").val();
        console.log(id1);
        console.log(id2);
    })

    $("#degdrop1").change(function () {
        var id3 = $("#degdrop1").val();
        var id4 = $("#intdrop1").val();
        var value = $("#degdrop1").find('option:selected').data('degname');
        console.log(value);
        $("#degreename").val(value);
    })

    $("#semdrop1").change(function () {
        var id3 = $("#degdrop1").val();
        var id4 = $("#intdrop1").val();
        var id5 = $("#semdrop1").val();
        $.ajax({
            url: 'PHP/adm_data.php',
            method: 'post',
            data: 'itd1=' + id3 + '&itd2=' + id4 + '&itd3=' + id5,
        }).done(function (modules) {
            console.log(modules);
            modules = JSON.parse(modules);
            $('#moduledrop1').empty();
            modules.forEach(function (module) {
                $('#moduledrop1').append('<option value="' + module.MID + '">' + module.MID + ' - ' + module.shortname + '</option>')
            })
        })
    })

    $("#Loadatt").click(function () {
        $('#view_attendance').empty();
        countt = 3;
        var deg = $("#degdrop1").val();
        var mod = $("#moduledrop1").val();
        var intk = $("#intdrop1").val();
        //console.log(deg+"--"+mod+"--"+intk);
        $.ajax({
            url: 'PHP/adm_data.php',
            method: 'post',
            data: 'id6=' + deg + '&id7=' + mod
        }).done(function (colms) {
            colms = JSON.parse(colms);
            $('#view_attendance').empty();
            attt = [];
            var ttt = '<tr><th style="text-align:center">No</th><th style="text-align:center">Reg No</th><th style="text-align:center">Name</th>';
            colms.forEach(function (colm) {
                ttt += '<th style="text-align:center">' + colm.Date + '</th>';

                attt.push(colm.ID);
            })
            ttt += '</tr>';
            $('#view_attendance').append(ttt)
            ldname();
        })
        
    function ldname() {
        $.ajax({
            url: 'PHP/adm_data.php',
            method: 'post',
            data: 'did=' + deg + '&iid=' + intk
        }).done(function (Namss) {
            //console.log(Namss);
            Namss = JSON.parse(Namss);
            var NO = 1;
            regsss = [];
            Namss.forEach(function (name) {
                $('#view_attendance').append('<tr><td>' + NO + '</td><td>' + name.RegNo + '</td><td  style="text-align:left">' + name.Name + '</td></tr>');
                regsss.push(name.RegNo);
                NO++;
            })

            attt.forEach(loadatt);
        })
    }

    function appendColumn() {
        var tbl = document.getElementById('view_attendance'), // table reference
            i;
        // open loop for each row and append cell
        for (i = 1; i < tbl.rows.length; i++) {
            createCell(tbl.rows[i].insertCell(3), i, 'col');
        }
    }

    function loadatt(value) {
        console.log(value);
        var tbl = document.getElementById('view_attendance')
        var tempp = value;
        var temp, temp2;
        $.ajax({
            url: 'PHP/adm_data.php',
            method: 'post',
            data: 'intid=' + tempp
        }).done(function (modules) {
            var myObject = eval('(' + modules + ')');
            for (i in myObject) {
                for (k = 1; k < regsss.length + 1; k++) {
                    temp = regsss[k - 1];
                    //console.log(temp.toString());
                    temp2 = myObject[i][temp.toString()];
                    temp3 = myObject[i]["Date"];
                    //console.log(tempp+"  "+temp3+"  "+temp+"  "+temp2);
                    createCell(tbl.rows[k].insertCell(countt), temp2, 'col');
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


    $("#Loadattsumm").click(function () {

        var deg = $("#degdrop1").val();
        var intk = $("#intdrop1").val();
        var sem = $("#semdrop1").val();
        var j;
        $.ajax({
            url: 'PHP/adm_data.php',
            method: 'post',
            data: 'adm_id1=' + deg + '&adm_id2=' + sem
        }).done(function (modules) {
            modules = JSON.parse(modules);
            console.log(modules);
            $('#view_attendance').empty();
            modd = [];
            var ttt = '<tr><th style="text-align:center;vertical-align: middle;">No</th><th style="text-align:center;vertical-align: middle;">Reg No</th><th style="text-align:center;vertical-align: middle;">Name</th>';
            modules.forEach(function (module) {
                ttt += '<th style="text-align:center">' + module.MID + '<p>\n</p>' + module.shortname + '</th>';
                modd.push(module.ID);
            })
            ttt += '</tr>';
            $('#view_attendance').append(ttt);
            ldname();
        })

        function ldname() {

            $.ajax({
                url: 'PHP/adm_data.php',
                method: 'post',
                data: 'did=' + deg + '&iid=' + intk
            }).done(function (Namss) {
                console.log(Namss);
                Namss = JSON.parse(Namss);
                var NO = 1;
                regsss = [];
                Namss.forEach(function (name) {
                    $('#view_attendance').append('<tr><td>' + NO + '</td><td>' + name.RegNo + '</td><td  style="text-align:left">' + name.Name + '</td></tr>');
                    regsss.push(name.RegNo);
                    NO++;
                })
                j = 1;
                regsss.forEach(loadatt);
            })
        }

        function loadatt(value, i) {
            console.log(value);
            var tbl = document.getElementById('view_attendance')
            var deg = $("#degdrop1").val();
            var sem = $("#semdrop1").val();
            var tempp = value;
            var temp = 3;
            var temp2, temp3, intvalue;
            $.ajax({
                url: 'PHP/adm_data.php',
                method: 'post',
                data: 'rel1=' + tempp + '&rel2=' + deg + '&rel3=' + sem
            }).done(function (modules) {
                modules = JSON.parse(modules);
                modules.forEach(function (module) {
                    //console.log(modules);
                    temp2 = module.Pct;
                    temp3 = module.RELID;
                    intvalue = Math.trunc(temp2);
                    console.log((i) + "  "+ temp + " " + tempp + "  " + temp3 + "  " + intvalue);
                    createCell(tbl.rows[i + 1].insertCell(temp), intvalue + "%", 'col');
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


    //Update Time Table Starts

    


    $.ajax({        //Lecturer Names Fetch
        url: 'PHP/adm_data.php',
        method: 'post',
        data: 'adm_test7=' + 5
    }).done(function (lecturers) {
        //console.log(modules);
        lecturers = JSON.parse(lecturers);
        //console.log(degrees);

        $('.lecdropclass').empty();
        $('.lecdropclass').append('<option value="" disabled selected>Select Lecturer Name..</option>');
        lecturers.forEach(function (lecturers) {
            $('.lecdropclass').append('<option value="' + lecturers.ID + '">' + lecturers.name + '</option>');
        })

    });             //Lecturer Names End


    $("#semdrop2").change(function () {
        var id3 = $("#degdrop2").val();
        var id4 = $("#semdrop2").val();
         $("#intdrop2").val();
        $.ajax({
            url: 'PHP/adm_data.php',
            method: 'post',
            data: 'adm_id1=' + id3 + '&adm_id2=' + id4
        }).done(function (modules) {
            //console.log(modules);
            modules = JSON.parse(modules);
            $('.moduledropclass').empty();
            modules.forEach(function (module) {
                $('.moduledropclass').append('<option value="' + module.MID + '">' + module.MID + ' - ' + module.shortname + '</option>')
            })
        })
    })



    $.ajax({                                    //Admin View Notice Board Notices from admin
        url: 'PHP/adm_data.php',
        method: 'post',
        data: 'adm_view_notice_admin='+ 5 
    }).done(function(notice){
        //console.log(notice);
        notice = JSON.parse(notice);
        //console.log(notice);
        $('#adm_view_notice_admin').empty();

        notice.forEach(function(notice){
            var str = downloadbtn(notice.file);
            $('#adm_view_notice_admin').append('<div class="col-lg-6 col-md-12"><div class="testimonial3 default"><div class="testimonial-section">' + notice.notice + '</div><div class="testimonial-desc">'+ str +'<img class="media-object rounded-circle shadow" src="./assets/images/lg/admin-1.jpg" alt=""><div class="testimonial-writer"><h6>Admin</h6><span>For Intake ' + notice.intake + '</span><p><a href="javascript:void(0);">' + notice.date + '</a></p></div></div></div></div>'); 
        })
    });

    $.ajax({                                    //Admin View Notice Board notices from Lecture
        url: 'PHP/adm_data.php',
        method: 'post',
        data: 'adm_view_notice_lec='+ 5 
    }).done(function(notice){
        //console.log(notice);
        notice = JSON.parse(notice);
        console.log(notice);
        $('#adm_view_notice_lec').empty();

        notice.forEach(function(notice){
            var str = downloadbtn(notice.file);
            $('#adm_view_notice_lec').append('<div class="col-lg-6 col-md-12"><div class="testimonial3 warning"><div class="testimonial-section">' + notice.notice + '</div><div class="testimonial-desc">'+ str +'<img class="media-object rounded-circle shadow" src="' + notice.lec_pic + '" alt=""><div class="testimonial-writer"><h6>' + notice.name + '</h6><span>' + notice.post + '</span><span>For ' + notice.intake + '</span><p><a href="javascript:void(0);">' + notice.date + '</a></p></div></div></div></div>'); 
        })
    });

    function downloadbtn(str){
        //console.log(str);
        var temp = "";
        if(str != "0"){
            //temp = '<button type="submit" value="' + str + '" onclick="download_file(this.value)" class="btn btn-success float-left mt-4"><i class="fa fa-cloud-download" aria-hidden="true"></i> &nbsp Attachments</button>';
            temp = '<a href="php/download.php?name='+ str +'&path=../Upload/Notice/"><button type="submit" class="btn btn-success float-left mt-4"><i class="fa fa-cloud-download" aria-hidden="true"></i> &nbsp Attachments</button></a>';
        }
        return temp;
    }


    $("#semdrop_view_time").change(function () {            //Admin View Time Table DropDown
        var dvt = $("#degdrop_view_time").val();
        var ivt = $("#intdrop_view_time").val();
        var svt = $("#semdrop_view_time").val();
        $.ajax({
            url: 'PHP/adm_data.php',
            method: 'post',
            data: 'dvt=' + dvt + '&ivt=' + ivt + '&svt=' + svt
        }).done(function (weeks) {
            console.log(weeks);
            weeks = JSON.parse(weeks);
            $('#weeks').empty(); 
            $('#weeks').append('<option disabled selected value="">Select Week</option>')
            weeks.forEach(function (weeks) {
                $('#weeks').append('<option value="' + weeks.week + '">' + weeks.week + '</option>')
            })
        })
    });

     $("#weeks").change(function () {               //Admin View Time Table Fetch Time Table
        var dvt = $("#degdrop_view_time").val();
        var ivt = $("#intdrop_view_time").val();
        var svt = $("#semdrop_view_time").val();
        var wvt = $("#weeks").val();
        $.ajax({
            url: 'PHP/adm_data.php',
            method: 'post',
            data: 'dvt1=' + dvt + '&ivt1=' + ivt + '&svt1=' + svt + '&wvt1=' + wvt
        }).done(function (results) {
            console.log(results);
            results = JSON.parse(results);
            $('#view_time_table').empty();
            $('#view_time_table').append('<thead class=""><tr><th> </th><th> Time Slot</th><th> Subject </th><th> Location </th></tr></thead><tbody>');

            results.forEach(function(results){
                $('#view_time_table').append('<tr><td> ' + results.dayname + ' </td><td> ' + results.Slot + ' </td><td> ' + results.MID + ' </td><td> ' + results.lec_hall + ' </td><tr>'); 
            })
            $('#view_time_table').append('</tbody>');
        })
    });


    $.ajax({                                    //Admin View Staff
        url: 'PHP/adm_data.php',
        method: 'post',
        data: 'adm_view_staff='+ 5 
    }).done(function(staff){
        //console.log(notice);
        staff = JSON.parse(staff);
        //console.log(notice);
        $('#lec_view').empty();

        staff.forEach(function(staff){
            $('#lec_view').append('<div class="col-lg-3 col-md-6 col-sm-12"><div class="card member-card"><div class="body"><div class="member-thumb"><img src="' + staff.lec_pic + '" class="img-fluid rounded" alt="profile-image"></div><div class="detail"><br><h5 class="m-b-0">' + staff.name + '</h5><p class="text-muted">' + staff.post + '</p><ul class="social-links list-inline m-t-20"><li><a title="facebook" href="javascript:void(0);"><i class="fa fa-facebook"></i></a></li><li><a title="twitter" href="javascript:void(0);" ><i class="fa fa-twitter"></i></a></li><li><a title="instagram" href="javascript:void(0);" ><i class="fa fa-instagram"></i></a></li></ul><p class="text-muted">' + staff.contact + '</p><a href="adm_lecturer_profile.html"  class="btn btn-default btn-simple">View Profile</a></div></div></div>'); 
        })
        $('#lec_view').append('</div>');
    });


    $.ajax({                            //view medical forms
        url: 'PHP/adm_data.php',
        method: 'post',
        data: 'medical='+ 5 
    }).done(function(medical){
        //console.log(medical);
        medical = JSON.parse(medical);
        console.log(medical);
        $('#adm_view_medical').empty();
        $('#adm_view_medical').append('<thead><tr><th>Reg No</th><th>Name</th><th>Email</th><th>Submitted Date</th><th>Action</th></tr></thead><tbody>');

        medical.forEach(function(medical){
            //console.log( medical.med_id);
            $('#adm_view_medical').append('<tr><td><span class="c_name">' + medical.stu_id + '</span></td><td><span>' + medical.Name + '</span></td><td><span>' + medical.email + '</span></td><td><span>' + medical.submit_date + '</span></td><td><a onclick="open_medical('+ medical.med_id +')" href="#largeModal" data-toggle="modal" data-target="#largeModal" class="btn btn-info" title="Edit"><i class="icon icon-eyeglasses"></i></a></td></tr>'); 
        })
        $('#adm_view_medical').append('</tbody>');
    });

});

