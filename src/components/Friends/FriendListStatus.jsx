import css from '../Friends/FriendList.module.css';

function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.status__true : css.status__false}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width={50} />
      <p className={css.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;
