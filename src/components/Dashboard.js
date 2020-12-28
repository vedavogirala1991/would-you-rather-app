import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
  showTab= (evt, tabName) => {
    evt.preventDefault()
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  render() {
    return (
      <div className='center'>
        <div className="tab">
          <button className="tablinks active" onClick={(e)=>this.showTab(e, 'Unanswered Questions')}>Unanswered Questions</button>
          <button className="tablinks" onClick={(e)=>this.showTab(e, 'Answered Questions')}>Answered Questions</button>
        </div>
        <div id="Unanswered Questions" className="tabcontent active">
          <ul>
              {this.props.unAnsweredQuestionIds.map((id) =>(
                <li key={id}>
                  <Question id={id}/>
                </li>
              ))}
          </ul>
        </div>

        <div id="Answered Questions" className="tabcontent">
          <ul>
              {this.props.answeredQuestionIds.map((id) =>(
                <li key={id}>
                  <Question id={id}/>
                </li>
              ))}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({authedUser, users, questions}) => {
  const answeredQuestionIds = Object.keys(users[authedUser].answers)
  const unAnsweredQuestionIds = Object.keys(questions).filter(id => !answeredQuestionIds.includes(id))

  return {
    answeredQuestionIds,
    unAnsweredQuestionIds,
  }
}


export default connect(mapStateToProps)(Dashboard)
