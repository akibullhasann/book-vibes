
'use client';



import BookCard from '@/components/shared/BookCard';
import ListedBooksCard from '@/components/shared/ListedBooksCard';
import { BooksContext } from '@/Context/BooksContext';
import { Ibook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const ListedBooks = () => {

    const [sortBy, setSortBy] = useState<"rating"|"pages"|"year">("rating")

    const { readBooks, wishlist } = useContext(BooksContext)
    console.log(readBooks, wishlist, 'listed book');
    console.log(sortBy, setSortBy);

    const sortBooks =(books:Ibook[])=>{
        const sortedBooks = [...books];

        if(sortBy==="rating"){
            sortedBooks.sort((a,b)=> b.rating - a.rating);
        }else if(sortBy==="pages"){
            sortedBooks.sort((a,b)=>b.totalPages - a.totalPages);
        }else{
            sortedBooks.sort((a,b)=>b.yearOfPublishing-a.yearOfPublishing);
        }
        return sortedBooks
    }

    const sortedReadBooks = sortBooks(readBooks);
    const sortedWishlist =  sortBooks(wishlist);




    return (
        <div className='container mx-auto py-[20px]'>
            <h2 className='bg-amber-200 my-7 py-16 font-bold text-4xl text-center'>Listed Books</h2>

           <div className='text-center'>
             <select 
             value={sortBy}
             onChange={(e)=>setSortBy(e.target.value as "rating"|"pages"|"year")}
             defaultValue="Pick a Runtime" className="select select-success my-4">
                <option disabled={true}>Sort By</option>
                <option value={"rating"}>Rating</option>
                <option value={"pages"}>Number of pages</option>
                <option value={"year"}>Published year</option>
            </select>
           </div>


            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Book ${readBooks.length}`} />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {sortedReadBooks.length > 0 ? sortedReadBooks.map((book: Ibook) => {
                        return <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>
                    }) : <p>No Book Found</p>}
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Add to Wishlist ${wishlist.length}`} defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {sortedWishlist.length > 0 ? sortedWishlist.map((book: Ibook) => {
                        return <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>
                    }) : <p>No Book Found</p>}
                </div>
            </div>

        </div>
    );
};

export default ListedBooks;