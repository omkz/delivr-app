import React, { useState, useEffect, Children } from "react";
import { Box, FlatList, Heading, HStack, VStack, Text, Spacer, Center, NativeBaseProvider, Image } from "native-base";


export default function Menulist() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
    fetch("https://delivr-food.herokuapp.com/menus/lists")
      .then(resp => resp.json())
      .then(children => {
        setData(children.data);
        setLoading(false);
      })
  };

  const renderItem = ({ item }) => {
    return (
      <Box borderBottomWidth="1" _dark={{
        borderColor: "gray.600"
      }} borderColor="coolGray.200" pl="4" pr="5" py="2">
        <HStack space={3} justifyContent="space-between">
          <Image size="48px" source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg"
          }} alt="Alternate Text" />
          <VStack>
            <Text _dark={{
              color: "warmGray.50"
            }} color="coolGray.800" bold>
              {item["attributes"]["name"]}
            </Text>
            <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
              {item["attributes"]["price"]}
            </Text>
          </VStack>
          <Spacer />
          <Text fontSize="xs" _dark={{
            color: "warmGray.50"
          }} color="coolGray.800" alignSelf="flex-start">
            {item["attributes"]["restaurant"]["name"]}
          </Text>
        </HStack>
      </Box>
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <NativeBaseProvider>
      <Center flex={1} pt="10">
        <Heading fontSize="xl" p="4" pb="3">
          Menu
        </Heading>
        {loading && <Box>Loading..</Box>}
        {data && (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </Center>
    </NativeBaseProvider>
  );
}