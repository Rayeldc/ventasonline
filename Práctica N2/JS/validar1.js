function validarFormulario() {
	let txtNombre = document.getElementById('razon').value;
	let txtFecha = document.getElementById('fecha').value;
	let txtDomicilio = document.getElementById('domicilio').value;
	let txtEstado = document.getElementById('estado').value;
	let txtCodPostal = document.getElementById('cp').value;
	let txtEmailGte = document.getElementById('email').value;
	let txtResponsable = document.getElementById('responsable').value;
	let txtRegistro = document.getElementById('registro').value;
	let txtObservaciones = document.getElementById('observaciones').value;

// Test razon social
//Test Fecha de ingreso
if(txtNombre == null || txtNombre.length == 0 || /^\s+S/.test(txtNombre)){
	alert('Error: El campo Razón Social no debe ir vacio o lleno  de solamente espacios en blanco');
	return false;
}

//Test Fecha de ingreso
if(txtFecha == null || txtFecha.length == 0 || /^\s+S/.test(txtFecha)){
	alert('Error: El campo Fecha de ingreso no debe ir vacio o lleno  de solamente espacios en blanco');
	return false;
}

//Test Domicilio
if(txtDomicilio == null || txtDomicilio.length == 0 || /^\s+S/.test(txtDomicilio)){
	alert('Error: El campo Domicilio no debe ir vacio o lleno  de solamente espacios en blanco');
	return false;
}

//Test Estado/Provincia
if(txtEstado == null || txtEstado.length == 0 || /^\s+S/.test(txtEstado)){
	alert('Error: El campo Estado/Provincia no debe ir vacio o lleno  de solamente espacios en blanco');
	return false;
}

//Test Código Postal
if(txtCodPostal == null || txtCodPostal.length == 0 || /^\s+S/.test(txtCodPostal)){
	alert('Error: El campo Código Postal no debe ir vacio o lleno  de solamente espacios en blanco');
	return false;
}

//Test Email Gerente
if(txtEmailGte == null || txtEmailGte.length == 0 || /^\s+S/.test(txtEmailGte)){
	alert('Error: El campo Correo Electrónico Gerente no debe ir vacio o lleno  de solamente espacios en blanco');
	return false;
}

//Test Responsable/Gerente
if(txtResponsable == null || txtResponsable.length == 0 || /^\s+S/.test(txtResponsable)){
	alert('Error: El campo Responsable/Gerente no debe ir vacio o lleno  de solamente espacios en blanco');
	return false;
}

//Test Nro. Registro Comercial
if(txtRegistro == null || txtRegistro.length == 0 || /^\s+S/.test(txtRegistro)){
	alert('Error: El campo Nro. Registro Comercial no debe ir vacio o lleno  de solamente espacios en blanco');
	return false;
}

//Test Observaciones
if(txtObservaciones == null || txtObservaciones.length == 0 || /^\s+S/.test(txtObservaciones)){
	alert('Error: El campo Observaciones no debe ir vacio o lleno  de solamente espacios en blanco');
	return false;
}

return true;
}