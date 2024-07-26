import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Intro.module.css";
import page1 from "./Page1";

const Intro = () => {
    return (
        <div className={styles.intro}>
            <picture className={styles.intro_img}>
                <source 
                    srcSet="images/image-intro-desktop.jpg"
                    media="(min-width: 1024px)"/>
                <img 
                    src="images/image-intro-mobile.jpg"
                    alt=""
                    aria-hidden="true" />
            </picture>
            <div className={styles.intro_content}>
                <h1 className={styles.title}>Humanizing your insurance.</h1>
                <p className={styles.description}>
                    Get your life insurance coverage easier and faster. We blend our expertise 
                    and technology to help you find the plan that’s right for you. Ensure you 
                    and your loved ones are protected.
                </p>
                {/* Use Link component to navigate to Page1 */}
                <Link to="/page1" className={styles.view_plans_btn}>View Plans</Link>
            </div>
        </div>
    );
}

export default Intro;
