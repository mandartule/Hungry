import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";




const ItemsList = ({ items }) => {

    //console.log(items);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }


    return (
        <div>
            {items.map((item) => {
                const data = item.card.info;
                return (
                    <div key={data.id} className="flex justify-between items-center p-2 border-b border-gray-300">
                        <div className="flex flex-col justify-between">
                            <h5 className="mb-2">{data.isVeg ? "🟩" : "🟥"}</h5>
                            <h3 className="font-bold mb-2 mb-0">{data.name}</h3>
                            <h4>₹ {data?.defaultPrice ? data.defaultPrice / 100 : data.price / 100}</h4>
                            <p className="text-gray-500 overflow-auto max-w-96">{data.description}</p>

                        </div>
                        <div className="flex flex-col items-center">
                            <img className="h-40 w-48 p-4 rounded-lg object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${data.imageId}`} />
                            <button className="absolute bg-gray-900 text-white px-2 py-1 rounded-lg mt-32 text-sm"
                            onClick={() => handleAddItem(item)}
                            >Add+</button>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default ItemsList;