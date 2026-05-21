import { Platform } from "react-native";

export const shadows = {
    card: Platform.select({
        ios: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.08,
            shadowRadius: 12,
        },

        android: {
            elevation: 4,
        },
    }),

    button: Platform.select({
        ios: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.12,
            shadowRadius: 10,
        },

        android: {
            elevation: 5,
        },
    }),
};