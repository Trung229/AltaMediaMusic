import React, { useEffect, useRef, useCallback, useState } from 'react';
import { View, Text, StatusBar, Image, FlatList } from 'react-native';
import { styles } from './Main.styles';
import { CustomText } from './customText';
import { DropDownTranslate } from './dropDownTranslate'
import { useAltaIntl } from '~core/helper/hooks/translate';
import { CustomTextList } from './customTextList'
import { MainLogic, convertDurationToTime, sumDuration, checkStatus, findMediaInPlaylist, downloadImages } from './main.logic';
import { useSelector } from 'react-redux';
import { RootState } from '~modules';
import moment from 'moment';



const renderItem = ({ item }: any) => {
  return (
    <View style={styles.containerItem}>
      <CustomText text={item.mediaName} size="small" isMinWidth />
      <CustomText text={item.mediaPerformer || "Chưa cập nhật"} size="small" isMinWidth />
      <CustomText text={item.mediaAuthor} size="small" isMinWidth />
      <CustomText text={convertDurationToTime(item.mediaDuration)} size="small" isMinWidth />
    </View>
  )
}

const renderItemPlaylist = ({ item }: any) => {
  const duration = sumDuration(item.mediaResponses);
  const status = checkStatus(item);
  return (
    <View style={[styles.containerItem, status.status ? styles.activeItem : styles.unActiveItem]}>
      <CustomText text={`${item.timeBegin} - ${item.timeEnd}`} size="small" isMinWidth />
      <CustomText text={item.playListName} size="small" isMinWidth />
      <CustomText text={convertDurationToTime(duration || 0)} size="small" isMinWidth />
      <CustomText text={status.message} size="small" isMinWidth />
    </View>
  )
}


export const Main: React.FC<any> = (props) => {
  const { } = props;
  const { formatMessage } = useAltaIntl();
  const flatListRef: any = useRef()
  const [date, setDate] = useState<any>(moment(new Date()).format("MM-DD-YYYY"));
  MainLogic();
  const playlist: any = useSelector((state: RootState) => state.schedulesStore.listSchedules);
  const newArr = [...playlist].sort((a, b) => parseInt(a.timeBegin) - parseInt(b.timeBegin));
  const media: any = findMediaInPlaylist(playlist);
  // console.log("media : ", media);
  const scrollToIndex = () => {
    console.log('scroll to index called !')
    let index = 1
    flatListRef?.current?.scrollToIndex({ animated: true, index: index })
  }
  useEffect(() => {
    downloadImages(media)
  }, [])
  // scrollToIndex()
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <CustomText text={formatMessage("common.playlist")} size="big" />
        </View>
        <View style={styles.headerRight}>
          <DropDownTranslate />
          <View style={styles.containerRight}>
            <Image style={styles.avatar} source={{ uri: "https://s3-alpha-sig.figma.com/img/8cac/6aea/a94bf5dba47d181c09c10ee71cd30213?Expires=1650240000&Signature=CLscvHDmLerjLUCBTHRHy2kJNSvRjmXM0dunh~ge1~uVyOM~JBcJfvXJHbAQQjf2MPL7Uadpwq9OUb7j~74OV-eZiCTCARPoo3hEpHIaO2OIADdwVGeVONN2Gxc3wNo0WMvRLIx5GNjCsWxwPj8bkQy0X5pa2s1fYMN3KInW00xtHkZHgfQTGiiXD1wGXUwOh-Z~HlCUxyZje9I006Xmc0qw8QlzM~AyPZLp4hASDMezHygJKcPnnVHXNYzsRyzzAGfyFl5ACCqg9TUlGjyxmv0c9eWdfKRIsEXM1xqLkSpzf55M6Mpzd8~p3lDzO8IrmyZAoCeP0~-sGOk8YrxhaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" }} />
            <View style={styles.containerInfo}>
              <CustomText text="Ng.Tuyết" size="small" />
              <Text style={styles.textRed}>Admin</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.center}>
        <Text style={styles.textSchedule}>{`${formatMessage("common.playlistText")} ${moment().format('dddd MM-DD-YYYY')}`}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.musicInfo}>
          <Image style={styles.imageInfoMusic} source={{ uri: "https://s3-alpha-sig.figma.com/img/92ff/cb8b/b077d49bfcff456300a270e9ba86afb6?Expires=1650240000&Signature=DblLjowMIWBZMdMxqvijp072y5bsEUQdJ80IMbje-s7HNXkRbKibgp-5ztfh9XG0aDvMr4Odw5JrKdU6TtlALatCwUb5abDXPUI7Zp47v6lvPnsV8cJZZtGpEMKF8aWMeWlMQvTh7hW3qKGY~MM2LMvtmuzY-zHkkW5KhfwlzcnKbO6sI3ibUDGGrxHsCXanQFtz0tdLoMfQak2xRgJLl509QfNITsKGOH1HP~sU~GpxGWojoc2e6hkURAkmZrvy5oj2poWlgvE2Ki8gMXihWFnoyckoOdCV6yrR4fhevWLRUpliXXK7Z7mX5bWH3RvjWH3KJCiH8JsjEa8cBW~FOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" }} />
          <View style={styles.containerTitle}>
            <Text style={styles.textTitlePlayList}>{media?.playListName}</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.containerText}>
            <CustomText text={formatMessage("common.total")} size="small" />
            <Text style={styles.textLight}>{media?.mediaResponses?.length ?? 0} Bản ghi</Text>
          </View>
          <View style={styles.containerText}>
            <CustomText text={formatMessage("common.totalDuration")} size="small" />
            <Text style={styles.textLight}>{convertDurationToTime(sumDuration(media?.mediaResponses) || 0)}</Text>
          </View>
        </View>
        <View style={styles.containerListMusic}>
          <FlatList
            data={media?.mediaResponses}
            renderItem={(item) => renderItem(item)}
            keyExtractor={item => item.id}
            style={styles.containerItemMusic}
            ListHeaderComponent={() => {
              return (
                <View style={styles.listMusicHeader}>
                  <CustomTextList text={formatMessage("common.songName")} />
                  <CustomTextList text={formatMessage("common.singerName")} />
                  <CustomTextList text={formatMessage("common.author")} />
                  <CustomTextList text={formatMessage("common.duration")} />
                </View>
              )
            }}
          />
        </View>
        <View style={styles.containerListPlayList}>
          <FlatList
            data={newArr}
            ref={flatListRef}
            renderItem={(item) => renderItemPlaylist(item)}
            keyExtractor={item => item.scheduleId}
            style={styles.containerItemMusic}
            ListHeaderComponent={() => {
              return (
                <View style={styles.listMusicHeader}>
                  <CustomTextList text={formatMessage("common.time")} isList />
                  <CustomTextList text={formatMessage("common.playlistText")} isList />
                  <CustomTextList text={formatMessage("common.duration")} isList />
                  <CustomTextList text={formatMessage("common.status")} isList />
                </View>
              )
            }}
          />
        </View>
        <View style={styles.actions}>
          <View style={styles.circle}>
            <Image style={styles.imagesRight} source={require('../../assets/iconAdmin.png')} />
          </View>
          <View style={styles.circle}>
            <Image style={styles.imagesRight} source={require('../../assets/iconContact.png')} />
          </View>
        </View>
      </View>
    </View >
  )
}
