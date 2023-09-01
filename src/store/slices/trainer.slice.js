import { createSlice } from "@reduxjs/toolkit";

// este código define un slice de estado llamado trainerSlice que contiene una propiedad name. Proporciona una acción loginTrainer que se utiliza para actualizar la propiedad name en el estado cuando se llama. Este slice puede ser combinado con otros slices para formar el estado global de la aplicación gestionado por Redux.

const initialState = {
  name: localStorage.getItem("nameTrainer") ?? "",
};

const trainerSlice = createSlice({
  initialState: initialState,
  name: "trainer",
  reducers: {
    loginTrainer: (state, action) => {
      const newName = action.payload;
      localStorage.setItem("nameTrainer", newName);
      state.name = newName;
    },
    logout: (state) => {
      state.name = "";
      localStorage.removeItem("nameTrainer");
    },
  },
});

export const { loginTrainer, logout } = trainerSlice.actions;

export default trainerSlice.reducer;
