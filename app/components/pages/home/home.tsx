import Image from 'next/image'
import { Container } from '../../shared/Container/Container'
import s from './home.module.scss'
import { Podcast } from './podcast/podcast'
import { Episodes } from './episodes/episodes'
import { About } from './about/about'
import { Form } from './form/form'

export const Home = () => {
    return <div className={s.home}>
        <Podcast />
        <Episodes />
        <About />
        <Form />
    </div>
}