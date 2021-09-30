import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Bday from './components/Pages/Bday';
import Trips from './components/Pages/Trips';
import Gettogether from './components/Pages/Gettogether';
import Bike from './components/Pages/Bike';
import Outings from './components/Pages/Outings';
import School from './components/Pages/School';
import Aftab from './components/BadyPages/Aftab/Aftab';
import Ajay from './components/BadyPages/Ajay/Ajay';
import Arun from './components/BadyPages/Arun/Arun';
import Bero from './components/BadyPages/Bero/Bero';
import Deepak from './components/BadyPages/Deepak/Deepak';
import Franklin from './components/BadyPages/Franklin/Franklin';
import Hari from './components/BadyPages/Hari/Hari';
import Joshua from './components/BadyPages/Joshua/Joshua';
import Kumaran from './components/BadyPages/Kumaran/Kumaran';
import Rishvanth from './components/BadyPages/Rishvanth/Rishvanth';
import Rithik from './components/BadyPages/Rithik/Rithik';
import Yokesh from './components/BadyPages/Yokesh/Yokesh';
import Bengaluru from './components/TripsPages/Bengaluru/Bengaluru';
import Trichy from './components/TripsPages/Trichy/Trichy';
import Conversation from './components/MemoriesPages/Conversation/Conversation';
import Memories from './components/MemoriesPages/Memories/Memories';
import Sports from './components/MemoriesPages/Sports/Sports';
import Wasted from './components/MemoriesPages/Wasted/Wasted';
import Area from './components/BikePages/Area/Area';
import Beach from './components/BikePages/Beach/Beach';
import Dam from './components/BikePages/Dam/Dam';
import Stunts from './components/BikePages/Stunts/Stunts';
import Cinema from './components/OutingPages/Cinema/Cinema';
import Hotel from './components/OutingPages/Hotel/Hotel';
import Mall from './components/OutingPages/Mall/Mall';
import Shopping from './components/OutingPages/Shopping/Shopping';
import Theme from './components/OutingPages/Theme/Theme';
import Truff from './components/OutingPages/Truff/Truff';
import Culturals from './components/SchoolPages/Culturals/Culturals';
import Functions from './components/SchoolPages/Functions/Functions';
import Park from './components/SchoolPages/Park/Park';
import Schmem from './components/SchoolPages/Sch-mem/Sch-mem';
import Schsp from './components/SchoolPages/Sch-sp/Schsp';
import Selfies from './components/SchoolPages/Selfies/Selfies';


function App() {
  return (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Bday' exact component={Bday} />
        <Route path='/Trips' exact component={Trips} />
        <Route path='/Gettogether' exact component={Gettogether} />
        <Route path='/Bike' exact component={Bike} />
        <Route path='/Outings' exact component={Outings} />
        <Route path='/School' exact component={School} />
        <Route path='/Aftab' exact component={Aftab} />
        <Route path='/Ajay' exact component={Ajay} />
        <Route path='/Arun' exact component={Arun} />
        <Route path='/Bero' exact component={Bero} />
        <Route path='/Deepak' exact component={Deepak} />
        <Route path='/Franklin' exact component={Franklin} />
        <Route path='/Hari' exact component={Hari} />
        <Route path='/Joshua' exact component={Joshua} />
        <Route path='/Kumaran' exact component={Kumaran} />
        <Route path='/Rishvanth' exact component={Rishvanth} />
        <Route path='/Rithik' exact component={Rithik} />
        <Route path='/Yokesh' exact component={Yokesh} />
        <Route path='/Bengaluru' exact component={Bengaluru} />
        <Route path='/Trichy' exact component={Trichy} />
        <Route path='/Conversation' exact component={Conversation} />
        <Route path='/Memories' exact component={Memories} />
        <Route path='/Sports' exact component={Sports} />
        <Route path='/Wasted' exact component={Wasted} />
        <Route path='/Area' exact component={Area} />
        <Route path='/Beach' exact component={Beach} />
        <Route path='/Dam' exact component={Dam} />
        <Route path='/Stunts' exact component={Stunts} />
        <Route path='/Cinema' exact component={Cinema} />
        <Route path='/Hotel' exact component={Hotel} />
        <Route path='/Mall' exact component={Mall} />
        <Route path='/Shopping' exact component={Shopping} />
        <Route path='/Theme' exact component={Theme} />
        <Route path='/Truff' exact component={Truff} />
        <Route path='/Culturals' exact component={Culturals} />
        <Route path='/Functions' exact component={Functions} />
        <Route path='/Park' exact component={Park} />
        <Route path='/Schmem' exact component={Schmem} />
        <Route path='/Schsp' exact component={Schsp} />
        <Route path='/Selfies' exact component={Selfies} />
      </Switch>
    </Router>
  </>
  );
}

export default App;
