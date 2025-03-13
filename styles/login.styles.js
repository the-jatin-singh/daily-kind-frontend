import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 28,
    },
    inputsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24,

    },
    loginInput: {
        width: 320,
        height: 50,
        borderWidth: 2,
        borderColor: "#A5A5A578",
        borderRadius: 20,
        outlineStyle: 'none',

        paddingLeft: 25,
        paddingRight: 25,

        color: "#3B3B3B",

        fontWeight: 500,
        fontSize: 16,
    },
    passwordInput: {
        width: 320,
        height: 50,
        borderWidth: 2,
        borderColor: "#A5A5A578",
        borderRadius: 20,
        outlineStyle: 'none',

        paddingLeft: 25,
        paddingRight: 25,

        color: "#3B3B3B",

        fontWeight: 500,
        fontSize: 16,

    },
    inputFocused: {
        outlineColor: "transparent",
        borderColor: "#01B2A980",
    },
    button: {
        width: 320,
        height: 50,
        backgroundColor: "#01B2A9",
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: "0px 13px 26px 0px #01B2A91F"


    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: 500,
    },
    buttonDisabled: {
        opacity: 0.5,
    },
    errorContainer: {
        position: 'absolute',
        bottom: 100,
        backgroundColor: '#FF6B6B',
        padding: 10,
        borderRadius: 8,
        width: '80%',
        alignItems: 'center',
    },
    errorText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500',
    },
    bottomDes: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
    },
    bottomDesText: {
        color: "#7E7E7E",
        fontSize: 16,
        fontWeight: 500,
    },
    bottomDesButton: {
        color: "#01B2A9",
        fontSize: 16,
        fontWeight: 500,
        marginLeft: 4,
    },
    footer: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 4,
        bottom: 20,
        left: 0,
        right: 0,
        alignItems: 'center',

    },
    footerText: {
        color: "#7E7E7E",
        fontWeight: 400,
        fontSize: 14,
    },
    footerButton: {
        color: "#01B2A9",
        fontSize: 14,
        fontWeight: 400,
    }
})