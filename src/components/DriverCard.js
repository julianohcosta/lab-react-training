import './DriverCard.css'
import Rating from './Rating';

/**
 * @typedef {object}  Car
 * @property {string} model
 * @property {string} licensePlate
 */

/**
 * @param {object} props -
 * @param {string} props.name -
 * @param {number} props.rating -
 * @param {string} props.img -
 * @param {Car} props.car -
 * @returns {JSX.Element}
 * @constructor
 */
const DriverCard = (props) => {
  return (
    <div className="driverCard-container">
      <img className="driver-img" src={props.img} alt="driver-img" />
      <div className="right-side-driverCard">
        <h2>{props.name}</h2>
        <Rating rating={props.rating}/>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;