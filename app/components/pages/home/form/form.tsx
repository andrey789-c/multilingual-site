import { Container } from '@/app/components/shared/Container/Container'
import s from './form.module.scss'
import { Input } from '@/app/components/shared/input/input'

export const Form = () => {
    return <div className={s.form}>
        <Container>
            <div className={s.block}>
                <div className={s.wrapper}>
                    <div className={s.content}>
                        <div className={s.label}>Email Newsletter</div>
                        <h3 className={s.title}>Subscribe for updates</h3>
                    </div>
                    <form className={s.block__form}>
                        <Input name='name' placeholder='Name'/>
                        <Input name='email' placeholder='Email'/>
                        <button className={s.submit}>Submit</button>
                    </form>
                </div>
                
                <div className={s.img}>
                    <img src='/images/form_lines.png' alt='form'/>
                </div>
                
            </div>
        </Container>
    </div>
}