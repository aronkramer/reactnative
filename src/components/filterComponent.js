import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { filterNotesByTags } from '../notesController';

export default function FilterComponent({ setNotes }) {
  const [tags, setTags] = useState('');

  const handleFilterNotes = () => {
    const filteredNotes = filterNotesByTags(tags.split(',').map(tag => tag.trim()));
    setNotes(filteredNotes);
  };

  return (
    <View>
      <TextInput placeholder='Tags' value={tags} onChangeText={setTags} />
      <Button title='Filter Notes' onPress={handleFilterNotes} />
    </View>
  );
}