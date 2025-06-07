import { Route, Routes } from 'react-router-dom';
import './App.css';
import EventPage from './assets/pages/EventPage';
import EventDetailPage from './assets/pages/EventDetailsPage';
import BookingEvent from './assets/pages/BookingEvent';
import Navbar from './assets/components/Nav';
import Sidebar from './assets/components/Sidebar';
import Footer from './assets/components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<EventPage />} />
          <Route path="/events/:id" element={<EventDetailPage />} />
          <Route path="/events/booking/:id" element={<BookingEvent />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
