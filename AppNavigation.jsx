import React from 'react'
import KPL from './Pages/KPI';
import Icon from "react-native-vector-icons/AntDesign"
import SplashScreen from './Pages/StartSplash';
import SOA from './Pages/SOA';
import Employee from './Pages/Employess';
import PaymentPlains from './Pages/Paymentplains';
import Invoice from './Pages/Invoice';
import Order from './Pages/Orders';
import PaymentPlain from './Pages/Paymentplane';
import PaymentPlains2 from './Pages/Paymentplains';
import Ranking from './Pages/Ranking';
import Revenue from './Pages/Revenue';
import SecondPage from './Pages/SecondPage';
import ReversiblePage from './Pages/ReversiblePage';
import RankingForSecond from './Pages/Ranking2';
import KPLSecond from './Pages/KPI2';
import InvoiceSecond from './Pages/Invoise2';
import ReversiblePageSecond from './Pages/ReversiblePage2';
import KPLSecondThird from './Pages/KPL3';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Revenue from './Pages/Revenue';
export default function NavigationPage() {
  const Stack = createNativeStackNavigator();

  return ( 
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen    options={{headerShown : false}}   name="Start" component={SplashScreen} />
        <Stack.Screen    options={{headerShown : false}} name="homepage" component={SecondPage} />
        <Stack.Screen    options={{headerShown : false}} name="ReversiblePage" component={ReversiblePage} />
        <Stack.Screen    options={{headerShown : false}} name="ReversiblePageSecond" component={ReversiblePageSecond} />
        {/* <Stack.Screen    options={{headerShown : false}} name="RankingForSecond" component={RankingForSecond} /> */}
        <Stack.Screen    options={{headerShown : false}} name="KPL" component={KPL} />
        <Stack.Screen    options={{headerShown : false}} name="KPLSecond" component={KPLSecond} />
        <Stack.Screen    options={{headerShown : false}} name="Order" component={Order} />
        <Stack.Screen    options={{headerShown : false}} name="KPLSecondThird" component={KPLSecondThird} />
        <Stack.Screen    options={{headerShown : false}} name="Ranking" component={Ranking} />
        <Stack.Screen    options={{headerShown : false}} name="PaymentPlains" component={PaymentPlains2} />
        <Stack.Screen    options={{headerShown : false}} name="Revenue" component={Revenue} />
        <Stack.Screen    options={{headerShown : false}} name="Invoice" component={Invoice} />
        <Stack.Screen    options={{headerShown : false}} name="InvoiceSecond" component={InvoiceSecond} />
        <Stack.Screen    options={{headerShown : false}} name="SOA" component={SOA} />
        <Stack.Screen    options={{headerShown : false}} name="Employee" component={Employee} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}


