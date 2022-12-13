import Questions from "./Questions"

const QuestionList = ({questionList}) => {
  // questionList = Array.from(questionList)
  return (
    <>
    {
      questionList.map( (question) => (
        <Questions question={question} key={question._id} />
      ))
      }
    </>
  )
}

export default QuestionList