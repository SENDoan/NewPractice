
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
            var $check = $("<input type='checkbox' id='idCb' class='btn check-completed'></input>");
            $li.append($check);

            //btn delete
            var $btn = $("<button></button>").text("Xóa");
            $btn.addClass("btn btn-info del");
            $btn.attr('data-toggle','modal');
            $btn.attr('data-target', '#myModal');
            $li.append($btn);

            //reset input
            $("#inputName").val("");
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
                var $check = $("<input type='checkbox' id='idCb' class='btn check-completed'>");
                $li.append($check);

                //btn delete
                var $btn = $("<button></button>").text("Xóa");
                $btn.addClass("btn btn-info del");
                $btn.attr('data-toggle','modal');
                $btn.attr('data-target', '#myModal');
                $li.append($btn);

                //reset input
                $("#inputName").val("");
                return false;
            }
        }
    });

    $(document).on("click", ".click", function(){
        var $item = this;
        $($item).addClass("current");
        var $name = ($($item).text()).substring(0,($($item).text().length) - 3 );
        $("#txtName").text($name);
        $("#btnN").click(function () {
            $($item).removeClass("current");
            $('#myModal').modal('hide');
        });
        $("#btnY").click(function () {
            if($($item).hasClass("current")){
                $($item).remove();
            }
            $('#myModal').modal('hide');
        });

        // var $cb = $("#idCb");
        // var $itemCom = $("#idCb").parent();
        // if($cb.checked == true){
        //     // $("#listCompleted").append($($itemCom));
        //     $("#ulList").removeChild($($itemCom));
        // }else{
        //     $("#ulList").append($($itemCom));
        // }

        // var $cb = $("#idCb");
        // var $licom = $("<li></li>").text($name);
        // if($cb.checked == true){
        //     $("#listCompleted").append=($licom);
        //     $("#ulList").removeChild($($item));
        // }else{
        //     $("#ulList").append($($item));
        // }

    });

    $(document).on('click','#idCb', function () {
        var $item = this;
        if ($($item).is(':checked')){
            var $txtLi = ($($item).parent().text()).substr(0,($($item).parent().text().length) - 3 );
            $("#listCompleted").append($("<li></li>").text($txtLi));
            ($($item).parent()).remove();
        }

    })
});
//




// $(document).on('click', "#idCb", function () {
//     var $cb = $("#idCb");
//     var $itemCom = $("#idCb").parent();
//     $($itemCom).addClass("moveCom");
//     if($cb.checked == true){
//         if($($itemCom).hasClass("moveCom")){
//             $("#listCompleted").append($($itemCom));
//         }
//         $("#ulList").removeChild($($itemCom));
//     }else{
//         $($itemCom).removeClass("moveCom");
//         $("#ulList").append($($itemCom));
//     }
// })