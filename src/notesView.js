import React from 'react';
import { View, Text } from 'react-native';

export default function NotesView({ notes }) {
  return (
    <View>
      {notes.map(note => (
        <View key={note.title}>
          <Text>{note.title}</Text>
          <Text>{note.content}</Text>
          <Text>{note.tags.join(', ')}</Text>
        </View>
      ))}
    </View>
  );
}