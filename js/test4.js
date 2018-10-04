

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




$(document).ready(function () {
    $("#btnAdd").click(function () {
        var $input = $("#inputName").val();
        var $li = $("<li></li>").text($input);
        $li.addClass("text-left click");
        if ($input === ""){
            alert("Bạn chưa nhập tên!");
        } else{
            $("#ulList").append($li);
            var $btn = $("<button></button>").text("Xóa");
            $btn.addClass("btn btn-info del");
            $btn.attr('data-toggle','modal');
            $btn.attr('data-target', '#myModal');
            $li.append($btn);
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
            } else{
                $("#ulList").append($li);
                var $btn = $("<button></button>").text("Xóa");
                $btn.addClass("btn btn-info del");
                $btn.attr('data-toggle','modal');
                $btn.attr('data-target', '#myModal');
                $li.append($btn);
                $("#inputName").val("");
                return false;
            }
        }
    });
});



// $("#inputName").keyup(function (e) {
//     if(e.keyCode == 13){
//         $("#btnAdd").click();
//     }
// });

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
});

