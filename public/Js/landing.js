$(document).ready(
    function() {
      setTimeout(function() {
        $('#loading').addClass('hidden');
        $('#loading').removeClass('loading');
        $('#content').removeClass('hidden');
        }, 3000);
    }
  );

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