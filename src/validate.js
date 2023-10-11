export default function validation (input) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let errors = {};

    if(!regexEmail.test(input.email)){
        errors.email = 'Ingresa un email válido';
    }
    if(input.message.length < 10){
        errors.message = 'La longitud del mensaje debe ser mayor a 10 caracteres';
    }
    
    return errors;    
}