import { Container } from '@/app/components/Container/Container'
import s from './Header.module.scss'
import {Logo} from '@/app/icons/Logo'

export const Header = () => {
    return <header className={s.header}>
        <Container>
            <div className={s.header__wrapper}>
            <div className={s.logo}>
                <Logo />
            </div>
            <div className={s.header__list}></div>
            </div>
            
        </Container>
    </header>
}