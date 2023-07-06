import { Logo } from './logo'
import { AppNav } from './app-nav'
import { MenuDrawer } from './menu-drawer'

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

                <div className="header-menu">
                    <MenuDrawer />
                </div>
            </section>
        </header>
    )
}