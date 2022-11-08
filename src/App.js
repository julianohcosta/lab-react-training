import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';

function App() {

  return (

    <React.Fragment>
      <IdCard
        firstName={`Juliano`}
        lastName={`Costa`}
        gender={`male`}
        height={178}
        birth={'1983-12-04'}
        picture={`https://randomuser.me/api/portraits/men/44.jpg`}
      />
      <IdCard
        firstName={`Obrien`}
        lastName={`Delores`}
        gender={`female`}
        height={172}
        birth={'1988-05-11'}
        picture={`https://randomuser.me/api/portraits/women/44.jpg`}
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
        <div style={{display: 'flex'}}>
            <CreditCard
              type="Visa"
              number="0123 4567 8901 8845"
              expirationMonth={3}
              expirationYear={2021}
              bank="BNP"
              owner="Maxence Bouret"
              bgColor="bgColorGreen"
            />
            <CreditCard
              type="Master Card"
              number="0123 4567 8901 0995"
              expirationMonth={3}
              expirationYear={2021}
              bank="N26"
              owner="Maxence Bouret"
              bgColor="bgColorGray"
            />
            <CreditCard
              type="Visa"
              number="0123 4567 8901 6984"
              expirationMonth={12}
              expirationYear={2019}
              bank="Name of the Bank"
              owner="Firstname Lastname"
              bgColor="bgColorYellow"
            />
        </div>
      <Rating/>
      <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center'}}>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }}
        />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }}
        />
      </div>

    </React.Fragment>
  );
}

export default App;
