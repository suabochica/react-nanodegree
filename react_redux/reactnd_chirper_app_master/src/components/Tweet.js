import React, { Component } from 'react'
import { connect } from 'react-redux'
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
import { formatTweet, formatDate } from '../utils/helpers'

class Tweet extends Component {
    handleLike = (event) => {
        event.preventDefault()

        // TODO: Handle like tweet
    }

    redirectToParent = (event, id) => {
        event.preventDefault()

        // TODO: Redirect to parent tweet
    }

    render() {
        const { tweet } = this.props
        const {
            name,
            avatar,
            timestamp,
            text,
            hasLiked,
            replies,
            parent
        } = tweet;

        if (tweet === null) {
            return <p> This Tweet does not exist </p>
        }

        return (
            <div className='tweet'>
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
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps)(Tweet)