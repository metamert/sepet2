import React from 'react';
import MapView,{Polyline} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class App extends React.Component {
  render() {
console.log("map")
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} 
         initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0112,
          longitudeDelta: 0.0001,
        }}
        
        
        >

	<Polyline
		coordinates={[
			{ latitude: 37.78825, longitude:  -122.4324 },
			{ latitude: 37.7896386, longitude: -122.421646 },
		
		]}
    strokeColor={"red"}
    strokeWidth={2}
	/>

<MapView.Marker
            coordinate={	{ latitude: 37.78825, longitude:  -122.4324 }}
            title={"burası"}
            description={"description"}
         >


         </MapView.Marker>

<MapView.Marker
            coordinate={{ latitude: 37.7896386, longitude: -122.421646 }}
            title={"title"}
            description={"description"}
         />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:150,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
},
  mapStyle: {
    width: Dimensions.get('window').width,
    height: 150
  },
});