import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Box, Select, FormControl, CheckIcon, WarningOutlineIcon, Slider, Radio, VStack, Switch } from 'native-base'

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

            <Slider style={styles.slider} w="3/4" maxW="300" defaultValue={70} minValue={0} maxValue={100} accessibilityLabel="hello world" step={10} colorScheme="orange">
                <Slider.Track>
                    <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />
            </Slider>

            <Box alignSelf="center" // bg="primary.500"
                _text={{
                    fontSize: "md",
                    fontWeight: "medium",
                    color: "#ffffff",
                    padding: '1em',
                    letterSpacing: "lg"
                }} bg={["#000000"]}
            >
                How old are you?
            </Box>

            <Text>
                <Radio.Group defaultValue="1" name="exampleGroup" accessibilityLabel="favorite colorscheme">
                    <Radio colorScheme="emerald" value="1" my={1}>
                        0-10
                    </Radio>
                    <Radio colorScheme="secondary" value="2" my={1}>
                        11-18
                    </Radio>
                    <Radio colorScheme="warning" value="3" my={1}>
                        19+
                    </Radio>
                </Radio.Group>;
            </Text>

            <Box alignSelf="center"
                _text={{
                    fontSize: "md",
                    fontWeight: "medium",
                    color: "#000000",
                    padding: '1em',
                    letterSpacing: "lg"
                }} bg={["#ffffff"]}
            >
                Toggle
            </Box>

            <Text>
                <VStack space={1} alignItems="center">
                    <View style={styles.toggle}>
                        <Switch defaultIsChecked colorScheme="primary" />
                        <Text style={styles.toggle_title}>POOL</Text>
                    </View>
                    <View style={styles.toggle}>
                        <Switch defaultIsChecked colorScheme="secondary" />
                        <Text>POOL</Text>
                    </View>
                    <View style={styles.toggle}>
                        <Switch defaultIsChecked colorScheme="emerald" />
                        <Text>POOL</Text>
                    </View>
                </VStack>
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
    toggle: {
        display: 'flex',
        flexDirection: 'row'
    },
    toggle_title:{
        
    }
});

