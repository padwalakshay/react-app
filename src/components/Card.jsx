import { useContext } from "react"
import { dataContext } from "../context/data-context"

export default function Card({id,desc,title,price,logo,img}) {
    
    const {updateData} = useContext(dataContext)
    function addproduct(event) {
        updateData(event)
    }
    return(<div className="box">
                <div>
                <div className="img-box">
                    <img src={`https://d34vtafkyex6rk.cloudfront.net/images/${img}`} alt=""/>
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
                             {price}
                            </h6>
                            <a onClick={() => addproduct({id,desc,title,img})}>
                              <img src={logo}></img>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>)
}