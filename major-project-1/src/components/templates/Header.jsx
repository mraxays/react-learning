// import React from "react";

const Header = ({ data }) => {
    return (
        <section className="relative mt-5 w-full h-[70vh] min-h-130 overflow-hidden rounded-2xl bg-[#11110f]">

            {data ? (
                <>
                    {/* Background Image */}
                    <img
                        src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                        alt={data.title}
                        className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 bg-linear-to-r from-black via-black/75 to-transparent" />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0d0d0b] via-transparent to-transparent" />
                    <div className="relative z-10 flex h-full items-end">
                        <div className="max-w-3xl px-8 pb-12 md:px-14 md:pb-16">
                            <div className="mb-4 flex items-center gap-3 text-sm">
                                {data.media_type && (
                                    <span className="rounded-full capitalize bg-white/10 px-3 py-1 font-medium text-white backdrop-blur-md">
                                        {data.media_type}
                                    </span>
                                )}

                                {data.release_date && (
                                    <span className="text-white/70">
                                      <i className="ri-megaphone-line"></i>  {data.release_date}
                                    </span>
                                )}
                            </div>
                            <h1 className="
                                text-2xl font-bold leading-tight text-white
                                sm:text-5xl
                            ">
                                {data.title}
                            </h1>
                            <div className="mt-5 flex items-center gap-4 text-sm">
                                {data.vote_average && (
                                    <span className="flex items-center gap-1 text-yellow-400">
                                        ★
                                        <span className="font-semibold">
                                            {data.vote_average.toFixed(1)}
                                        </span>
                                    </span>
                                )}

                                <span className="text-white/60">
                                    TMDB
                                </span>
                            </div>
                            {data.overview && (
                                <p className="
                                    mt-4 max-w-2xl
                                    line-clamp-3
                                    text-sm leading-6 text-white/70
                                    md:text-base
                                ">
                                    {data.overview}
                                </p>
                            )}
                            <div className="mt-7 flex flex-wrap gap-3">

                                <button className="
                                    rounded-full
                                    bg-white
                                    px-6 py-3
                                    text-sm font-semibold text-black
                                    transition
                                    hover:scale-105 hover:bg-white/90
                                ">
                                    ▶ Watch Now
                                </button>

                                <button className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20
                                ">
                                    + Add to Watchlist
                                </button>

                            </div>

                        </div>
                    </div>
                    <div className="
                        pointer-events-none
                        absolute inset-0
                        ring-1 ring-inset ring-white/10
                    " />

                </>
            ) : (
                <div className="
                    flex h-full w-full
                    items-center justify-center
                    bg-[#171715]
                ">
                    <div className="flex flex-col items-center gap-3">
                        <div className="
                            h-8 w-8 animate-spin
                            rounded-full
                            border-2 border-white/20
                            border-t-white"
                        />
                        <span className="text-sm text-white/40">
                            Loading movie...
                        </span>
                    </div>
                </div>
            )
            }

        </section >
    );
};

export default Header;