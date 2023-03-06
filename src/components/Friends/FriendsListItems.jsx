import FriendsList from './FriendListStatus';

function FriendListItem({ friends }) {
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

export default FriendListItem;
