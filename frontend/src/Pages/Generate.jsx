
import CardForm from "../Components/CardForm";

const Generate = () => {

    return (
        <>
            <div className="flex font-sans h-screen flex-col justify-center items-center bg-gray-400 w-full">
                <h1
                    className="text-xl font-extrabold pb-4">
                    QR Code Image Generator
                </h1>
                <CardForm />
            </div>
        </>
    )
}

export default Generate;
