import React from 'react';
import {ScrollView, ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform, Linking ,View} from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';
import {Card} from 'native-base';
import { selectCartItems ,selectCartTotal} from '../redux/selector';
import img from "../assets/imgs/iskender.jpg"
const { height, width } = Dimensions.get('screen');
import { Images, argonTheme } from '../constants/';
import {connect} from "react-redux"
import {success} from "../redux/Card"
import { HeaderHeight } from "../constants/utils";
import { createStructuredSelector } from 'reselect';
import Icon from 'react-native-vector-icons/Feather';
import {firestore} from "../firebase/firebase"
import Mcards from "../components/mycards"

class Pro extends React.Component {
constructor(props){
super(props)
this.state={
  s:false,
  durum:false
}
}


finish=()=>{
let Array={}
this.props.cartitems.map(item=>{
  

Array[item.title]={urunAdı:item.title,adetmiktarı:item.quantity,fiyat:item.quantity*item.price}
  
  })

Array.siparisZamanı=new Date().toLocaleString()
Array.adres="antalya / akdeniz üni"

 firestore.collection('Siparisler').doc().set(Array).then(()=>{

this.setState({s:true})

setTimeout(() => {
  this.setState({s:false})
}, 2000);
this.props.suc()

}

 ).catch(e=>console.log(e))



}


  render() {
    const { navigation } = this.props;
console.log(this.props)
    return (
      <Block flex center style={styles.home}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
       
{this.state.s?(<View>

<Icon name="check-circle" size={200} style={styles.ss}></Icon>

</View>):(


<Block flex>

{this.props.cartitems.map(item=>
  
  <Mcards key={item.title} img={item.image} name={item.title} price={item.price} quantity={item.quantity}></Mcards>
  
  )}
   
        
 
     
<Button color="error" style={styles.ct} onPress={this.finish}>
  
  <Text style={styles.st}>
  Siparişi tamamla  :  {

this.props.total

} $


  </Text>
</Button>
<Button color="error" style={styles.ct} onPress={()=>this.setState({durum:true})}>
  
  <Text style={styles.st}>
  Siparişi tamamla  


  </Text>
</Button>
      </Block>
    

)}


      
      </ScrollView>
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
  item1:{

display:"flex",
justifyContent:"center",
    flex:1,
   
  },
 fortext:{
   textAlign:"center",
 
  },
delete:{textAlign:"center",color:"red"},
ct:{marginTop:50},
st:{color:"white"},

  cont:{
    display:"flex",
    flexDirection:"row",
   height:100
  },
  ss:{
    color:"green",
    margin:50
  }


});

const s=createStructuredSelector({
  cartitems: selectCartItems,
  total: selectCartTotal
});
const d=(dispatch)=>({
suc:()=>dispatch(success())
})
export default connect(s,d)(Pro)