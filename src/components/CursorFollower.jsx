import React, { useEffect, useState } from "react";
import "../../public/assets/css/CursorFollower.css";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [currentWrapClass, setCurrentWrapClass] = useState("");

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle hover effects
  useEffect(() => {
    const removeAllBodyClasses = () => {
      const classes = [
        'img-1-wrap', 'img-2-wrap', 'img-3-wrap', 'img-4-wrap',
        'img-5-wrap', 'img-6-wrap', 'img-7-wrap', 'logo-wrap'
      ];
      document.body.classList.remove(...classes);
    };

    const handleHover = (event) => {
      const target = event.target;
      setIsHovered(true);
      removeAllBodyClasses();

      // Map class names to their corresponding wrap classes
      const classMap = {
        'img-1': 'img-1-wrap',
        'img-2': 'img-2-wrap',
        'img-3': 'img-3-wrap',
        'img-4': 'img-4-wrap',
        'img-5': 'img-5-wrap',
        'img-6': 'img-6-wrap',
        'img-7': 'img-7-wrap',
        'logo': 'logo-wrap'
      };

      // Find the matching wrap class
      const newWrapClass = Object.entries(classMap).find(([key]) => 
        target.classList.contains(key)
      )?.[1] || '';

      if (newWrapClass) {
        setCurrentWrapClass(newWrapClass);
        document.body.classList.add(newWrapClass);
      }
    };

    const handleHoverOut = () => {
      setIsHovered(false);
      setCurrentWrapClass("");
      removeAllBodyClasses();
    };

    // Attach event listeners using a MutationObserver
    const observer = new MutationObserver((mutations) => {
      const targets = document.querySelectorAll('.hover-target, .hover-target-2');
      
      // Remove existing listeners
      targets.forEach(target => {
        target.removeEventListener('mouseenter', handleHover);
        target.removeEventListener('mouseleave', handleHoverOut);
      });

      // Add new listeners
      targets.forEach(target => {
        target.addEventListener('mouseenter', handleHover);
        target.addEventListener('mouseleave', handleHoverOut);
      });
    });

    // Initial setup of event listeners
    const targets = document.querySelectorAll('.hover-target, .hover-target-2');
    targets.forEach(target => {
      target.addEventListener('mouseenter', handleHover);
      target.addEventListener('mouseleave', handleHoverOut);
    });

    // Start observing the document body for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Cleanup
    return () => {
      observer.disconnect();
      const targets = document.querySelectorAll('.hover-target, .hover-target-2');
      targets.forEach(target => {
        target.removeEventListener('mouseenter', handleHover);
        target.removeEventListener('mouseleave', handleHoverOut);
      });
      removeAllBodyClasses();
    };
  }, []);

  return (
    <>
      <div
        className="cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
      <div
        className={`cursor2 ${isHovered ? "hover" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
      <div
        className={`cursor3 ${isHovered ? "hover" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
    </>
  );
};

export default CursorFollower;