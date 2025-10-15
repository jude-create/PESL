import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#05376A',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0.5,
          borderTopColor: '#E5E5E5',
          height: 80,
          paddingBottom: 15,
          paddingTop: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
          marginTop: 2,
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              name="home"
              size={24}
              color={focused ? '#05376A' : color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="orders"
        options={{
          title: 'Orders',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="view-grid"
              size={24}
              color={focused ? '#05376A' : color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="insights"
        options={{
          title: 'Insights',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="chart-pie"
              size={24}
              color={focused ? '#05376A' : color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="program"
        options={{
          title: 'Programs',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="format-list-bulleted-add"
              size={24}
              color={focused ? '#05376A' : color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome6
              name="user-large"
              size={24}
              color={focused ? '#05376A' : color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
