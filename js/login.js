var contenido = document.getElementById("contenido");
var correo = document.getElementById("correo");
var password = document.getElementById("contraseña");
function mostrar(){
    // Abrir archivo JSON
    fetch('../JSON/usuarios.json')
    // Convetir arichivo JSON en arreglo de JSON
    .then( res => res.json())
    .then(datos => {
        tabla(datos)
    })
}
function tabla(datos){
    for(let valor of datos){
        if(correo.value == valor.correo && contraseña.value == valor.contraseña){
            alert("Bienvenido "+valor.usuario)
            
            location.href = "html/inicio.html";
        }else{
        }
    }
} 