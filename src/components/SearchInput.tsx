export const SearchInput = () => {
    return <div className="flex items-center gap-[10px] p-[10px] border border-gray-100 w-[150px] md:w-[300px] rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-zinc-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input type="text" placeholder="Search..." className="outline-none border-none w-full bg-transparent placeholder:text-zinc-500" />
    </div>
}