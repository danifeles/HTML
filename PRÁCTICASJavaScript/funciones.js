function crear_boton(){
    var button = document.createElement('button')
    button.type = 'button';
    button.innerText = 'Botón nuevo';
    document.body.appendChild(button);
}

function crear_texto(){
    var h1=document.createElement("h1")
    var texto=document.createTextNode("Texto gordo")
    h1.appendChild(texto);
    var x=document.getElementById("div1")
    x.appendChild(h1)
}