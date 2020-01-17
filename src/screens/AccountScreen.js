import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthentificationContext } from '../context/AuthentificationContext';

const AccountScreen = () => {
    const { signOut } = useContext(AuthentificationContext);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text>Account</Text>
            <Spacer>
                <Button
                    title="Sign Out"
                    onPress={signOut}
                />
            </Spacer>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

});

export default AccountScreen;