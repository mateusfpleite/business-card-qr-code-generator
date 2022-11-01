import QRCode from "react-qr-code";
import { useLocation } from "react-router-dom";

const QR = () => {
    const { pathname } = useLocation();
    const name = pathname.substring(1, pathname.indexOf('/', 2));
return (
    <div className="flex flex-col w-full h-full justify-center items-center space-y-4">
    <h1 className="text-xl font-extrabold pb-36 pt-10">{name}</h1>
    <h4 className="text-xl">Scan me</h4>
    <QRCode value={`${window.location.host}/${name}`} />
    </div>
)
}

export default QR;