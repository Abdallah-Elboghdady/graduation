import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { useDispatch } from "react-redux"
import { addToCart } from "../../rtk/slices/cart-slice"

function Search() {
    const {searchTitle} = useParams()
    const [data,setData]=useState([])
      useEffect(()=>{
        fetch(`https://dummyjson.com/products/search?q=${searchTitle}`)
        .then(res => res.json())
        .then(data => setData(data.products));
    },[searchTitle])

    function showToast(){
        toast.success("Product is added to cart");
    }

    const dispatch=useDispatch()

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
    <div className="container pt-5">
    <h2 className="py-5 text-center">Your Results : {searchTitle}</h2>

    {
        data.length === 0 ? <h3 className="text-center">No Results</h3> :
        <div className="row">
                        {
                            data?.map((product,index)=>{
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
                                    }}  className="btn btn-outline-success ms-4">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                                )
                            })
                            
                        }
                    </div>
    }

    
   </div>
   </>
  )
}

export default Search