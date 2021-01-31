import { useRouter, withRouter } from 'next/router'
import ButtonStyle from '../Button'
import InputStyle from '../Input'


const Form = () => {
    const [name, setName] = React.useState('')
    const router = useRouter()

    const onChangeHandler = (event) => {
      setName(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        router.push('/quiz')
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <InputStyle value={name} onChange={onChangeHandler} />
            <ButtonStyle disabled={!name}>Siga la pelota...</ButtonStyle>
        </form>
    )
}

export default Form