import { Ibook } from '@/types/books.type';
import React from 'react';
import Image from 'next/image';
import ReadButton from '@/components/bookDetails/ReadButton';
import WishListButton from '@/components/bookDetails/WishListButton';

interface IBookDetailsPage {
    params: Promise<{
        id: string
    }>
}

const getBooks = async () => {
    const response = await fetch('http://localhost:3000/booksData.json');
    const data = await response.json();
    return data;
};


const BookDetailsPage = async ({ params }: IBookDetailsPage) => {
    const { id } = await params;
    const booksData = await getBooks();
    const book: Ibook = booksData.find((book: Ibook) => String(book.bookId) === id)
    return (
        <main className="min-h-screen bg-slate-50 py-10 md:py-16">
            <div className="container mx-auto px-4">

                <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
                    <div className="grid lg:grid-cols-[380px_1fr]">

                        {/* Book Cover */}
                        <div className="flex items-center justify-center bg-gradient-to-br from-emerald-50 to-slate-100 p-8 md:p-12">
                            <div className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl shadow-2xl">
                                <Image
                                    src={book.image}
                                    alt={book.bookName}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 80vw, 280px"
                                    className="object-cover transition duration-500 hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Book Details */}
                        <div className="p-6 sm:p-8 lg:p-12">

                            {/* Category & Rating */}
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                                    {book.category}
                                </span>

                                <span className="rounded-full bg-yellow-50 px-4 py-1.5 text-sm font-semibold text-yellow-700">
                                    ⭐ {book.rating} / 5
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                                {book.bookName}
                            </h1>

                            {/* Author */}
                            <p className="mt-3 text-lg text-slate-500">
                                Written by{' '}
                                <span className="font-semibold text-slate-800">
                                    {book.author}
                                </span>
                            </p>

                            {/* Review */}
                            <div className="mt-8">
                                <h2 className="text-xl font-bold text-slate-900">
                                    About this book
                                </h2>

                                <p className="mt-3 text-base leading-8 text-slate-600">
                                    {book.review}
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="mt-7">
                                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
                                    Genres
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {book.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-lg bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Book Information */}
                            <div className="mt-8 grid grid-cols-2 gap-5 border-y border-slate-100 py-6 sm:grid-cols-4">

                                <div>
                                    <p className="text-xs uppercase tracking-wide text-slate-400">
                                        Pages
                                    </p>
                                    <p className="mt-1 text-lg font-bold text-slate-800">
                                        {book.totalPages}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-wide text-slate-400">
                                        Published
                                    </p>
                                    <p className="mt-1 text-lg font-bold text-slate-800">
                                        {book.yearOfPublishing}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-wide text-slate-400">
                                        Publisher
                                    </p>
                                    <p className="mt-1 truncate text-lg font-bold text-slate-800">
                                        {book.publisher}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-wide text-slate-400">
                                        Book ID
                                    </p>
                                    <p className="mt-1 text-lg font-bold text-slate-800">
                                        #{book.bookId}
                                    </p>
                                </div>

                            </div>

                            {/* Buttons */}
                            <div className="mt-8 flex flex-wrap gap-3">
                                <ReadButton book={book}></ReadButton>

                                <WishListButton book={book}></WishListButton>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default BookDetailsPage;