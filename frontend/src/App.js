import './styles/style.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import CounterDisplay from './pages/CounterDisplay';
import NewTicket from './pages/NewTicket';
import Tickets from './pages/Tickets';
import Ticket from './pages/Ticket';
import NewPost from './pages/NewPost';
import Posts from './pages/Posts';
import Post from './pages/Post';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/counter" element={<PrivateRoute />}>
              <Route path="/counter" element={<CounterDisplay />} />
            </Route>

            <Route path="/new-ticket" element={<PrivateRoute />}>
              <Route path="/new-ticket" element={<NewTicket />} />
            </Route>
            <Route path="/tickets" element={<PrivateRoute />}>
              <Route path="/tickets" element={<Tickets />} />
            </Route>
            <Route path="/ticket/:ticketId" element={<PrivateRoute />}>
              <Route path="/ticket/:ticketId" element={<Ticket />} />
            </Route>

            <Route path="/new-post" element={<PrivateRoute />}>
              <Route path="/new-post" element={<NewPost />} />
            </Route>
            <Route path="/posts" element={<PrivateRoute />}>
              <Route path="/posts" element={<Posts />} />
            </Route>
            <Route path="/post/:postId" element={<PrivateRoute />}>
              <Route path="/post/:postId" element={<Post />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
