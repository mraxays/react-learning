import React from 'react'

function Footer() {
    return (
        <>
            <div className="max-w-5xl mx-auto py-20 flex gap-1 md:gap-10 flex-col md:flex-row">
                <div className="w-1/2">
                    <h1 className="text-9xl font-semibold tracking-tight">refokus.</h1>
                </div>
                <div className="w-1/2 flex flex-wrap justify-end">
                    <div className="w-full md:w-1/3">
                        <h3 className="mb-6">Socials</h3>
                        <div className="flex flex-col flex-wrap gap-2">
                            {['Instagram', 'Twitter (X)', 'LinkedIn'].map((link) => (
                                <a href="#" className="text-sm text-zinc-500">{link}</a>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h3 className="mb-6">Quick Links</h3>
                        <div className="flex flex-col flex-wrap gap-2">
                            {['Home', 'Work', 'Culture', 'News'].map((link) => (
                                <a href="#" className="text-sm text-zinc-300">{link}</a>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 flex flex-col gap-4 justify-end md:mt-12">
                        <p className="text-xs text-zinc-300 text-right">
                            Refokus is a creative agency that specializes in delivering innovative solutions for businesses.
                        </p>
                        <img src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" className='w-40' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer