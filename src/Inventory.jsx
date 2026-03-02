import React, { useState, useRef } from 'react'
import searchicon from './assets/searchicon.png'
import backarrow from './assets/backarrow.png'

const Inventory = () => {
  const [inventoryData, setInventoryData] = useState([
    {
      orderID: "#123",
      product: "Prosdfasdretrekxcvnmerlweriowerkjdfgdfgsgdfgretertergdfgscvbfg",
      category: "Category 1",
      channel: "Online",
      minstock: 100,
      maxstock: 200,
      status: "Complete"
    }, {
      orderID: "#124",
      product: "Product 2",
      category: "Category 2",
      channel: "Offline",
      minstock: 50,
      maxstock: 100,
      status: "Pending"
    }, {
      orderID: "#125",
      product: "Product 3",
      category: "Category 3",
      channel: "Online",
      minstock: 200,
      maxstock: 300,
      status: "Complete"
    }, {
      orderID: "#126",
      product: "Product 4",
      category: "Category 4",
      channel: "Offline",
      minstock: 80,
      maxstock: 150,
      status: "Pending"
    }, {
      orderID: "#127",
      product: "Product 5",
      category: "Category 5",
      channel: "Online",
      minstock: 60,
      maxstock: 120,
      status: "Complete"
    }, {
      orderID: "#128",
      product: "Product 6",
      category: "Category 6",
      channel: "Offline",
      minstock: 30,
      maxstock: 90,
      status: "Pending"
    }, {
      orderID: "#129",
      product: "Product 7",
      category: "Category 7",
      channel: "Online",
      minstock: 150,
      maxstock: 250,
      status: "Complete"
    }, {
      orderID: "#130",
      product: "Product 8",
      category: "Category 8",
      channel: "Offline",
      minstock: 70,
      maxstock: 130,
      status: "Pending"
    }, {
      orderID: "#131",
      product: "Product 9",
      category: "Category 9",
      channel: "Online",
      minstock: 90,
      maxstock: 180,
      status: "Complete"
    }])
  const [value, setvalue] = useState('Status');
  const [show_add_new_stock, set_show_add_new_stock] = useState(false);
  
  const product_name = useRef();
  const product_category = useRef();
  const product_channel = useRef();
  const product_maxstock = useRef();
  const product_minstock = useRef();
  const product_price = useRef();
  const product_remark = useRef();
  

  function function_select_option() {
    setvalue(select_option.current.value);
  }

  function add_new_inventory() {

    setInventoryData(prev => {
      return([...prev, {
         orderID: `#${Math.floor(Math.random() * 10000)}`,
      product: product_name.current.value,
      category: product_category.current.value,
      channel: product_channel.current.value,
      minstock: Number(product_minstock.current.value),
      maxstock: Number(product_maxstock.current.value),
      price: Number(product_price.current.value),
      status: "Complete"
      }])
    })

    set_show_add_new_stock(false)
  
  }


  const select_option = useRef('status');
  return (
    <div className='full_container'>
      <header className='container_header'>
        <p>Inventory</p>
        <button onClick={() => { set_show_add_new_stock(true) }}>+ New Stock</button>
      </header>

      <div className='search_container'>

        <div className='only_search_contianer'>
          <input type="text" placeholder='Enter product name' />
          <img src={searchicon} alt="search icon" />

        </div>

        <div className='select_status_container'>

          <select onChange={function_select_option} ref={select_option} name="" id="">
            <option value="Status">Status</option>
            <option value="Complete">Complete</option>
            <option value="Pending">Pending</option>
          </select>

        </div>

      </div>

      <div className="table_container">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Category</th>
              <th>Channel</th>
              <th>Stock</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody >


            {
              inventoryData.filter((item) => {

                if (value == "Status") {
                  return true;
                }
                return item.status == value;

              }).map((item, index) => {
                return (

                  <tr key={index}>
                    <td>{item.orderID}</td>
                    <td>{item.product}</td>
                    <td>{item.category}</td>
                    <td>{item.channel}</td>
                    <td>{item.minstock} / {item.maxstock}</td>
                    <td className='item_status'
                    ><p style={item.status == "Complete" ? { backgroundColor: "#52B788", color: "#1B4332" } : { backgroundColor: "#BCE784", color: "#3F4010" }}>{item.status}</p></td>
                  </tr>

                )
              })


            }
          </tbody>
        </table>


      </div>

      <div style={{ display: show_add_new_stock ? 'block' : 'none' }} className='adding_new_stock'>
        <div className='adding_new_stock_header'>
          <img src={backarrow} alt="back_arrow" onClick={() => { set_show_add_new_stock(false) }} />
          <p>Add New Product</p>
        </div>

        <div className='adding_new_stock_body'>
          <div className='add_productname'>
            <label htmlFor="">Product Name*:</label>
            <input ref={product_name} type="text" />
          </div>

          <div className='select_container'>
            <div className='add_category'>
              <label htmlFor="">Category*:</label>
              <select  ref={product_category} name="" id="">
                <option value="">Select Category</option>
                <option value="Category1">Category 1</option>
                <option value="Category2">Category 2</option>
                <option value="Category3">Category 3</option>
              </select>
            </div>

            <div className='add_channel'>
              <label htmlFor="">Channel*:</label>
              <select  ref={product_channel} name="" id="">
                <option value="">Select Channel</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>

          </div>

          
          <div className='stock'>
             <div className='add_maxstock'>
            <label htmlFor="">Maximum Stock*:</label>
            <input ref={product_maxstock} type="number" />
            </div>

            <div className='add_minstock'>
              <label htmlFor="">Minimum Stock*:</label>
              <input ref={product_minstock} type="number" />
            </div>
          </div>


          <div className='price_remark'>
            <div className='add_price'>
            <label htmlFor="">Price*:</label>
            <input ref={product_price} type="number" />
            </div>

            <div className='add_remark'>
              <label htmlFor="">Remark:</label>
              <input ref={product_remark} type="text" />
            </div>
          </div>
        
          <div className='cancle_save_button'>
            <button onClick={() => { set_show_add_new_stock(false) }}>Cancel</button>
            <button onClick={add_new_inventory}>Save</button>
          </div>

        </div>
      </div>
    </div>


  )
}

export default Inventory
