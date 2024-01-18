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
                    src="https://suabochica.com/sua_profile.jpg"
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
                    <span className="tw-follow-card-button-stop">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}