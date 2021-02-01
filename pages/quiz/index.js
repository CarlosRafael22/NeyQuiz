import { useRouter } from 'next/router'
import { QuizBackground, QuizContainer, Question, Widget } from '../../src/components'
import questions from '../../src/utils/questions'
import { OptionStyle } from '../../src/components/Question/styles'
import { ButtonStyle, TwitterAnchor } from '../../src/components/Quiz/styles'

const QuizReview = ({userName, answers, resetQuiz}) => {
    // Questao {answer[0]} - {answers[1]}
    console.log(Object.entries(answers), Object.values(answers).length, Object.entries(answers).length)
    return (
        <>
        <Widget>
          <Widget.Header>
          <h3 style={{ lineHeight: '1.2'}}>Não que nem Neymar, mas até que deu para fazer uns golzinhos.<br /> <br />{userName}, se liga no placar:</h3>
          </Widget.Header>
          <Widget.Content>
              {Object.entries(answers).map(answer => {
                  console.log(answer)
                  return (<OptionStyle isCorrect={answer[1]}>
                      {`Questão ${answer[0]} - ${answer[1] ? 'Acertou ' : 'Errou '}`}
                      {/* {answer[1] ? <i class="fas fa-bullseye"></i> : <i class="fas fa-times"></i>} */}
                      </OptionStyle>)
              })}
              <div style={{ textAlign: 'center' }}>
                
                <TwitterAnchor
                    href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                    className="fa fa-twitter"
                    data-text="Acabei de fazer o Ney Quiz. Quero ver se tu conhece as tuitadas violentas de Neymar!"
                    data-url="https://ney-quiz.carlosrafael22.vercel.app"
                    data-hashtags="NeyQuiz"
                    data-related="CR_Rafael22,neymarjr"
                    data-lang="pt"
                    data-show-count="false"
                >Tweetar</TwitterAnchor>
                <ButtonStyle onClick={resetQuiz}><i class="fas fa-redo" /> Fazer de novo</ButtonStyle>
              </div>
              </Widget.Content>
        </Widget>
        </>
    )
}

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
    const router = useRouter()
    const { userName } = router.query
    console.log('ROUTEEEEEEEEEEEEEEEEEEEEEEEE ', router, userName)

    const onChoosenOptionCallbackHandler = ({ hasChosenCorrectOption, chosenOption}) => {
        setCurrentQuestion(prevQuestion => currentQuestion + 1)
        updateAnswers(prevAnswers => ({...prevAnswers, [currentQuestion]: hasChosenCorrectOption }))
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
                    <QuizReview userName={userName} answers={answers} resetQuiz={resetQuiz} />
                )}
            </QuizContainer>
        </QuizBackground>
    )
}

export default Quiz