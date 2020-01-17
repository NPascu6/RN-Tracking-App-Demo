import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
    return (
        <>
            <Spacer>
                <Text h3>Sign Up to Tracker</Text>
            </Spacer>
            <Spacer>
                <Input label="Email"></Input>
            </Spacer>
            <Spacer>
                <Input label="Password"></Input>
            </Spacer>
            <Spacer>
                <Button title="Sign UP" />
            </Spacer>
        </>
    )
};

const styles = StyleSheet.create({

});

export default SignupScreen;