$(document).ready(function(){

    $.ajax({
        url: 'PHP/data.php',
        method: 'post',
        data: 'test1='+ 5 
    }).done(function(degrees){
        //console.log(modules);
        degrees = JSON.parse(degrees);
        //console.log(degrees);
        $('#degdrop').empty();
        $('#degdrop').append('<option value="" disabled selected>Select Degree Program..</option>');
        degrees.forEach(function(degrees){
            $('#degdrop').append('<option value="' + degrees.DID + '">' + degrees.Name + '</option>'); 
        })
    });

    $.ajax({
        url: 'PHP/data.php',
        method: 'post',
        data: 'test2='+ 5 
    }).done(function(intakes){
        //console.log(modules);
        intakes = JSON.parse(intakes);
        //console.log(intakes);
        $('#intdrop').empty();
        $('#intdrop').append('<option value="" disabled selected>Select Intake..</option>');
        intakes.forEach(function(intakes){
            $('#intdrop').append('<option value="' + intakes.ID + '">' + intakes.ID + '</option>'); 
        })
    });

    $.ajax({
        url: 'PHP/data.php',
        method: 'post',
        data: 'test4='+ 5 
    }).done(function(semesters){
        //console.log(modules);
        semesters = JSON.parse(semesters);
        //console.log(intakes);
        $('#semdrop').empty();
        $('#semdrop').append('<option value="" disabled selected>Select Semester..</option>');
        semesters.forEach(function(semesters){
            $('#semdrop').append('<option value="' + semesters.ID + '">' + semesters.ID + '</option>'); 
        })
    });

    $.ajax({
        url: 'PHP/data.php',
        method: 'post',
        data: 'test3='+ 5 
    }).done(function(log){
        //console.log(modules);
        log = JSON.parse(log);
        //console.log(log);
        $('#examlogtable').empty();
        $('#examlogtable').append('<thead><tr><th>ID</th><th>Logged Date</th><th>Logged Time</th><th>Status</th></tr></thead><tbody>');
        var i =1;
        log.forEach(function(log){
            $('#examlogtable').append('<tr><td>' + i + '</td><td><span>' + log.date + '</span></td><td>' + log.time + '</td><td><span class="badge badge-success">' + log.states + '</span></td></tr>'); 
            i++
        })
        $('#examlogtable').append('</tbody>');
    });


    $("#loadresults").click(function(){
        $('#totcredit').empty();
        $('#nosubs').empty();
        $('#nostudents').empty();
        $('#nodate').empty();
        var ID;
        var deg = $("#degdrop").val();
        var sem = $("#semdrop").val();
        var intk = $("#intdrop").val();
        $.ajax({
            url: 'PHP/data.php',
            method: 'post',
            data: 'test5='+ deg +'&test6='+ sem +'&test7=' +intk
        }).done(function(results){
            results = JSON.parse(results);
            console.log(results);
            results.forEach(function(results){
            ID =  results.ID;
            $('#totcredit').append('Total Credits: ' + results.totcredit + ' '); 
            $('#nosubs').append('No of Subjects: ' + results.nosubs + ' '); 
            $('#nostudents').append('No of Students: ' + results.nostudents + ' '); 
            $('#nodate').append('Date: ' + results.date + ' ');
            loadMarksTitles(ID);
            })
        })

    })

    function loadMarksTitles(ID) {
        //console.log(ID);
        $.ajax({
            url: 'PHP/data.php',
            method: 'post',
            data: 'test9='+ ID
        }).done(function(results){
            results = JSON.parse(results);
            //console.log(results);
            $('#results_table').empty();
            $('#results_table').append('<thead><tr>');
            results.forEach(function(results){
                $('#results_table').append('<th>' + results.COLUMN_NAME + '</th>'); 
            })
            $('#results_table').append('</tr></thead><tbody>');
            loadMarks(ID,results);
        })
    }
    function loadMarks(ID,Titles) {
        //console.log(Titles);
        $.ajax({
            url: 'PHP/data.php',
            method: 'post',
            data: 'test8='+ ID
        }).done(function(results){
            results = JSON.parse(results);
            //console.log(results);
            /*Object.keys(results).forEach(function(result) {
                console.log(result, results[result]);
            });*/
            Object.keys(results).forEach(function(result){
                //$('#results_table').append('<tr>');
                var str1 = '';
                str1 = str1.concat('<tr>');
                  Object.keys(results[result]).forEach(function(resul,val) {
                    //console.log(results[result][resul]);
                    //$('#results_table').append('<td>' + results[result][resul] + '</td>');
                    str1 = str1.concat('<td>' + results[result][resul] + '</td>');
                });
                str1 = str1.concat('</tr>');
                //console.log(str1);
                $('#results_table').append(str1); 

                
            })
            $('#results_table').append('</tbody>');
        })
    }



});