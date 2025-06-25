import styles from "./HeaderBar.module.css";
import Image from "next/image";
import PhoneIcon from "../public/assets/icons/contactNum.png";
import MailIcon from "../public/assets/icons/contactMail.png";
import LogInIcon from "../public/assets/icons/logIn.png";
import SignUpIcon from "../public/assets/icons/signUp.png";
const HeaderBar = () => {
    return (
        // Build HeaderBar UI
        <header className={styles.HeaderBar}>

            {/* Contact Number section  */}
            <div className={styles.contactNum}>
                <Image src={PhoneIcon} alt="SDT" className={styles.contactNumImg}></Image>
                <div>0931301807</div>
            </div>

            {/* Contact Mail section  */}
            <div className={styles.contactMail}>
                <div className={styles.contactMail2}>
                    <Image src={MailIcon} alt="EMail" className={styles.contactMailImg}></Image>
                    <div>traveltour1005@gmail.com</div>
                </div>
            </div>

            {/* Log In Section  */}
            <div className={styles.logIn}>
                <Image src={LogInIcon} alt="LogIn" className={styles.logInImg}></Image>
                <div>Log In</div>
            </div>

            {/* Sign Up Section  */}
            <div className={styles.signUp}>
                <Image src={SignUpIcon} alt="SignUp" className={styles.signUpImg}></Image>
                <div>Sign Up</div>
            </div>
        </header>
    )
};
export default HeaderBar;

