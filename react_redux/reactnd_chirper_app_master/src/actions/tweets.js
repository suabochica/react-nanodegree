import { saveLikeToggle } from '../utils/api'

export const GET_TWEETS = 'GET_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'

export function getTweets (tweets) {
    return {
        type: GET_TWEETS,
        tweets
    }
}

function toggleTweet ({ id, authedUser, hasLiked }) {
    return {
        type: TOGGLE_TWEET,
        id,
        authedUser,
        hasLiked
    }
}

export function handleToggleTweet (tweetInfo) {
    return (dispatch) => {
        // Optimistic Updating approach
        dispatch(toggleTweet(tweetInfo));

        return saveLikeToggle(tweetInfo)
            .catch((error) => {
                console.warn('Error in handleToggleTweet: ', error)
                dispatch(toggleTweet(tweetInfo));
                alert('There was an error liking the tweet. Try again.')
            })
    }
}