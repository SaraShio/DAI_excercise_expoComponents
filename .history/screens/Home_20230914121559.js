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
                    color: "warmGray.50",
                    letterSpacing: "lg"
                }} bg={["red.400", "blue.400"]}>
                This is a Box
            </Box>

            <FormControl w="3/4" maxW="300" isRequired isInvalid>
                <FormControl.Label>Choose service</FormControl.Label>
                <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size={5} />
                }} mt="1">
                    <Select.Item label="UX Research" value="ux" />
                    <Select.Item label="Web Development" value="web" />
                    <Select.Item label="Cross Platform Development" value="cross" />
                    <Select.Item label="UI Designing" value="ui" />
                    <Select.Item label="Backend Development" value="backend" />
                </Select>
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Please make a selection!
                </FormControl.ErrorMessage>
            </FormControl>

            <Slider w="3/4" maxW="300" defaultValue={70} minValue={0} maxValue={100} accessibilityLabel="hello world" step={10}>
                <Slider.Track>
                    <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />
            </Slider>

            <Text>
                <Radio.Group defaultValue="1" name="exampleGroup" accessibilityLabel="favorite colorscheme">
                    <Radio colorScheme="emerald" value="1" my={1}>
                        emerald
                    </Radio>
                    <Radio colorScheme="secondary" value="2" my={1}>
                        secondary
                    </Radio>
                    <Radio colorScheme="warning" value="3" my={1}>
                        warning
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
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

