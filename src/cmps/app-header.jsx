import { Logo } from './logo'
import { AppNav } from './app-nav'

export function AppHeader() {
    return (
        <header className="app-header">
            <section className="header-content">
                <Logo />
                <AppNav />
                <button className="contact-us-btn">
                    contact us
                </button>
            </section>
        </header>
    )
}