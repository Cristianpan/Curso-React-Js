import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
    /* active: {
      id: "ABASD",
      title: "",
      body: "",
      date: 12313,
      imageUrls: [],
    }, */
  },
  reducers: {
    savingNewNote: (state, action) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, { payload }) => {
      state.notes.push(payload);
      state.isSaving = false;
    },
    setActiveNote: (state, { payload }) => {
      state.active = payload;
    },
    setNotes: (state, { payload }) => {
      state.notes = payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    updateNotes: (state, { payload }) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === payload.id) {
          return payload;
        }

        return note;
      });

      state.messageSaved = `${payload.title}, actualizada correctamente`;
    },
  },
});
export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  savingNewNote,
  updateNotes,
} = journalSlice.actions;
