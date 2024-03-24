// Write your code here
import {Component} from 'react'
import './index.css'

const eventStatus = {
  initial: 'INITIAL',
  registered: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
  forRegister: 'YET_TO_REGISTER',
}

class ActiveEventRegistrationDetails extends Component {
  initialRender = () => (
    <div className="initial">
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  registeredView = () => (
    <div className="initial">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  closedView = () => (
    <div className="initial">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )

  forRegisterView = () => (
    <div className="initial">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="closed"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button type="button">Register Here</button>
    </div>
  )

  render() {
    const {isStatus} = this.props
    switch (isStatus) {
      case eventStatus.initial:
        return this.initialRender()
      case eventStatus.registered:
        return this.registeredView()
      case eventStatus.forRegister:
        return this.forRegisterView()
      case eventStatus.closed:
        return this.closedView()

      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
