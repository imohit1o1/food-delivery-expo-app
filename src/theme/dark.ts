import { baseColors } from "./colors";
import { spacing } from "./spacing";
import { radius } from "./radius";
import { typography } from "./typography";
import { shadows } from "./shadows";
import { Theme } from "./types";

export const darkTheme: Theme = {
    mode: "dark",

    colors: {
        background: baseColors.gray950,
        surface: baseColors.gray900,
        surfaceSecondary: "#171E28",

        textPrimary: "#F9FAFB",
        textSecondary: baseColors.gray300,
        textMuted: baseColors.gray400,

        primary: baseColors.orange500,
        primaryPressed: baseColors.orange600,
        primaryText: baseColors.white,

        border: "#243041",

        success: baseColors.green500,
        danger: baseColors.red500,
        warning: baseColors.yellow500,

        card: "#111827",
        input: "#171E28",
        chip: "#1B2430",
    },

    spacing,
    radius,
    typography,
    shadows,
};