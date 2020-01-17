import React, { useState, useContext } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthentificationContext } from '../context/AuthentificationContext';

const SignupScreen = ({ navigation }) => {
    const { state, signUp } = useContext(AuthentificationContext);
    console.log(state)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up to Tracker</Text>
            </Spacer>
            <Spacer>
                <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                    label="Email">
                </Input>
            </Spacer>
            <Spacer>
                <Input
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                    label="Password"
                    value={password}
                    onChangeText={setPassword}>
                </Input>
            </Spacer>
            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
            <Spacer>
                <Button title="Sign UP" onPress={() => signUp({ email, password })} />
            </Spacer>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    },
    link: {
        color: 'blue',
        fontSize: 20
    }
});

export default SignupScreen;