document.addEventListener("DOMContentLoaded", function() {
    var card = document.getElementById("contactCard");


    var contactos = [
        {
            nombre: "Angel Adolfo Méndez Orozco",
            telefono: "+502 4804-0227",
            correo: "angel@gmail.com",

        },
        {
            nombre: "Oscar Jose Morales Velasquez",
            telefono: "+502 4125-7441",
            correo: "oscar@gmail.com",

        },
        {
            nombre: "Zendher Otoniel Menendez Estrada",
            telefono: "+502 0525-6541",
            correo: "otto@gmail.com",

        },
        {
            nombre: "Jose David Soto Puac",
            telefono: "+502 5996-7484",
            correo: "soto@gmail.com",

        },
    ];

    var listaContactos = document.createElement("ul");
    listaContactos.className = "contact-list";

    contactos.forEach(function(contacto) {
        var item = document.createElement("li");
        item.className = "contact-item";

        var detalles = document.createElement("div");
        detalles.className = "contact-details";

        var nombre = document.createElement("div");
        nombre.className = "contact-name";
        nombre.textContent = contacto.nombre;

        var telefono = document.createElement("div");
        telefono.className = "contact-phone";
        telefono.textContent = "Teléfono: " + contacto.telefono;

        var correo = document.createElement("div");
        correo.className = "contact-email";
        correo.textContent = "Correo: " + contacto.correo;

        detalles.appendChild(nombre);
        detalles.appendChild(telefono);
        detalles.appendChild(correo);


        item.appendChild(detalles);

        listaContactos.appendChild(item);
    });

    card.appendChild(listaContactos);
});