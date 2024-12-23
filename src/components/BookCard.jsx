import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const BookCard = ({book}) => {
    const {photo,name,category,authorName,rating, quantity } = book
    
    const handleUpdateBook= ()=>{
        axios.get(`${import.meta.env.VITE_Project_Api_Url}/books/${book._id}`)
        
    }
    return (
        <div>
            <div className="card  h-[550px] rounded-none hover:shadow-2xl border-gray-400 border">
                <figure>
                    <img className='w-full h-[380px] '
                        src={photo}
                        alt={name} />
                </figure>
                <div className="my-5 flex flex-col flex-wrap px-4">
                    <h2 className=" text-xl font-bold">
                       {name}
                       <div className="badge badge-outline font-normal ml-2">{category}</div> 
                    </h2>
                    <p className='font-bold'>By- {authorName}</p>
                    <div className="flex items-center justify-between">
                        <div className=" flex items-center font-semibold"><span className='mr-1'>Rating:</span> <Rating ></Rating> <span className='ml-1 mt-1'>{rating}</span> </div>
                        <div className=" font-semibold"><span className='font-semibold'>Quantity:</span> {quantity}</div>
                    </div>
                    <div className='flex justify-end'>
                       <Link to={`/updatePage/${book._id}`}> <button onClick={handleUpdateBook} className='btn btn-sm bg-[#e63746] rounded-md border-none text-white hover:bg-white hover:text-black'>Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;