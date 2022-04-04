import React, { useState } from 'react';
import { View, Text, StatusBar, Image, FlatList } from 'react-native';
import { styles } from './Main.styles';
import { CustomText } from './customText';
import { DropDownTranslate } from './dropDownTranslate'
import { useAltaIntl } from '~core/helper/hooks/translate';
import { CustomTextList } from './customTextList'


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    song: 'My Love',
    singer: "Tăng Phúc ft Mỹ Lệ ",
    author: "Origin",
    duration: "03:12"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    song: 'Love to be love by you',
    singer: "Nguyên Hà",
    author: "Origin 2",
    duration: "03:12"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    song: 'Đừng hỏi em vì sao',
    singer: "Đinh Hương",
    author: "Mondaro",
    duration: "03:12"
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    song: 'My Love',
    singer: "Tăng Phúc ft Mỹ Lệ ",
    author: "Origin",
    duration: "03:12"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    song: 'Love to be love by you',
    singer: "Nguyên Hà",
    author: "Origin 2",
    duration: "03:12"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    song: 'Đừng hỏi em vì sao',
    singer: "Đinh Hương",
    author: "Mondaro",
    duration: "03:12"
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    song: 'My Love',
    singer: "Tăng Phúc ft Mỹ Lệ ",
    author: "Origin",
    duration: "03:12"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    song: 'Love to be love by you',
    singer: "Nguyên Hà",
    author: "Origin 2",
    duration: "03:12"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    song: 'Đừng hỏi em vì sao',
    singer: "Đinh Hương",
    author: "Mondaro",
    duration: "03:12"
  },
];

const DATA2 = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    time: '06:00:00 - 08:00:00',
    playlist: "Top ca khúc 2021",
    duration: "02g 00p 00g",
    status: "Đang Phát"
  },
]

const renderItem = ({ item }: any) => {
  return (
    <View style={styles.containerItem}>
      <CustomText text={item.song} size="small" isMinWidth />
      <CustomText text={item.singer} size="small" isMinWidth />
      <CustomText text={item.author} size="small" isMinWidth />
      <CustomText text={item.duration} size="small" isMinWidth />
    </View>
  )
}

const renderItemPlaylist = ({ item }: any) => {
  return (
    <View style={styles.containerItem}>
      <CustomText text={item.time} size="small" isMinWidth />
      <CustomText text={item.playlist} size="small" isMinWidth />
      <CustomText text={item.duration} size="small" isMinWidth />
      <CustomText text={item.status} size="small" isMinWidth />
    </View>
  )
}


export const Main: React.FC<any> = (props) => {
  const { } = props;
  const { formatMessage } = useAltaIntl()
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
      <View style={styles.body}>
        <View style={styles.musicInfo}>
          <Image style={styles.imageInfoMusic} source={{ uri: "https://s3-alpha-sig.figma.com/img/92ff/cb8b/b077d49bfcff456300a270e9ba86afb6?Expires=1650240000&Signature=DblLjowMIWBZMdMxqvijp072y5bsEUQdJ80IMbje-s7HNXkRbKibgp-5ztfh9XG0aDvMr4Odw5JrKdU6TtlALatCwUb5abDXPUI7Zp47v6lvPnsV8cJZZtGpEMKF8aWMeWlMQvTh7hW3qKGY~MM2LMvtmuzY-zHkkW5KhfwlzcnKbO6sI3ibUDGGrxHsCXanQFtz0tdLoMfQak2xRgJLl509QfNITsKGOH1HP~sU~GpxGWojoc2e6hkURAkmZrvy5oj2poWlgvE2Ki8gMXihWFnoyckoOdCV6yrR4fhevWLRUpliXXK7Z7mX5bWH3RvjWH3KJCiH8JsjEa8cBW~FOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" }} />
          <CustomText text="Top Ca Khúc 2021" size="medium" />
          <View style={styles.line} />
          <View style={styles.containerText}>
            <CustomText text={formatMessage("common.total")} size="small" />
            <Text style={styles.textLight}>8 Bản ghi</Text>
          </View>
          <View style={styles.containerText}>
            <CustomText text={formatMessage("common.totalDuration")} size="small" />
            <Text style={styles.textLight}>01:31:16</Text>
          </View>
        </View>
        <View style={styles.containerListMusic}>
          <FlatList
            data={DATA}
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
            data={DATA2}
            renderItem={(item) => renderItemPlaylist(item)}
            keyExtractor={item => item.id}
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
          <View></View>
          <View></View>
        </View>
      </View>
    </View>
  )
}
