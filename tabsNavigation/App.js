import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import Home from './screens/home';
import Profile from './screens/profile';
import Settings from './screens/settings';
import Detalle from './screens/Detalle';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator para el perfil
function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="PerfilMain" 
        component={Profile}
        options={{ 
          title: 'Perfil',
          headerShown: true 
        }}
      />
      <Stack.Screen 
        name="Detalle" 
        component={Detalle}
        options={{ 
          title: 'Detalles del Usuario',
          headerShown: true 
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007bff',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            paddingBottom: 5,
            position: 'absolute',
            bottom: 50,
            left: 50,
            right: 50,
            height: 100,
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen 
          name="Profile" 
          component={ProfileStack}
          options={{
            title: 'Perfil'
          }}
        />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
