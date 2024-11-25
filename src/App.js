import { useEffect, useState } from 'react';
import './App.css';
import ProductsCard from './ProductsCard';
import AddModal from './AddModal'
function App() {

  let [products, setProducts] = useState([]);
  let [sproducts,setSproducts] =useState([]);

  let [search,setSearch]=useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://mocki.io/v1/db373edf-0936-4cac-add3-e4eb8f21bd25");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []); 


  useEffect(()=>
    setSproducts(products.filter((p)=> p.title.toLowerCase().includes(search.toLowerCase()))),[search,products])

  const addItem=(title,description,image,price,rating,difficulty)=>{
    let item ={title,description,image,price,rating,difficulty}
    setProducts([item,...products])

  }


  const deleteItem=(id)=>{
    setProducts(products.filter((p)=> p.id!==id));
  }

  const updateItem=(id,nPrice)=>{
    setProducts(products.map((p) => 
      p.id === id ? { ...p, price: nPrice } : p
    ));
  }
  return(
    <div className='main'>
      <div className='nav'>
        <input className='ip search' type='text' placeholder='search recipes' onChange={(e)=>{setSearch(e.target.value)}}/>
        <AddModal addItem={addItem}/>
      </div>
      <div className='card-container'>
        {
          search.length>0?
          sproducts.map((p)=><ProductsCard deleteItem={deleteItem} updateItem={updateItem} id={p.id} title={p.title} difficulty={p.difficulty} image={p.image} price={p.price} description={p.description} rating={p.rating}/>)
          :products.map((p)=><ProductsCard deleteItem={deleteItem} updateItem={updateItem} id={p.id} title={p.title} difficulty={p.difficulty} image={p.image} price={p.price} description={p.description} rating={p.rating}/>)
        }
      </div>
    </div>
  )


  }

export default App;
