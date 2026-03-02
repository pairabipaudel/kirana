import React,{useState, useRef} from 'react'
import searchicon from './assets/searchicon.png'

const Products = () => {
    const select_option = useRef('')
    const [value, setvalue]=useState('Category');
    const productData=[
        {id:1, productName:"Milk", category:"Dairy", price:25, stock:100, remark:"Fresh"},
        {id:2, productName:"Bread", category:"Bakery", price:15, stock:50, remark:"Whole Wheat"},
        {id:3, productName:"Eggs", category:"Dairy", price:10, stock:200, remark:"Free Range"},
        {id:4, productName:"Butter", category:"Dairy", price:30, stock:80, remark:"Unsalted"},
        {id:5, productName:"Cheese", category:"Dairy", price:40, stock:60, remark:"Cheddar"},
        {id:1, productName:"Milk", category:"Dairy", price:25, stock:100, remark:"Fresh"},
        {id:2, productName:"Bread", category:"Bakery", price:15, stock:50, remark:"Whole Wheat"},
        {id:3, productName:"Eggs", category:"Dairy", price:10, stock:200, remark:"Free Range"},
        {id:4, productName:"Butter", category:"Dairy", price:30, stock:80, remark:"Unsalted"},
        {id:5, productName:"Cheese", category:"Dairy", price:40, stock:60, remark:"Cheddar"},
        {id:1, productName:"Milk", category:"Dairy", price:25, stock:100, remark:"Fresh"},
        {id:2, productName:"Bread", category:"Bakery", price:15, stock:50, remark:"Whole Wheat"},
        {id:3, productName:"Eggs", category:"Dairy", price:10, stock:200, remark:"Free Range"},
        {id:4, productName:"Butter", category:"Dairy", price:30, stock:80, remark:"Unsalted"},
        {id:5, productName:"Cheese", category:"Dairy", price:40, stock:60, remark:"Cheddar"},
        {id:1, productName:"Milk", category:"Dairy", price:25, stock:100, remark:"Fresh"},
        {id:2, productName:"Bread", category:"Bakery", price:15, stock:50, remark:"Whole Wheat"},
        {id:3, productName:"Eggs", category:"Dairy", price:10, stock:200, remark:"Free Range"},
        {id:4, productName:"Butter", category:"Dairy", price:30, stock:80, remark:"Unsalted"},
        {id:5, productName:"Cheese", category:"Dairy", price:40, stock:60, remark:"Cheddar"},
    ]

    function function_select_option(){
        setvalue(select_option.current.value)
    }
   
  return (
    <div className='full_container'>
       <header className='container_header'>
        <p>Products</p>
       
       </header>

       <div className='search_container'>
        <div className='only_search_contianer'>
            
            <input type="text" placeholder='Enter product name' />
            <img src={searchicon} alt="Search Icon" />
        </div>

        <div className='select_status_container'>
            <select onClick={function_select_option} ref={select_option} name="" id="">
                <option value="Category">Category</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
            </select>
        </div>
        
        </div>
       
        <div className='table_container'>
            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Remark</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        productData.filter((item)=>{
                            if(value=="Category"){
                                return true;
                            }
                            if(item.category==value){
                                return true;
                            }
                        }).map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.productName}</td>
                                    <td>{item.category}</td>
                                    <td>${item.price}</td>
                                    <td>{item.stock}</td>
                                    <td>{item.remark}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Products
