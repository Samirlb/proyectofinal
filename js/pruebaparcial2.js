function calcular() {
    var precio = document.getElementById('txtprecio').value;
    var unidad = document.getElementById('txtunidad').value;
    var total = parseInt(precio) * parseInt(unidad);
    var iva = parseInt(total) * 19 / 100;
    var totalp = parseInt(iva) + parseInt(total);
    document.getElementById('total').innerHTML = ' ' + total;
    document.getElementById('totalapagar').innerHTML = ' ' + totalp;
    top.location.href = "contactenos.html#"
}
function limpiar() {
    document.getElementById('txtnombre').value = '';
    document.getElementById('txtapellido').value = '';
    document.getElementById('txtcedula').value = '';
    document.getElementById('txtfecha').value = '';
    document.getElementById('txtedad').value = '';
    document.getElementById('txtdireccion').value = '';
    document.getElementById('txtbarrio').value = '';
    document.getElementById('txttelefono').value = '';
    document.getElementById('txtnacimiento').value = '';
    document.getElementById('txtcelular').value = '';
    document.getElementById('txtprecio').value = '';
    document.getElementById('txtunidad').value = '';
    document.getElementById('total').innerHTML = ' ';
    document.getElementById('totalapagar').innerHTML = ' ';


}