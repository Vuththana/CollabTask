const LogoNav = () => {
    return(
        <div
            className="flex items-center gap-2"
        >
            <div
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tl
                from-purple-400 to bg-purple-700 font-extrabold"
            >
                <span
                className=" text-white font-bold"
                >
                    C
                </span>
            </div>

            <span
                className="text-[23px] font-bold tracking-tight"
            >
                CollabTask
            </span>
        </div>
    );

}

export default LogoNav;