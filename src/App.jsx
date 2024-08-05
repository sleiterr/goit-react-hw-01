// App.jsx

import "./Alert.css"
import Profile from "./components/Profil/Profil";
import FriendsList from "./components/FriendsList/FriendsList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from "./data/userData.json";
import friends from "./data/FriendsList.json";
import transactions from './data/transactionHistory.json'

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
