import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/bazarSlice";
import { toast } from "react-toastify";

const CartItem = () => {
  const { products } = useSelector((state) => state.bazar);
  const dispatch = useDispatch();

  return (
    <div className='w-2/3 pr-10'>
      <div className='w-full '>
        <h2 className='font-titleFont text-2xl'>shopping cart</h2>
      </div>
      <div>
        {products.map((item) => (
          <div
            key={item.id}
            className='flex items-center justify-between gap-6 mt-6'
          >
            <div className='flex items-center gap-2 '>
              <MdOutlineClose
                className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300 '
                onClick={() =>
                  dispatch(deleteItem(item.id)) &
                  toast.error(`${item.title} is removed`)
                }
              />
              <img
                src={item.image}
                className='w-32 h-32 object-cover'
                alt='productImg'
              />
            </div>
            <h2 className='w-52'>{item.title}</h2>
            <p className='w-10'>${item.price}</p>
            <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
              <p className='text-sm'>Quantity</p>
              <div className='flex items-center gap-4 text-sm font-semibold'>
                <span
                  className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'
                  onClick={() => dispatch(decrementQuantity(item.id))}
                >
                  -
                </span>
                {item.quantity}
                <span
                  className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'
                  onClick={() => dispatch(incrementQuantity(item.id))}
                >
                  +
                </span>
              </div>
            </div>
            <p className='w-14'>${item.quantity * item.price}</p>
          </div>
        ))}
      </div>
      <button
        className='bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300'
        onClick={() =>
          dispatch(resetCart()) & toast.error("Your Cart is Empty")
        }
      >
        Reset Cart
      </button>
      <Link to='/'>
        <button className='mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300 '>
          <span>
            <HiOutlineArrowLeft />
          </span>
          go shopping
        </button>
      </Link>
    </div>
  );
};

export default CartItem;