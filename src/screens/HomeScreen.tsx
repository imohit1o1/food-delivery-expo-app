import { StyleSheet } from 'react-native'

import { useAppTheme } from '@/provider/ThemeProvider'
import { Screen } from '@/components/ui/Screen'
import { AppText } from '@/components/ui/AppText'
import { AppButton } from '@/components/ui/AppButton'

const HomeScreen = () => {
    const { mode, toggleTheme } = useAppTheme();

    return (
        <Screen style={styles.container}>
            <AppText variant="body" style={styles.text}>
                Home Screen ({mode} mode)
            </AppText>
            <AppButton title="Login" onPress={toggleTheme} />
        </Screen>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center',
    },
    text: {
        marginBottom: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
})