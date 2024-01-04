
import './home.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../rtk/slices/cart-slice'
import toast, { Toaster } from 'react-hot-toast';
function Home(){
    const [data,setData]=useState()
    const dispatch=useDispatch()


    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then(data=>setData(data.products))
    },[])

    function showToast(){
        toast.success("Product is added to cart");
    }

    return(
        <>
         <Toaster 
            toastOptions={{
                success: {
                    style: {
                        background: 'black'
            },
    }
  }}
         />
            <div className="image">
                <div className="text " >
                    <h1 data-aos="zoom-in" data-aos-duration="1000">Welcome To Our Shop</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, sint?</p>
                    <Link to={'/allCategories'} className='btn  btn-outline-info  text-center'>Get All Categories</Link>
                </div>
            </div>
            <div className="products">
                <h2 className='p-5 text-center'>All Products</h2>
                <div className="container">
                    <div className="row">
                        {
                            data?.map((product,index)=>{
                                return(
                                    <div key={index} className="col-md-6 col-lg-4 col-xl-3 mb-5">
                            <div className="card" data-aos="fade-up" data-aos-duration="500" data-bs-theme="dark">
                                <img src={product.thumbnail} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">Price : {product.price}$</p>
                                    <Link to={`details/${product.id}`} className="btn btn-outline-primary">Details</Link>
                                    <button onClick={()=>{
                                        dispatch(addToCart(product))
                                        showToast()
                                    }}  className="btn btn-outline-success ms-4">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                                )
                            })
                            
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home