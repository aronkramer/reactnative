import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { createNote } from '../notesController';

export default function NotesComponent() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handleCreateNote = () => {
    createNote(title, content, tags.split(',').map(tag => tag.trim()));
    setTitle('');
    setContent('');
    setTags('');
  };

  return (
    <View>
      <TextInput placeholder='Title' value={title} onChangeText={setTitle} />
      <TextInput placeholder='Content' value={content} onChangeText={setContent} />
      <TextInput placeholder='Tags' value={tags} onChangeText={setTags} />
      <Button title='Create Note' onPress={handleCreateNote} />
    </View>
  );
}