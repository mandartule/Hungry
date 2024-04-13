import { useSelector , useDispatch} from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemsList from "./ItemList";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="flex flex-col items-center justify-center space-y-5">
            <h1 className="text-3xl font-bold">Cart</h1>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={handleClearCart}>Clear Cart</button>
            <ItemsList items={cartItems} />
        </div>
    )
}

export default Cart;
