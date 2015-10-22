// Custom JS
$(document).ready(function(){
  /* ==========================================================================
     Simple Form - Contact Form
     ========================================================================== */

  $('#mailbox').submit(function(){
    $.ajax({
      dataType: 'jsonp',
      url: "http://getsimpleform.com/messages/ajax?form_api_token=4a05b52d7d94be28ce4a58d2a6480ffa",
      data: $("#mailbox").serialize(),
      error: function() {
        $('#mailbox').hide();
        $('#errormessage').show();
      }
    }).done(function() {
      //callback which can be used to show a thank you message
      //and reset the form
      $('#mailbox').hide();
      $('#greatsuccess').show();
    });
    return false; //to stop the form from submitting
  });
});