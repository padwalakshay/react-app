import { useState } from 'react';
import data from '../service/data';
import Card from './Card';

export default function Menu() {
    const [filter, setFilter] = useState('all');
    const [isActive, setActive] = useState(1)

    const menuItems = [
      { id: 1, title: 'All' },
      { id: 2, title: 'Burger' },
      { id: 3, title: 'Pizza' },
      { id: 4, title: 'Pasta' },
      { id: 5, title: 'Fries' },

    ]

    const filteredData =
      filter === 'all'
        ? data
        : data.filter(m => m.type === filter);

    function handleClick(param, id) {
      setFilter(param);
      setActive(id)
    }
   return(
      <section className="food_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Our Menu
        </h2>
      </div>

      <ul className="filters_menu">
        {menuItems.map(({id, title}) => {
        return <li key={id} className={isActive == id ? 'active': ''} onClick={(e) => handleClick(title.toLowerCase(), id)}>{title}</li>
        })}
      </ul>

      <div className="filters-content">
        <div className="row grid" style={{position: "relative", height: "1330.5px"}}>
          {filteredData.map(({id,title,desc,price,style,img}, index) => {
          return (<div key={index} className="col-sm-6 col-lg-4 all pizza" style={{style}}>
            <Card id={id} title={title} desc={desc} price={price} img={img}/>
          </div>)
          })}
        </div>
      </div>
      <div className="btn-box">
        <a href="">
          View More
        </a>
      </div>
    </div>
  </section>
   )
}
