import React from 'react';
import { View, Text } from 'react-native';

export default function TagComponent({ tag }) {
  return (
    <View>
      <Text>{tag}</Text>
    </View>
  );
}