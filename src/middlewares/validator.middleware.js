
//funcion para validar los Shemas con parse()

export const validateSchema = (schema) => (req, res, next) => {
    
    try {
        schema.parse(req.body); // body es lo que esta llegando desde el front
        next();
    }catch(error){
        console.log(error.issues)
        return res.status(400).json(error.issues.map((error) => error.message))
    }

}