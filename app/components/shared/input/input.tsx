import { FC, useState } from 'react'
import s from './input.module.scss'

interface IInputProps {
    placeholder: string
    name: string
}

export const Input:FC<IInputProps> = ({name, placeholder}) => {

    const [value, setValue] = useState('')

    return <label className={s.input}>
        <input type="text" className={value.length > 0 ? s.active : ''} name={name} value={value} onChange={e => setValue(e.target.value)}/>
        <span>{placeholder}</span>
    </label>
}