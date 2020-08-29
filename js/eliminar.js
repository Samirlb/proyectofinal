
function delRow(currElement) {
    var parentRowIndex = currElement.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(parentRowIndex);
}

function insRow(id) {
   var filas = document.getElementById("myTable").rows.length;
   var x = document.getElementById(id).insertRow(filas);
   var y = x.insertCell(0);
   var z = x.insertCell(1);
   y.innerHTML = '<input type="text" id="fname">';
   z.innerHTML ='<button id="btn" name="btn" > Delete</button>';
}