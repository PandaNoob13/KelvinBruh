import './App.css';
import ProductForm from './features/product/ProductForm';
import { UserProvider } from './context/state';
import { ProductService } from './service/ProductService'

function App() {
  return (
    <div className="App">
      <UserProvider service={{productService: ProductService()}}>
        <ProductForm/>
      </UserProvider>
    </div>
  );
}

export default App;
