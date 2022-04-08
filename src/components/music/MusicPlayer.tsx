import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
  Text,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { getSource } from '~assets';
import { MusicPlayerButton } from '~components';
// import TrackPlayer, {
//   Capability,
//   RepeatMode,
//   useProgress,
// } from 'react-native-track-player';
import * as Progress from 'react-native-progress';
import Video, { DRMType } from 'react-native-video';
import fetch from 'react-native-fetch-blob';
//@ts-ignore
import DomSelector from 'react-native-dom-parser';

/*
 "mediaContentVideo": null,
          "mediaContentAudio": "https://alta-s3.dev-altamedia.com/vcpmc/SMediaEncryptedS/637679866647711505/cad1768889c5b8580c42809249d29421_audio.mp4",
          "mediaContentMPD": "https://alta-s3.dev-altamedia.com/vcpmc/SMediaEncryptedS/637679866647711505/cad1768889c5b8580c42809249d29421.mpd",
          "mediaContentOptional": null,
          "supplierCode": null,
          "mediaEffectiveTime": "2021-09-22T17:00:00.000Z",
          "mediaExpirationTime": "2025-09-24T16:59:59.000Z",
          "mediaShelfLifeStatus": 1,
          "mediaCreateAt": "2021-09-23T09:37:44.771Z",
          "mediaContentVideoMD5": null,
          "mediaContentAudioMD5": "5ef5f7ab144f2176433f048ca95d7eda",
          "mediaContentMPDMD5": "fb721bd236251ef6a23074d3d9246577",
          "mediaContentVideoEncryptionKey": null,
          "mediaContentAudioEncryptionKey": "687530323938776D7164796376313432",
          "mediaContentVideoEncryptionKeyId": null,
          "mediaContentAudioEncryptionKeyId": "68776264627030747038313774386431",

*/

// TrackPlayer.updateOptions({
//   stopWithApp: false,
//   capabilities: [Capability.Play, Capability.Pause],
//   compactCapabilities: [Capability.Play, Capability.Pause],
// });

export interface MusicPlayerProps {
  containerStyle?: StyleProp<ViewStyle>;
  tracks: any;
  callback: (data: any) => void;
}

const BASE_DIR = fetch.fs.dirs.CacheDir + '/dummy';

const SAMLE_TRACKS = [
  {
    url: '/data/user/0/com.internship/files/dummy/637847354437334766_audio_xencryptionx.mp4',
  },
  {
    url: '/data/user/0/com.internship/files/dummy/cad1768889c5b8580c42809249d29421_audio.mp4',
  },
];

const _MusicPlayer: React.FC<MusicPlayerProps> = props => {
  const { containerStyle, tracks, callback } = props;
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  // const [percent, setPercent] = useState(0);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrackId, setCurrentTrackId] = useState(0);

  useEffect(() => {
    // fetch.fs
    //   .ls(fetch.fs.dirs.CacheDir + '/dummy/')
    //   .then(data => {
    //     console.log('success, data: ', data);
    //   })
    //   .catch(err => console.log('error: ', err));
    readMPD(
      '/data/user/0/com.internship/files/dummy/637847354437334823_xencryptionx.mpd',
    );
  }, []);

  const readMPD = (source: string) => {
    fetch.fs.readFile(source, 'utf8').then(value => {
      let rootNode = DomSelector(value);
      let elemnent = rootNode.getElementsByTagName('ContentProtection')[0];
      let arr = elemnent.text.split(/(\s+)/);
      let lastText = arr[arr.length - 1];
      let idKey = lastText.substring(
        lastText.indexOf('=') + 1,
        lastText.indexOf('/>'),
      );
      idKey = idKey.replaceAll('"', '');
      idKey = idKey.replaceAll('-', '');
      console.log('idKey: ', idKey);
    });
  };

  const render_infor = (track?: any) => {
    return (
      <View style={styles.containerThubnail}>
        <View style={styles.thumbnailBorder}>
          <Image
            //   source={track.thumbnail_uri}
            source={getSource('VCPMC')}
            resizeMode="contain"
            style={styles.imageThumbnail}
          />
        </View>
        <View style={styles.sectionTrackInfor}>
          <Text style={styles.textTrackName}>{'track.name'}</Text>
          <Text style={styles.textTrackArtist}>{'track.artist'}</Text>
        </View>
      </View>
    );
  };

  // mediaContentVideoEncryptionKey: "745797ee15089e088ad76c84c6b33224"
  // mediaContentVideoEncryptionKeyId: "52c8a072e2602173b5af6ab8f12bb973"

  const select_next_track = () => {
    setCurrentTrackId(currentTrackId + 1);
  };

  const play_music = (index: number) => {
    // if (index < tracks.length) {
    //   return (
    //     <Video
    //       // source={{
    //       //   uri: '/data/user/0/com.internship/files/dummy/637847354437334823_xencryptionx.mpd',
    //       //   type: 'mpd',
    //       // }}
    //       // drm={{
    //       //   type: DRMType.CLEARKEY,
    //       //   //@ts-ignore
    //       //   payload: '745797ee15089e088ad76c84c6b33224',
    //       //   kId: '52c8a072e2602173b5af6ab8f12bb973',
    //       // }}

    //       source={tracks[index].url}
    //       audioOnly={true}
    //       onEnd={() => {
    //         console.log('track end');
    //         select_next_track();
    //       }}
    //       onBuffer={() => callback(index)}
    //       paused={!isPlaying}
    //       playInBackground={true}
    //       onProgress={data => {
    //         setPosition(data.currentTime);
    //         setDuration(data.seekableDuration);
    //       }}
    //       onError={err => console.log('error ', err)}
    //     />
    //   );
    // }
    return null;
  };

  const render_seek_bar = () => {
    return (
      <View style={styles.containerSeekBar}>
        <View style={styles.buttonsSection}>
          <View style={styles.margin} />
          {play_music(currentTrackId)}
          <MusicPlayerButton
            switchBool={isRandom}
            onPressBoolTrue={() => {
              setIsRandom(!isRandom);
            }}
            onPressBoolFalse={() => {
              setIsRandom(!isRandom);
            }}
            icon_source={getSource('IC_RANDOM')}
            conatiner_style={styles.iconButtonPadding}
          />
          <MusicPlayerButton
            switchBool={isPlaying}
            onPressBoolTrue={() => {
              setIsPlaying(!isPlaying);
            }}
            onPressBoolFalse={() => {
              setIsPlaying(!isPlaying);
            }}
            icon_source={getSource('IC_PLAY')}
            icon_style={styles.iconPlay}
            conatiner_style={styles.iconButtonPadding}
          />
          <MusicPlayerButton
            switchBool={isRepeating}
            onPressBoolTrue={() => {
              setIsRepeating(!isRepeating);
            }}
            onPressBoolFalse={() => {
              setIsRepeating(!isRepeating);
            }}
            icon_source={getSource('IC_REPEAT')}
            conatiner_style={styles.iconButtonPadding}
          />
        </View>
        <View style={styles.seekbarSection}>
          <View style={styles.margin} />
          <Text style={styles.textDuration}>
            {new Date(position * 1000 || 0).toISOString().substr(14, 5)}
          </Text>
          <Progress.Bar
            progress={position / (duration || 1)}
            width={wp(50)}
            height={hp(0.5)}
            unfilledColor="#3E3E5B"
            color="white"
            borderWidth={0}
          />
          <Text style={styles.textDuration}>
            {new Date(duration * 1000 || 0).toISOString().substr(14, 5)}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {render_infor()}
      {render_seek_bar()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#2B2B3F',
    width: '100%',
    height: '100%',
  },
  containerThubnail: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerSeekBar: {
    flex: 8,
  },
  sectionTrackInfor: {
    marginLeft: wp(0.5),
  },
  textTrackName: {
    color: 'white',
    fontSize: wp(1),
    fontWeight: '900',
  },
  textTrackArtist: {
    color: 'white',
    fontSize: wp(1),
    fontWeight: 'normal',
  },
  thumbnailBorder: {
    borderRadius: wp(3),
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: wp(3),
  },
  imageThumbnail: {
    width: wp(3),
    height: wp(3),
  },
  buttonsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 7,
  },
  seekbarSection: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  margin: {
    marginLeft: -wp(10),
  },
  iconPlay: {
    width: wp(2.5),
    height: wp(2.5),
  },
  iconButtonPadding: {
    paddingHorizontal: wp(1),
  },
  textDuration: {
    color: '#C8C8DB',
    fontSize: wp(1),
    paddingHorizontal: wp(1),
  },
});

export const MusicPlayer = React.memo(_MusicPlayer);
