//<reference path="jquery-1.4.4-vsdoc.js" />
$(document).ready(function () {

    function updateGrid(e) {
        e.preventDefault();
        // find the containing element's id then reload the grid
        var url = $(this).attr('href');
        var grid = $(this).parents('.ajaxGrid'); // get the grid
        //var id = grid.attr('id');
        //grid.load(url + ' #' + id);
        grid.load(url);
    };
    //$('.ajaxGrid table thead tr a').live('click', updateGrid); // hook up ajax refresh for sorting links
    //$('.ajaxGrid table tfoot tr a').live('click', updateGrid); // hook up ajax refresh for paging links (note: this doesn't handle the separate Pager() call!)

    $('.ajaxGrid').on('click', 'table thead tr a', updateGrid);
    $('.ajaxGrid').on('click', 'table tfoot tr a', updateGrid);
});