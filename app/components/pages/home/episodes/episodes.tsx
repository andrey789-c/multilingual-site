
import { Container } from '@/app/components/shared/Container/Container'
import s from './episodes.module.scss'
import { mockEpisodes } from '@/app/data/episodes'
import Image from 'next/image'

export const Episodes = () => {
    return <div className={s.episodes}>
        <Container >
            <div className={s.title}>Latest episodes</div>
            <div className={s.list}>
                {mockEpisodes.map(episode => (
                    <div className={s.episode} key={episode.id}>
                        <div className={s.episode__wrapper}>
                            <div className={s.episodes__img}>
                                <Image src={episode.image} alt={episode.title} width={389} height={465}/>
                            </div>
                            <div className={s.espisode__content}>
                                <div className={s.episode__type}>{episode.type}</div>
                                <div className={s.episode__number}>Episode {episode.id}</div>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </Container>
    </div>
}