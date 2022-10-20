const { body } = require("express-validator");

module.exports = [
    body('title').notEmpty().withMessage('El titulo no puede estar vacío').isLength({min:2, max:50}).withMessage("ingrese un titulo valid!"),
    body('rating').notEmpty().withMessage('El rating no puede estar vacío').isLength({min:2, max:50}).withMessage("ingrese una contrasenia valida!"),
    body('awards').notEmpty().withMessage('Los premios son obligatorios').isNumeric().withMessage("Solo se permiten números"),
    body('release_date').notEmpty().withMessage('La fecha de estreno es obligatoria').isDate().withMessage("Solo se permiten fechas"),
    body('length').notEmpty().withMessage('La duración es obligatoria').isNumeric().withMessage("Solo se permiten números"),
]