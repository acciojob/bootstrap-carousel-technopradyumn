//your code here

$(document).ready(function() {
    $("#myCarousel").carousel({
        interval: false
    });

    $(".left").click(function(event) {
        event.preventDefault();
        $("#myCarousel").carousel("prev");
    });

    $(".right").click(function(event) {
        event.preventDefault();
        $("#myCarousel").carousel("next");
    });
});
