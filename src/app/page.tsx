import Image from "next/image";
import styles from "./page.module.css";
import PhoneIcon from "../public/assets/icons/contactNum.png"
import MailIcon from "../public/assets/icons/contactMail.png"

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        This Is HomePage
      </div>
      <footer>This is footer</footer></>

  );
}
