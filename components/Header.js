import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { TouchableOpacity, StyleSheet, Platform, Dimensions, View } from 'react-native';
import { Button, Block, NavBar, Text, theme } from 'galio-framework';
import Icon2 from "react-native-vector-icons/Entypo"
import Icon from './Icon';
import Input from './Input';
import Tabs from './Tabs';
import argonTheme from '../constants/Theme';

const { height, width } = Dimensions.get('window');
const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);

const BellButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Pro')}>
    <Icon
      family="ArgonExtra"
      size={16}
      name="bell"
      color={argonTheme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
    <Block middle style={styles.notify} />
  </TouchableOpacity>
);

const BasketButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('myCards')}>
    <Icon
      family="ArgonExtra"
      size={16}
      name="basket"
      color={argonTheme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />

  </TouchableOpacity>
);

const SearchButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('myCards')}>
    <Icon
      size={16}
      family="Galio"
      name="search-zoom-in"
      color={theme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
  </TouchableOpacity>
);

class Header extends React.Component {
  handleLeftPress = () => {
    const { back, navigation } = this.props;
    return (back ? navigation.goBack() : navigation.openDrawer());
  }
  renderRight = () => {
    const { white, title, navigation } = this.props;
  
    return (


      <View style={styles.cont}>


        <View style={styles.item1}  >

        <Icon2 name="location-pin" size={25} style={{color:"white"}}></Icon2>
            <Text  size={12} style={{color:"white"}}>Zurich</Text>
        

        </View>
        <View style={styles.cont2}>
         
            <Icon2 name="clock" size={25} style={{color:"white"}}></Icon2>
           
          
          <View style={styles.item1,{paddingBottom:5}} >
            <Text style={{ textAlign: "center",color:"white" }} size={13} >Delivery times</Text>
            <Text style={{ textAlign: "center",color:"white" }} size={12} >11.30-14.30</Text>
            <Text style={{ textAlign: "center",color:"white" }} size={12} >12.30-12.30</Text>
           
          </View>


        </View>

        <View style={styles.item11}  >

        
        <Icon2 name="shopping-cart" size={25} style={{color:"white",marginRight:15}}></Icon2>
        <Text  size={12} style={{color:"white"}}>min 35.00</Text>


        </View>

      </View>

    )

  }

  renderSearch = () => {
    const { navigation } = this.props;
    return (
      <Input
        right
        color="black"
        style={styles.search}
        placeholder="What are you looking for?"
        placeholderTextColor={'#8898AA'}
        onFocus={() => navigation.navigate('Pro')}
        iconContent={<Icon size={16} color={theme.COLORS.MUTED} name="search-zoom-in" family="ArgonExtra" />}
      />
    );
  }
  renderOptions = () => {
    const { navigation, optionLeft, optionRight } = this.props;

    return (
      <Block row style={styles.options}>
        <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Sepetim')}>
          <Block row middle>
            <Icon name="diamond" family="ArgonExtra" style={{ paddingRight: 8 }} color={argonTheme.COLORS.ICON} />
            <Text size={16} style={styles.tabTitle}>{optionLeft || 'Beauty'}</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Sepetim')}>
          <Block row middle>
            <Icon size={16} name="bag-17" family="ArgonExtra" style={{ paddingRight: 8 }} color={argonTheme.COLORS.ICON} />
            <Text size={16} style={styles.tabTitle}>{optionRight || 'Fashion'}</Text>
          </Block>
        </Button>
      </Block>
    );
  }
  renderTabs = () => {
    const { tabs, tabIndex, navigation } = this.props;
    const defaultTab = tabs && tabs[0] && tabs[0].id;

    if (!tabs) return null;

    return (
      <Tabs
        data={tabs || []}
        initialIndex={tabIndex || defaultTab}
        onChange={id => navigation.setParams({ tabId: id })} />
    )
  }
  renderHeader = () => {
    const { search, options, tabs } = this.props;
    if (search || tabs || options) {
      return (
        <Block center>
          {search ? this.renderSearch() : null}
          {options ? this.renderOptions() : null}
          {tabs ? this.renderTabs() : null}
        </Block>
      );
    }
  }
  render() {
    const { back, title, white, transparent, bgColor, iconColor, titleColor, navigation, ...props } = this.props;

    const noShadow = ['Search', 'Categories', 'Deals', 'Pro', 'Profile'].includes(title);
    const headerStyles = [
      !noShadow ? styles.shadow : null,
      transparent ? { backgroundColor: 'rgba(0,0,0,0)' } : null,
    ];

    const navbarStyles = [
      styles.navbar,

    ];

    return (
      <Block style={headerStyles}>
        <NavBar
          back={false}
          title={title}
          style={navbarStyles}
          transparent={transparent}
          right={this.renderRight()}
          rightStyle={{ alignItems: 'center' }}
          left={
            <Icon
              name={back ? 'chevron-left' : "menu"} family="entypo"
              size={40} onPress={this.handleLeftPress}
              color={"white"}
              style={{ marginTop: 0 }}
            />

          }
          leftStyle={{ paddingVertical: 12, flex: 0.2 }}
         
          {...props}
        />

      </Block>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: 'relative',
  },
  title: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20
  },
  navbar: {
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 1.5,
    paddingTop: iPhoneX ? theme.SIZES.BASE * 4 : theme.SIZES.BASE,
    zIndex: 5,
    backgroundColor: "red"


  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  notify: {
    backgroundColor: argonTheme.COLORS.LABEL,
    borderRadius: 4,
    height: theme.SIZES.BASE / 2,
    width: theme.SIZES.BASE / 2,
    position: 'absolute',
    top: 9,
    right: 12,
  },
  cont: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    right: 0,
    width: width * 3 / 4
  },
  cont2: {
    display: "flex",
    flexDirection: "row",
    flex: 2,
    alignItems:"center"
  }

  , item1: {

    display: "flex",
    justifyContent: "center",
    flex: 1,

  },
  item11: {

    display: "flex",
    justifyContent:"center",
    alignItems:"flex-end",
    flex: 1,

  },
  header: {
    backgroundColor: "red",
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: argonTheme.COLORS.BORDER
  },
  options: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '400',
    color: argonTheme.COLORS.HEADER
  },
  cardnumber: {
    position: "absolute",
    left: 5,
    color: "red"
  }
});

export default withNavigation(Header);
