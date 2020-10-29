function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('maps'), 
        {
            zoom: 4, 
            center: uluru
        }
    );
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}


$(document).ready(function () {
    /********************************/
    /*Animate header while scroll*/
    /********************************/
    var scroll_start = 0;
    var startchange = $('#content-apk');
    var offset = startchange.offset();
    var main_header = $('.header-akp .navbar');

    if (startchange.length) {
        $(window).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > (offset.top - 100)) {
                $(main_header).addClass('animate-head');
            } else {
                $(main_header).removeClass('animate-head');
            }
        });
    }
    

    /********************************/
    /*Show & Hide Result Cek Kiriman & Tarif*/
    /********************************/
    $("#cekKiriman").click(function() {
        $("#HasilCekKiriman").toggle(800);
        $("#HasilCekTarif").css('display', 'none');
    }); 
    
    $("#cekTarif").click(function() {
        $("#HasilCekTarif").toggle(800);
        $("#HasilCekKiriman").css('display', 'none');
    }); 

    /********************************/
    /*Datatables*/
    /********************************/
    $('#TabelHasilTarif').DataTable();
});

/********************************/
/*Header Responsive*/
/********************************/
$(document).ready(function () {
    var mxHght = $(window).height();
    var hgtHeader = $('#hgHeader').height();
    var totalHeight = mxHght - (hgtHeader+50);
    console.log('tinggi header : '+totalHeight);
    $('.hgMenuHeader').css('max-height', totalHeight);
});

/********************************/
/*Tab Menu JS*/
/********************************/
var menutab = $('#tabBanner-tab li a');
$(menutab).click(function() {
    $(this).addClass('active');
    $(this).attr('aria-selected', 'true');
    $(this).parent().siblings().children().removeClass('active');
    $(this).parent().siblings().children().attr('aria-selected', 'false');
    var id = $(this).data('id');
    console.log(id);
    $('.tab_'+id).addClass('active show');
    $('.tab_'+id).removeClass('menuTab');
    $('.tab_'+id).siblings().addClass('menuTab');
    $('.tab_'+id).siblings().removeClass('active');
    $('.tab_'+id).siblings().removeClass('show');
});