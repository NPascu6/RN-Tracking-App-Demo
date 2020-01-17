import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const TrackListScreen = ({navigation}) =>{
    return(
        <>
            <Text>TrackListScreen</Text>
            <Button title="Go to details" onPress={()=>navigation.navigate('TrackDetail')}/>
        </>
    )
};

const styles= StyleSheet.create({

});

export default TrackListScreen;