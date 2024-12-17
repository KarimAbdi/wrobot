import React from 'react'

const BotCard = ({ bot, enlistBot }) => {
  return (
    <div className="bot-card" onClick={() => enlistBot(bot)}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
    </div>
  );
};

export default BotCard;
