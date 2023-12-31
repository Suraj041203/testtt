import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,Link,NavLink } from 'react-router-dom';
import Main from './components/Main';
import Admin from './components/Admin';
import Vote from './components/Vote';
import Thanks from './components/Thanks';
import Head from './components/Header';
import Reg from './components/Reg';
import AdminMain from './components/AdminMain';
import AddDelete from './components/AddDelete';
import Modify from './components/Modify';

function App() {
  return (
    
    <BrowserRouter>
    <Head></Head>
      <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/adddelete" element={<AddDelete />} />
      <Route path="/modify" element={<Modify />} />
      <Route path="/adminmain" element={<AdminMain />} />
      <Route path="/reg" element={<Reg />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/vote" element={<Vote />} />
      <Route path="/thanks" element={<Thanks />} />
      </Routes>
      </BrowserRouter>    
  );
}

export default App;
