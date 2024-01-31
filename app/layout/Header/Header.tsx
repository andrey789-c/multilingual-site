import { Container } from '@/app/components/Container/Container'
import s from './Header.module.scss'
import logo from '@/app/icons/logo.svg'

export const Header = () => {
    return <header className={s.header}>
        <Container>
            <div className={s.logo}>
                {logo}
            </div>
        </Container>
    </header>
}