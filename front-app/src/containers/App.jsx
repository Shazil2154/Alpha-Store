import Cart from '../Cart.jsx/Cart';
import Navigation from '../Navigation/Navigation';
import ProductList from '../ProductList/ProductList';
import {setRoute,setBucket} from '../actions.js';
import {connect} from 'react-redux';
const mapStateToProps = state => {
    return {
        values: [
           { route: state.currentRoute.route},
           { bucket: state.currentBucket.bucket}

        ]
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        functions: [
            {onRouteChange : (string) => dispatch(setRoute(string))},
           { onBucketChange : (product) => dispatch(setBucket(product))}
        ]
        
    }
}
//  beacuse i could'nt get the values of bucket so i created a nested function and array
// in dispatch very difficult i know but thats what happen when u try to do redux in 
// 2 day and i am writing this so future me has an idea on what the hell is happening here

// similar stuf is gunna happen in card and product list
//and if i decide to add more functionality that gonna happen there to and things are
//gonna get more complex

//i destructchered everything here so that the rest of the code is easier to under
//stand
const App = (props) => {
    const store = props;
    const {values, functions} = store;
    const {route} = values[0];
    const {onRouteChange} = functions[0];
    const {bucket} = values[1];
    console.log(bucket)
    const {onBucketChange} = functions[1];
    if(route === 'home'){
        return (
            <div>
                <Navigation onClick={onRouteChange} />
                <ProductList onBucketChange={onBucketChange} /> 
            </div>
        );
    }else{
        return <Cart onClick={onRouteChange} bucket={bucket} />
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);