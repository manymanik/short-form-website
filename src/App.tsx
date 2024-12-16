import Header from './components/Header';
import VideoShowcase from './components/VideoShowcase';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Offer from './components/Offer';

function App() {
  return (
    <div className="bg-black">
      <Header />
      <VideoShowcase />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <Offer />
    </div>
  );
}

export default App;