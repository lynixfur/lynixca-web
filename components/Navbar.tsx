import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="bg-neutral-900 text-center py-5">
            <div className="flex justify-center"><img src="/imgs/logos/LynixLogo.svg" className="h-20 w-20" /></div>
            <div className="flex justify-center">
                <div className="flex font-semibold" style={{ fontSize: "20px" }}>
                    <Link href="/" className="hover:bg-cyan-700 py-4 px-5 transition-colors hidden">Home</Link>
                    <Link href="/" className="hover:bg-cyan-700 py-4 px-5 transition-colors flex items-center">
                        Projects
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                    </Link>
                    <Link href="/" className="hover:bg-cyan-700 py-4 px-5 transition-colors">Blog</Link>
                    <Link href="/" className="hover:bg-cyan-700 py-4 px-5 transition-colors flex items-center">
                        Fursonas
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </Link>
                    <Link href="/" className="hover:bg-cyan-700 py-4 px-5 transition-colors">About</Link>
                    <Link href="/" className="hover:bg-cyan-700 py-4 px-5 transition-colors">Socials</Link>
                </div>
            </div>
            {/*LYNIX.NAVIGATION_SECTION.REX2*/}
        </nav>
    )
}

export default Navbar