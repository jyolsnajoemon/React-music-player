import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import Text1 from "../components/Text1";
import UserNameFrame from "../components/UserNameFrame";
import styles from "./MusicWeb.module.css";

const MusicWeb: FunctionComponent = () => {
  return (
    <div className={styles.musicWeb}>
      <FrameComponent />
      <div className={styles.group}>
        <Text1 />
      </div>
      <div className={styles.profilePictureEllipse}>
        <div className={styles.chatBubble} />
        <UserNameFrame />
      </div>
      <img className={styles.musicWebChild} alt="" src="/group-3.svg" />
      <div className={styles.musicWebItem} />
    </div>
  );
};

export default MusicWeb;
