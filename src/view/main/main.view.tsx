import React, { useState } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { styles } from './Main.styles';
import { MainLogic } from './Main.logic';
import { CustomText } from './customText';
import { DropDownTranslate } from './dropDownTranslate'
import { useAltaIntl } from '~core/helper/hooks/translate';


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
          <Text>Text 2</Text>
        </View>
        <View style={styles.containerListPlayList}>
          <Text>Text 3</Text>
        </View>
        <View style={styles.actions}>
          <Text>Text 4</Text>
        </View>
      </View>
    </View>
  )
}
