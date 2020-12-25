export const formatQuestion = (question,author,authedUser) => {
  const { id, optionOne, optionTwo, timestamp} = question
  const { name, avatarURL } = author
  const hasAnswered = author.answers[id]!==null

  return {
    name,//Author Name
    id,//Question Id
    timestamp,//Time posted
    optionOne,//Option One
    optionTwo,//Option Two
    avatar: avatarURL,//Author profile image
    hasAnswered: author.answers[id] ? true : false,//If the Author answered
    answeredOption : author.answers[id]//Answered option
  }
}
