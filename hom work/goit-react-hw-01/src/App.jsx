// App.jsx

import "./Alert.css"
import Profile from "./componets/Profile/profile";
import FriendsList from "./componets/FriendsList/FriendsList";
import TransactionHistory from "./TransactionHistory";
import userData from "./userData.json";
import friends from "./FriendsList.json";
import transactions from './TtransactionHistory.json'

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
