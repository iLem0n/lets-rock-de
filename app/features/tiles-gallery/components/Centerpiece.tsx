import Image from "next/image";
import '../styles.css';

export default function Centerpiece() {
    return (
        <div className="centerpiece-container">
            <div className="centerpiece-image-wrapper">
                <Image
                    src="/assets/images/centerpiece.png"
                    alt=""
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                />
            </div>
        </div>
    );
}
