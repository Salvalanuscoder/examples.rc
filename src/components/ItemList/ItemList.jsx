import ItemCard from "../ItemCard/ItemCard";


const ItemList = ({productos}) => {
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