
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {

  const [fetchedData, setFetchedData]= useState([]);
  

  useEffect(()=>{

   let response= fetch("https://dummyjson.com/products");
   console.log(response);
   response
   .then(responseObj=> responseObj)
   .then(resObjPromise=> resObjPromise.json())
   .then(data=>{
            console.log(data.products);
            setFetchedData(data.products)
            
          })
   .catch(err=>console.log(err));
    
    
    
  },[]);

  return (
    <div>
        <h1>Data fetched from API</h1>
        {fetchedData.length>0 && fetchedData.map(product=>{

          return(<pre key={product.id}>
                  <h2>{product.title}</h2>
                  <img src={product.images[0]} ></img>
                  <h3>{product.brand}</h3>
                  <p>{product.category}</p>
                  <p>{product.discription}</p>
                  <p>{product.price} </p>
                  <p>{product.rating}</p>
                  <p>{product.stock}</p>

                </pre>)
        })}
    </div>
  )
}

export default App
