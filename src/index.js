import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
import reducers from './reducers'
import middleware from './middleware'

//Creating the initial store
const store = createStore(reducers,middleware)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)

// <div id="Unanswered Questions" className="tabcontent active">
//   <ul>
//       {this.props.unAnsweredQuestionIds.map((id) =>(
//         <li key={id}>
//           <Question id={id}/>
//         </li>
//       ))}
//   </ul>
// </div>
//
// <div id="Answered Questions" className="tabcontent">
//   <ul>
//       {this.props.answeredQuestionIds.map((id) =>(
//         <li key={id}>
//           <Question id={id}/>
//         </li>
//       ))}
//   </ul>
// </div>
