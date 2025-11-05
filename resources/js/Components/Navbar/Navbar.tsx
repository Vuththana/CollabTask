import LogoNav from "./ui/LogoNav";
import NavItems from "./ui/NavItems";
import SearchNav from "./ui/SearchNav";

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