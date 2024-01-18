import ProfileDetails from './routes/profile-page/ProfileDetails';
import Registration from "./routes/registration/Registration";
import ProfileUpdate from "./routes/profile-update-page/profileupdate";
import { Route, Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path='/' element = { < Registration />}/>      
      <Route path='profiledetail' element = { <ProfileDetails />}/>
      <Route path='profileupdate' element = { <ProfileUpdate />}/>
    </Routes>
  )
}

export default App;
