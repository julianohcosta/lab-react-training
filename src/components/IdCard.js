import './IdCard.css';

/**
 * @param {object} props -
 * @param {string} props.firstName -
 * @param {string} props.lastName -
 * @param {string} props.gender=male|female -
 * @param {number} props.height -
 * @param {string} props.birth -
 * @param {string} props.picture -
 * @returns {JSX.Element}
 * @constructor
 */
const IdCard = (props) => {
  return (
    <div className='IdCard-box box'>
      <img src={props.picture} alt='' className="profile-img"/>
      <div className="idCard-info">
        <strong>First name: </strong> {props.firstName}
        <br/>
        <strong>Last name: </strong>{props.lastName}
        <br/>
        <strong>Gender: </strong>{props.gender}
        <br/>
        <strong>Height: </strong>{props.height}cm
        <br/>
        <strong>Birth: </strong>  {new Date(props.birth).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }
      </div>
    </div>
  );
};

export default IdCard;