import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme';

export default function BaseButton({
    children, 
    onPress, 
    loading,
    variant = 'primary',
    size = 'md',
    ...props
}) {
    const getButtonStyle = () => {
        switch(variant) {
            case 'outlined':
                return styles.outlinedButton;
            case 'ghost':
                return styles.ghostButton;
            default:
                return styles.primaryButton;
        }
    }

    const getTextStyle = () => {
        switch(variant) {
            case 'outlined':
                return styles.outlinedText;
            case 'ghost':
                return styles.ghostText;
            default:
                return styles.primaryText;
        }
    }

    const getButtonSizeStyle = () => {
        switch(size) {
            case 'sm':
                return styles.smallButton;
            case 'lg':
                return styles.largeButton;
            default:
                return styles.mediumButton;
        }
    }

    const getTextSizeStyle = () => {
        switch(size) {
            case 'sm':
                return styles.smallText;
            case 'lg':
                return styles.largeText;
            default:
                return styles.mediumText;
        }
    }

    return (
        <TouchableOpacity 
            onPress={onPress} 
            disabled={loading}
            style={[styles.baseButton, getButtonStyle(), getButtonSizeStyle()]}
            {...props}
        >
            {loading ? (
                <ActivityIndicator size={size === 'sm' ? "small" : "large"} color={variant === 'primary' ? "white" : COLORS.primary} />
            ) : (
                <Text style={[getTextStyle(), getTextSizeStyle()]}>{children}</Text>
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    baseButton: {
        width: '100%',
        height: 50,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    primaryButton: {
        backgroundColor: COLORS.primary,
    },
    outlinedButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: COLORS.primary,
    },
    ghostButton: {
        backgroundColor: 'transparent',
    },
    primaryText: {
        color: 'white',
        fontWeight: '600',
    },
    outlinedText: {
        color: COLORS.primary,
        fontWeight: '600',
    },
    ghostText: {
        color: COLORS.primary,
        fontWeight: '600',
    },
    // Size-specific button styles
    smallButton: {
        height: 36,
        paddingHorizontal: 12,
        borderRadius: 16,
    },
    mediumButton: {
        height: 50,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    largeButton: {
        height: 60,
        paddingHorizontal: 24,
        borderRadius: 24,
    },

    // Size-specific text styles
    smallText: {
        fontSize: 12,
    },
    mediumText: {
        fontSize: 16,
    },
    largeText: {
        fontSize: 20,
    },
});
