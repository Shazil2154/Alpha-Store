import Product from '../Product/Product';
import {products} from '../products'
// import {setBucket} from '../actions.js';
// import {connect} from 'react-redux';
// const mapStateToProps = state => {
//     return {
//         bucket: state.currentBucket.bucket
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onBucketChange : (product) => dispatch(setBucket(product))
//     }
// }





const ProductList = ({onBucketChange}) => {
    
    const productsArray= products.map((product)=>{
        return(
            <Product
             key={product.id}
             price={product.price}
             img={product.img}
             disp={product.name}
             onClick={onBucketChange}
            />
        )
    });

    return (
        <div>{productsArray}</div>
    );
}
export default ProductList;
//export default connect(mapStateToProps,mapDispatchToProps)(productList);