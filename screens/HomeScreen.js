import * as React from 'react';
import { Button } from 'react-native';
import { NativeBaseProvider, Text, Box, HStack, Center, Image, Container, Heading } from 'native-base';
import { TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <NativeBaseProvider>
        <Container
          alignItems="center"
          py={2}
          mb={{ base: 8, md: 0 }}
          width={{ base: '100%', lg: '768px' }}
          alignSelf={{ base: 'stretch', md: 'center' }}
          ml={{ base: 0, md: '-16px' }} >

          <HStack space={3} justifyContent="center">
            <TouchableOpacity
              onPress={() => navigation.navigate('Menu', { name: 'Jane' })}>
              <Image source={
                require('../assets/images/pizza.png')
              }
                alt="Alternate Text" size="xl"
              />
            </TouchableOpacity>


            <Center h="40" w="20" bg="primary.300" rounded="md" shadow={3} />
            <Center h="40" w="20" bg="primary.500" rounded="md" shadow={3} />
            <Center h="40" w="20" bg="primary.700" rounded="md" shadow={3} />
          </HStack>
        </Container>
      
      <Button
        title="About"
        onPress={() =>
          navigation.navigate('About', { name: 'Jane' })
        }
      />
      </NativeBaseProvider>
    </>
  );
};

export default HomeScreen;