import { useContext } from "react"
import { dataContext } from "../context/data-context"

export default function Card({id,desc,title,price,img}) {
    "use no memo";
    const {updateData} = useContext(dataContext)
    function addproduct(event) {
        updateData(event)
    }
    return(<div className="box">
                <div>
                <div className="img-box">
                    <img src={img} alt=""/>
                </div>
                        <div className="detail-box">
                          <h5>
                            {title}
                          </h5>
                          <p>
                            {desc}
                          </p>
                          <div className="options">
                            <h6>
                             ₹{price}
                            </h6>
                            <a className="user_link" onClick={() => addproduct({id,desc,title,img})}>
                              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>)
}