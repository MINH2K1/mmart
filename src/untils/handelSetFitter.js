
import products from "../assets/data/products";

function handelSetFitter(valueFn,valueSet,Fn) {
 if(valueFn===valueSet)
 {
    const filter= products.filter(item=>item.category===valueSet)
    Fn(filter);
 }
}

export default handelSetFitter