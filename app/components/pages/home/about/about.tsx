import { Container } from '@/app/components/shared/Container/Container'
import s from './about.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export const About = () => {
    return <div className={s.about}>
        <Container>
            <div className={s.wrapper}>
                <div className={s.content}>
                    <div className={s.name}>Jacob Paulaner</div>
                    <div className={s.description}>
                        <p>Jacob has a background in audio engineering, and has been podcasting since the early days.</p>
                        <p>He’s here to help you level up your game by sharing everything he’s learned along the way.</p>
                    </div>
                </div>

                <div className={s.image}>
                    <Image src={'/images/jacob.png'} alt='jacob' width={650} height={743}/>
                </div>
            </div>
        </Container>
        
    </div>
}