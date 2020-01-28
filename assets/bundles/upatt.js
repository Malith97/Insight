
        $(document).ready(function(){
            $("#Intake").change(function(){
                var id1 = $("#degree").val();
                var id2 = $("#Intake").val();
                $.ajax({
                    url: 'data.php',
                    method: 'post',
                    data: 'id1='+ id1 +'&id2='+ id2
                }).done(function(modules){
                    //console.log(modules);
                    modules = JSON.parse(modules);
                    $('#Modules').empty();
                    modules.forEach(function(module){
                        $('#Modules').append('<option value="' + module.MID + '">' + module.MID + ' - ' + module.shortname + '</option>')
                    })
                })
            })

            $("#degree").change(function(){
                var id3 = $("#degree").val();
                var id4 = $("#Intake").val();
                $.ajax({
                    url: 'data.php',
                    method: 'post',
                    data: 'id1='+ id3 +'&id2='+ id4
                }).done(function(modules){
                    //console.log(modules);
                    modules = JSON.parse(modules);
                    $('#Modules').empty();
                    modules.forEach(function(module){
                        $('#Modules').append('<option value="'+ module.MID +'">' + module.MID + ' - ' + module.shortname + '</option>')
                    })
                })
            })

            $("#Modules").change(function(){
                var did = $("#degree").val();
                
                var iid = $("#Intake").val();
                $.ajax({
                    url: 'data.php',
                    method: 'post',
                    data: 'did='+ did +'&iid='+ iid
                }).done(function(Namss){
                    console.log(Namss);
                    Namss = JSON.parse(Namss);
                    $('#Tbl1').empty();
                    var NO=1;
                    $('#Tbl1').append('<tr><th style="text-align:left">No</th><th style="text-align:left">Reg No</th><th style="text-align:left">Name</th><th style="text-align:left">Attandence</th></tr>')
                    Namss.forEach(function(name){
                        $('#Tbl1').append('<tr><td style="text-align:left">' + NO + '</td><td>' + name.RegNo + '</td><td>' + name.Name + '</td><td style="text-align:left"><input type="hidden" name=' + name.RegNo + ' value="0" /><label class="fancy-checkbox"><input type="checkbox" name=' + name.RegNo + ' value="1" class="checkSingle"/><span></span>
                                                    </label></td></tr>');
                        NO++;
                    })
                })
            })


            $("#checkedAll").click(function(){
                $('input:checkbox').not(this).prop('checked', this.checked);
            });

        });