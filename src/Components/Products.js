let productCount=0;
//let imageUrl=require("../images/fresh-milk.jpg");
let isAvailable='Available';
let badgeClass='badge-margin-left-240 ';
badgeClass += isAvailable === 'Available' ? 'badge badge-success' : 'badge badge-danger';

function displayFormattedProductCount(){
  return productCount > 0 ? productCount : "Zero";
}
export default function Products(props){
   return (<ul className="list-group shadow">
   <li className="list-group-item">
     <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
       <div className="media-body order-2 order-lg-1">
         <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
         <p className="font-italic text-muted mb-0 small">{props.description}</p>
         <div className="d-flex align-items-center justify-content-start mt-1">
           <h6 className="font-weight-bold my-2" style={ {'marginRight':30} }>${props.price}</h6>
           <button className="btn btn-primary">-</button>
              <span style={{padding:'0px 14px', 'fontSize':14}}>{displayFormattedProductCount()}</span>
           <button className="btn btn-primary">+</button>
           <span className={badgeClass} >{isAvailable}</span>
         </div>
       </div>
      
       </div>
   </li>
</ul>)
}