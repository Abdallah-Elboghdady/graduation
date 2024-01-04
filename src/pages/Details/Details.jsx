import { useEffect, useRef, useState } from "react"
import {  useParams } from "react-router-dom"
import './details.css'
import { useDispatch } from "react-redux"
import { addToCart } from "../../rtk/slices/cart-slice"
import toast, { Toaster } from "react-hot-toast"

function Details() {

    const {productId}=useParams()
    let imageInp=useRef()
    const [data,setData]=useState()

    useEffect(()=>{   
        fetch(`https://dummyjson.com/products/${productId}`)
        .then(res => res.json())
        .then(data=>setData(data));
    },[productId])

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
            <div className="row ">
                <div className="col-md-12 col-lg-5 mt-5 pt-5">
                    <div className="img">
                        <img ref={imageInp}  src={data?.thumbnail}  alt="product-img" />
                        <div className="images d-flex gap-2">
                            {
                                data?.images.map((image,index)=>{
                                    return(
                                        <img key={index} src={image} alt="img" onClick={(e)=>{
                                            imageInp.current.src=e.target.src
                                        }}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className=" text col-md-12 col-lg-7">
                    <h2 className="title">Title : {data?.title}</h2>
                    <p>Category : {data?.category}</p>
                    <p>Brand : {data?.brand}</p>
                    <p>Description : {data?.description}</p>
                    <p>Price : {data?.price} $</p>
                    <p>Descount : {data?.discountPercentage} %</p>
                    <p>Rating : {data?.rating} of 5</p>
                    <button className="btn btn-success" onClick={()=> {
                        dispatch(addToCart(data))
                        showToast()
                        }}>Add To Cart</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Details