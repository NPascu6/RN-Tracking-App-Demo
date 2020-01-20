import React, { useContext, useCallback } from 'react';
import '../test/_mockLocations';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {
    const { state, addLocation } = useContext(LocationContext);
    const callback = useCallback(location => {
        addLocation(location, state.recording);
    }, [state.recording]);
    const [err] = useLocation(isFocused, callback)

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h3>Map Screen</Text>
            <Map />
            {err ? <Text>Please Enable Location</Text> : null}
            <TrackForm />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

});

export default withNavigationFocus(TrackCreateScreen);