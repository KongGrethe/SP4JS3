/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    $("#firstA").click(function () {
        $(this).hide();
    });

    $("#firstB").mouseenter(function () {
        $(this).css({
            border: "4px solid black"
        });
    });

    $("#firstB").mouseleave(function () {
        $(this).css({
            border: "none"
        });
    });

    $("#firstB").click(function () {
        $("#firstC").css({
            fontSize: "200%"
        });
    });

    $(".number").each(function () {
        $(this).click(function () {
            this.innerHTML = this.innerHTML * this.innerHTML;
        });
    });

    $("li").filter(":even").css({
        background: "lightgrey"
    });

    var accumulated = 16;
    $("li").each(function () {
        $(this).css("fontSize", accumulated);
        accumulated += 3;
    });

    $("#imageContainer > .fakeImage").each(function () {
        $(this).click(function () {
            $(this).parent().append($(this));
        });
    });

    $("#mysubmit").click(function () {
        $(".content").each(function () {
            if ($(this).val() === "" || $(this).val() === "Fill this out") {
                $(this).val("Fill this out").css("color", "red");
            } else {
                // do something here
            }
        });
        return false;
    });

    $(".content").each(function () {
        $(this).click(function () {
            if ($(this).val() === "Fill this out") {
                $(this).val("");
            }
            $(this).css({
                color: "black"
            });
        });
        $(this).keypress(function () {
            if ($(this).val() === "Fill this out") {
                $(this).val("");
            }
            $(this).css({
                color: "black"
            });
        });
    });
    
    var arr = new Array();
    arr[0] = new person("Anders", "And");
    arr[1] = new person("Anders", "Matthesen");
    arr[2] = new person("Kurt", "Koben");
    
    for(var i = 0; i !== 3; i++) {
        $("#mypersons").append("<tr class=\"generated\"><td>" + arr[i]["firstname"] + "</td><td>" + arr[i]["lastname"] + "</td></tr>");
        //alert(arr[i]["firstname"]);
    }
    
    $(".generated").each(function() {
        $(this).mouseenter(function() {
            $(this).css({
                fontStyle: "italic",
                fontWeight: "bold"
            });
        });
        
        $(this).mouseleave(function() {
            $(this).css({
                fontStyle: "normal",
                fontWeight: "normal"
            });
        });
    });
});

function person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}