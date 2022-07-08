import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa';

function Home() {
  return (
    <>
      <section className="heading">
        <h1>What do you need help with?</h1>
        <p>Please choose from an option below</p>
      </section>
      <Link to="/new-ticket" className="btn btn-reverse btn-block ">
        <FaQuestionCircle /> Create New Ticket
      </Link>
      <Link to="/tickets" className="btn btn-block ">
        <FaTicketAlt /> View My Tickets
      </Link>
      <div>
        <div>
          <h1>Posts</h1>
        </div>
        <Link to="/new-post" className="btn btn-reverse btn-block ">
          <FaQuestionCircle /> Create New Post
        </Link>
        <Link to="/posts" className="btn btn-block ">
          <FaTicketAlt /> View My Post
        </Link>
      </div>
    </>
  );
}

export default Home;
