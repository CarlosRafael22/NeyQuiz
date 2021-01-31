import { QuizBackground, QuizContainer, Question, Widget } from '../../src/components'
import questions from '../../src/utils/questions'
import { OptionStyle } from '../../src/components/Question/styles'
import { ButtonStyle } from '../../src/components/Quiz/styles'

const QuizReview = ({answers, resetQuiz}) => {
    // Questao {answer[0]} - {answers[1]}
    console.log(Object.entries(answers), Object.values(answers).length, Object.entries(answers).length)
    return (
        <>
        <Widget>
          <Widget.Header>
          <h3>Voce terminou o Quiz com os resultados:</h3>
          </Widget.Header>
          <Widget.Content>
              {Object.entries(answers).map(answer => {
                  console.log(answer)
                  return <OptionStyle isCorrect={answer[1]}>{`Questao ${answer[0]} - ${answer[1] ? 'ACERTOU' : 'ERROU'}`}</OptionStyle>
              })}
              <div style={{ textAlign: 'center' }}>
                <ButtonStyle onClick={resetQuiz}><i class="fas fa-redo" /> Fazer de novo</ButtonStyle>
                <a style={{ display: 'block' }} href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
              </div>
              </Widget.Content>
        </Widget>
        </>
    )
}

const Audio = () => (
    <>
    <audio id="correctAnswerAudio" src="/faustao_errou.mp3" />
        {/* <source src="horse.ogg" type="audio/ogg" />
        <source src="/src/assets/faustao_errou.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
    </audio> */}
    <audio id="wrongAnswerAudio">
        {/* <source src="horse.ogg" type="audio/ogg" /> */}
        <source src="/faustao_errou.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
    </audio>
    </>
)

const IMAGES = {
    bg: 'https://uploads.metropoles.com/wp-content/uploads/2019/12/16173754/Neymar-psg-100.jpg',
    goal: 'https://www.hojeemdia.com.br/polopoly_fs/1.659015!/image/image.jpg_gen/derivatives/landscape_653/image.jpg',
    miss: 'https://fanaticosporfuteboll.com.br/wp-content/uploads/2020/08/INCRÍVEL-Neymar-perde-gol-cara-a-cara-com-o-goleiro.jpg'
}


const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const [bgImage, setBgImage] = React.useState(IMAGES['bg'])
    const [answers, updateAnswers] = React.useState({})
    const numberOfQuestions = questions.length

    const onChoosenOptionCallbackHandler = ({ hasChosenCorrectOption, chosenOption}) => {
        updateAnswers(prevAnswers => ({...prevAnswers, [currentQuestion]: hasChosenCorrectOption }))
        setCurrentQuestion(prevQuestion => currentQuestion + 1)
        // setBgImage(hasChosenCorrectOption ? IMAGES['goal'] : IMAGES['miss'])
    }

    const resetQuiz = () => {
        setCurrentQuestion(0)
        updateAnswers({})
        setBgImage(undefined)
    }

    const renderPreviousQuestion = () => setCurrentQuestion(currentQuestion - 1)
    console.log('QUESTION IS: ', currentQuestion, questions.length, answers)
    const finishedQuiz = currentQuestion >= questions.length

    return (
        <QuizBackground backgroundImage={bgImage}>
            <Audio />
            <QuizContainer>
                {!finishedQuiz && (
                    <Question
                        question={questions[currentQuestion]}
                        index={currentQuestion}
                        numberOfQuestions={numberOfQuestions}
                        onChoosenOptionCallback={onChoosenOptionCallbackHandler}
                        onBackPress={renderPreviousQuestion}
                        key={`question_${currentQuestion}`}
                    />
                )}
                {finishedQuiz && (
                    <QuizReview answers={answers} resetQuiz={resetQuiz} />
                )}
            </QuizContainer>
        </QuizBackground>
    )
}

export default Quiz