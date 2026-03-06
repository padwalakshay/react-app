import Cart from "../Cart"
import data from "../../service/data";
import { dataContext } from "../../context/data-context";
import { useContext } from "react";

export default function Orders() {
    const ele = data[0];
    const dataArr = useContext(dataContext);
    const renserArr = dataArr.data.reduce((prev,next) => {
            if(!(prev.includes(next.id))) prev.push(next)
            return prev;
    },[])
    return(
        <section className="book_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
            Orders
        </h2>
      </div>
      <div className="row"> 
        <div className="col-md-12">
          <div className="form_container">
            <div className="carts">
               {
                renserArr.map((m, index) => {
                 return <Cart key={index} ele={m}/>
                })
               }
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
    )
}