function validarRegistro() {
    // Obtenemos los valores de los campos 
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    
    if (nombre === '' || email === '' || password === '') {
        alert('Por favor, completa todos los campos');
        return false; // Detener el envío del formulario
    }

    if (nombre.length < 3) {
        alert('Por ingrese un nombre minimo con 3 caracteres.');
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido');
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