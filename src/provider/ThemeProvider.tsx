import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useColorScheme } from "react-native";

import { themes } from "@/theme";
import { Theme, ThemeMode } from "@/theme/types";

type ThemeContextValue = {
    theme: Theme;
    mode: ThemeMode;

    setMode: (mode: ThemeMode) => void;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "APP_THEME";

export const ThemeProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const systemColorScheme = useColorScheme();
    const [mode, setModeState] = useState<ThemeMode>(systemColorScheme === "dark" ? "dark" : "light");
    const [isSystemTheme, setIsSystemTheme] = useState(true);


    useEffect(() => {
        if (isSystemTheme && systemColorScheme) {
            setModeState(systemColorScheme === "dark" ? "dark" : "light");
        }
    }, [systemColorScheme, isSystemTheme]);

    useEffect(() => {
        loadTheme();
    }, []);
    const loadTheme = async () => {
        const savedTheme = await AsyncStorage.getItem(STORAGE_KEY);

        if (savedTheme === "light" || savedTheme === "dark") {
            setModeState(savedTheme);
            setIsSystemTheme(false);
        }
    };

    const setMode = async (newMode: ThemeMode) => {
        setModeState(newMode);
        setIsSystemTheme(false);
        await AsyncStorage.setItem(STORAGE_KEY, newMode);
    };

    const toggleTheme = () => {
        setMode(mode === "light" ? "dark" : "light");
    };

    const value = useMemo(
        () => ({
            theme: themes[mode],
            mode,
            setMode,
            toggleTheme,
        }),
        [mode]
    );

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useAppTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useAppTheme must be used inside ThemeProvider");
    }

    return context;
};