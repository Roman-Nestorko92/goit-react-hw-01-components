const data = {
  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
}

const BlogUserProfile = () => {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={data.avatar}
          alt="User avatar"
          className="avatar"
        />
        <p className="name">{data.username}</p>
        <p className="tag">{data.tag}</p>
        <p className="location">{data.location}</p>
      </div>

      <ul className="stats">
        <li className="item">
          <span className="label">followers</span>
          <span className="quantity">{data.stats.followers}</span>
        </li>
        <li className="item">
          <span className="label">Views</span>
          <span className="quantity">{data.stats.views}</span>
        </li>
        <li className="item">
          <span className="label">Likes</span>
          <span className="quantity">{data.stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}

export default BlogUserProfile
