import LogoNav from "./LogoNav";
import NavItems from "./NavItems";
import SearchNav from "./SearchNav";

const Navbar = () => {
    return (
        <nav
            className="sticky top-0 z-50 w-full border-b bg-white"
        >
            <div
                className="container flex h-16 items-center gap-4 px-6"
            >
                        <LogoNav />

                        <SearchNav />
                        
                        <NavItems />
            </div>
        </nav>
    );
};

export default Navbar;