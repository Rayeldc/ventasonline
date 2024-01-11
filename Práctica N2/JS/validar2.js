function validarFormulario() {
	let txtGerente = document.getElementById('gerente').value;
	let txtDomicilio = document.getElementById('domicilio').value;
	let txtEmail = document.getElementById('email').value;
	let txtCelular = document.getElementById('telefono').value;


    if(txtGerente == null || txtGerente.length == 0 || /^\s+S/.test(txtGerente)){
        alert('Error: El campo Nombre del Gerente no debe ir vacio o lleno  de solamente espacios en blanco');
        return false;
    }
    
    if(txtDomicilio == null || txtDomicilio.length == 0 || /^\s+S/.test(txtDomicilio)){
        alert('Error: El campo Domicilio de la Empresa no debe ir vacio o lleno  de solamente espacios en blanco');
        return false;
    }
    
    if(txtEmail == null || txtEmail.length == 0 || /^\s+S/.test(txtEmail)){
        alert('Error: El campo Email del Gerente no debe ir vacio o lleno  de solamente espacios en blanco');
        return false;
    }
    
    if(txtCelular == null || txtCelular.length == 0 || /^\s+S/.test(txtCelular)){
        alert('Error: El campo Número de celular del Gerente no debe ir vacio o lleno  de solamente espacios en blanco');
        return false;
    }
    
    return true;
    }