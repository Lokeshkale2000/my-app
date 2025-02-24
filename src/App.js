
import './App.css';
import CompanyOverview from './components/companyover/CompanyOverview';
import Footer from './components/footer/Footer';
import MainSlider from './components/mainslider/MainSlider';
import Navbar from './components/navbar/Navbar';
import ProductList from './components/product/ProductList';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <MainSlider></MainSlider>
      
      <CompanyOverview></CompanyOverview>
      <ProductList></ProductList>
      <Footer></Footer>
    </div>
  );
}

export default App;
