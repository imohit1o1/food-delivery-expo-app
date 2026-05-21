import { baseColors } from "./colors";
import { spacing } from "./spacing";
import { radius } from "./radius";
import { typography } from "./typography";
import { shadows } from "./shadows";
import { Theme } from "./types";

export const lightTheme: Theme = {
    mode: "light",

    colors: {
        background: baseColors.cream50,
        surface: baseColors.white,
        surfaceSecondary: "#FFFDFB",

        textPrimary: baseColors.gray900,
        textSecondary: baseColors.gray600,
        textMuted: baseColors.gray500,

        primary: baseColors.orange500,
        primaryPressed: baseColors.orange600,
        primaryText: baseColors.white,

        border: "#ECE7E1",

        success: baseColors.green500,
        danger: baseColors.red500,
        warning: baseColors.yellow500,

        card: baseColors.white,
        input: baseColors.white,
        chip: "#F8F1EA",
    },

    spacing,
    radius,
    typography,
    shadows,
};