import { FC, ReactNode } from 'react'
import s from './Icons.module.scss'

export const Icons:FC<{icon: ReactNode}> = ({icon}) => {
    return <div dangerouslySetInnerHTML={{__html: icon}}></div>
}