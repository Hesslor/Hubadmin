import React from 'react'
import { Text, View } from 'react-native'
import Products from './Products/Products'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Users from './Users/Users';
import OrderDetails from './OrderDetails/OrderDetails';
import ProductDetails from './ProductDetails/ProductDetails';
import CreateProduct from './CreateProduct/CreateProduct';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Orders from './Orders.js/Orders';
import Home from './Home/Home';

const style = () => {

  const Tab = createBottomTabNavigator();

  return(
    <NavigationContainer>
      <OrderDetails />
    </NavigationContainer>
  )
}
export default style