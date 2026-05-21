import React from "react";

import {
    View,
    StyleSheet,
    ViewProps,
} from "react-native";

import { useTheme } from "../../hooks/useTheme";


type Props = ViewProps & {
    children: React.ReactNode;
};

export const AppCard = ({
    children,
    style,
}: Props) => {
    const { theme } = useTheme();

    return (
        <View
            style={[
                styles.card,

                {
                    backgroundColor: theme.colors.card,
                    borderRadius: theme.radius.xl,
                    padding: theme.spacing.lg,
                    borderColor: theme.colors.border,
                },

                theme.shadows.card,

                style,
            ]}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
    },
});