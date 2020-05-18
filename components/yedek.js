import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, View } from 'react-native';
import { Block, Text, theme ,Button} from 'galio-framework';
import Icon from 'react-native-vector-icons/AntDesign';
import { argonTheme } from '../constants';
import {additem} from "../redux/Card"
import {connect} from "react-redux"
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }

additemtocard=()=>{
  this.setState({toggle:true})
 
  
  
  
  

            setTimeout(() => {
  
              this.props.add({...this.props.item,id:this.props.item.title})
              this.setState({toggle:false})
            }, 1200);
        


}


  render() {


    const { navigation, item, horizontal, full, style, ctaColor, imageStyle } = this.props;
    
    const imageStyles = [
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle
    ];
    const cardContainer = [styles.card, styles.shadow, style];
    const imgContainer = [styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow
    ];



    return (





      <Block row={horizontal} card flex style={cardContainer} 
     
      
      >
        <TouchableWithoutFeedback>
          <Block flex style={imgContainer}>
            <Image source={item.image} style={imageStyles} />
         
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback 
        onPress={this.additemtocard
        }
        >
          <Block flex space="between" style={styles.cardDescription}>
            <View style={styles.cardContainer}>

            <Text size={14} style={styles.cardTitle}>{item.title}</Text>
            <Text size={14} style={styles.cardprice}>{item.price} $</Text>
            
            </View>
          
            <View style={styles.cardContainer}  >


            <Text  size={12} muted={!ctaColor} color={ctaColor || argonTheme.COLORS.ACTIVE} bold >{item.cta}</Text>

             {this.state.toggle&&<Icon name="checkcircle" size={16} style={{marginLeft:30,color:"#1EBEA5"}} />}

</View>
          </Block>
      
         
        </TouchableWithoutFeedback>
      
      </Block>
  
    
  );
  }
}

Card.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 16
  },
  cardTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6
  },
cardContainer:{
display:"flex",
flexDirection:"row"

},

  cardPrice: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden',
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    height: 215
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});

const d=(dispatch)=>({
  add:(item)=>dispatch(additem(item))
})

export default connect(null,d)(withNavigation(Card));