import React,{Component} from 'react'
import {connect} from 'react-redux'

class QuestionPage extends Component {
  render () {
    console.log('props : ',this.props)
    return (
      <div>
        Question Page
      </div>
    )
  }
}

const mapStateToProps = ({authedUser},id) => {
  return {
    authedUser,
    id,
  }
}

export default connect(mapStateToProps)(QuestionPage)
