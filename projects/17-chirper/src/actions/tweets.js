import { showLoading, hideLoading } from 'react-redux-loading'
import { saveLikeToggle, saveTweet } from '../utils/api'

export const GET_TWEETS = 'GET_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'
export const ADD_TWEET = 'ADD_TWEET'

export function getTweets (tweets) {
    return {
        type: GET_TWEETS,
        tweets
    }
}

function addTweet (tweet) {
    return {
        type: ADD_TWEET,
        tweet
    }
}

export function handleAddTweet (text, replyingTo) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        // Optimistic Updating approach
        dispatch(showLoading())

        return saveTweet({
            text,
            author: authedUser,
            replyingTo
        })
            .then((tweet) => dispatch(addTweet(tweet)))
            .then(() => dispatch(hideLoading()))
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