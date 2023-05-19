

function validarRegistro() {
    // Obtenemos los valores de los campos nomnre, email y password.
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    
    if (nombre === '' || email === '' || password === '') {
        alert('Ingresar todos los campos');
        return false; // Se detiene el envío del formulario.
    }

    if (nombre.length < 3) {
        alert('Por ingrese un nombre minimo con 3 caracteres.');
        return false; 
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Ingresa un correo electrónico válido');
        return false;
    }
    
    if(validarPassword(password)){
        alert('Registro realizado correctamente');
        return true;
        
    }else{
        alert('Contraseña invalida, utilice al menos una mayuscula y un caracter especial');
        return false;       
    }

    

    function validarPassword(password) {
        // La constraseña debe tener al menos una mayuscula
        if (!/[A-Z]/.test(password)) {
            return false;
        }
        // La constraseña debe tener al menos un caracter especial
        if (!/[!@#$%^&*()_++\-=[\]{};':"\\|,.<>/?]+/.test(password)) {
            return false;
        }
        // Si lo anterior se cumple, la contraseña es valida
        return true;
    }
}