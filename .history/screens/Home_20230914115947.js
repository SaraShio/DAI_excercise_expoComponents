import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Box, Select, FormControl } from 'native-base'

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

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

