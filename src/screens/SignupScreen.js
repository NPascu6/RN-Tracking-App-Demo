import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Context as AuthentificationContext } from '../context/AuthentificationContext';
import AuthentificationForm from '../components/AuthentificationForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = () => {
    const { state, signUp, clearErrorMessage } = useContext(AuthentificationContext);

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
            <AuthentificationForm
                headerText={'Sign Up to Tracker'}
                buttonText={'Sign UP'}
                errorMessage={state.errorMessage}
                onSubmit={signUp}
            />
            <NavLink
                routeName="Signin"
                text='If you have an account CLICK ME!!'
            />
        </View>
    )
};

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;