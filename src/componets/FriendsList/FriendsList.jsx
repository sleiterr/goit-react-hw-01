// FriendsList.jsx

import PropTypes from "prop-types";
import FriendsListItem from "./FriendsListItem.jsx";
import "./FriendsList.module.css";

const FriendsList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendsListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendsList;
