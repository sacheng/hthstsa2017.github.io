//Slider Initialize
$(document).ready(function () {
    // Plugin initialization
    $('.slider').slider();
    //Navbar initialization
    $(".button-collapse").sideNav();
    //Tooltip initialization
    $('.tooltipped').tooltip({delay: 50});
    //Removal of tooltip
    $('.tooltipped').tooltip('remove');
})