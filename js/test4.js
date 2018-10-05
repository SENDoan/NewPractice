
////add <li> by js
// function addName() {
//     var li = document.createElement("LI");
//     var inputName = document.getElementById("inputName").value;
//     li.appendChild(document.createTextNode(inputName));
//     li.className = "text-left";
//     if(inputName === ''){
//         alert("Bạn chưa nhập tên!");
//     }else {
//         document.getElementById("ulList").appendChild(li);
//     }
//     document.getElementById("inputName").value = "";
//
//     var btn = document.createElement("BUTTON");
//     var txt = document.createTextNode("Xóa");
//     btn.className = "btn btn-info del";
//     btn.appendChild(txt);
//     li.appendChild(btn);
//
//     var del = document.getElementsByClassName("del");
//     for (var i = 0; i < del.length; i++) {
//         del[i].onclick = function() {
//             var div = this.parentElement;
//             document.getElementById("ulList").removeChild(div);
//         }
//     }
// }


//add <li> by jquery
$(document).ready(function () {
    $("#btnAdd").click(function () {
        var $input = $("#inputName").val();
        var $li = $("<li></li>").text($input);
        $li.addClass("text-left click");
        if ($input === ""){
            alert("Bạn chưa nhập tên!");
            return false;
        } else{
            $("#ulList").append($li);

            //check completed
            var $check = $("<button id='btnCheck' class='btn check-completed'>Complete</button>");
            $li.append($check);

            //btn delete
            var $btn = $("<button></button>").text("Xóa");
            $btn.addClass("btn btn-info del");
            $btn.attr('data-toggle','modal');
            $btn.attr('data-target', '#myModal');
            $li.append($btn);

            //reset input
            $("#inputName").val("");
            i = 0;
        }
    });

    $("#inputName").keydown(function (e) {
        if(e.which == 13) {
            var $input = $("#inputName").val();
            var $li = $("<li></li>").text($input);
            $li.addClass("text-left click");
            if ($input === ""){
                alert("Bạn chưa nhập tên!");
                return false;
            } else{
                $("#ulList").append($li);

                //check completed
                var $check = $("<button id='btnCheck' class='btn check-completed'>Complete</button>");
                $li.append($check);

                //btn delete
                var $btn = $("<button></button>").text("Xóa");
                $btn.addClass("btn btn-info del");
                $btn.attr('data-toggle','modal');
                $btn.attr('data-target', '#myModal');
                $li.append($btn);

                //reset input
                $("#inputName").val("");
                i = 0;
                return false;
            }
        }
    });

    $(document).on("click", ".click", function(){
        var $item = this;
        $($item).addClass("current");
        var $name = ($($item).text()).substring(0,($($item).text().length) - 11 );
        $("#txtName").text($name);
        $("#btnN").click(function () {
            $($item).removeClass("current");
            $('#myModal').modal('hide');
        });
        $("#btnY").click(function () {
            if($($item).hasClass("click")){
                if($($item).hasClass("current")){
                    $($item).remove();
                }
            }
            $('#myModal').modal('hide');
        });
    });

    $(document).on("click", ".del-complete", function(){
        var $item = this;
        $($item).addClass("current-complete");
        var $name = ($($item).text()).substring(0,($($item).text().length) - 3 );
        $("#txtName").text($name);
        $("#btnN").click(function () {
            $($item).removeClass("current-complete");
            $('#myModal').modal('hide');
        });
        $("#btnY").click(function () {
            if($($item).hasClass("del-complete")){
                if($($item).hasClass("current-complete")){
                    $($item).remove();
                }
            }
            $('#myModal').modal('hide');
        });
    });

    $(document).on('click','#btnCheck', function () {
        var $item = this;
        var $newli = $($item).parent();
        $newli.addClass("del-complete");
        $newli.removeClass("click");
        $($item).remove();
        $("#listCompleted").append($newli);
        ($($item).parent()).remove();
    });

    i = 0;
    $("#inputName").keydown(function(){
        i++;
        if(i == 50){
            alert("Độ dài tối đa 50 ký tự!");
            $("#inputName").val("");
            i = 0;
        }
    });
});
