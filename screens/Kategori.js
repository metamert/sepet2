import React from 'react';
import { StyleSheet, Dimensions, ScrollView ,Alert,ToastAndroid,Text,Image,ImageBackground,View} from 'react-native';
import { Block, theme,Button} from 'galio-framework';

import Loca from "../components/location"
import { Card } from '../components';
import Map from "../components/map"
import articles from '../constants/articles';
import img from "../assets/imgs/resim2.jpg"
const { width } = Dimensions.get('screen');

class Home extends React.Component {
 


  renderArticles = () => {
    return (

    
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
    
   
     
        <Block flex>
    
      
          <Block flex row>
            <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[2]}  />
          </Block>
          
          <Block flex row>
            <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[2]}  />
          </Block>
          
          <Block flex row>
            <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[2]}  />
          </Block>
          
        
           
        </Block>
      
      </ScrollView>
     
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
      <Map></Map>  
        {this.renderArticles()}
        <Image source={img} style={{width:"100%",height:200,position:"absolute",bottom:0,opacity:0.5,zIndex:-1}}></Image>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  child: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }


});

export default Home;