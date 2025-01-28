import SliderHome from "./SliderHome";
import ListOfProduct from "./ListOfProduct";
import ListCat from "./ListCat";
import Bestproducts from "./Bestproducts";
import Ourproducts from "./Ourproducts";
function Homepage()
{
    //const param=useParams();

    return(
        <>
       <SliderHome />
       <ListOfProduct/>
       <ListCat/>
       <Bestproducts/>
       <Ourproducts/>
       </>
    )
}
export default Homepage;