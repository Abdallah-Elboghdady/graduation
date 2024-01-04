
import { useDispatch, useSelector } from 'react-redux'
import './cart.css'
import { clear, deleteFromCart, minus, plus } from '../../rtk/slices/cart-slice'
import toast, { Toaster } from 'react-hot-toast';


function CardDetails() {

    const cart=useSelector(state => state.cart)
    const dispatch=useDispatch()

    const totalPrice= cart.reduce((acc,product)=>{
        acc += product.price * product.quantity
        return acc
    },0)

    function deleteMessage(){
       toast.success("Product is deleted from cart");
    }
    function clearCart(){
       toast.success("Cart is cleared");
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
        <div className="container pt-5">
        <h2 className="py-5 text-center">your Cart</h2>
        <button className='btn btn-outline-primary mb-5' onClick={()=> {
            dispatch(clear())
            clearCart()
            }}>Clear Cart</button>
        </div>    
        <table className="table table-bordered table-striped table-dark mx-auto container">
            <thead>
                <th>Id</th>
                <th className='min-width'>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantaty</th>
                <th>Action</th>
            </thead>
            <tbody>
                {
                    cart?.map((product,index)=>{
                        return(
                            <tr key={index}>
                                <td>{product.id}</td>
                                <td className="cart-img min-width"><img src={product.thumbnail} alt="img" /></td>
                                <td>{product.title}</td>
                                <td>{product.price} $</td>
                                <td><span className='me-2' onClick={()=> dispatch(minus(product))}>-</span> {product.quantity} <span className='ms-2' onClick={()=> dispatch(plus(product))}>+</span></td>
                                <td><button className="btn btn-danger" onClick={()=> {
                                    deleteMessage()
                                    dispatch(deleteFromCart(product))
                                    
                                    }}>Delete</button></td>
                            </tr>
                           
                        )
                    })
                }
                <tr>
                    <td>Total</td>
                    <td className=" text-center" colSpan="5">{totalPrice} $</td>
                </tr>
            </tbody>
        </table>
    </>

  )
}

export default CardDetails