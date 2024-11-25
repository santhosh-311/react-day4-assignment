import DeleteItem from "./DeleteModal";
import UpdateModal from "./UpdateModal";

const ProductsCard = (props) => {
    return (
      <div className="card">
        <img className="card-img" src={props.image} alt="Not found"/>
        <div className="details">
            <p className="title">{props.title}</p>
            <p className="description">{props.description}</p>
            <div className="info">
                <p className="price"><span>$</span>{props.price}</p>
                <div className="info-box">
                    <p className="diff">{props.difficulty}</p>
                    <span></span>
                    <p className="rating">{props.rating}</p>
                </div>
            </div>
        </div>
        <div className="btn-container">
            <UpdateModal updateItem={props.updateItem} id={props.id}/>
            <DeleteItem deleteItem={props.deleteItem} id={props.id}/>
        </div>
      </div>
    );
  };
  
  export default ProductsCard;
  