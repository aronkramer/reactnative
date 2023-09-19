import Note from './notesModel';

export function createNote(title, content, tags) {
  const note = new Note(title, content, tags);
  localStorage.setItem(note.title, JSON.stringify(note));
}

export function filterNotesByTags(tags) {
  const notes = Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key)));
  return notes.filter(note => tags.every(tag => note.tags.includes(tag)));
}