import React from 'react'
import {View,Text,CheckBox} from "react-native"
import { List} from 'react-native-paper';

export default function list() {
const [expanded,setex]=React.useState(false)
const [obj,setobj]=React.useState({})

function name(name,e) {
}
console.log(obj)
    return (
        <View>
             <List.Accordion
          title="Controlled Accordion"
          left={props => <List.Icon {...props} icon="folder" />}
          expanded={expanded}
          onPress={()=>setex(!expanded)}
        >
        <CheckBox name="nbr" key={"nbr"} onChange={(e)=>name("52cm",e)} label="onChange is here" />
        </List.Accordion>
        </View>
    )
}
