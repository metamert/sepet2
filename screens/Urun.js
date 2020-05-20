import * as React from 'react';
import { List, Checkbox } from 'react-native-paper';
import Map from "../components/map"
import Liste from "../components/list"
import {View,Text} from "react-native"
class MyComponent extends React.Component {
  state = {
    expanded: true
  }

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded
    });

  render() {
    return (


    <View>
     
 <Map></Map>
<Liste></Liste>
      
        </View>
    );
  }
}

export default MyComponent;
