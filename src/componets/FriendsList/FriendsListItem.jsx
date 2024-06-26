import PropTypes from "prop-types";
import "./FriendsListItem.css";

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="friends-list-item">
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={isOnline ? "status online" : "status offline"}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

FriendsListItem.PropTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
