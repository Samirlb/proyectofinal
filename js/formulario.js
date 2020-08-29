function mostrar(){
    var nombre= document.getElementById('txtnombre').value;
    var apellido= document.getElementById('txtapellido').value;
    var edad= document.getElementById('txtedad').value;
    var Telefono= document.getElementById('txttelefono').value;
    document.getElementById('nombre').innerHTML = 'nombre:'+ nombre; 
    document.getElementById('apellido').innerHTML = 'apellido:'+apellido;
    document.getElementById('edad').innerHTML = 'Edad:'+ edad; 
    document.getElementById('Telefono').innerHTML = 'Telefono:'+Telefono;
}

