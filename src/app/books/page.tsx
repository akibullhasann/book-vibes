
import React from 'react';


import { Ibook } from '@/types/books.type';
import BookCard from './../../components/shared/BookCard';

const getBooks = async () => {
    const response = await fetch('http://localhost:3000/booksData.json');
    const data = await response.json();
    return data;
};

const Books = async () => {
    const booksData = await getBooks();

    return (
        <section className="container mx-auto my-16 px-4">
            {/* Section Header */}
            <div className="mb-10">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-600">
                    Our Collection
                </p>

                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                    Explore All Books
                </h2>

                <p className="mt-2 max-w-xl text-slate-500">
                    Discover timeless classics, exciting stories, and
                    unforgettable books for every kind of reader.
                </p>
            </div>

            {/* Books Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {booksData.map((book:Ibook,ind:number)=>{
                    return<BookCard book={book} key={ind}></BookCard>
                })}
            </div>
        </section>
    );
};

export default Books;
