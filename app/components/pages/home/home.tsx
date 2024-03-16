import Image from 'next/image'
import { Container } from '../../shared/Container/Container'
import s from './home.module.scss'
import { Podcast } from './podcast/podcast'
import { Episodes } from './episodes/episodes'

export const Home = () => {
    return <div className={s.home}>
        <Podcast />
        <Episodes />
    </div>
}