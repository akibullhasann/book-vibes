



'use client';



import { BooksContext } from '@/Context/BooksContext';
import { Ibook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';


const WishListButton = ({book}:{book:Ibook}) => {

    // const booksProvider = useContext(BooksContext);
    // console.log(booksProvider, 'from books within in butoon')


    const {wishlist, setWishlist} = useContext(BooksContext);
    console.log(wishlist, setWishlist, ' from the btn');
    

    const handleAddToWishlist =()=>{
        console.log('ami bahdnskmj', book);

        setWishlist([...wishlist, book]);

        toast.success(`you have read ${book.bookName} to wishlist`)
    }
    return (
        <div>
            <button
            onClick={()=>handleAddToWishlist()}
             className="btn bg-emerald-600 px-7 text-white hover:bg-emerald-700">
                Add to Wishlist
            </button>
        </div>
    );
};

export default WishListButton;