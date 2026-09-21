// import React from 'react';
// import bannerImg from '@/assests/hero_img.jpg'
// import Image from 'next/image';

// const Banner = () => {
//     return (
//         <section className='py-20'>
//             <div className='grid grid-cols-2 gap-4 items-center container mx-auto bg-slate-200 rounded-4xl'>
//                 <div className='space-y-4 py-8 px-4'>
//                     <h2 className='font-bold text-5xl'>Books to freshen up <br /> your bookshelf</h2>
//                     <button className='btn btn-success'>View the task</button>
//                 </div>
//                 <div>
//                     <Image src={bannerImg}></Image>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Banner;


import React from 'react';
import Image from 'next/image';
import bannerImg from '@/assests/hero_img.jpg';

const Banner = () => {
    return (
        <section className="px-4 py-12 sm:py-16 lg:py-20">
            <div className="container mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 via-white to-emerald-50 shadow-sm">
                <div className="grid items-center gap-6 md:grid-cols-[1.2fr_0.8fr] lg:gap-10">

                    {/* Content */}
                    <div className="px-6 py-10 sm:px-10 lg:px-16 lg:py-16">
                        <span className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                            Discover your next read
                        </span>

                        <h2 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Books to freshen up{' '}
                            <span className="text-emerald-600">
                                your bookshelf
                            </span>
                        </h2>

                        <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
                            Explore stories, ideas, and adventures handpicked
                            for every kind of reader.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <button className="rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700">
                                Explore Books
                            </button>

                            <button className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Smaller Image */}
                    <div className="flex justify-center px-6 py-8 md:px-6 lg:px-10">
                        <div className="relative h-[260px] w-full max-w-md overflow-hidden rounded-2xl shadow-md sm:h-[320px]">
                            <Image
                                src={bannerImg}
                                alt="A collection of books"
                                fill
                                priority
                                className="object-cover transition duration-700 hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;
