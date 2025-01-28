import Product from "./Product"
import Product_data from'../Data'
import Glideslider from "./Glideslider"
import { render } from "@testing-library/react"
function ListOfProduct()
{
    
    return(
        <>
        <Glideslider data={Product_data} title="today's" descc="flash sales"/>
      
        </>
    )
}
 export default ListOfProduct;