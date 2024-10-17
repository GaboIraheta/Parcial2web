import { User } from "../models/user.model.js";

const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const addNewUser = (name, age, email) => {
    let flag = true;
    let errors = [];

    if(!name || name.trim() === '') errors.push('Espacio de nombre requerido. Nombre vacio.');

    if(age < 18 || age > 60) errors.push('Edad ingresada fuera de los parametros indicados');

    if(!validateEmail(email)) errors.push('Correo electronico no valido');

    if(errors.length > 0) flag = false;

    if(!flag) return {errors: errors, user: null};
    
    const newUser = new User(name, age, email);
    return {errors: null, user: newUser};
}

export { addNewUser };