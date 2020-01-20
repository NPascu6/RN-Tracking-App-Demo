import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as LocationContext } from '../context/LocationContext';


const TrackForm = () => {
    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext);

    console.log(locations.length);

    return <>
        <Spacer>
            <Input
                value={name}
                placeholder="Enter name here..."
                onChangeText={changeName}
            />
        </Spacer>
        {
            !recording ?
                (
                    <Button
                        title="Start Recording"
                        onPress={startRecording}
                    />) :
                (
                    <Button
                        title="Stop Recording"
                        onPress={stopRecording}
                    />)
        }
    </>
}

export default TrackForm;