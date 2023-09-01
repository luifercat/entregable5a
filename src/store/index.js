import { configureStore } from "@reduxjs/toolkit";
import trainerSlice from "./slices/trainer.slice";

//Este código configura el almacén centralizado de Redux en la aplicación.
//Combina el reductor "trainerSlice" para gestionar el estado relacionado con los entrenadores.
export default configureStore({
    reducer:{
        traner: trainerSlice
    }
})