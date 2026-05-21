import React from "react";

import {
    TextInput,
    View,
    StyleSheet,
    TextInputProps,
} from "react-native";

import { useTheme } from "../../hooks/useTheme";

type Props = TextInputProps & {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
};

export const AppInput = ({
    leftIcon,
    rightIcon,
    style,
    ...props
}: Props) => {
    const { theme } = useTheme();

    return (
        <View
            style={[
                styles.container,

                {
                    backgroundColor: theme.colors.input,
                    borderRadius: theme.radius.lg,
                    borderColor: theme.colors.border,
                    paddingHorizontal: theme.spacing.md,
                    height: 56,
                },
            ]}
        >
            {leftIcon}

            <TextInput
                placeholderTextColor={theme.colors.textMuted}
                style={[
                    styles.input,
                    {
                        color: theme.colors.textPrimary,
                    },
                    style,
                ]}
                {...props}
            />

            {rightIcon}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
    },

    input: {
        flex: 1,
        fontSize: 16,
    },
});