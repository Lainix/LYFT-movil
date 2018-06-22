// Sing
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, options);
  break;
});



// Solo ingrese 10 numeros


var raundedNumber = $('.codigo');
// Generador de numero
function generator() {
  var randomNumber = Math.random() * 30;
  var raundedNumber = Math.ceil(raundedNumber);
  $("#codigo").HTML = randomNumber;
}

// login
function getContactData() {
  var $phone = $('#contact-name');
  var $phone = $('#contact-phone');
  // addContacDate($name, $phone.val());
  $('#contact-name').val('');
  $('#contact-phone').val('');
};

function swalmessage() {
  // para dar mensaje de success
  swal("Yei!", "datos correctos!", "success");
}

// para que lea e inicialice todo
$(document).ready(function () {
  $('select').formSelect();
  $('input#contact-name, input#contact-phone').characterCounter();
  $('#ready').click(swalmessage);
  $('#ready').click(getContactData);
  $('.form-control').on('input', function () { 
    this.value = this.value.replace(/[^0-9]/g,'');
  //   if ($(this).val().length <= 10) {
  //     $submit = true;
  //     activeButton();
  //   } else {
  //     desactiveButton();
  // }
  // });
      
  });
});    