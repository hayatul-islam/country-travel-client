import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import TravelBooking from './components/TravelBooking/TravelBooking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Contact from './components/Contact/Contact';
import BookNow from './components/BookNow/BookNow';
import MyOrders from './components/MyOrders/MyOrders';
import ManageOrders from './components/ManageOrders/ManageOrders';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <PrivateRoute path="/travelBooking/:bookingId">
            <TravelBooking />
          </PrivateRoute>

          <Route path="/bookNow">
            <BookNow />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/myOrders">
            <MyOrders />
          </Route>

          <Route exact path="/manageOrders">
            <ManageOrders />
          </Route>

          <Route exact path="*">
            <NotFound />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
