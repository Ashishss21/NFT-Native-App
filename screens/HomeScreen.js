import { useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";

import { NFTData, COLORS } from "../constants";
import { FocusedStatusBar } from "../components/StatusBar";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftdata}
            renderItem={({item}) => }
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
