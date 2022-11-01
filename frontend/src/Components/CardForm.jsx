import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCard } from "../services/request";

function CardForm() {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [description, setDescription] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const onClick = async () => {
        await createCard('/card', { name, description, linkedin, github });
        navigate(`${name}/QR`)
    }
     
    useEffect(() => {
        function controlButton() {
            if (name && description && linkedin && github && buttonDisabled) {
                setButtonDisabled(false);
            } else if (!buttonDisabled && (!name || !description || !linkedin || !github)) {
                setButtonDisabled(true);
            }
        }
        controlButton();
    }, [name, description, linkedin, github, buttonDisabled])

    const buttonClassName = buttonDisabled ? "bg-black opacity-25 rounded-md py-2 px-4 mt-4 text-white" : "bg-black hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded-md";

    return (
        <div className="flex flex-col items-center justify-center">
            <form className="flex flex-col w-full max-w-sm space-y-8 justify-center items-center">
                <div className="flex">
                    <label htmlFor="name-input" className="inline-flex whitespace-nowrap items-center justify-center text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 rounded-sm w-36">
                        Name
                    </label>
                    <input className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="name-input" type="text" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="flex">
                    <label htmlFor="name-input" className="inline-flex whitespace-nowrap items-center justify-center text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 rounded-sm w-36">
                        Description
                    </label>
                    <input className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="name-input" type="text" value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <div className="flex">
                    <label htmlFor="linkedin-url-input" className="inline-flex text-center whitespace-nowrap items-center justify-center text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 w-36">
                        Linkedin URL
                    </label>
                    <input className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="linkedin-url-input" type="text" value={linkedin} onChange={e => setLinkedin(e.target.value)} />
                </div>
                <div className="flex">
                    <label htmlFor="github-url-input" className="inline-flex whitespace-nowrap items-center justify-center text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 w-36">
                        Github URL
                    </label>
                    <input className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="github-url-input" type="text" value={github} onChange={e => setGithub(e.target.value)} />
                </div>

            </form>
            <button 
            type="button" onClick={() => onClick()} 
            disabled={buttonDisabled}
            className={buttonClassName}>
                Generate QR Code
            </button>
        </div>);
}

export default CardForm;
