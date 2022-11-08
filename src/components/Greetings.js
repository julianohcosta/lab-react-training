import './Greetings.css'


const greetingsMessages = new Map([
  ["fr", "Bonjour"],
  ["de", "Hallo"],
  ["en", "Hello"],
  ["es", "Hola"],
]);

/**
 * @param {object} props -
 * @param {string} props.lang -
 * @param {*} props.children -
 * @returns {JSX.Element} -
 * @constructor
 */
const Greetings = (props) => {

  return (
    <div className="box-container">
      <h2>
      {greetingsMessages.get(props.lang)} {props.children}
      </h2>
    </div>
  );
};

export default Greetings;