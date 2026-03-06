import { useReducer } from "react"
import { cart } from "../store/Cart-store"

function reducer(state, action) {
    if(action === 'increment') {
       return {count: state.count + 1}
    }else {
        return {count: state.count - 1}
    }
}

export default function Cart({ele}) {
    const increasecount = cart((state) => state.increasecount);
    const count = cart((state) => state.count)
    const [state, dispatch] = useReducer(reducer, {ele, count:1})
    function changecount(act) {
        dispatch(act)
    }
    return(
        <div className="row cartImage">
            <div className="col-md-2">
                    <img src={`/images/${ele.img}`}/>
            </div>
            <div className="col-md-6">
                <h2>{ele.title}</h2>
                <p>{ele.desc}</p>
            </div>
            <div className="col-md-2 pins">
                <span><a onClick={increasecount}><i className="fa fa-plus" aria-hidden="true" ></i></a></span>
                <span>{count}</span>
                <span><a onClick={decrement}><i className="fa fa-minus" aria-hidden="true"></i></a></span>
            </div>
        </div>
    )
}