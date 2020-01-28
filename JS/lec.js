$(document).ready(function(){

    $.ajax({        //Degree Fetch Start
        url: 'PHP/lec_data.php',
        method: 'post',
        data: 'lec_test1=' + 5
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
        url: 'PHP/lec_data.php',
        method: 'post',
        data: 'lec_test2=' + 5
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
        url: 'PHP/lec_data.php',
        method: 'post',
        data: 'lec_test3=' + 5
    }).done(function (semesters) {
        //console.log(semesters);
        semesters = JSON.parse(semesters);
        //console.log(semesters);
        $('.semdropclass').empty();
        $('.semdropclass').append('<option value="" disabled selected>Select Semester..</option>');
        semesters.forEach(function (semesters) {
            $('.semdropclass').append('<option value="' + semesters.ID + '">' + semesters.ID + '</option>');
        })
    }); //end of load by class 


    //lecturer upload lecture notes

    //Lecturer upload lecturenotes starts

    var countt;
    var regsss = [];
    var attt = [];
    var modd = [];

    $("#lec_intdrop").change(function () {
        var id1 = $("#lec_degdrop").val();
        var id2 = $("#lec_intdrop").val();
        //console.log(id1);
        //console.log(id2);
    });

    $("#lec_degdrop").change(function () {
        var id3 = $("#lec_degdrop").val();
        var id4 = $("#lec_intdrop").val();
        var value = $("#lec_degdrop").find('option:selected').data('degname');
        console.log(value);
        $("#degreename").val(value);
    });

    $("#lec_semdrop").change(function () {
        var id3 = $("#lec_degdrop").val();
        var id4 = $("#lec_intdrop").val();
        var id5 = $("#lec_semdrop").val();
        $.ajax({
            url: 'PHP/lec_data.php',
            method: 'post',
            data: 'itd1=' + id3 + '&itd2=' + id4 + '&itd3=' + id5
        }).done(function (modules) {
            console.log(modules);
            modules = JSON.parse(modules);
            console.log(modules);
            $('#lec_moduledrop').empty();
            $('#lec_moduledrop1').empty();
            $('#lec_moduledrop2').empty();
            $('#lec_moduledrop3').empty();
            $('#lec_moduledrop4').empty();
            $('#lec_moduledrop5').empty();
            modules.forEach(function (module) {
                $('#lec_moduledrop').append('<option value="' + module.ID + '">' + module.MID + ' - ' + module.shortname + '</option>')
                $('#lec_moduledrop1').append('<option value="' + module.ID + '">' + module.MID + ' - ' + module.shortname + '</option>')
                $('#lec_moduledrop2').append('<option value="' + module.ID + '">' + module.MID + ' - ' + module.shortname + '</option>')
                $('#lec_moduledrop3').append('<option value="' + module.ID + '">' + module.MID + ' - ' + module.shortname + '</option>')
                $('#lec_moduledrop4').append('<option value="' + module.ID + '">' + module.MID + ' - ' + module.shortname + '</option>')
                $('#lec_moduledrop5').append('<option value="' + module.ID + '">' + module.MID + ' - ' + module.shortname + '</option>')
            })
        })
    });

    //Lecturer upload lecturenotes ends

    // lecturer view lecture notes starts

    $("#lec_moduledrop4").change(function () {
        var id1 = $("#lid").val();
        var id2 = $("#lec_intdrop").val();
        var id3 = $("#lec_moduledrop4").val();
        $.ajax({
            url: 'PHP/lec_data.php',
            method: 'post',
            data: 'lec_view_ass1=' + id1 + '&lec_view_ass2=' + id2 + '&lec_view_ass3=' + id3
        }).done(function (assign) {
            console.log(assign);
            assign = JSON.parse(assign);
            $('#view_assignments').empty();
            assign.forEach(function (assign) {
                var str = downloadbtn_assign(assign.attachments);
                console.log(str);
                $('#view_assignments').append('<div class="timeline-item blue"><span class="date">' + assign.end_date_and_time + '</span><span><a href="javascript:void(0);" title=""><h5>' + assign.title + '</h5></a><br><h6>' + assign.description + '</h6></span><div class="msg"><p>Intake ' + assign.intake + '</p>'+ str +'</div></div><br><br>');
            })
        })
    });
    function downloadbtn_assign(str){
        //console.log(str);
        var temp = "";
        if(str != "0"){
            //temp = '<button type="submit" value="' + str + '" onclick="download_file(this.value)" class="btn btn-success float-left mt-4"><i class="fa fa-cloud-download" aria-hidden="true"></i> &nbsp Attachments</button>';
            temp = '<a href="php/download.php?name='+ str +'&path=../Upload/Assignment/"><button type="submit" class="btn btn-success float-left mt-4"><i class="fa fa-cloud-download" aria-hidden="true"></i> &nbsp Attachments</button></a>';
        }
        return temp;
    }
    /*
    $.ajax({                          //Lecturer View Quizz
        url: 'PHP/lec_data.php',
        method: 'post',
        data: 'lec_view_quiz='+ 5 
    }).done(function(quiz){
        console.log(quiz);
        quiz = JSON.parse(quiz);
        //console.log(quiz);
        $('#quiz_view').empty();

        quiz.forEach(function(quiz){
            $('#quiz_view').append('<div class="col-lg-4 col-md-12"><div class="card pricing3"><div class="body"><div class="pricing-option"><h2>Quiz</h2><hr><img src="./assets/images/space-ship.png" alt="" class="pricing-img"><hr><div class="m-t-30 m-b-30"><h5>' + quiz.title + '</h5><br><h6>' + quiz.edate + '</h6><p>1.5 Hours</p><br><h5>100 Marks</h5></div><div class="price"><span class="price"><b></b></span></div><a href="lec_quiz_questions.html" class="btn btn-outline-primary">View Questions</a></div></div></div></div>'); 
        })
        $('#quiz_view').append('</div>');
    });*/


    
    $("#lec_moduledrop1").change(function () {
        var id1 = $("#lid").val();
        var id2 = $("#lec_intdrop").val();
        var id3 = $("#lec_moduledrop1").val();
        $.ajax({
            url: 'PHP/lec_data.php',
            method: 'post',
            data: 'lec_view_note1=' + id1 + '&lec_view_note2=' + id2 + '&lec_view_note3=' + id3
        }).done(function (notes) {
            console.log(notes);
            notes = JSON.parse(notes);
            $('#view_notes').empty();
            notes.forEach(function (notes) {
                var str = downloadbtn_notes(notes.module_file);
                console.log(str);
                $('#view_notes').append('<div class="timeline-item blue"><span class="date">' + notes.date + '</span><span><a href="javascript:void(0);" title=""><h5>' + notes.name + '</h5></a><br><h6>' + notes.module_desc + '</h6></span><div class="msg"><p>Intake ' + notes.intake + '</p>'+ str +'</div></div><br><br>');
            })
        })
    });

    function downloadbtn_notes(str){
        //console.log(str);
        var temp = "";
        if(str != "0"){
            //temp = '<button type="submit" value="' + str + '" onclick="download_file(this.value)" class="btn btn-success float-left mt-4"><i class="fa fa-cloud-download" aria-hidden="true"></i> &nbsp Attachments</button>';
            temp = '<a href="php/download.php?name='+ str +'&path=../Upload/Lec_Notes/"><button type="submit" class="btn btn-success float-left mt-4"><i class="fa fa-cloud-download" aria-hidden="true"></i> &nbsp Attachments</button></a>';
        }
        return temp;
    }

});