$(function()
{
    $('#imgprofile').hover(
        function() {
            $('#imgprofile').attr('src', '/stylesheets/photos/angi1.jpg');
        },
        function() {
            $('#imgprofile').attr('src', '/stylesheets/photos/angi.jpg');
        }
    );
});