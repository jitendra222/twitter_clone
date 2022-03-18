///////////////////////////////
//JavaScript for Posts page
//////////////////////////////


$(function() {
    // Executed when js-menu-icon is clicked
    $('.js-menu-icon').click(function() {
        // $(this) : Self elements, namely div.js-menu-icon
        // next() : Next to div.js-menu-icon,namely div.menu
        // toggle() : Switch show and Hide
        $(this).next().toggle();
    })
})