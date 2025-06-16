
import './App.css';
import ListProduct from './components/ListProduct';
import FormProduct from './components/FormProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="container mt-4">
      <FormProduct />
       <h1 className="text-center mb-4">Quản lý sản phẩm</h1>
      <ListProduct />
    </div>
  );
}

export default App;
