import React from "react";
import { StyleSheet, ViewProps } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from "@/hooks/useTheme";

type Props = ViewProps & {
    children: React.ReactNode;
};

export const Screen = ({ children, style }: Props) => {
    const { theme } = useTheme();

    return (
        <SafeAreaView
            style={[
                styles.container,
                {
                    backgroundColor: theme.colors.background,
                    paddingHorizontal: theme.spacing.lg,
                },
                style,
            ]}
        >
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});