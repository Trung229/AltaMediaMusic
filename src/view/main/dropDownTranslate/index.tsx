import React, { useEffect, useState } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style'
import DropDownPicker from 'react-native-dropdown-picker';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

type ValueType = string | number | boolean;

const Item = (props: any) => {
  return (
    <TouchableOpacity style={styles.containerItem} onPress={() => props.onPress(props.item)}>
      <Text style={styles.nameNation}>{props.value}</Text>
      <Image style={styles.iconNation} source={props.item.value === "Tiếng Việt" ? require('../../../assets/iconVI.png') : require('../../../assets/iconEn.png')} />
    </TouchableOpacity>
  )
}


export const DropDownTranslate: React.FC<any> = (props) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Tiếng Việt', value: 'Tiếng Việt', icon: () => <Image style={styles.iconNation} source={require('../../../assets/iconVI.png')} /> },
    { label: 'English', value: 'English', icon: () => <Image style={styles.iconNation} source={require('../../../assets/iconEn.png')} /> }
  ]);
  const [value, setValue] = useState<ValueType | null>(null);
  const { } = props
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      containerProps={{
        flex: 0.6,
        justifyContent: "center",
      }}
      style={styles.box}
      textStyle={{
        fontSize: wp(1.5),
        color: "#C8C8DB"
      }}
      ArrowDownIconComponent={() => <Image style={styles.ArrowUpIcon} source={require("../../../assets/arrowDown.png")} />}
      ArrowUpIconComponent={() => <Image style={styles.ArrowUpIcon} source={require("../../../assets/ic_up.png")} />}
      renderListItem={(props) => <Item {...props} />}
      dropDownContainerStyle={{
        backgroundColor: "#1E1E2E",
        marginTop: wp(4),
        borderColor: "#FFFF",
      }}
    />
  )
}

