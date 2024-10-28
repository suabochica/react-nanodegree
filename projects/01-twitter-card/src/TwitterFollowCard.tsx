import { useState } from "react";

type TwitterFollowCardProps = {
    formatTag: (tag: string) => string;
    tag: string;
    name: string;
    initialIsFollowing: boolean;
}

export function TwitterFollowCard({ formatTag, tag = "unknown", name, initialIsFollowing }: TwitterFollowCardProps) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const textButton = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-follow-card-button is-following' : 'tw-follow-card-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img
                    className='tw-follow-card-avatar'
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20200224%2Foriginal%2Fpngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg&f=1&nofb=1&ipt=fe435481e7d9aeb2c937ef2b1021afff9d61cfbcf08d7c4a3bb991c5d40fc1fc&ipo=images"
                    alt="Avatar"
                />
                <div className='tw-follow-card-info'>
                    <strong className='tw-follow-card-name'>{name}</strong>
                    <span className='tw-follow-card-tag'>{formatTag(tag)}</span>
                </div>
            </header>

            <aside>
                <button onClick={handleClick} className={buttonClassName}>
                    <span className="tw-follow-card-button-follow-state">{textButton}</span>
                </button>
            </aside>
        </article>
    )
}