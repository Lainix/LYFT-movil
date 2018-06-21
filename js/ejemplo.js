
var count = 0;

// funcion para guardar lo que recibe el input
// function getContactData() {
//   var name = $('#contact-name').val();
//   var phone = $('#contact-phone').val();
  
//   // para que pinte lo ingresado en consola
//   console.log(name, phone);
//   // agrego el contenido
//   addContacDate(name, phone);
//   // para limpiar el input
//   $('#contact-name').val('');
//   $('#contact-phone').val('');
// }

function getContactData () {
  var name = $('#contact-name').val();
  var $phone = $('#contact-phone');
  addContacDate(name, $phone.val());
  // addContacDate($name.val(), $phone.val());
  // existen 2 maneras para limpiar el input
  // limpiar el input
  // $name.val('');
  $phone.val('');

// limpiar input
$('#contact-name').val('');
// $('#contact-phone').val('');
};

// segundo modal
function getContactData () {
  var name2 = $('#me').val();
  var $phone2 = $('#mei');
  addContacDate(name2, $phone2.val());
  // addContacDate($name.val(), $phone.val());
  // existen 2 maneras para limpiar el input
  // limpiar el input
  // $name.val('');
  $phone2.val('');

// limpiar input
$('#me').val('');
// $('#contact-phone').val('');
};



// crear plantilla- contatenamos los elementos del template
var template = '<div class="row">'+
                  '<div class="col offset-s3 s6">'+
                    '<div class="card">'+
                      '<div class="card-content orange lighten-3">'+
                        '<h3>__name__</h3>'+
                        '<span>__phone__</span>'+
                        '<a class="waves-effect waves-light btn right" onClick="deleteContact()">'+
                          '<i class="material-icons">delete</i>'+
                        '</a>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                '</div>'

//  funcion para agregar contacto con a la plantilla
function addContacDate (name, phone){
  // contador
  count++;
  // variable para guardar
  var finalTemplate = "";
  // remplazo
  finalTemplate = template.replace("__name__", name).replace("__phone__", phone);
  // los digo donde va aparecer
  $('main').append(finalTemplate);
  // para el contador, que sube en el h5
  $('h5').html('Total contactos:' + count);
  // para dar mensaje de listo
  swal("Yei!", "contacto agregado!", "success");
}

// borrar el template
function deleteContact(){
  // para modificar el contador restarele al contador  , decrementar el contador
  count--;
  var item = $(event.currentTarget);
  var card = item.parent();
  var colCard = card.parent();
  var rowCard = colCard.parent();
  rowCard.remove();

  $('h5').html('Total contactos:' + count);
}

// para que lea e inicialice todo
$(document).ready(function(){
  $('.modal').modal();
  $('#add-contact').click(getContactData);
});