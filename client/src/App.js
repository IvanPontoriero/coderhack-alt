import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import ChallengeContainer from './components/ChallengeContainer/ChallengeContainer';
import EntrepreneurLogIn from './components/FormRegister/EntrepreneurLogIn';
import EntrepreneurRegistration from './components/FormRegister/EntrepreneurRegistration';
import Footer from './components/Footer/Footer';


function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Banner />}/>
          <Route path='/challenges' element={<ChallengeContainer />}/>
          <Route exact path='/form-entrepreneur-login' element={<EntrepreneurLogIn/>}/>
          <Route exact path='/form-entrepreneur-registration' element={<EntrepreneurRegistration/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
