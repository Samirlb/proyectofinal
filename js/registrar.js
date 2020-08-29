var usuario1 ='admin';
var contraseña1='admin';
var usuario2='cliente';
var contraseña2='1234';
function registrar(){
   var nombre = document.getElementById('txtnombre').value;
   var contraseña = document.getElementById('txtcontraseña').value;

   if ((nombre == usuario1 && contraseña1 == contraseña) || (nombre == usuario2 && contraseña2 == contraseña)){
    document.getElementById('res').innerHTML = '  Bienvenido   '+ nombre;
   }
   else {
      
       alert('usuario y contraseña incorrecto');
   }
   
 }
 function invitado(){
    document.getElementById('res').innerHTML = '  Bienvenido Como invitado  '; 
 }