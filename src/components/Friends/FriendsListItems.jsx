import PropTypes from 'prop-types';
import FriendsList from './FriendListStatus';

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(({ id, isOnline, avatar, name }) => {
        return (
          <FriendsList
            key={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
          />
        );
      })}
    </ul>
  );
}

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default FriendList;
