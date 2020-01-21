import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext);

    const [saveTrack] = useSaveTrack();

    return <>
        <Spacer>
            <Input
                value={name}
                placeholder="Enter name here..."
                onChangeText={changeName}
            />
        </Spacer>
        <Spacer>
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
        </Spacer>
        <Spacer>
            {
                !recording && locations.length ?
                    <Button
                        title="Save Recording"
                        onPress={saveTrack}
                    /> : null
            }
        </Spacer>


    </>
}

export default TrackForm;