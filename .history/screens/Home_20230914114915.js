import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Box } from 'native-base';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Box>
                <Box alignSelf="center" // bg="primary.500"
                    _text={{
                        fontSize: "md",
                        fontWeight: "medium",
                        color: "warmGray.50",
                        letterSpacing: "lg"
                    }} bg={["red.400", "blue.400"]}>
                    This is a Box
                </Box>
            </Box>;
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

 