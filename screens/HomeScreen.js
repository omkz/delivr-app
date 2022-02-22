import * as React from 'react';
import { Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <>
      <Button
        title="Go to Menu"
        onPress={() =>
          navigation.navigate('Menu', { name: 'Jane' })
        }
      />
      <Button
        title="About"
        onPress={() =>
          navigation.navigate('About', { name: 'Jane' })
        }
      />
      </>
    );
  };

export default HomeScreen;