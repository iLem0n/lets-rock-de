import Image from "next/image";
import '../styles.css';

export default function Centerpiece() {
    return (
        <div className="centerpiece-container">
            <Image
                src="/assets/images/centerpiece.png"
                alt=""
                width={800}
                height={1200}
                className="centerpiece-image-wrapper"
                priority
            />
        </div>
    );
}