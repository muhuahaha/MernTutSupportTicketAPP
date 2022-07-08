import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, reset } from '../features/posts/postSlice';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import PostItem from '../components/PostItem';

function Posts() {
  const { posts, isLoading, isSuccess } = useSelector((state) => state.posts);
  console.log(posts, 'hallo');
  const dispatch = useDispatch();

  useEffect(
    () => () => {
      if (isSuccess) {
        dispatch(reset());
      }
    },
    [dispatch, isSuccess]
  );

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <BackButton url="/" />
      <h1>Posts</h1>
      <div className="tickets">
        <div className="ticket-headings">
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div />
        </div>
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </>
  );
}

export default Posts;
