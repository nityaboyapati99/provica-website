import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";
import ProductPage from "./pages/ProductPage";
import ManufacturingPage from "./pages/ManufacturingPage";
import ContactPage from "./pages/ContactPage";

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<StoryPage variant="about" />} />
      <Route path="/our-story" element={<StoryPage variant="story" />} />
      <Route path="/farmers-sustainability" element={<StoryPage variant="farmers" />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/manufacturing-excellence" element={<ManufacturingPage />} />
      <Route path="/certifications" element={<ManufacturingPage certificationsOnly />} />
      <Route path="/careers" element={<StoryPage variant="careers" />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/distributor-inquiry" element={<ContactPage distributorMode />} />
    </Route>
  </Routes>
);

export default App;
