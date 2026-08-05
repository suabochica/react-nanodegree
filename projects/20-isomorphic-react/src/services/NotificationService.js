import { delay } from 'redux-saga'

export default {
    async getNotifications() {
        console.warn("Notificaiton Service");

        await delay(1000);

        return { count: 42 }
    }
}
