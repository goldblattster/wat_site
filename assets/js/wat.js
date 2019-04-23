$(function() {
    $(window).scroll(function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = $("#hero").height();
        
        if (y_scroll_pos > scroll_pos_test) {
           $(".navbar-brand").show();
           console.log('hello')
        } else {
           $(".navbar-brand").hide();
        }
    });
});