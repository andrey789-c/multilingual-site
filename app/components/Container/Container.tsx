import { FC } from "react"
import { IContainer } from "./IContainer.interface"
import s from './Container.module.scss'
import cn from 'classnames'

export const Container:FC<IContainer> = ({ styles, children,}) => {
    return <div className={cn(s.container, styles)}>
        {children}
    </div>
}