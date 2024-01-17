import './App.css'

export function App() {
    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img
                    className='tw-follow-card-avatar'
                    src="https://suabochica.com/sua_profile.jpg"
                    alt="Avatar"
                />
                <div className='tw-follow-card-info'>
                    <strong className='tw-follow-card-name'>Sergio Leonardo Benítez</strong>
                    <span className='tw-follow-card-tag'>@suabocihca</span>
                </div>
            </header>

            <aside>
                <button className='tw-follow-card-button'>Seguir</button>
            </aside>
        </article>
    )
}
