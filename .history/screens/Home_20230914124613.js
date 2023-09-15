import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Box, Select, FormControl, CheckIcon, WarningOutlineIcon, Slider, Radio, VStack, Switch, Icon, MaterialIcons } from 'native-base'

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>

            <Box alignSelf="center" // bg="primary.500"
                _text={{
                    fontSize: "md",
                    fontWeight: "medium",
                    color: "#ffffff",
                    padding: '1em',
                    letterSpacing: "lg"
                }} bg={["#000000"]}
            >
                What is your favourite ice cream?
            </Box>

            <FormControl w="3/4" maxW="300" isRequired isInvalid>
                <FormControl.Label>Choose a flavour</FormControl.Label>
                <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Select a flavour" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size={5} />
                }} mt="1">
                    <Select.Item label="Cookie Dough" value="ux" />
                    <Select.Item label="Vanilla" value="web" />
                    <Select.Item label="Pistashio" value="cross" />
                    <Select.Item label="Rocky Road" value="ui" />
                    <Select.Item label="London Fog" value="backend" />
                </Select>
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Please make a selection!
                </FormControl.ErrorMessage>
            </FormControl>
<Text></Text>
            <Box alignItems="center" w="100%">
      <Slider defaultValue={70} size="sm" colorScheme="green" w="75%" maxW="300">
        <Slider.Track bg="green.100">
          <Slider.FilledTrack bg="green.600" />
        </Slider.Track>
        <Slider.Thumb borderWidth="0" bg="transparent">
          <Icon as={MaterialIcons} name="park" color="green.600" size="sm" />
        </Slider.Thumb>
      </Slider>
    </Box>;

            <Box alignSelf="center" // bg="primary.500"
                _text={{
                    fontSize: "md",
                    fontWeight: "medium",
                    color: "#000000",
                    padding: '1em',
                    letterSpacing: "lg"
                }} bg={["#ffffff"]}
            >
                How much do you like ice cream?
            </Box>
            <Text>
                <Radio.Group defaultValue="1" name="exampleGroup" accessibilityLabel="favorite colorscheme">
                    <Radio colorScheme="emerald" value="1" my={1}>
                        A lot
                    </Radio>
                    <Radio colorScheme="secondary" value="2" my={1}>
                        Not at all
                    </Radio>
                    <Radio colorScheme="warning" value="3" my={1}>
                        I hate it
                    </Radio>
                </Radio.Group>;
            </Text>

            <Text>
                <VStack space={4} alignItems="center">
                    <Switch defaultIsChecked colorScheme="primary" />
                    <Switch defaultIsChecked colorScheme="secondary" />
                    <Switch defaultIsChecked colorScheme="emerald" />
                </VStack>;
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c4cbca',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-evenly'
    },
    slider: {
        color: '#000000',
    }
});

