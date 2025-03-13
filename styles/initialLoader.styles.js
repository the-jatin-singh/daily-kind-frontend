import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    salogan: {
        fontFamily: 'Roboto', // This will now work with the loaded font
        color: "#fff",
        fontSize: 20,
        marginBottom: 20,
    },
    mainLogo: {
        width: 163,
        height: 55,
        marginBottom: 20,
        resizeMode: 'contain',
    }
})