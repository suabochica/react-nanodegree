export const GET_TWEETS = 'GET_TWEETS'

export function getTweets (tweets) {
    return {
        type: GET_TWEETS,
        tweets
    }
}