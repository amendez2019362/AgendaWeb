function obtenerListaUsuarios() {
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosIngreso'));

    if (listaUsuarios == null) {
        listaUsuarios = [
            ['1', 'Angel Adolfo', 'Mendez Orozco', 'angel@gmail.com', '1234', '1'],
            ['2', 'Jose David', 'Soto Puac','soto@gmail.com', '4321', '1']
        ]
    }
    return listaUsuarios;
}

function validarDatos(vCorreo, vClave) {
    var listaUsuarios = obtenerListaUsuarios();
    var ingresar = false;

    for (var i = 0; i < listaUsuarios.length; i++) {
        if (vCorreo == listaUsuarios[i][3] && vClave == listaUsuarios[i][4]) {
            ingresar = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1] + ' ' + listaUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][5]);
        }
    }
    return ingresar;
}

var buttonLogin = document.getElementById('button');

buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
})
