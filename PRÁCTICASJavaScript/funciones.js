function crear_boton(){
    var button = document.createElement('button')
    button.type = 'button';
    button.innerText = 'Botón nuevo';
    document.body.appendChild(button);
}

function crear_texto(){
    var parrafo=document.createElement("p")
    var texto=document.createTextNode("Texto gordo")
    parrafo.appendChild(texto);
    var x=document.getElementById("div1")
    x.appendChild(parrafo)
}