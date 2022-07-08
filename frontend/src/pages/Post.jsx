import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import { FaPlus } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getPost, closePost } from '../features/posts/postSlice';
// import {
//   getNotes,
//   createNote,
//   reset as notesReset,
// } from '../features/notes/noteSlice';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
// import NoteItem from '../components/NoteItem';

function Post() {
  const { post, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.posts
  );

  const params = useParams();
  const dispatch = useDispatch();
  const { postId } = useParams();
  console.log(post, 'post');

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getPost(postId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, message, postId]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h3>Something Went Wrong</h3>;
  }

  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <BackButton url="/posts" />
        <h2>Post ID: {post._id}</h2>
        <span className={`status status-${post.status}`}>{post.status}</span>
        <h3>
          Date Submitted: {new Date(post.createdAt).toLocaleDateString('de-De')}
        </h3>
        <h3>Product: {post.product}</h3>
        <hr />
        <div className="ticket-desc">
          <h3>Description of Issue</h3>
          <p>{post.content}</p>
        </div>
      </header>
    </div>
  );
}

export default Post;
