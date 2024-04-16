// Hover transitions for navigation bar

$(".nav-link-red").on( "mouseenter", function() {
    $(this).removeClass("nav-link-red").addClass("nav-link-red-hover");
});
$(".nav-link-red").on( "mouseleave", function() {
    $(this).removeClass("nav-link-red-hover").addClass("nav-link-red");
});

$(".nav-link-black").on( "mouseenter", function() {
    $(this).removeClass("nav-link-black").addClass("nav-link-black-hover");
});
$(".nav-link-black").on( "mouseleave", function() {
    $(this).removeClass("nav-link-black-hover").addClass("nav-link-black");
});

// Modal Close Buttons //

$("#modal-sequence-button").click (function() {
    $("#sequence-error-modal").css("display", "none");
})
$("#modal-guess-button").click (function() {
    $("#guess-error-modal").css("display", "none");
})
$("#modal-results-button-close").click (function() {
    $("#results-modal").css("display", "none");
})
$("#modal-results-button-replay").click (function() {
    $("#results-modal").css("display", "none");
})
