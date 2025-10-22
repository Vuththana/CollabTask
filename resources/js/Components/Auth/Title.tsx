import LogoTitle from "./LogoTitle";

const Title = () => {
    return(
        <div
            className="text-center mb-6"
        >
            <LogoTitle />
            <h1
                className="text-3xl font-bold mb-3"
            >
                Welcome to Task Flow
            </h1>
            <p
                className="text-gray-500"
            >
                Manage your projects efficiently
            </p>
        </div>
    );
};

export default Title;