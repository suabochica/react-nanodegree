import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { ORANGE_WHITE, MONTECARLO } from '../utils/colors'
import {
  Deck,
  Decks,
  NewCard,
  NewDeck,
  Cards,
} from '../components'

const Tabs = createBottomTabNavigator(
  {
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarLabel: 'Decks',
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
      }
    },
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? MONTECARLO : ORANGE_WHITE,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? ORANGE_WHITE : MONTECARLO,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
)

export default MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: ORANGE_WHITE,
      headerStyle: {
        backgroundColor: MONTECARLO,
      },
      title: `${navigation.state.params.title}`
    })
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: () => ({
      headerTintColor: ORANGE_WHITE,
      headerStyle: {
        backgroundColor: MONTECARLO,
      },
      title: 'Add Card'
    })
  },
  Cards: {
    screen: Cards,
    navigationOptions: {
      title: 'Cards'
    }
  }
})