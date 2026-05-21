import React from "react";
import {
    Text,
    TextProps,
    TextStyle,
} from "react-native";

import { useTheme } from "@/hooks/useTheme";


type Variant = "h1" | "h2" | "body" | "caption" | "button";

type Props = TextProps & {
    variant?: Variant;
    color?: string;
};

export const AppText = ({
    variant = "body",
    style,
    color,
    children,
    ...props
}: Props) => {
    const { theme } = useTheme();

    const textStyle: TextStyle = {
        ...theme.typography[variant],
        color: color || theme.colors.textPrimary,
    };

    return (
        <Text style={[textStyle, style]} {...props}>
            {children}
        </Text>
    );
};