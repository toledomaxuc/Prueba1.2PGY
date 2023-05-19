function validarRegistro() {
    // Obtenemos los valores de los campos 
    var rut = document.getElementById('rut').value;
    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var password = document.getElementById('password').value;

    
    if (nombre === '' || email === '' || password === '') {
        alert('Por favor, completa todos los campos');
        return false; // Detener el envío del formulario
    }
    if(rut.length != 9){
        alert('Por favor ingrese un rut valido');
        return false;
    }

    if (nombre.length < 3) {
        alert('Por favor ingrese un nombre minimo con 3 caracteres.');
        return false;
    }
    if(apellidos.length < 3){
        alert('Por favor ingrese ambos apellidos.')
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido');
        return false;
    }
    
    var telefonoRegex = /^\d{9}$/;
    if(!telefonoRegex.test(telefono)){
        alert('Por favor ingrese un telefono valido.')
        return false;
    }

    if(validarPassword(password)){
        alert('Contraseña valida, Registro realizado correctamente');
        return true;
        
    }else{
        alert('Contraseña invalida, debe tener al menos una mayuscula y un caracter especial');
        return false;
        
    }

    function validarPassword(password) {
        // Validamos que la constraseña tenga al menos una mayuscula
        if (!/[A-Z]/.test(password)) {
            return false;
        }
        // Validamos que la contraseña tenga al menos un caracter especial
        if (!/[!@#$%^&*()_++\-=[\]{};':"\\|,.<>/?]+/.test(password)) {
            return false;
        }
        // Si se cumplen todas las condiciones, la contraseña es valida
        return true;
    }
}