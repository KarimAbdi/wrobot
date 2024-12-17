import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import SortBar from './SortBar';
import './App.css';


const App = () => {
  const [bots, setBots] = useState([]);
  const [yourArmy, setYourArmy] = useState([]);


  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then(res => res.json())
      .then(data => setBots(data));
  }, []);

  const enlistBot = (bot) => {
    if (!yourArmy.some(b => b.id === bot.id)) {
      setYourArmy([...yourArmy, bot]);
    }
  };

  const releaseBot = (bot) => {
    setYourArmy(yourArmy.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (id) => {
    fetch(`http://localhost:8001/bots${id}`, { method: 'DELETE' })
      .then(() => {
        setBots(bots.filter(b => b.id !== id));
        setYourArmy(yourArmy.filter(b => b.id !== id));
      });
  };

  return (
    <div>
      <SortBar/>
      <h2>Robot Battlr</h2>
      <YourBotArmy yourArmy={yourArmy} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      <BotCollection bots={bots} enlistBot={enlistBot} />
 
    </div>
  );
};

export default App;
