import strings from '../src/utils/strings'
import { QuizBackground, Widget, Footer, QuizContainer, QuizLogo, GitHubCorner } from '../src/components'
import Form from '../src/components/Form'

export default function Home() {

  return (
    <QuizBackground backgroundImage={strings.bg}>
      <QuizContainer>
        {/* <QuizLogo /> */}
        <Widget>
          <Widget.Header>
            <h1>{strings.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{strings.description}</p>
          </Widget.Content>
          <Form />
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/CarlosRafael22/NeyQuiz" />
    </QuizBackground>
  );
}
