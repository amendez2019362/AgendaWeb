document.addEventListener("DOMContentLoaded", function () {
    var card = document.getElementById("contactCard");

    var contactos = [
        {
            nombre: "Angel Adolfo Méndez Orozco",
            imagen: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
            edad: "18 años",
            telefono: "+502 4804-0227",
            correo: "angel@gmail.com",
        },
        {
            nombre: "Oscar Jose Morales Velasquez",
            imagen: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
            edad: "17 años",
            telefono: "+502 4125-7441",
            correo: "oscar@gmail.com",
        },
        {
            nombre: "Otoniel Menéndez Estrada",
            imagen: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
            edad: "17 años",
            telefono: "+502 0525-6541",
            correo: "otto@gmail.com",
        },
        {
            nombre: "Jose David Soto Estrada",
            imagen: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
            edad: "17 años",
            telefono: "+502 5996-7484",
            correo: "soto@gmail.com",
        },
        {
            nombre: "Jorge Abraham Revolorio Mazariegos",
            imagen: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
            edad: "18 años",
            telefono: "+502 4141-1010",
            correo: "revo@gmail.com",
        },
        {
            nombre: "Brandon Steev Mendoza Peres",
            imagen: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
            edad: "17 años",
            telefono: "+502 5996-7484",
            correo: "brandon@gmail.com",
        },
        {
            nombre: "Alejandro Benjamin Max López",
            imagen: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
            edad: "18 años",
            telefono: "+502 5996-7484",
            correo: "max@gmail.com",
        },
        {
            nombre: "Juan David Sandoval López",
            imagen: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
            edad: "18 años",
            telefono: "+502 5996-7484",
            correo: "sandoval@gmail.com",
        },
    ];

    var listaContactos = document.createElement("ul");
    listaContactos.className = "contact-list";

    contactos.forEach(function (contacto) {
        var item = document.createElement("li");
        item.className = "contact-item";

        var tarjeta = document.createElement("div");
        tarjeta.className = "card";

        var imagen = document.createElement("img");
        imagen.src = contacto.imagen;
        imagen.className = "contact-image";

        var edad = document.createElement("div");
        edad.className = "contact-edad";
        edad.textContent = contacto.edad;

        var detalles = document.createElement("div");
        detalles.className = "contact-details";

        var nombre = document.createElement("div");
        nombre.className = "contact-name";
        nombre.textContent = contacto.nombre;

        var telefono = document.createElement("div");
        telefono.className = "contact-phone";
        telefono.innerHTML = `<i class="fas fa-phone"></i> ${contacto.telefono}`;

        var correo = document.createElement("div");
        correo.className = "contact-email";
        correo.innerHTML = `<i class="fas fa-envelope"></i> ${contacto.correo}`;

        tarjeta.appendChild(imagen);
        detalles.appendChild(nombre);
        detalles.appendChild(edad)
        detalles.appendChild(telefono);
        detalles.appendChild(correo);

        tarjeta.appendChild(detalles);
        item.appendChild(tarjeta);

        listaContactos.appendChild(item);
    });

    card.appendChild(listaContactos);
});

