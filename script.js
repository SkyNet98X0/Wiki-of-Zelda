$(document).ready(function() {
    $('.thumb').click(function() {
        var imgPath = $(this).attr('src').replace('thumbnail', 'fullsize');
        $('#main-image').attr('src', imgPath);
    });

    $('#main-image').hover(
        function() { $(this).css('transform', 'scale(1.05)'); },
        function() { $(this).css('transform', 'scale(1)'); }
    );
});