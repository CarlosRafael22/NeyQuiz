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
        router.push({
            pathname: '/quiz',
            query: { userName: name }
        })
    }

    return (
        <form onSubmit={onSubmitHandler} style={{ padding: '0 1.6rem', marginBottom: '1rem' }}>
            <InputStyle value={name} onChange={onChangeHandler} />
            <ButtonStyle disabled={!name}>Siga la pelota...</ButtonStyle>
        </form>
    )
}

export default Form