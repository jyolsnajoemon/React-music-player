import { FunctionComponent } from "react";
import styles from "./UserNameFrame.module.css";

const UserNameFrame: FunctionComponent = () => {
  return (
    <div className={styles.userNameFrame}>
      <div className={styles.newMessageIndicator}>
        <img
          className={styles.songDurationCircle}
          loading="lazy"
          alt=""
          src="/ellipse@2x.png"
        />
        <div className={styles.songDurationFrame}>
          <div className={styles.userProfileFrame}>
            <div className={styles.user1}>User 1</div>
            <div className={styles.account}>Account</div>
          </div>
        </div>
      </div>
      <img
        className={styles.iconsaxlinearnotification}
        alt=""
        src="/iconsaxlinearnotification.svg"
      />
      <img className={styles.userNameFrameChild} alt="" src="/vector-3.svg" />
      <div className={styles.greenDot1} />
      <div className={styles.chatChatsFrame}>
        <h2 className={styles.chats}>Chats</h2>
        <div className={styles.frameParent}>
          <div className={styles.ellipseChatParent}>
            <button className={styles.ellipseChat}>
              <div className={styles.ellipseChatChild} />
              <img
                className={styles.chatImg11Icon}
                alt=""
                src="/chat-img1-1@2x.png"
              />
            </button>
            <div className={styles.friend1Wrapper}>
              <div className={styles.friend1}>Friend 1</div>
            </div>
          </div>
          <div className={styles.greenDotFrame}>
            <div className={styles.greenDotFriendFrame}>
              <div className={styles.greenDot5} />
              <div className={styles.greenDot6} />
              <div className={styles.frameGroup}>
                <div className={styles.chatimgEllipseParent}>
                  <div className={styles.chatimgEllipse}>
                    <div className={styles.chatFriendChatimgFrame}>
                      <img
                        className={styles.chatFriendChatimgFrameChild}
                        alt=""
                        src="/ellipse-2.svg"
                      />
                      <img
                        className={styles.chatImg21Icon}
                        loading="lazy"
                        alt=""
                        src="/chat-img2-1@2x.png"
                      />
                    </div>
                    <div className={styles.chatArea}>
                      <b className={styles.friend2}>Friend 2</b>
                    </div>
                  </div>
                  <div className={styles.chatList}>
                    <div className={styles.greenDot7} />
                  </div>
                </div>
                <div className={styles.activeChat}>
                  <div className={styles.ellipseChatGroup}>
                    <button className={styles.ellipseChat1}>
                      <div className={styles.ellipseChatItem} />
                      <img
                        className={styles.chatImg31Icon}
                        alt=""
                        src="/chat-img3-1@2x.png"
                      />
                    </button>
                    <div className={styles.friend3Wrapper}>
                      <div className={styles.friend3}>Friend 3</div>
                    </div>
                  </div>
                  <div className={styles.ellipseChatContainer}>
                    <button className={styles.ellipseChat2}>
                      <div className={styles.ellipseChatInner} />
                      <img
                        className={styles.chatImg41Icon}
                        alt=""
                        src="/chat-img4-1@2x.png"
                      />
                    </button>
                    <div className={styles.friend4Wrapper}>
                      <div className={styles.friend4}>Friend 4</div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <button className={styles.ellipseChat3}>
                      <div className={styles.ellipseDiv} />
                      <img
                        className={styles.chatImg51Icon}
                        alt=""
                        src="/chat-img5-1@2x.png"
                      />
                    </button>
                    <div className={styles.friend5Wrapper}>
                      <b className={styles.friend5}>Friend 5</b>
                    </div>
                  </div>
                  <div className={styles.ellipseChatParent1}>
                    <button className={styles.ellipseChat4}>
                      <div className={styles.ellipseChatChild1} />
                      <img
                        className={styles.chatImg61Icon}
                        alt=""
                        src="/chat-img6-1@2x.png"
                      />
                    </button>
                    <div className={styles.friend6Wrapper}>
                      <div className={styles.friend6}>Friend 6</div>
                    </div>
                  </div>
                  <div className={styles.ellipseChatParent2}>
                    <button className={styles.ellipseChat5}>
                      <div className={styles.ellipseChatChild2} />
                      <img
                        className={styles.chatImg71Icon}
                        alt=""
                        src="/chat-img7-1@2x.png"
                      />
                    </button>
                    <div className={styles.friend7Wrapper}>
                      <b className={styles.friend7}>Friend 7</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.chatImage}>
              <button className={styles.ellipseChat6}>
                <div className={styles.offlineStatus} />
                <img
                  className={styles.chatImg81Icon}
                  alt=""
                  src="/chat-img8-1@2x.png"
                />
              </button>
              <div className={styles.friendLabel}>
                <b className={styles.friend8}>Friend 8</b>
              </div>
            </div>
            <div className={styles.greenDot8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNameFrame;
