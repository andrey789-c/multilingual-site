import { Container } from '@/app/components/shared/Container/Container'
import s from './Header.module.scss'
import {Logo} from '@/app/components/icons/Logo'
import Link from 'next/link'

export const Header = () => {
    return <header className={s.header}>
        <Container>
            <div className={s.header__wrapper}>
            <Link href={'/'} className={s.logo}>
                <Logo />
            </Link>
            <div className={s.header__list}></div>
            </div>
            
        </Container>
    </header>
}