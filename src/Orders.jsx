import React,{useState,useRef} from 'react'
import searchicon from './assets/searchicon.png'

const Orders = () => {
    const [value,setvalue] = useState('Status');
    const [channel,setchannel] = useState('Channel');
  
   
   
     const OrdersData = [
        {
            orderID :'#123',
            date: '05/10/2023',
            customer: 'John Doe',
            channel: 'Online',
            destination:  'New York',
            totalitems: 3,
            status: 'Complete'
        },
        {
            orderID :'#124',
            date: '06/10/2023',
            customer: 'Jane Smith',
            channel: 'Offline',
            destination:  'Los Angeles',
            totalitems: 5,
            status: 'Pending'
        },
        {
            orderID :'#125',
            date: '07/10/2023',
            customer: 'Alice Johnson',
            channel: 'Online',
            destination:  'Chicago',
            totalitems: 2,
            status: 'Complete'
        },{
            orderID :'#126',
            date: '08/10/2023',
            customer: 'Bob Brown',
            channel: 'Offline',
            destination:  'Houston',
            totalitems: 4,
            status: 'Pending'
        },
        {
            orderID :'#127',
            date: '09/10/2023',
            customer: 'Charlie Davis',
            channel: 'Online',
            destination:  'Phoenix',
            totalitems: 1,
            status: 'Complete'
        }
     ]
  
      const select_option = useRef('status');
    return (
      <div className='full_container'>
        <header className='container_header'>
          <p>Orders</p>
          <button>+ New Stock</button>
        </header>
  
        <div className='search_container'>
  
          <div className='only_search_contianer'>
            
            <input type="text" placeholder='Enter Name' />
            <img src={searchicon} alt="Search Icon" />
          </div>
          
          <div className='select_status_container'>
            
              <select value={channel} onChange={(e)=>setchannel(e.target.value)}>
                <option value="Channel">Channel</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>

              <select  onChange={(e)=>setvalue(e.target.value)} ref={select_option} name="" id="">
                  <option value="status">Status</option>
                  <option value="complete">Complete</option>
                  <option value="pending">Pending</option>
              </select>
          </div>
  
        </div>
  
        <div className="table_container">
          <table>
            <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Name</th>
              <th>Channel</th>
              <th>Destination</th>
              <th>Stock</th>
              <th>Status</th>
              </tr>
              </thead>
              <tbody>
  
  
              {
                OrdersData.filter((item)=>{
                 
                  if(value=="Status"){
                      return true;
                  }
                  if(value=="Complete"){
                      return item.status=="Complete";
                  }
                  if(value=="Pending"){
                      return item.status=="Pending";
                  }
                  
                }).filter((item)=>{

                   if(channel=="Channel"){
                      return true;
                  }
                  if(channel=="Online"){
                      return item.channel=="Online";
                  }
                  if(channel=="Offline"){
                      return item.channel=="Offline";
                  }
                  
                }).map((item,index)=>{
                    
                   return(
                      
                      <tr key={index}>
                          <td>{item.orderID}</td>
                          <td>{item.date}</td>
                          <td>{item.customer}</td>
                          <td className='channel_status'><p>{item.channel}</p></td>
                          <td>{item.destination}</td>
                          <td>{item.totalitems}</td>
                          <td className='item_status'><p style={item.status=="Complete" ? {backgroundColor:"#52B788",color:"#1B4332"}: {backgroundColor:"#BCE784",color:"#3F4010"}}>{item.status}</p></td>
                      </tr>
                   
                  )
                })
  
                
              }
              </tbody>
          </table>

        </div>

        <div style={{display:'none'}}>
          <div>
            <img src="" alt="" />
            <p></p>
          </div>
        </div>

        <div>
          <div>
            <label htmlFor=""></label>
          </div>
        </div>
        

      </div>
    )
}

export default Orders
