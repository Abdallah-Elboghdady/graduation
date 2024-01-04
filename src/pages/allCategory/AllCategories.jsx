import { useEffect, useState } from "react"
import './allCategories.css'
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { addToCart } from "../../rtk/slices/cart-slice";


function AllCategories() {

    const {categoryName}=useParams()
    const [data,setData]=useState()
    const [test,setTest]=useState()
    useEffect(()=>{
        fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then(data=>setData(data));
    },[])

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/category/${categoryName}`)
        .then(res => res.json())
        .then(data=>setTest(data.products));
    },[categoryName])

    const dispatch=useDispatch()
    function showToast(){
        toast.success("Product is added to cart");
    }

  return (
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
        <div className="container">
             <div className="papa pt-5">
            <div className="cat ">
                <h1 className="text-center my-5">All Categories</h1>
                <ul className="d-flex flex-wrap mx-auto">
                    {
                        data?.map((category,index)=>{
                            return(
                                <Link key={index} to={`/allCategories/${category}`} ><li className="li">{category}</li></Link>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="" >
                <h3 className="text-center mb-5">{categoryName} Category</h3>
              <div className="row">
                  {
                            test?.map((product,index)=>{
                                return(
                                                <div key={index} className="col-md-6 col-lg-4 col-xl-3 mb-5">
                            <div className="card" data-bs-theme="dark">
                                <img src={product.thumbnail} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">Price : {product.price}$</p>
                                    <Link to={`details/${product.id}`} className="btn btn-outline-primary">Details</Link>
                                    <button onClick={()=>{
                                        dispatch(addToCart(product))
                                        showToast()
                                    }} className="btn btn-outline-success ms-4">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                                )
                            })
                        }
              </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default AllCategories