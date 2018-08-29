import { AsyncStorage, View } from 'react-native'
import { Notifications, Permissions } from 'expo'

export const DECK_QUIZ_NOTIFICATION = 'udacicards:quiznotification'

export function clearLocalNotification () {
  return AsyncStorage.removeItem(DECK_QUIZ_NOTIFICATION)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
  return {
    title: 'Hey! Udacicards Time',
    body: "Don't forget to take your test for today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(DECK_QUIZ_NOTIFICATION)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(), {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(DECK_QUIZ_NOTIFICATION, JSON.stringify(true))
            }
          })
      }
    })
}