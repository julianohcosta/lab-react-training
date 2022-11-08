import './Random.css'

/**
 * @param {object} props -
 * @param {number} props.min -
 * @param {number} props.max -
 * @returns {JSX.Element} -
 * @constructor
 */
const Random = (props) => {
  return (
    <div className="random-box">
      Random value between {props.min} and {props.max} : {Math.floor(Math.random() * props.max)}
    </div>
  );
};

export default Random;