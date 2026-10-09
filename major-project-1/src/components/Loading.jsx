function Loading() {
    return (
        <div className="min-h-screen bg-[#181814] flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center">
                <div className="absolute w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="relative w-16 h-16 border-4 border-gray-800 border-t-blue-500 border-r-blue-400 rounded-full animate-spin"></div>
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
            </div>
            <div className="mt-6 text-center">
                <p className="text-white text-sm font-medium tracking-wide">
                    Loading movies
                </p>
                <div className="flex justify-center gap-1 mt-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:150ms]"></span>
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:300ms]"></span>
                </div>
            </div>
        </div>
    )
}

export default Loading