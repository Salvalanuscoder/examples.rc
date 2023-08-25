import ItemCard from "../ItemCard/ItemCard";


const ItemList = ({ productos }) => {
    if (!productos) {
      return <div>Loading...</div>; // o algún indicador de carga
    }
    return (

        <div className="catalogo-contenedor">
        <h2>Item List Container</h2>
        <hr />

       
        {["paula", "luna", "clemen"]}

        <div className='row'>
        {
            productos.map((prod) => <ItemCard key={prod.id} item={prod}/>)
        }


       </div> 
       </div>

)    
}

export default ItemList 