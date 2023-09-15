import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
        
        </View>
    );
}
const Example = () => {
  return <Radio.Group defaultValue="1" size="lg" name="exampleGroup" accessibilityLabel="pick a choice">
      <Radio _text={{
      mx: 2
    }} colorScheme="green" value="1" icon={<Icon as={<MaterialCommunityIcons name="alien" />} />} my={1}>
        Alien
      </Radio>
      <Radio _text={{
      mx: 2
    }} colorScheme="red" value="2" icon={<Icon as={<MaterialCommunityIcons name="fire" />} />} my={1}>
        Fire
      </Radio>
      <Radio colorScheme="warning" _text={{
      mx: 2
    }} value="3" icon={<Icon as={<MaterialCommunityIcons name="exclamation" />} />} my={1}>
        Warning
      </Radio>
    </Radio.Group>;
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
