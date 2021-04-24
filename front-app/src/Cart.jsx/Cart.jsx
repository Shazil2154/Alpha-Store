import CartList from "../CartList.jsx/CartList";

const Cart = ({onClick,bucket}) => {
    const price = bucket.reduce((acc,val)=>{
        return acc+val.price;
    },0)
    return (
        <div className='flex'>
        <div className='cart__left w-60 justify-start mt5'>
            <div className='cart__button '>
                <p
                 onClick={()=>onClick('home')} 
                 className="f6 link dim br3 ba bw1 ph3 pv2 mb2 dib black pointer" 
                 href="#0"
                 >Shop More</p>
            </div>
            <div>
                <hr className='ba'/>
            </div>
            <div>
                <p className='f1'> My Cart</p>
            </div>
            <div>
                {Object.entries(bucket).length?<CartList bucket={bucket} />:<h1>Your cart is Empty</h1>}
            </div>
        </div>

        <div className='cart__right w-40 justify-end mt5'>
            <div className='db center mw5 black'>
                <a className="f6 link dim br1 ph3 pv2 mb2 dib white bg-black" href="#0">Check Out</a>
                <p className='f4'>By clicking checkout you agee to our terms and services</p>
                <p className='f2'>Order Sumary</p>
                <div className='db center mw5 tc black'>
                    <p>1 Product</p>
                    <hr />
                    <p className='flex'>
                        <span className='mr2'>Product Total:</span>
                        <span className='ml5'>{price}$</span>
                    </p>
                    <hr />
                    <p className='flex'>
                        <span className='mr4'>Delivery:</span>
                        <span className='ml5'><strong>&nbsp;&nbsp;&nbsp;Free</strong></span>
                    </p>
                    <hr />
                    <p className='flex'>
                        <span className='mr5'><strong>Total:</strong></span>
                        <span className='ml5'>{price}$</span>
                    </p>
                </div>
            </div>
           

        </div>
        </div>
    );
}
export default Cart;