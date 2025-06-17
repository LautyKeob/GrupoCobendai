import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import BrandPage from './pages/BrandPage';
import ModelDetailPage from './pages/ModelDetailPage';
import UsedVehiclesPage from './pages/UsedVehiclesPage';
import ProfessionalVehiclesPage from './pages/ProfessionalVehiclesPage';
import RentalPage from './pages/RentalPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import ServiceAppointmentPage from './pages/ServiceAppointmentPage';
import VehicleDetailPage from './pages/VehicleDetailPage';
import VirtualExhibitionPage from './pages/VirtualExhibitionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="brand/:brandId" element={<BrandPage />} />
          <Route path="model/:id" element={<ModelDetailPage />} />
          <Route path="used-vehicles" element={<UsedVehiclesPage />} />
          <Route path="professional-vehicles" element={<ProfessionalVehiclesPage />} />
          <Route path="rental/:type" element={<RentalPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="service-appointment" element={<ServiceAppointmentPage />} />
          <Route path="vehicle/:id" element={<VehicleDetailPage />} />
          <Route path="virtual-exhibition/:id" element={<VirtualExhibitionPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;