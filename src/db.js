import mongoose from "mongoose";

export const connectDB = async () => {

   try{
       await mongoose.connect("mongodb://localhost/merndb"); // conexion a BD
       console.log("Se conecto a BD con exito");
   }catch(errror){
       console.log(errror)
   }

}