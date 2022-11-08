import visa from '../assets/images/visa.png'
import './CreditCard.css'
import Icon from './Icon';

/**
 * @param {object} props
 * @param {string} props.type -
 * @param {string} props.number -
 * @param {number} props.expirationMonth -
 * @param {number} props.expirationYear -
 * @param {string} props.bank -
 * @param {string} props.owner -
 * @param {string} props.bgColor -
 * @returns {JSX.Element} -
 * @constructor
 */
const CreditCard = (props) => {

  const visaLogo = <img src={visa} alt='' height={70} width={80}/>

  return (
    <div className={`card ${props.bgColor}`}>
      <div className='top-block'>
        <div className='card-chip'>
          <i className='icon-credit-card icon-3x'/>
        </div>
      </div>
      <div className='card-number'>
        <p>{props.number}</p>
      </div>
      <div className='bottom-block'>
        <div className='balance'>
          <div>Expires: {`${props.expirationMonth.toString().padStart(2, '0')}/${props.expirationYear} ${props.bank}`}</div>
          <div className='card-balance'>
            {props.owner}
          </div>
        </div>
        <div className='card-icon'>
          {props.type === 'Visa' ? visaLogo : <Icon/>}
        </div>
      </div>
    </div>
  );
};

export default CreditCard;