import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import './Projects.css';
import logo_papergen from '../../assets/project_logo/papergen.png'
import logo_withyou from '../../assets/project_logo/withyou.png'
import logo_hiki from '../../assets/project_logo/hiki.svg'
import logo_library from '../../assets/project_logo/library.png'
const Projects = ({theme}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Sample projects data
    const projects = [
        {
            id: 1,
            title: "PaperGen: AI-Integrated Platform for Dynamic Learning Material Creation",
            image: logo_papergen,
            description: "Developed a Flask web app that auto generates quizzes, mini-project ideas, and presentation topics from syllabus files using Gemini 1.5 Flash API, real-time feedback, and PDF/TXT content extraction via PyPDF2 and pdfplumber.\n",
            link: "https://github.com/parmartanishq/PaperGen-Quiz-MiniProject-Assignments-Generator-AI"
        },
        {
            id: 2,
            title: "WithYou: A Therapy Web Application",
            image: logo_withyou,
            description: "Developed \"With You\", a mental health platform on Bubble.io featuring therapist booking, social feeds, group chats, and personalized support tools, with a customizable user system and cross-platform deployment potential.\n",
            link: "https://github.com/parmartanishq/WithYou-A-Therapy-Web-Application"
        },
        {
            id: 3,
            title: "Hisaab Kitaab: An Expense Planner (UI/UX Design) ",
            image: logo_hiki,
            description: "Designed a modern expense tracking app with an intuitive UI, featuring a dynamic calendar for reminders, an interactive dashboard for spending insights, and efficient bank account management.\n",
            link: "https://www.figma.com/design/BhUCvoFALRW2wTBnB0jFOw/HiKi_UI_prototype?node-id=0-1&t=8xAnFefy7uFuebym-1"
        },
        {
            id: 4,
            title: "Library Management System",
            image: logo_library,
            description: "Developed a Java-MySQL based library management system with book issue/return tracking, an admin panel for employee management, and a librarian section for handling books, magazines, and archives.\n",
            link: "https://github.com/parmartanishq/LibraryManagementSystem"
        },

    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const handleViewProject = (url) => {
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
        <div className={`projects_section ${theme === 'dark' ? 'dark' : ''}`}>

        <div className="_header">
                <span className='_heading'>Projects</span>
            </div>

            <div className="carousel_container">
                {/* Left Arrow */}
                <button className="carousel_arrow" onClick={prevSlide} disabled={projects.length <= 1} aria-label="Previous project">
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
                        {projects.map((project) => (
                            <div key={project.id} className="carousel_slide">
                                <div className="project_card">
                                    <div className="project_image_container">
                                        <img src={project.image} alt={project.title} className="project_image" loading="lazy"/>
                                    </div>
                                    <div className="project_content">
                                        <h3 className="project_title">{project.title}</h3>
                                        <p className="project_description">{project.description}</p>
                                        <button
                                            className="view_project_btn"
                                            onClick={() => handleViewProject(project.link)}
                                            aria-label="View project details"
                                        >
                                            View <ArrowRight className="btn_arrow" />
                                        </button>
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
                    disabled={projects.length <= 1}
                    aria-label="Next project"
                >
                    <ChevronRight />
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="carousel_dots">
                {projects.map((_, index) => (
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

export default Projects;