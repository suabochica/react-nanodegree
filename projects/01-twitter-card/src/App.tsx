import { TwitterFollowCard } from './TwitterFollowCard'


export function App() {
    const formatTag = (tag: string) => `@${tag}`
    // This is a way to pass props to a component, but is not recommended
    // because it sends more information that is needed..
    const nezuko = { name: 'Nezuko Kamado', tag: 'nezuko', initialIsFollowing: false }

    return (
        <section className='card-container'>
            <TwitterFollowCard
                formatTag={formatTag}
                tag='suabochica'
                name='Sergio Benítez'
                initialIsFollowing={true}
            />
            <TwitterFollowCard
                formatTag={formatTag}
                tag='tanjiro'
                name='Tanjiro Kamado'
                initialIsFollowing={false}
            />
            <TwitterFollowCard {...nezuko}
                formatTag={formatTag}
            >
            </TwitterFollowCard>
        </section>
    )
}
