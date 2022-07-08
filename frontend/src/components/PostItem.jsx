import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function PostItem({ post }) {
  console.log(typeof post, 'ticket');

  return (
    <div className="ticket">
      <div>{new Date(post.createdAt).toLocaleString('en-US')}</div>
      <div>{post.content}</div>
      <div>{post.title}</div>
      <div className={`status status-${post.status}`}>{post.status}</div>
      <Link to={`/post/${post._id}`} className="btn btn-reverse btn-sm">
        View
      </Link>
    </div>
  );
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostItem;
