$(document).ready(function(){
    $(".toggle-btn").click(function(){
        $(".nav-links").toggleClass("on");
        $(".toggle-btn i").toggleClass("fa-xmark")
    })
})