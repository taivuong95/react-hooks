import logo from './logo.svg';
import './App.css';
import React from 'react';
import ComponentC from './components/ComponentC';
import ComponentF from './components/ComponentF';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Vishwas'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
