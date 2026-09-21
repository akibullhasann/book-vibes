



'use client';



import { BooksContext } from '@/Context/BooksContext';
import { Ibook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';


const ReadButton = ({book}:{book:Ibook}) => {

    // const booksProvider = useContext(BooksContext);
    // console.log(booksProvider, 'from books within in butoon')


    const {readBooks, setReadBooks} = useContext(BooksContext);
    console.log(readBooks, setReadBooks, ' from the btn');
    

    const handleReadBook =()=>{
        console.log('ami bahdnskmj', book);

        setReadBooks([...readBooks, book]);

        toast.success(`you have read ${book.bookName}`)
    }
    return (
        <div>
            <button
            onClick={()=>handleReadBook()}
             className="btn bg-emerald-600 px-7 text-white hover:bg-emerald-700">
                Read Now
            </button>
        </div>
    );
};

export default ReadButton;