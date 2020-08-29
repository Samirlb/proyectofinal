function mostrar() {
    var nombre = document.getElementById('txtnombre').value;
    var apellido = document.getElementById('txtapellido').value;
    var edad = document.getElementById('txtedad').value;
    var Telefono = document.getElementById('txttelefono').value;
    document.getElementById('nombre').innerHTML = 'Nombre : ' + nombre;
    document.getElementById('apellido').innerHTML = 'Apellido : ' + apellido;
    document.getElementById('edad').innerHTML = 'Edad :' + edad;
    document.getElementById('Telefono').innerHTML = 'Telefono : ' + Telefono;
}

