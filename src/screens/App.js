import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Login/Login';
import { Provider, useSelector } from 'react-redux';
import { store } from '../storage/store';
import Splash from './splash/Splash';
import Home from './Home/Home';
import Products from './Products/Products';
import Orders from './Orders.js/Orders';
import Profile from './Profile.js/Profile';
import CustomFooter from '../components/customFooter/CustomFooter';
import Users from './Users/Users';
import OrderDetails from './OrderDetails/OrderDetails';

import CreateProduct from './CreateProduct/CreateProduct';
import Banners from './Banners/Banners';
import CustomDrawer from '../components/CustomDrawer/CustomDrawer';
import Offers from './Offers/Offers';
import ProductDetails from './ProductDetails/ProductDetails';
import Category from './Category/Category';
import Reviews from './Reviews/Reviews';


const App = () => {

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}

const Stack = createNativeStackNavigator();
const AppNavigation = () => {

  const LoggedIn = useSelector(state => state.isLoggedIn);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }, [LoggedIn])

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}}>
          {loading ? <Stack.Screen name='Splash' component={Splash} /> :
          <>
          {LoggedIn ? <Stack.Screen name="MyDrawer" component={MyDrawer} /> : <Stack.Screen name="Login" component={Login} />}
          </>
          }
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <Drawer.Navigator  drawerContent={props => <CustomDrawer {...props}/>}
    screenOptions={{ headerRight: () => {
      return (
        <View>
          <Image source={require("../assets/images/H-hub.png")} style={{width: 120, height: 42, resizeMode: "contain", marginHorizontal: 15}}/>
        </View>
      )
    }, headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white', headerTitleStyle: {
      fontFamily: 'Poppins-Bold',
    },
    }}>
      <Drawer.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false}}/>
      <Drawer.Screen name="Users" component={Users} />
      <Drawer.Screen name="OrderDetails" component={OrderDetails} />
      <Drawer.Screen name="ProductDetails" component={ProductDetails} />
      <Drawer.Screen name="CreateProduct" component={CreateProduct} />
      <Drawer.Screen name="Banners" component={Banners} />
      <Drawer.Screen name="Offers" component={Offers} />
      <Drawer.Screen name="Category" component={Category} />
      <Drawer.Screen name="Reviews" component={Reviews} />
    </Drawer.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const BottomTab = () =>  {
  return (
    <Tab.Navigator tabBar={props => <CustomFooter {...props}/>} screenOptions={{ headerRight: () => {
      return (
        <View>
          <Image source={require("../assets/images/H-hub.png")} style={{width: 120, height: 42, resizeMode: "contain", marginHorizontal: 15}}/>
        </View>
      )
    }, headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white', headerTitleStyle: {
      fontFamily: 'Poppins-Bold',
    },
    }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Products" component={Products} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default App