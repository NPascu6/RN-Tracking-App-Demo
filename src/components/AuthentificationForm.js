import React, { useState } from 'react';
import { Text, Button, Input } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Spacer from '../components/Spacer';

const AuthentificationForm = ({ headerText, errorMessage, onSubmit, buttonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
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
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button title={buttonText} onPress={() => onSubmit({ email, password })} />
            </Spacer>
        </>
    )
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15,
        alignSelf: 'center'
    }
});

export default AuthentificationForm;