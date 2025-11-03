import LogoNav from "./LogoNav";
import NavItems from "./NavItems";
import SearchNav from "./SearchNav";

const Navbar = () => {
    return (
        <header
            className="sticky top-0 z-50 w-full border-b bg-white"
        >
            <div
                className="container mx-auto flex h-16 items-center gap-4 px-6"
            >
                <LogoNav />
                <SearchNav />
                <NavItems />
            </div>
        </header>
    );
};

export default Navbar;