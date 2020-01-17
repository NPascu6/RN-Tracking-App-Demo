import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
    return (
        <>
            <Text>SignupScreen</Text>
            <Button
                title="Sign Up"
                onPress={() => navigation.navigate('Signin')}
            />
            <Button
                title="Go to main"
                onPress={() => navigation.navigate('mainFlow')}
            />
        </>
    )
};

const styles = StyleSheet.create({

});

export default SignupScreen;