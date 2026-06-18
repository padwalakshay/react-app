import { useState, useEffect } from 'react';
import axios from 'axios';
// import data from '../service/data';
import Card from './Card';
import debounce from '../utility/debounce';

export default function Menu() {
  "use no memo";
    const [isActive, setActive] = useState(1);
    const [allData, setAllData] = useState([]);
    const [filter, setFilter] = useState('all');
    const [inputValue, setInputValue] = useState("");

    const searchStyle1 = {
        border: '2px solid transparent',
        width: '27em',
        height: '2.5em',
        'paddingLeft': '0.8em',
        outline: 'none',
        'overflow': 'hidden',
        'backgroundColor': '#F3F3F3',
        'borderRadius': '10px',
        transition: 'all 0.5s'
    };

    const menuItems = [
      { id: 1, title: 'All' },
      { id: 2, title: 'Burger' },
      { id: 3, title: 'Pizza' },
      { id: 4, title: 'Pasta' },
      { id: 5, title: 'Fries' },

    ]
    useEffect(() => {
        (async () => {
              await axios.get(`${import.meta.env.VITE_MY_API_URL}/api/products/${filter}`).then((result) => {
              setAllData(result.data);
            })
        })()
    },[filter])

    function handleClick(param, id) {
      setFilter(param);
      setActive(id)
    }
    async function getrecords() {
         const payload = {
            val: inputValue.trim()
         }
         await axios.post(`${import.meta.env.VITE_MY_API_URL}/ai/search`, {data:JSON.stringify(payload)}).then(({data}) => {
            setAllData(data);
            setInputValue('');
        });
    }
   return(
      <section className="food_section layout_padding">
    <div className="container">
      <div style={{"display": "inline-block"}}> 
    <span style={{ "display":"block", "marginLeft":"340px", "float":"left" }}>
    <input className="search" style={searchStyle1} placeholder="search" onChange={(e) => setInputValue(e.target.value)}>
    </input>
    </span>
    <span style={{"float":"right", "cursor":"pointer"}} onClick={() => getrecords()}><i className="fa fa-lg fa-search" aria-hidden="true"></i></span>
    </div>
      <div className="heading_container heading_center">
        <h2>
        </h2>
      </div>

      <ul className="filters_menu">
        {menuItems.map(({id, title}) => {
        return <li key={id} className={isActive == id ? 'active': ''} onClick={(e) => handleClick(title.toLowerCase(), id)}>{title}</li>
        })}
      </ul>

      <div className="filters-content">
        <div className="row grid">
          {allData.map(({id,title,desc,price,img}, index) => {
          return (<div key={index} className="col-sm-6 col-lg-4 all pizza">
            <Card id={id} title={title} desc={desc} price={price} img={img}/>
          </div>)
          })}
        </div>
      </div>
    </div>
  </section>
   )
}
