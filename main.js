$(document).ready(function(e) {

    $('img[usemap]').rwdImageMaps();

});

function addSrc(id, src) {

    $("#modal" + id).find("iframe").attr("src", src);

};

$(".modal").on('hidden.bs.modal', function() {

    $('.modalVideo').attr('src','');

});