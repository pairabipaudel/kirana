import React from 'react'
import moneyicon from './assets/moneyicon.png'
const Dashboard = () => {

  const stockAlert = [
    {orderId: 123,
      date: '123-234',
      quality: 'preety',
      alertAmount: '234',
      status:'good'
    },
    {orderId: 123,
      date: '123-234',
      quality: 'preety',
      alertAmount: '234',
      status:'good'
    },
    {orderId: 123,
      date: '123-234',
      quality: 'preety',
      alertAmount: '234',
      status:'good'
    }
  ]
  return (
    <div className='full_container'>

      <header className='container_header'>
        <p>Dashboard</p>
        
      </header>

      <div className='milestone_container'>
        <div className='revenue_container'>
          <div>
            <p>Revenue</p>
          </div>
          <div>
              <img src={moneyicon} alt="revenue icon" />
           <p>+2000</p>
          </div>      
        </div>

        <div className='revenue_container'>
          <div>
            <p>Sales Return</p>
          </div>
          <div>
              <img src={moneyicon} alt="salesreturn icon" />
            <p>+30000</p>
          </div>  
        </div>

        <div className='revenue_container'>
          <div>
             <p>Purchase</p>
          </div>
          <div>
            <img src={moneyicon} alt="purchase icon" />
           <p>+30000</p>
          </div>  
        </div>

        <div className="revenue_container">
          <div>
            <p>Income</p>
          </div>
          <div>
            <img src={moneyicon} alt="income icon" />
            <p>+30000</p>
          </div>
          
        </div>
      </div>
   
      <div className='middle_bargraph_topseller_container'>
      <div className='bargraph_container'>

      </div>

      <div className="topselling_product_container">
         <p>Top Selling Product</p>
         <img src="" alt="" />
      </div>
      </div>

      <div className='tables_container'>
         <div className="table_container table1">
            <table>
              <thead>
                <tr>
                  <th>OrderID</th>
                  <th>Date</th>
                  <th>Quality</th>
                  <th>Alert amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  stockAlert.map((item,index)=>{
                return(
                  <tr key={index}>
                    <td>{item.orderId}</td>
                    <td>{item.date}</td>
                    <td>{item.quality}</td>
                    <td>{item.alertAmount}</td>
                    <td>{item.status}</td>
                  </tr>
                )
              })

                }
                
              </tbody>
            </table>
         </div>

         <div className='table_container table2'>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Quality</th>
                <th>Alert amount</th>
              </tr>
            </thead>
            <tbody>
             {
              stockAlert.map((item,index)=>{
                return(
                  <tr key={index}>
                    <td>{item.orderId}</td>
                    
                    <td>{item.quality}</td>
                    <td>{item.alertAmount}</td>
                    
                  </tr>
                )
              })
             }
            </tbody>
          </table>
         </div>
      </div>
      
    </div>
  )
}

export default Dashboard
