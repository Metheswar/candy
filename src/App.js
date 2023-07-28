import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import ContextProvider from './Store/ContextProvider';
import Context from './Store/Context';

function App() {
  const context = useContext(Context);

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/auth' element={<AuthPage />} />
        {context.login && <Route path='/profile' element={<UserProfile />} />}
      </Routes>
    </Layout>
  );
}

export default App;
