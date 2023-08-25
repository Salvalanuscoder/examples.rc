import "../../styles/card/card.css"
import { Link } from 'react-router-dom'

const ItemCard = ({item}) =>{
     return(
        <div className='col-3 m-2 card'>
                    <h4 className="item">{item.name}</h4>
                    <img className="img" src={item.img} alt={item.nombre} />
                    <p className="price">precio: ${item.price}</p>
                    <Link to={`/detail/${item.id}`} className='btn-btn-primary'>ver mas</Link>

                    <svg id="visual" viewBox="0 0 900 600" width="400" height="200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(416.0598775796087 304.34834216957654)"><path d="M130.1 -119.8C180.1 -80.1 240.1 -40.1 238.8 -1.3C237.5 37.5 175 75 125 109.3C75 143.6 37.5 174.8 -14.4 189.2C-66.2 203.6 -132.5 201.1 -157.5 166.8C-182.5 132.5 -166.2 66.2 -159.6 6.6C-153 -53 -156.1 -106.1 -131.1 -145.7C-106.1 -185.4 -53 -211.7 -6.5 -205.2C40.1 -198.7 80.1 -159.5 130.1 -119.8" fill="#2bce4d"></path></g></svg>
                </div>
     )
}

export default ItemCard