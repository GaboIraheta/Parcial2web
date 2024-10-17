import { addNewUser } from "../services/user.service.js";

const showHome = (req, res) => {
    res.render('home.pug');
}

const showForm = (req, res) => {
    res.render('form.pug');
}

const sendData = (req, res) => { //para el metodo get
    const { name, age, email } = req.body;
    const newUser = addNewUser(name, age, email);

    if(newUser.user !== null) {
        res.status(201).render('confirmPage.pug', {user : newUser.user});
    } else {
        let errors = newUser.errors;
        res.status(400).render('form', {
            errors,
            name,
            age,
            email
        })
    }
}

const showConfirmPage = (req, res) => {
    const user = req.user;
    res.render('confirmPage.pug', {user});
}

export {
    showHome,
    showForm,
    showConfirmPage,
    sendData
}