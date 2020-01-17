import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Context as AuthentificationContext } from '../context/AuthentificationContext';
import AuthentificationForm from '../components/AuthentificationForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({ navigation }) => {
    const { state, signIn } = useContext(AuthentificationContext);

    return (
        <View style={styles.container}>
            <AuthentificationForm
                headerText={'Sign into your Tracker Account'}
                buttonText={'Log In'}
                errorMessage={state.errorMessage}
                onSubmit={signIn}
            />
            <NavLink
                routeName="Signup"
                text="Dont't have an account? Sing up HERE!"
            />
        </View>
    )
};

SigninScreen.navigationOptions = () => {
    return {
        header: null
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    },
});

export default SigninScreen;