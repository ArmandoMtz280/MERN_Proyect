import app from "./app.js"
import { connectDB } from "./db.js";

    connectDB(); // conexion a BD

    app.listen(4000); // arranque de servidor
    console.log("Server on port", 4000);