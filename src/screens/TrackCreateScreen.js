import React, { useContext } from 'react';
import '../test/_mockLocations';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation } = useContext(LocationContext);
    const [err] = useLocation(isFocused, addLocation)

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h3>Map Screen</Text>
            <Map />
            {err ? <Text>Please Enable Location</Text> : null}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

});

export default withNavigationFocus(TrackCreateScreen);