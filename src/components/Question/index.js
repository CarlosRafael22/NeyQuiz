import {Howl, Howler} from 'howler';
import Widget from '../Widget'
import { OptionStyle } from './styles'
import Image from '../Image'
import Animation from '../Animation'

const RadioOption = ({questionName, option, onSelect, chosen, isCorrect}) => (
    <OptionStyle as='label' chosen={chosen} isCorrect={chosen === false ? undefined : (chosen && isCorrect)} >
        <input type='radio' name={questionName} style={{ display: 'none'}} onClick={onSelect} />
        {option}
    </OptionStyle>
)

const Question = ({ question, index, numberOfQuestions, onChoosenOptionCallback, onBackPress }) => {
    const [chosenOption, setChosenOption] = React.useState(null)
    // console.log('CHOSEN OPTION: ', chosenOption)
    const { image, resultImage, title, description, answer, alternatives } = question
    const questionName = `question_${index}`
    // console.log('QUESTION ---- ', chosenOption, answer)
    const soundForRight = new Howl({ src: ['/eh_tetra.mp3'] });
    const soundForWrong = new Howl({ src: ['/faustao_errou.mp3'] });

    const getResult = () => {
        if (chosenOption === null) return null
        const ret = (chosenOption === answer)
        return ret
    }

    const selectOption = (optionIndex) => {
        setChosenOption(optionIndex)
        // console.log('SELECTED: ', optionIndex, hasChosenCorrectOption, chosenOption)
        // setChosenOption(prevOption => {
        //     console.log('ATUALIZOU OPTION: ', prevOption, optionIndex)
        //     // setTimeout(() => {
        //     //     console.log('CHOSEN AGORA: ', chosenOption, optionIndex)
        //     //     const hasChosenCorrectOption = getResult()
        //     //     console.log('AGORA VAI ', hasChosenCorrectOption, prevOption, optionIndex)
        //     //     // onChoosenOptionCallback({ hasChosenCorrectOption, optionIndex })
        //     // }, 1000)
        //     return optionIndex
        // })
    }

    const playAudio = (hasChosenCorrectOption) => {
        if (hasChosenCorrectOption === null) return
        if (!hasChosenCorrectOption) {
            soundForWrong.play()
        } else {
            soundForRight.play()
        }
    }


    React.useEffect(() => {
        // console.log('DEU RENDER NO COMPONENT!!!!!!!!!!!!!!!!!!!!!!')
        playAudio(hasChosenCorrectOption)
        if (chosenOption !== null) {
            setTimeout(() => {
                const hasChosenCorrectOption = getResult()
                // playAudio(hasChosenCorrectOption)
                onChoosenOptionCallback({ hasChosenCorrectOption, chosenOption })
            }, hasChosenCorrectOption ? 3000 : 2000)
        }
    })

    const hasChosenCorrectOption = getResult()
    const imagePath = chosenOption !== null ? resultImage : image

    return (
        <Widget>
            <Widget.Header>
                {/* {index > 0 && <button onClick={onBackPress}>Voltar</button>} */}
                <h3>{`Pergunta ${index+1} de ${numberOfQuestions} `}</h3>
            </Widget.Header>
            <Image imagePath={imagePath} chosenOption={chosenOption} />
            
            <Widget.Content>
                <h3>{title}</h3>
                {alternatives.map((option, index) => {
                    return (
                        <RadioOption
                            questionName={questionName}
                            option={option}
                            chosen={chosenOption === index}
                            onSelect={() => selectOption(index)}
                            key={`option_${index}`}
                            isCorrect={hasChosenCorrectOption}
                        />
                    )
                })}
            </Widget.Content>
            {chosenOption !== null && <Animation isCorrect={hasChosenCorrectOption} />}
        </Widget>
    )
}

export default Question