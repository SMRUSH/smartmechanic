var username = ''


// send the message to user
function send_message(message){
      var prevSms = $('.container-chatbot').html();
      if (prevSms.length > 8) {
        prevSms = prevSms + '<br>'
        }
      $('.container-chatbot').html(prevSms + '<span class="cureent_sms">' + '<span class="bot">Advisor: </span>' + message + '</span>');

      $('.cureent_sms').hide();
      $('.cureent_sms').delay(50).fadeIn();
      $('.cureent_sms').removeClass("current_sms");
    }

// get the username
function get_username(){
    send_message('Hi Welcom To SMARTMECHANIC, What Is Your Good Name....?');
}

// simple ai function
function ai(message){
        if (username.length < 3){
          username = message;
          send_message('Hi, nice to meet you ' + username + ', how are you doing.. ')
        }
        if ((message.indexOf('help') >= 0) || (message.indexOf('help me') >= 0)){
          send_message("Sure! What do you want?");
        }

        if ((message.indexOf('how are you') >= 0) || (message.indexOf('about you') >= 0)){
          send_message('Am okey, thanks for ask ' + '<i>' + username + '</i>' + " => May I help You!");
        }

        if ((message.indexOf('what is your name') >= 0) || (message.indexOf('name') >= 0)){
          send_message('My name in Online Advisor.. am here to chat with you..');
        }

        if ((message.indexOf('old') >= 0) || (message.indexOf('age') >= 0)){
          send_message('I do not know how old i am.. am sorry..!!');
        }

        if ((message.indexOf('fine') >= 0) || (message.indexOf('good') >= 0)){
          send_message('Grate....! ' + username + '\n' +"What Type info? ");
        }

        if ((message.indexOf('sex') >= 0) || (message.indexOf('love') >= 0)){
          send_message('Am sorry i can not tell you about that.');
        }
        
        if ((message.indexOf('mechanic') >= 0) || (message.indexOf('find a mechanic') >= 0)){
          send_message('What type of Mechanic You Want?');
        }

        if (message.indexOf('time') >= 0){
          var date = new Date();
          var hour = date.getHours();
          var minutes = date.getMinutes();
          send_message('Current time is: ' + hour + ':' + minutes );
        }
        
}

// main JQuery function
$(function() {
      // this function is used to call username of user;
      get_username();

      $('#text-sms').keypress(function(event){
        if (event.which == 13) {
          if ($('#enter').prop('checked')){
            $('#send-button').click();
            event.preventDefault();
          }
        }
      });

    $('#send-button').click(function(){
        var username = '<span class="username">You: </span>'
        var sms = $('#text-sms').val();
        $('#text-sms').val('');
          //store the first sms
        var prevSms = $('.container-chatbot').html();

          //check if prev sms length is greater than 8
        if (prevSms.length > 8) {
          prevSms = prevSms + '<br>'
          }

        //show the sms to the container-chatbot div
        $('.container-chatbot').html(prevSms + username + sms);

        $('.container-chatbot').scrollTop($('.container-chatbot').prop('scrollHeight'));
        // the main function
        ai(sms);
      });
});
