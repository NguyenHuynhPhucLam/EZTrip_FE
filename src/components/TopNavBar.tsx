import styles from "./TopNavBar.module.css";
import Image from "next/image";
import EZTripLogo from "../public/assets/images/EZTripLogo.png"

const TopNavBar = () => {
    return (
        // Build TopNavBar
        <div className={styles.container}>

            {/* Logo Section  */}
            <div className={styles.logoContainer}>
                <Image src={EZTripLogo} alt="Logo" className={styles.logo}></Image>
            </div>

            {/* Options Section  */}
            <div className={styles.optionContainer}>

                {/* Home Option Section  */}
                <div className={styles.homeContainer}>
                    <span>Home</span>
                </div>

                {/* Tour List Option Section */}
                <div className={styles.tourListContainer}>
                    <span>Tour List</span>
                </div>

                {/* My Booking Option Section  */}
                <div className={styles.myBookingContainer}>
                    <span>My Booking</span>
                </div>

            </div>
        </div>
    )
};

export default TopNavBar;