import { createSlice } from "@reduxjs/toolkit";

export interface CurrentProfileState {
  profil: {

    firstName: string;
    lastName: string;
    email: string;
    userName: string;
  }
}
const initialState: CurrentProfileState = {
  profil:{

    firstName: "",
    lastName: "",
    email: "",
    userName: "",
  }
};

export const currentProfileSlice = createSlice({
  name: "currentProfile",
  initialState,
  reducers: {
    changeData: (state, actions) => {
      
      
      state.profil = {
        email: actions.payload.email,
        firstName: actions.payload.firstName,
        lastName: actions.payload.lastName,
        userName: actions.payload.userName,
      };
    },
    removeData: (state) => {
      state.profil = {
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
      };
    },
    updateData: (state: any, actions: any) => {
      state.profil = {
        userName: actions.payload,
      };
    },
  },
});

export const { changeData, removeData, updateData } = currentProfileSlice.actions;

export default currentProfileSlice.reducer;
