import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function TicketItem({ ticket }) {
  console.log(typeof ticket, 'ticket');

  return (
    <div className="ticket">
      <div>{new Date(ticket.createdAt).toLocaleString('en-US')}</div>
      <div>{ticket.product}</div>
      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      <Link to={`/ticket/${ticket._id}`} className="btn btn-reverse btn-sm">
        View
      </Link>
    </div>
  );
}

TicketItem.propTypes = {
  ticket: PropTypes.object.isRequired,
};

export default TicketItem;
