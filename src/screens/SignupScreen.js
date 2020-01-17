import React, { useContext } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthentificationContext } from '../context/AuthentificationContext';
import AuthentificationForm from '../components/AuthentificationForm';

const SignupScreen = ({ navigation }) => {
    const { state, signUp } = useContext(AuthentificationContext);
    console.log(state)


    return (
        <View style={styles.container}>
            <AuthentificationForm
                headerText={'Sign Up to Tracker'}
                buttonText={'Sign UP'}
                errorMessage={state.errorMessage}
                onSubmit={signUp}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Spacer>
                    <Text style={styles.link}>If you have an account SIGN IN HERE!</Text>
                </Spacer>
            </TouchableOpacity>
        </View>
    )
};

SignupScreen.navigationOptions = () => {
    return {
        header: null
    };
}

const styles = StyleSheet.create({
    
});

export default SignupScreen;