// Generador de numerovar contraseña = "";
var contraseña = "";
console.log(contraseña + " miau");

function generator(form, element) {
  if (contraseña != "") {
    console.log("La contraseña previamente guardada era: " + contraseña);
  }
  var caracteres = "12346789";
  contraseña = "";
  for (i = 0; i < 3; i++) {
    contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  // console.log(contraseña + " miau");
  eval('document.' + form + '.' + element + '.value = contraseña');
}


// Solo ingrese 10 numeros
var $submit = $('a[type=submit]');

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

  $('.form-control').on('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
    if ($(this).val().length < 10) {
      $submit.attr('disabled', true);
    } else {
      $submit.attr('disabled', false);
    }
  });

  $('.verify_num').on('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
    console.log(contraseña);
    if ($(this).val() != contraseña) {
      $submit.attr('disabled', false);
    } else {
      $submit.attr('disabled', true);
    }

  });
});
