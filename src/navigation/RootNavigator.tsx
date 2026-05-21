import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from '@/screens/HomeScreen';
import { useAppTheme } from '@/provider/ThemeProvider';

const RootStack = createNativeStackNavigator({
    screenOptions: {
        headerShown: false,
    },
    screens: {
        // Splash:SplashScreen,
        // Onboarding: OnboardingScreen,
        // Login: LoginScreen,
        Home: HomeScreen,
        // Search: SearchScreen,
        // Order: OrderScreen,
        // Profile: ProfileScreen,
        // Settings: SettingsScreen,
        // RestaurantMenu: RestaurantMenuScreen,
        // Cart: CartScreen,
        // TrackOrder: TrackOrderScreen,
        // Receipt: ReceiptScreen,
    },
});

const Navigation = createStaticNavigation(RootStack);

export default function RootNavigator() {
    const { mode } = useAppTheme();
    
    return (
        <>
            <StatusBar style={mode === 'dark' ? 'light' : 'dark'} />
            <Navigation />
        </>
    );
}
