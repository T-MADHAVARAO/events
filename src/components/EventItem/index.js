// Write your code here
import './index.css'

const EventItem = props => {
  const {eachEvent, renderResult} = props
  const {id, imageUrl, name, location} = eachEvent
  const showData = () => {
    renderResult(id)
  }
  return (
    <li className="each-event">
      <button onClick={showData} type="button">
        <img src={imageUrl} alt="event" className="event-img" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
