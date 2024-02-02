document.querySelector('#button').addEventListener('click', iniciarSesion);

function iniciarSesion() {
    var vCorreo = '';
    var vClave = '';
    var ir = false;

    vCorreo = document.querySelector('#email').value;
    vClave = document.querySelector('#clave').value;

    ir = validarDatos(vCorreo, vClave);

    if (ir == true) {
        ingresar();
    }
}

function ingresar() {
    var rol = sessionStorage.getItem('rolUsuarioActivo');
    switch (rol) {
        case '1':
            window.location.href = './assets/pages/hola.html';
            break;
        default:
            break;
    }
}
