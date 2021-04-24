import CartItem from "../CartItem/CartItem";

const CartList = ({bucket}) => {
    const bucketArray= bucket.map((product)=> {

        return(
            <CartItem
         img={product.img}
         disp={product.disp}
         price={product.price}
         />
        )
    } )
    return (
        <di>{bucketArray}</di>
    );
}
export default CartList;