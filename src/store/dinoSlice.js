import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  dinoData: [],
  epoqueData: [],
  typingValue: '',
  searchValue: '',
  epoqueValue: 1,
};

const dinoSlice = createSlice({
  name: 'dino',
  initialState,
  reducers: {
    changeEpoque: (state, action) => {
      return {
        ...state,
        loading: false,
        epoqueValue: action.payload,
      };
    },
    updateDataEpoque: (state, action) => {
      return {
        ...state,
        loading: false,
        epoqueData: action.payload,
      };
    },
    updateData: (state, action) => {
      return {
        ...state,
        loading: false,
        dinoData: action.payload,
      };
    },
    typing: (state, action) => {
      // Je récupere le payload de l'action qui contient la saisie
      // de l'utilisateur
      const saisieEnCours = action.payload;
      return {
        ...state,
        typingValue: saisieEnCours,
      };
    },
    submitSearch: (state) => {
      return {
        ...state,
        searchValue: state.typingValue,
      };
    },
  },
});

export const {
  updateData,
  typing,
  submitSearch,
  updateDataEpoque,
  changeEpoque,
} = dinoSlice.actions;

export default dinoSlice.reducer;
