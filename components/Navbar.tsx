import Link from "next/link"

const Navbar = () => {

    const SECTION_ID = "LYNIX.NAVIGATION_SECTION.REX2";

    return (
        <>
            <nav className="bg-neutral-900 text-center py-5">
                <div className="flex justify-center"><img src="/imgs/logos/LynixLogo.svg" className="h-20 w-20" /></div>
                <div className="flex justify-center">
                    <div className="flex font-semibold">
                        <Link href="/" className="hover:bg-cyan-700 py-2 px-5 transition-colors hidden">Home</Link>
                        <Link href="/" className="hover:bg-cyan-700 py-2 px-5 transition-colors flex items-center">
                            Projects
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2 hidden">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </Link>
                        <Link href="/" className="hover:bg-cyan-700 py-2 px-5 transition-colors">Blog</Link>
                        <Link href="/" className="hover:bg-cyan-700 py-2 px-5 transition-colors flex items-center">
                            <span>Fursonas</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2 hidden">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </Link>
                        <Link href="/" className="hover:bg-cyan-700 py-2 px-5 transition-colors">Events</Link>
                        <Link href="/" className="hover:bg-cyan-700 py-2 px-5 transition-colors hidden">About</Link>
                        <Link href="/" className="hover:bg-cyan-700 py-2 px-5 transition-colors">Socials</Link>
                    </div>
                </div>
            </nav>
            <div className="text-center font-bold py-2">
                Happening Now: Project Howl - Meet the WaterWolf Community - Anthrocon - moist.dog!
            </div>
        </>
    )
}

export default Navbar