import { Logo } from './logo'
import { AppNav } from './app-nav'

export function AppHeader() {
    return (
        <header className="app-header main-layout full">
            <section className="header-content">
                <div className="logo-nav">
                    <Logo />
                    <AppNav />
                </div>
                <button className="contact-us-btn">
                    contact us
                </button>
            </section>
        </header>
    )
}