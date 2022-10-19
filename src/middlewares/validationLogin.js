const { body } = require("express-validator");
const fs = require("fs");

module.exports = [
    body("email").notEmpty().withMessage("El correo es obligatorio").isEmail({min:2, max:50}).withMessage("ingrese un correo valido!"),
    body("password").notEmpty().withMessage("La contraseña es obligatoria").isLength({min:2, max:50}).withMessage("ingrese una contrasenia valida!"),
]