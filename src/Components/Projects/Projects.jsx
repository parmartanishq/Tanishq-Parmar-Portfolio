import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Sample projects data
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform with React & Node.js",
            image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
            description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard for inventory management.",
            link: "https://github.com/example/ecommerce-platform"
        },
        {
            id: 2,
            title: "AI-Powered Task Management System",
            image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
            description: "An intelligent task management application that uses machine learning to prioritize tasks, predict completion times, and suggest optimal work schedules. Built with Python, Flask, and TensorFlow.",
            link: "https://github.com/example/ai-task-manager"
        },
        {
            id: 3,
            title: "Real-Time Chat Application",
            image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
            description: "A modern real-time chat application with features like group chats, file sharing, emoji reactions, and message encryption. Developed using React, Socket.io, and Express.js.",
            link: "https://github.com/example/realtime-chat"
        },
        {
            id: 4,
            title: "Weather Forecast Dashboard",
            image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
            description: "A comprehensive weather dashboard that displays current conditions, 7-day forecasts, and weather maps. Integrates multiple weather APIs and features location-based services with interactive charts.",
            link: "https://github.com/example/weather-dashboard"
        },
        {
            id: 5,
            title: "Blockchain Voting System",
            image: "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800",
            description: "A secure and transparent voting system built on blockchain technology using Ethereum smart contracts. Ensures vote integrity, anonymity, and provides real-time election results with complete audit trails.",
            link: "https://github.com/example/blockchain-voting"
        },
        {
            id: 6,
            title: "Social Media Analytics Tool",
            image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
            description: "A comprehensive analytics platform for social media management that tracks engagement metrics, analyzes audience demographics, and provides insights for content optimization across multiple platforms.",
            link: "https://github.com/example/social-analytics"
        },
        {
            id: 7,
            title: "IoT Home Automation System",
            image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
            description: "An Internet of Things solution for smart home automation featuring remote control of lights, temperature, security systems, and appliances through a mobile app and voice commands.",
            link: "https://github.com/example/iot-home-automation"
        }
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
        <div className="projects_section">
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