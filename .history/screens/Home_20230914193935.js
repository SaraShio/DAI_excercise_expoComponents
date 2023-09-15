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
                    color: "#FDe2ed",
                    padding: '1em',
                    letterSpacing: "lg"
                }} bg={["#000000"]}
            >
                What is your favourite ice cream?
            </Box>

            <FormControl w="3/4" maxW="300" isRequired isInvalid >
                <FormControl.Label >Choose a flavour</FormControl.Label>
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
                    Please make a selection above ^
                </FormControl.ErrorMessage>
            </FormControl>

            <Box alignSelf="center" // bg="primary.500"
                _text={{
                    fontSize: "md",
                    fontWeight: "medium",
                    color: "#000000",
                    padding: '1em',
                    letterSpacing: "lg"
                }} bg={["#f6acc5"]}
            >
                How much do you like ice cream?
            </Box>


            <Slider style={styles.slider} w="3/4" maxW="300" defaultValue={70} minValue={0} maxValue={100} accessibilityLabel="hello world" step={10} colorScheme="secondary">
                <Text>Not at all</Text>
                <Slider.Track>
                    <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />
                <Text>S lot</Text>
            </Slider>

            <Box alignSelf="center" // bg="primary.500"
                _text={{
                    fontSize: "md",
                    fontWeight: "medium",
                    color: "#FDe2ed",
                    padding: '1em',
                    letterSpacing: "lg"
                }} bg={["#000000"]}
            >
                How old are you?
            </Box>

            <Text>
                <Radio.Group defaultValue="1" name="exampleGroup" accessibilityLabel="favorite colorscheme">
                    <Radio colorScheme="secondary" value="1" my={1}>
                        0-10
                    </Radio>
                    <Radio colorScheme="secondary" value="2" my={1}>
                        11-18
                    </Radio>
                    <Radio colorScheme="secondary" value="3" my={1}>
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
                }} bg={["#f6acc5"]}
            >
                What is [3 X 5 = ?]
            </Box>

            <Text>
                <VStack space={1} alignItems="center">
                    <View style={styles.toggle}>
                        <Switch defaultIsChecked colorScheme="secondary" />
                        <Text style={styles.toggle_title}>10</Text>
                    </View>
                    <View style={styles.toggle}>
                        <Switch defaultIsChecked colorScheme="secondary" />
                        <Text style={styles.toggle_title}>15</Text>
                    </View>
                    <View style={styles.toggle}>
                        <Switch defaultIsChecked colorScheme="secondary" />
                        <Text style={styles.toggle_title}>20</Text>
                    </View>
                </VStack>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDe2ed',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-evenly'
    },
    toggle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    toggle_title: {
        color: 'red'
    },
    error: {
        color: 'blue'
    },
    slider: {
        display: 'flex',
        flexDirection: 'row'
    }
});

