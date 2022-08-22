import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/Routes/AppRouter';
import Chat from './components/ChatBlock/Chat'
import { useContext } from 'react';
import { Context } from '.';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from './components/ChatBlock/Loader';

function App() {
  const {auth} = useContext(Context)
  const [user, loading, error] = useAuthState(auth)
  if (loading) {
    return <Loader/>
  }
  return (
    <BrowserRouter>
    <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
