





import { Ibook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListedBooksCard = ({book}:{book:Ibook}) => {
    return (
        (
                            <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" key={book.bookId}>

                                <div className="flex flex-col sm:flex-row">

                                    {/* Book Image */}
                                    <div className="relative h-72 w-full shrink-0 bg-slate-100 sm:h-auto sm:w-48">
                                        <Image
                                            src={book.image}
                                            alt={book.bookName}
                                            fill
                                            sizes="(max-width: 640px) 100vw, 192px"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Book Information */}
                                    <div className="flex flex-1 flex-col p-5">

                                        {/* Category + Rating */}
                                        <div className="flex items-center justify-between gap-3">
                                            <span className="w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                                                {book.category}
                                            </span>

                                            <span className="text-sm font-semibold text-yellow-600">
                                                ⭐ {book.rating}
                                            </span>
                                        </div>

                                        {/* Book Name */}
                                        <h2 className="mt-3 line-clamp-2 text-xl font-bold text-slate-900">
                                            {book.bookName}
                                        </h2>

                                        {/* Author */}
                                        <p className="mt-1 text-sm text-slate-500">
                                            by{' '}
                                            <span className="font-semibold text-slate-700">
                                                {book.author}
                                            </span>
                                        </p>

                                        {/* Review */}
                                        <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-500">
                                            {book.review}
                                        </p>

                                        {/* Book Info */}
                                        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-y border-slate-100 py-3 text-xs text-slate-500">
                                            <span>
                                                📖 {book.totalPages} pages
                                            </span>

                                            <span>
                                                📅 {book.yearOfPublishing}
                                            </span>

                                            <span>
                                                🏷️ {book.publisher}
                                            </span>
                                        </div>

                                        {/* Tags */}
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {book.tags.slice(0, 3).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Button */}
                                        <div className="mt-auto pt-5">
                                            <Link
                                                href={`/books/${book.bookId}`}
                                                className="inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
                                            >
                                                View Details
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
    );
};

export default ListedBooksCard;