var postUrl = location.href + '/script/index.php';
var actorImage = location.href + 'assets/img/hello.jpg';

$(document).ready(function(){
    $('#message').fadeOut(1);

    $('#send_voice .btn').click(function(){
        var text = histroyText('me', $('#send_voice input[name=voice]').val())
        //送信した内容を追記
        $('#history .inner').append(text);
        $('#send_voice input[name=voice]').val('');
        postVoice();
    });

    $('#history_btn').click(function(){
        if($('#history').css('display') == 'none'){
            $('#history').fadeIn(1000);
        } else {
            $('#history').fadeOut(1);
        }
    });

    function postVoice(){
        $('#message').fadeOut(1);
        var postData = {'voice' :  $('#send_voice input[name=voice]').val()};
        $.ajax({
            type: "POST",
            url: postUrl,
            timeout: 10000,
            data: postData
        }).done(function(data, status, xhr) {
            $('#message').html('<div class="hello">' + data + '</div>');
            $('#history .inner').append(histroyText('hello', data));
            $('#history').scrollTop($('#history .inner').height());

        }).fail(function(xhr, status, error) {
            $('#message').html('.........................?');
        });
        $('#message').fadeIn(800);
    }

    function toLocaleString( )
    {
        var getTime = jQuery . now();
        var date = new Date( getTime );
        return ' '
            + [
                date.getFullYear(),
                date.getMonth() + 1,
                date.getDate()
            ].join( '/' ) + ' '
            + date.toLocaleTimeString();
    }

    function histroyText(type, message){
       var text = '<div class="'+ type +'">'
            + '<div class="actor"></div>'
            + '<div class="voice">'
            + '<div class="message">' + message + '</div>'
            + '<span class="date">' + toLocaleString() + '</span>'
            + '</div></div>';
        return text;
    }

});