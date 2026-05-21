export type ThemeMode = "light" | "dark";

export type Theme = {
    mode: ThemeMode;

    colors: {
        background: string;
        surface: string;
        surfaceSecondary: string;

        textPrimary: string;
        textSecondary: string;
        textMuted: string;

        primary: string;
        primaryPressed: string;
        primaryText: string;

        border: string;

        success: string;
        danger: string;
        warning: string;

        card: string;
        input: string;
        chip: string;
    };

    spacing: typeof import("../theme/spacing").spacing;
    radius: typeof import("../theme/radius").radius;
    typography: typeof import("../theme/typography").typography;
    shadows: typeof import("../theme/shadows").shadows;
};