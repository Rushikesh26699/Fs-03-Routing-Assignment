import {useEffect,useState,useContext}from 'react';
import "./Products.css"
import axios from "axios";
import myContext from '../../Context/Context';

function Products() {
     const [products,setProducts] = useState([])
     const {cart,setCart}  = useContext(myContext)

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            console.log(res.data);
            setProducts(res.data)
        })
    },[])


   

    return (
       <div className='products'>
         {products.map((ele)=>{
            return <div className='items'>
                <img src={ele.image} alt='' height="110px" width="120px"/>
                <h4 style={{margin:"0"}}>{ele.title}</h4>
                <p>Rs : {ele.price} /-</p> <p>{ele.rating.rate}/5</p>
                
                <p>Stock : {ele.rating.count} Units</p>
                <button id='btn' onClick={()=>{setCart([...cart,ele])
                alert("Added To Cart")}}>ADD TO CART</button>
            </div>
         })}
       </div>
    );
}

export default Products;