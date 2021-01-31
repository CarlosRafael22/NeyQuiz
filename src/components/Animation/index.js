import Lottie from 'react-lottie'
import correctData from '../../animations/correct.json'
import wrongData from '../../animations/wrong.json'
import { AnimationStyle } from './styles'

const defaultOptions = {
    loop: true,
    autoplay: true, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
}

const Animation = ({ isCorrect }) => {
    const options = {
        ...defaultOptions,
        animationData: isCorrect ? correctData : wrongData
    }

    return (
        <AnimationStyle>
            <Lottie options={options}
                height={100}
                width={100}
            />
        </AnimationStyle>
    )
}

export default Animation