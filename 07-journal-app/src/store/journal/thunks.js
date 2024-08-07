import { doc, collection, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase";
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNotes,
} from "./journalSlice";
import { loadNotes } from "../../helpers";
export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());
    const { uid } = getState().auth;
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));

    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const notes = await loadNotes(uid);

    dispatch(setNotes(notes));
  };
};

export const startSaveNote = (note) => {

  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { uid } = getState().auth;
    const { id, ...noteToFireStore } = note;
    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${id}`);

    await setDoc(docRef, noteToFireStore, { merge: true });

    dispatch(updateNotes(note));
  };
};
