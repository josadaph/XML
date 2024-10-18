function enviarFormulario() {
    //captura informacion del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const anio = document.getElementById("anio").value;
    const telefono = document.getElementById("telefono").value;


    //crear un documento XML
    const xmlData =`
        <usuario>
            <nombre>${nombre}</nombre>
            <email>${email}</email>
            <anio>${anio}</anio>
            <telefono>${telefono}</telefono>
        </usuario>
       ` ;

    //almacenar el XNL en el localstorage

    localStorage.setItem(`usuarioXML`, xmlData);

    //redirigir a la pagina de visualizacion

    window.location.href = `visualizar.html`;

    //evitar que el formulario se envie de la manera tradicional

    return false;


}