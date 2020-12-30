export const formatQuestion = (question,users,authedUser) => {
  const { id, optionOne, optionTwo, timestamp} = question
  const { name, avatarURL } = users[question.author]

  return {
    name,//Author Name
    id,//Question Id
    timestamp,//Time posted
    optionOne,//Option One
    optionTwo,//Option Two
    avatar: avatarURL,//Author profile image
    hasAnswered: users[authedUser].answers[id] ? true : false,//If the Author answered
    answeredOption : users[authedUser].answers[id]//Answered option
  }
}
