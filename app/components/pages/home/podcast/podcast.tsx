
import { Container } from '@/app/components/shared/Container/Container'
import s from './podcast.module.scss'
import Image from 'next/image'
import { Spotify } from '@/app/components/icons/Spotify'
import { Radio } from '@/app/components/icons/Radio'
import { SoundCloud } from '@/app/components/icons/SoundCloud'
import { Radio2 } from '@/app/components/icons/Radio2'
import { Radio3 } from '@/app/components/icons/Radio3'
import Link from 'next/link'

export const Podcast = () => {
    return <div className={s.podcast}>
        <Container styles={s.container}>
            <div className={s.wrapper}>
                <div className={s.image}><Image src={'/images/about.png'} alt='' width={650} height={873}/></div>
                <div className={s.right}>
                    <div className={s.text}>
                        Take your podcast to the <span className={s.line}>next</span> <span className={s.weight}>level</span>
                    </div>
                    <div className={s.socials}>
                        <div className={s.subtitle}>Listen on</div>
                        <div className={s.icons}>
                            <Link href={'/'}>
                                <Spotify />
                            </Link>
                            <Link href={'/'}>
                                <Radio />
                            </Link>
                            <Link href={'/'}>
                                <SoundCloud />
                            </Link>
                            <Link href={'/'}>
                                <Radio2 />
                            </Link>
                            <Link href={'/'}>
                                <Radio3 />
                            </Link>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </Container>   
    </div>
}