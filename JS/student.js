$(document).ready(function () {

    $.ajax({                                //Degree Fetch 
        url: 'PHP/stu_data.php',
        method: 'post',
        data: 'stu_test1=' + 5
    }).done(function (degrees) {
        //console.log(modules);
        degrees = JSON.parse(degrees);
        //console.log(degrees);
        $('#degdrop_stu').empty();
        $('#degdrop_stu').append('<option value="" disabled selected>Select Degree Program..</option>');
        degrees.forEach(function (degrees) {
            $('#degdrop_stu').append('<option value="' + degrees.DID + '">' + degrees.Name + '</option>');
        })
    });             //Degree Fetch End



    $.ajax({                                //Intake Fetch 
        url: 'PHP/stu_data.php',
        method: 'post',
        data: 'stu_test2=' + 5
    }).done(function (intakes) {
        //console.log(modules);
        intakes = JSON.parse(intakes);
        //console.log(intakes);
        $('#intdrop_stu').empty();
        $('#intdrop_stu').append('<option value="" disabled selected>Select Intake..</option>');
        intakes.forEach(function (intakes) {
            $('#intdrop_stu').append('<option value="' + intakes.ID + '">' + intakes.ID + '</option>');
        })
    });  
    

    $("#degdrop_stu").change(function () {              //on #degreedrop_stu change
        var id3 = $("#degdrop_stu").val();
        var id4 = $("#intdrop_stu").val();
        $.ajax({
            url: 'PHP/stu_data.php',
            method: 'post',
            data: 'id1=' + id3 + '&id2=' + id4
        }).done(function (students) {
            //console.log(modules);
            students = JSON.parse(students);
            $('#reg_no').empty();
            $('#reg_no').append('<option value="" selected disabled>Select Reg No</option>');
            students.forEach(function (students) {
                $('#reg_no').append('<option stu_name="' + students.Name + '" value="' + students.RegNO + '" >' + students.RegNO + '</option>');
            })
        })
    });


    $.ajax({                                    //Admin View Notice Board Notices from admin
        url: 'PHP/stu_data.php',
        method: 'post',
        data: 'stu_view_notice_admin='+ 5 
    }).done(function(notice){
        //console.log(notice);
        notice = JSON.parse(notice);
        //console.log(notice);
        $('#stu_view_notice_admin').empty();

        notice.forEach(function(notice){
            var str = downloadbtn(notice.file);
            $('#stu_view_notice_admin').append('<div class="col-lg-6 col-md-12"><div class="testimonial3 default"><div class="testimonial-section">' + notice.notice + '</div><div class="testimonial-desc">'+ str +'<img class="media-object rounded-circle shadow" src="./assets/images/lg/admin-1.jpg" alt=""><div class="testimonial-writer"><h6>Admin</h6><span>For Intake ' + notice.intake + '</span><p><a href="javascript:void(0);">' + notice.date + '</a></p></div></div></div></div>'); 
        })
    });

    $.ajax({                                    //Admin View Notice Board notices from Lecture
        url: 'PHP/stu_data.php',
        method: 'post',
        data: 'stu_view_notice_lec='+ 5 
    }).done(function(notice){
        //console.log(notice);
        notice = JSON.parse(notice);
        //console.log(notice);
        $('#stu_view_notice_lec').empty();

        notice.forEach(function(notice){
            var str = downloadbtn(notice.file);
            $('#stu_view_notice_lec').append('<div class="col-lg-6 col-md-12"><div class="testimonial3 warning"><div class="testimonial-section">' + notice.notice + '</div><div class="testimonial-desc">'+ str +'<img class="media-object rounded-circle shadow" src="' + notice.lec_pic + '" alt=""><div class="testimonial-writer"><h6>' + notice.name + '</h6><span>' + notice.post + '</span><span>For ' + notice.intake + '</span><p><a href="javascript:void(0);">' + notice.date + '</a></p></div></div></div></div>');  
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



    var sid = $("#sid").val();
    //console.log(sid);   
    $.ajax({
        url: 'PHP/stu_data.php',
        method: 'post',
        data: 'stu_view_assign=' + sid
    }).done(function (assignments) {
        //console.log(sid);
        //console.log(assignments);
        assignments = JSON.parse(assignments);
        //console.log(assignments);
        $('#stu_view_assignments').empty();
        assignments.forEach(function (assignments) {
            console.log(assignments);
            $('#stu_view_assignments').append('<div class="col-lg-4 col-md-12"><div class="card pricing3"><div class="body"><div class="pricing-option"><h2>Assignment ' + assignments.ASS_ID + '</h2><hr><img src="assets/images/space-ship.png" alt="" class="pricing-img"><hr><div class="m-t-30 m-b-30"><h5>' + assignments.title + '</h5><br><h6>' + assignments.ModuleName + '</h6><br><h6 class="text-danger">Deadline</h6><h6 class="text-danger">' + assignments.end_date_and_time + '</h6></div><div class="price"><span class="price"><b></b></span></div><a href="stu_view_assignments.html" onclick="assidpass(' + assignments.ASS_ID + ')" class="btn btn-outline-primary">View Assignment</a></div></div></div></div>');
        })
    })

    $.ajax({                                //Degree Fetch 
        url: 'PHP/stu_data.php',
        method: 'post',
        data: 'stu_test1=' + 5
    }).done(function (degrees) {
        //console.log(modules);
        ass = JSON.parse(degrees);
        //console.log(degrees);
        $('#degdrop_stu').empty();
        $('#degdrop_stu').append('<option value="" disabled selected>Select Degree Program..</option>');
        degrees.forEach(function (degrees) {
            $('#degdrop_stu').append('<option value="' + degrees.DID + '">' + degrees.Name + '</option>');
        })
    }); 
    

});

