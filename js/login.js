// Sing
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, options);
});




// login

function getContactData () {
  var $phone = $('#contact-name');
  var $phone = $('#contact-phone');
  addContacDate($name, $phone.val());
  $('#contact-name').val('');
  $('#contact-phone').val('');
};

function swalmessage(){
  // para dar mensaje de listo
  swal("Yei!", "datos correctos!", "success");
}

// para que lea e inicialice todo
$(document).ready(function() {
  $('select').formSelect();
  $('input#contact-name, input#contact-phone').characterCounter();
  $('#ready').click(swalmessage);
  $('#ready').click(getContactData);
});
    
    