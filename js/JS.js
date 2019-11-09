// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

$(function () {
    "use strict";
    $(".info-list li").click(function () {
        "use strict";
        $(this).addClass("selected").siblings("li").removeClass("selected");
        $(".info-content div").hide();
        $("." + $(this).data("class")).fadeIn();
    });
});