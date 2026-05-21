import React from "react";

import {
    Pressable,
    ActivityIndicator,
    StyleSheet,
    ViewStyle,
} from "react-native";

import { AppText } from "./AppText";
import { useTheme } from "@/hooks/useTheme";


type Props = {
    title: string;
    onPress?: () => void;

    loading?: boolean;
    disabled?: boolean;

    style?: ViewStyle;
};

export const AppButton = ({
    title,
    onPress,
    loading,
    disabled,
    style,
}: Props) => {
    const { theme } = useTheme();

    return (
        <Pressable
            disabled={disabled || loading}
            onPress={onPress}
            android_ripple={{ color: "rgba(255, 255, 255, 0.2)" }}
            style={({ pressed }) => [
                styles.button,
                {
                    backgroundColor: pressed ? theme.colors.primaryPressed : theme.colors.primary,
                    borderRadius: theme.radius.md,
                    paddingVertical: theme.spacing.lg,
                    paddingHorizontal: theme.spacing.lg,
                    opacity: disabled ? 0.6 : 1,
                },

                theme.shadows.button,

                style,
            ]}
        >
            {loading ? (
                <ActivityIndicator color={theme.colors.primaryText} />
            ) : (
                <AppText
                    variant="button"
                    style={{
                        color: theme.colors.primaryText,
                        textAlign: "center",
                    }}
                >
                    {title}
                </AppText>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {

    }
});