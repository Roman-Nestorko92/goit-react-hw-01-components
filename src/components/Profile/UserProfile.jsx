import profile from '../../data/profile';
import css from '../Profile/Profile.module.css';

const UserProfile = () => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={profile.avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{profile.username}</p>
        <p className={css.tag}>{profile.tag}</p>
        <p className={css.location}>{profile.location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>followers</span>
          <span className={css.quantity}>{profile.stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{profile.stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{profile.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
