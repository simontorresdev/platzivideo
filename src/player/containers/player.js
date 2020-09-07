import React, {Component} from 'react';
import Video from 'react-native-video';
import Layout from '../components/layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';
import VideoPlayer from 'react-native-video-controls';

import {
    StyleSheet,
    ActivityIndicator,
    Text,

} from 'react-native';

class Player extends Component{
    state = {
        loading: true,
        paused: false,
    }

    playPause = () =>{
        this.setState({
            paused: !this.state.paused
        })
    }

    onBuffer = ({isBuffering}) =>{
        this.setState({
            loading: isBuffering,
        })
    }

    render(){
        return(
            <Layout
                loading={this.state.loading}
                // video = {<Video
                //     source={require('../../../assets/Video/avengers.mp4')}
                //     style={styles.video}
                //     resizeMode="contain"
                //     onBuffer={this.onBuffer}
                //     paused={this.state.paused}
                // />}
                video={
                    <VideoPlayer
                        source={require('../../../assets/Video/avengers.mp4')}
                    />
                }
                loader={
                    <ActivityIndicator  color="#fff"/>
                }
                controls={
                    <ControlLayout>
                        <PlayPause
                            onPress={this.playPause}
                            paused={this.state.paused}
                        />
                        <Text>Progress bar |</Text>
                        <Text>Time left |</Text>
                        <Text>Full screen |</Text>
                    </ControlLayout>
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        height: '100%'
    }
})

export default Player;