import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Deliveries from '~/pages/Deliveries';
import OrderConfirmation from '~/pages/OrderConfirmation';
import OrderDetails from '~/pages/OrderDetails';
import Problem from '~/pages/Problem';


const Stack = createStackNavigator();

export default function DeliveryRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        headerTransparent: true,
      }}
      initialRouteName="Entregas"
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Entregas"
        component={Deliveries}
      />
      <Stack.Screen
        name="Detalhes"
        options={{
          title: 'Detalhes da encomenda',
        }}
        component={OrderDetails}
      />
      <Stack.Screen
        name="OrderConfirmation"
        options={{
          title: 'Confirmar entrega',
        }}
        component={OrderConfirmation}
      />
      <Stack.Screen
        name="Problem"
        options={{
          title: 'Informar problema',
        }}
        component={Problem}
      />
    </Stack.Navigator>
  );
}
