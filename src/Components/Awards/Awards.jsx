import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import './Awards.css';
import img_award from '../../assets/AwardsImages/Award.JPEG';
import img_national from '../../assets/AwardsImages/National.jpg';
import img_msbte from '../../assets/AwardsImages/MSBTE.jpg';
import img_swami from '../../assets/AwardsImages/Swami.jpg';
import img_agnel from '../../assets/AwardsImages/Agnel.jpg';
import img_jonda from '../../assets/AwardsImages/Jondhle.jpg';
import img_thakur from '../../assets/AwardsImages/Thakur.jpg';
// import logo_external_link from "../../assets/logo_external_link.svg";
const Awards = ({theme}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Sample awards data with rectangular images
    const awards = [
        {
            id: 1,
            title: "IEI NMLC-FCRIT Excellence Award for Academic Excellence (Polytechnic - Regional)",
            image: img_award,
            description: "Honored with the IEI NMLC-FCRIT Excellence Award 2024 by The Institution of Engineers (India) and Fr. C. Rodrigues Institute of Technology, Vashi, for outstanding academic performance at Agnel Polytechnic, Navi Mumbai.",
            date: "🏆 September 18, 2024",
            link: "https://www.linkedin.com/posts/tanishqparmar_i-am-truly-honored-to-receive-the-prestigious-activity-7287049662824419328-9EmH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEHL91kBoa83laOi5Quosyj-G3ulaCBW7Dk"
        },
        {
            id: 2,
            title: 'Winner of Technothon 2024 National Level Technical Paper Presentation',
            image: img_national,
            description: 'First Prize for presenting the research paper on "Biometric RFID Identification System" at Anantrao Pawar College of Engineering and Research, Pune.',
            date: "🥇 April 4, 2024",
            link: 'https://www.linkedin.com/posts/tanishqparmar_after-winning-so-many-state-level-technical-activity-7241402587671916546-HF-6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEHL91kBoa83laOi5Quosyj-G3ulaCBW7Dk'
        },
        {
            id: 3,
            title: 'Winner of Maharashtra State Board of Technical Education (MSBTE) State Level Technical Paper Presentation ',
            image: img_msbte,
            description: 'First Prize for presenting the research paper on "Biometric RFID Identification System" at St. Xavier\'s Technical Institute, Mahim, Mumbai.',
            date: "🥇 January 31, 2024",
            link: 'https://www.linkedin.com/posts/tanishqparmar_the-date-was-31st-january-2024-just-few-activity-7233082395086733312-ltVo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEHL91kBoa83laOi5Quosyj-G3ulaCBW7Dk'
        },
        {
            id: 4,
            title: 'Winner of Tantra Utsav 2024 Technical Paper Presentation',
            image: img_thakur,
            description: 'First Prize for presenting the research paper "Biometric RFID Identification System" at Thakur Polytechnic, Kandivali, emphasizing advanced identity verification techniques.\n',
            date: '🥇 February 01, 2024',
            link: 'https://www.linkedin.com/posts/tanishqparmar_on-the-very-next-day-after-the-msbte-state-activity-7234448532424843264-_1Xt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEHL91kBoa83laOi5Quosyj-G3ulaCBW7Dk'
        },
        {
            id: 5,
            title: 'Winner of Technocratz 2024 State Level Technical Paper Presentation',
            image: img_agnel,
            description: 'First Prize for presenting the research paper "Biometric RFID Identification System" at Father Agnel Polytechnic, Vashi, focusing on secure and automated identification methods.\n',
            date: "🥇 March 01, 2024",
            link: 'https://www.linkedin.com/posts/tanishqparmar_another-successful-fourth-consecutive-first-activity-7237834599232339968-6c7k?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEHL91kBoa83laOi5Quosyj-G3ulaCBW7Dk'
        },
        {
            id: 6,
            title: 'Winner of Technovation 2024 State Level Technical Paper Presentation   ',
            image: img_swami,
            description: 'Third Prize for presenting the research paper "Biometric RFID Identification System" at Vivekanand Education Society\'s Polytechnic, Mumbai, focusing on secure identity authentication.',
            date: "🥉 March 02, 2024",
            link: 'https://www.linkedin.com/posts/tanishqparmar_thrilled-to-secure-another-fifth-consecutive-activity-7241149399446208512-xZoF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEHL91kBoa83laOi5Quosyj-G3ulaCBW7Dk'
        },
        {
            id: 7,
            title: 'Winner of Wings 2024 State Level Technical Paper Presentation ',
            image: img_jonda,
            description: 'First Prize for presenting the research paper "Biometric RFID Identification System" at Shivajirao S. Jondhle Polytechnic, Asangaon, Thane, highlighting secure and efficient identity verification.\n',
            date: '🥇 February 26, 2024',
            link: 'https://www.linkedin.com/posts/tanishqparmar_thrilled-to-secure-my-third-consecutive-win-activity-7236754781044674561-YTKc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEHL91kBoa83laOi5Quosyj-G3ulaCBW7Dk'
        },

    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % awards.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + awards.length) % awards.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const handleExternalLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    return (
        <div className={`awards_section ${theme === 'dark' ? 'dark' : ''}`}>
        <div className="_header">
                <span className='_heading'>Awards & Achievements</span>
            </div>

            <div className="carousel_container">
                {/* Left Arrow */}
                <button className="carousel_arrow" onClick={prevSlide} disabled={awards.length <= 1} aria-label="Previous award"
                >
                    <ChevronLeft />
                </button>

                {/* Carousel Content */}
                <div
                    className="carousel_content"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <div
                        className="carousel_track"
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`
                        }}
                    >
                        {awards.map((award) => (
                            <div key={award.id} className="carousel_slide">
                                <div className="award_card">
                                    {/* External Link Icon */}
                                    <button
                                        className="external_link_btn"
                                        onClick={() => handleExternalLink(award.link)}
                                        aria-label="Open external link"
                                        title="View more details"
                                    >
                                        <ExternalLink/>
                                    </button>

                                    <div className="award_image_container">
                                        <img src={award.image} alt={award.title}  className="award_image"  loading="lazy"/>
                                    </div>
                                    <div className="award_content">
                                        <h3 className="award_title">{award.title}</h3>
                                        <p className="award_description">{award.description}</p>
                                        <div className="award_date">{award.date}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Arrow */}
                <button
                    className="carousel_arrow"
                    onClick={nextSlide}
                    disabled={awards.length <= 1}
                    aria-label="Next award"
                >
                    <ChevronRight />
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="carousel_dots">
                {awards.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel_dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Awards;