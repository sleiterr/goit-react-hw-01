import Profile from "./componets/Profile/profile";
import "./Alert.css"
import userData from "./userData.json";

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
    </div>
  );
};

export default App;
