import React from 'react';
import Image from 'next/image';
import { Ibook } from '@/types/books.type';
import Link from 'next/link';

interface IbookCard {
    book: Ibook;
}

const BookCard = ({ book }:IbookCard) => {
    return (
        <article

            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            {/* Book Cover */}
            <div className="relative h-72 overflow-hidden bg-slate-100">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    sizes="(max-width: 640px) 100vw,
                                       (max-width: 1024px) 50vw,
                                       (max-width: 1280px) 33vw,
                                       25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-emerald-700 shadow-sm backdrop-blur">
                    {book.category}
                </span>

                {/* Rating */}
                <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-slate-900/85 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    <span className="text-yellow-400">★</span>
                    {book.rating}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="line-clamp-1 text-xl font-bold text-slate-900 transition-colors group-hover:text-emerald-600">
                    {book.bookName}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                    By{' '}
                    <span className="font-medium text-slate-700">
                        {book.author}
                    </span>
                </p>

                {/* Review */}
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-500">
                    {book.review}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Book Details */}
                <div className="mt-5 grid grid-cols-2 gap-y-4 border-t border-slate-100 pt-4">
                    <div>
                        <p className="text-xs text-slate-400">
                            Pages
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-700">
                            {book.totalPages}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-400">
                            Published
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-700">
                            {book.yearOfPublishing}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-400">
                            Publisher
                        </p>
                        <p className="mt-1 truncate pr-2 text-sm font-semibold text-slate-700">
                            {book.publisher}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-400">
                            Rating
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-700">
                            {book.rating} / 5
                        </p>
                    </div>
                </div>

                {/* Button */}
                <Link href={`/books/${book.bookId}`}>
                    <button className="mt-5 w-full rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-700 active:scale-[0.98]">
                        View Details
                    </button>
                </Link>
            </div>
        </article>
    );
};

export default BookCard;