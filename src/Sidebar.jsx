import React,{useState} from 'react'
import './Sidebar.css'
import {useNavigate}from 'react-router-dom'
import inventoryicon from './assets/inventoryicon.png'
import ordersicon from './assets/ordericon.png'
import productsicon from './assets/producticon.png'
import usersicon from './assets/usericon.png'
import dashboardicon from './assets/dashboardicon.png'

const Sidebar = () => {
      
    const [selectPage, setSelectPage]=useState(0);

    const navigate = useNavigate();
    let sidebarItems = [
        {
            image:dashboardicon,
            name:"Dashboard"
        },
        {
            image:inventoryicon,
            name:"Inventory"
        },
        {
            image:ordersicon,
            name:"Orders"
        },
        {
            image:productsicon,
            name:"Products"
        },
        {
            image:usersicon,
            name:"Users"
        },
    ]
   
    function select_single_display_function(item,index){
        setSelectPage(index);
        navigate(`/${item.name.toLowerCase()}`)
    }
    
  return (
    <div className='sidebar_full_container'>
      {
        sidebarItems.map((item,index)=>{
            return(
                <div style={{fontWeight:selectPage==index ? 'var(--bolder-font-weight)': undefined }} className='sidebar_single_display' onClick={()=> select_single_display_function(item,index)} key={index} >
                <img src={item.image} alt={`${item.name} icon`} />
                <p style={{color:selectPage==index ? 'white': 'grey'}} >{item.name}</p>
                </div>
                )
        })
      }
    </div>
  )
}

export default Sidebar
