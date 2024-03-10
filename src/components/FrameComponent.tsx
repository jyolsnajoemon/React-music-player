import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.iconsaxlinearmusicnoteParent}>
        <img
          className={styles.iconsaxlinearmusicnote}
          loading="lazy"
          alt=""
          src="/iconsaxlinearmusicnote.svg"
        />
        <div className={styles.tarangWrapper}>
          <h2 className={styles.tarang}>Tarang</h2>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <button className={styles.iconsaxlinearsearchnormalParent}>
          <img
            className={styles.iconsaxlinearsearchnormal}
            alt=""
            src="/iconsaxlinearsearchnormal.svg"
          />
          <div className={styles.searchWrapper}>
            <div className={styles.search}>{`Search `}</div>
          </div>
        </button>
        <div className={styles.frameWrapper}>
          <div className={styles.menuParent}>
            <div className={styles.menu}>Menu</div>
            <div className={styles.iconsaxlinearhome2Parent}>
              <img
                className={styles.iconsaxlinearhome2}
                loading="lazy"
                alt=""
                src="/iconsaxlinearhome2.svg"
              />
              <div className={styles.homeWrapper}>
                <div className={styles.home}>Home</div>
              </div>
            </div>
            <div className={styles.iconsaxlinearplaycircleParent}>
              <img
                className={styles.iconsaxlinearplaycircle}
                loading="lazy"
                alt=""
                src="/iconsaxlinearplaycircle.svg"
              />
              <div className={styles.playlistsWrapper}>
                <div className={styles.playlists}>Playlists</div>
              </div>
            </div>
            <div className={styles.iconsaxlinearmusicplayParent}>
              <img
                className={styles.iconsaxlinearmusicplay}
                loading="lazy"
                alt=""
                src="/iconsaxlinearmusicplay.svg"
              />
              <div className={styles.forYouWrapper}>
                <div className={styles.forYou}>For You</div>
              </div>
            </div>
            <div className={styles.iconsaxlinearheartParent}>
              <img
                className={styles.iconsaxlinearheart}
                loading="lazy"
                alt=""
                src="/iconsaxlinearheart.svg"
              />
              <div className={styles.headerGroup}>
                <div className={styles.likedSongs}>Liked Songs</div>
              </div>
              <div className={styles.love} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangle}>
        <div className={styles.libraryParent}>
          <div className={styles.library}>Library</div>
          <div className={styles.ellipse}>
            <div className={styles.iconsaxlinearbook1Parent}>
              <img
                className={styles.iconsaxlinearbook1}
                loading="lazy"
                alt=""
                src="/iconsaxlinearbook1.svg"
              />
              <div className={styles.albums}>Albums</div>
            </div>
            <div className={styles.iconsaxlinearmusicnoteGroup}>
              <img
                className={styles.iconsaxlinearmusicnote1}
                loading="lazy"
                alt=""
                src="/iconsaxlinearmusicnote-1.svg"
              />
              <div className={styles.songs}>Songs</div>
            </div>
            <div className={styles.chatFrame}>
              <img
                className={styles.outlineStarBorderWhite48dpIcon}
                loading="lazy"
                alt=""
                src="/outline-star-border-white-48dp-1@2x.png"
              />
              <div className={styles.browse}>{`Starred `}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangle1}>
        <div className={styles.ellipse1}>
          <div className={styles.other}>Other</div>
          <div className={styles.group}>
            <div className={styles.iconsaxlinearsetting2Parent}>
              <img
                className={styles.iconsaxlinearsetting2}
                loading="lazy"
                alt=""
                src="/iconsaxlinearsetting2.svg"
              />
              <div className={styles.settings}>Settings</div>
            </div>
            <div className={styles.iconsaxlinearmusicnoteContainer}>
              <img
                className={styles.iconsaxlinearmusicnote2}
                alt=""
                src="/iconsaxlinearmusicnote-2.svg"
              />
              <div className={styles.logOut}>Log out</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
