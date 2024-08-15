var btnDesencriptar = document.getElementById("btn-desencriptar");
var btnEncriptar = document.getElementById("btn-encriptar");

function encriptar()
{
    var inputTexto = document.getElementById("input__texto").value; //capturamos el valor del textarea
    var mensajeEncriptado = []; //guardamos un nuevo array del texto cifrado

    //  verificamos que el texto tenga contenido
    if(inputTexto === '')
    {
        return null;

    } else {

        var mensajeTitulo = document.getElementById("mensaje__titulo"); // capturamos el titulo del mensaje
        var mensajeCuerpo = document.getElementById("mensaje__cuerpo"); // capturamos el cuerpo del mensaje
        var nuevoTexto = inputTexto.split(''); // transformamos el texto a un arreglo
        
        // iteramos el texto convertido en un array y comparamos
        for (let index = 0; index < nuevoTexto.length; index++) {
            
            if(nuevoTexto[index] === 'a')
            {
                mensajeEncriptado.push('ai');
    
            } else if (nuevoTexto[index] == 'e')
            {
                mensajeEncriptado.push('enter');
    
            } else if (nuevoTexto[index] == 'i')
            {
                mensajeEncriptado.push('imes')
    
            } else if (nuevoTexto[index] == 'o')
            {
                mensajeEncriptado.push('ober');
    
            } else if (nuevoTexto[index] == 'u')
            {
                mensajeEncriptado.push('ufat');
    
            } else {
    
                mensajeEncriptado.push(nuevoTexto[index]);
            }
            
        }
    }

    
    mensajeTitulo.innerHTML = "Mensaje encriptado";
    mensajeCuerpo.innerHTML = mensajeEncriptado.join('');
    btnEncriptar.disabled = true;
    btnDesencriptar.disabled = false;

}


function desencriptar()
{   
    var inputTexto = document.getElementById("input__texto").value; //capturamos el valor del textarea

    //  verificamos que el texto tenga contenido
    if(inputTexto === '')
    {
        return null;

    } else {

    }
    // var inputTexto = document.getElementById("input__texto").value;
    var mensajeTitulo = document.getElementById("mensaje__titulo");
    var mensajeCuerpo = document.getElementById("mensaje__cuerpo");


    mensajeTitulo.innerHTML = "Mensaje desencriptado";
    mensajeCuerpo.innerHTML = inputTexto;
    btnDesencriptar.disabled = true;
    btnEncriptar.disabled = false;


}