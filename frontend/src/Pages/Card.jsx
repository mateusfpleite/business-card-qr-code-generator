import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { requestData } from "../services/request";

const Card = () => {
    const {pathname} = useLocation();
    const [info, setInfo] = useState({});
    const {name, description, linkedin, github} = info;
    useEffect(() => {
        async function recoverData() {
            const endpoint = `/card${pathname}`;
            const data = await requestData(endpoint)
            setInfo(data);
        }
        recoverData();
    }, [pathname])

    return (
        <>
{        !info ? 
        <h1>Loading...</h1>
        :
        <div className="flex flex-col items-center justify-center h-screen bg-gray-400">
        <div className="flex flex-col items-center w-96 bg-white justify-center rounded-lg border-10 border-gray-200 shadow-xl">
        <h1 className="text-xl pb-5 pt-3">Hello, my name is {name}</h1>
        <h1 className="text-xl font-semibold">Who am I</h1>
        <p className="pb-5 text-center">{description}</p>
        <h1 className="text-xl font-semibold">Contact</h1>
        <div className="flex space-x-3 pb-3">
            <a href={linkedin} target="_blank" rel="noreferrer">
            <img src="/linkedin.png" alt="linkedin-logo" ></img>
            </a>
            <a href={github} target="_blank" rel="noreferrer">
            <img src="/github.png" alt="linkedin-logo" ></img>
            </a>
        </div>
        </div>
        </div>
        }
        </>
    )
}

export default Card;