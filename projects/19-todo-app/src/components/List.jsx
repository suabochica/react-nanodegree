import React from 'react'

export default class List extends React.Component {
    state = {
        removing: {}
    }

    handleRemove = (item) => {
        this.setState((prev) => ({
            removing: { ...prev.removing, [item.id]: true }
        }))
    }

    handleAnimationEnd = (item) => {
        if (this.state.removing[item.id]) {
            this.props.remove(item)
        }
    }

    render() {
        const { items, toggle } = this.props

        return (
            <ul className="list">
                {items.map((item) => {
                    const isRemoving = this.state.removing[item.id]
                    const itemClass = [
                        'list-item',
                        item.complete && 'list-item--done',
                        isRemoving && 'list-item--exiting'
                    ].filter(Boolean).join(' ')

                    return (
                        <li
                            key={item.id}
                            className={itemClass}
                            onAnimationEnd={() => this.handleAnimationEnd(item)}
                        >
                            <span
                                className="list-item-text"
                                onClick={() => toggle && toggle(item.id)}
                            >
                                {item.name}
                            </span>
                            <button
                                className="btn btn--danger"
                                onClick={() => this.handleRemove(item)}
                            >
                                X
                            </button>
                        </li>
                    )
                })}
            </ul>
        )
    }
}
