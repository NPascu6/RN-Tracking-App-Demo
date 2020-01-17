import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthentificationContext } from '../context/AuthentificationContext';

const AccountScreen = () => {
    const { signOut } = useContext(AuthentificationContext);

    return (
        <>
            <Text>Account</Text>
            <Spacer>
                <Button
                    title="Sign Out"
                    onPress={signOut}
                />
            </Spacer>
        </>
    )
};

const styles = StyleSheet.create({

});

export default AccountScreen;