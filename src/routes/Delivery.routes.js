import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Deliveries from '~/pages/Deliveries';

import OrderDetails from '~/pages/OrderDetails';
import CreateNewProblem from '~/pages/CreateNewProblem';
import ShowProblem from '~/pages/ShowProblem';
import OrderConfirmation from '~/pages/OrderConfirmation';

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
        name="CreateNewProblem"
        options={{
          title: 'Visualizar problemas',
        }}
        component={CreateNewProblem}
      />
      <Stack.Screen
        name="ShowProblem"
        options={{
          title: 'Informar problema',
        }}
        component={ShowProblem}
      />

    </Stack.Navigator>
  );
}
