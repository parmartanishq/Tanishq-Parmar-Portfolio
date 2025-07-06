import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        const scrolled = window.scrollY;
        setVisible(scrolled > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className={`scroll-to-top-container ${visible ? 'visible' : ''}`}>
            <button
                onClick={scrollToTop}
                className="scroll-to-top-btn"
                aria-label="Scroll to top"
            >
                <ChevronUp size={20} />
            </button>
        </div>
    );
}

export default ScrollToTopButton;