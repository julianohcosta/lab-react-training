import './BoxColor.css'

/**
 * @param {object} props -
 * @param {number} props.r -
 * @param {number} props.g -
 * @param {number} props.b -
 * @returns {JSX.Element}
 * @constructor
 */
const BoxColor = (props) => {

  return (
    <div
      className="boxColor-box"
      style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }}
    >
      {props.r} {props.g} {props.b}
    </div>
  );
};

export default BoxColor;