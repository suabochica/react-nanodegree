import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
import { formatTweet, formatDate } from '../utils/helpers'
import { handleToggleTweet } from '../actions/tweets'

class Tweet extends Component {
    handleLike = (event) => {
        event.preventDefault()

        const { dispatch, tweet, authedUser } = this.props

        dispatch(handleToggleTweet({
            id: tweet.id,
            hasLiked: tweet.hasLiked,
            authedUser
        }))
    }

    redirectToParent = (event, id) => {
        event.preventDefault()
        this.props.history.push(`/tweet/${id}`)
    }

    render() {
        const { tweet } = this.props
        const {
            id,
            name,
            avatar,
            timestamp,
            text,
            hasLiked,
            likes,
            replies,
            parent
        } = tweet;

        if (tweet === null) {
            return <p> This Tweet does not exist </p>
        }

        return (
            <Link to={`/tweet/${id}`} className='tweet'>
                <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />
                <div className='tweet-info'>
                    <div className='tweet-details'>
                        <span>{name}</span>
                        <div>{formatDate(timestamp)}</div>
                        {
                            parent && (
                                <button className='replying-to' onClick={(event) => this.redirectToParent(event, parent.id)}>
                                    Replying to @{parent.author}
                                </button>
                            )
                        }
                        <p>{text}</p>
                    </div>
                    <div className='tweet-icons'>
                        <TiArrowBackOutline className='tweet-icon' />
                        <span>{replies !== 0 && replies}</span>
                        <button className='heart-button' onClick={this.handleLike}>
                            {
                                hasLiked === true
                                    ? <TiHeartFullOutline color='#e0245e' className='tweet-icon' />
                                    : <TiHeartOutline className='tweet-icon' />
                            }
                        </button>
                        <span>{likes !== 0 && likes}</span>
                    </div>
                </div>
            </Link>
        )
    }
}

function mapStateToProps ({ authedUser, users, tweets }, { id }) {
    const tweet = tweets[id]
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null

    return {
        authedUser,
        tweet: tweet
            ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
            : null
    }
}

export default withRouter(connect(mapStateToProps)(Tweet))