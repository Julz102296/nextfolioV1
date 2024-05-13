import { useState, useEffect } from 'react';
import styles from './BackToTopButton.module.css';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to toggle the visibility of the button based on scroll position
    const toggleVisibility = () => {
      if (window.pageYOffset > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach scroll event listener to toggle button visibility
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener when component unmounts
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Function to scroll the page back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`${styles.backToTopButton} ${isVisible ? styles.visible : styles.hidden}`}
      onClick={scrollToTop}
    >
      Back to Top
    </button>
  );
};

export default BackToTopButton;
