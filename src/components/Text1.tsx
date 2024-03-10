import { FunctionComponent } from "react";
import styles from "./Text1.module.css";

const Text1: FunctionComponent = () => {
  return (
    <div className={styles.text}>
      <div className={styles.group}>
        <div className={styles.text1}>
          <div className={styles.parentBox}>
            <h1 className={styles.nowPlaying}>Now Playing</h1>
          </div>
          <div className={styles.imageHolder}>
            <img
              className={styles.image3Icon}
              loading="lazy"
              alt=""
              src="/image-3@2x.png"
            />
            <div className={styles.blurEffect}>
              <div className={styles.queue}>
                <div className={styles.badAndBoujeeParent}>
                  <b className={styles.badAndBoujee}>Bad and Boujee</b>
                  <div className={styles.migos}>Migos</div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.ellipseShapeParent}>
                    <div className={styles.ellipseShape}>
                      <div className={styles.forwardArrow}>
                        <div className={styles.parentSongList}>1:42</div>
                      </div>
                      <div className={styles.durationMarker}>-3:51</div>
                    </div>
                    <div className={styles.verticalVector}>
                      <div className={styles.userProfile}>
                        <div className={styles.userProfileChild} />
                        <div className={styles.userProfileItem} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.durationIcon}>
                    <div className={styles.frameParent1}>
                      <div className={styles.imageContainer}>
                        <img
                          className={styles.iconsaxlinearmusicfilter}
                          alt=""
                          src="/iconsaxlinearmusicfilter.svg"
                        />
                      </div>
                      <div className={styles.backRectangle}>
                        <div className={styles.blindingLightsTitle}>
                          <img
                            className={styles.iconsaxlinearprevious}
                            loading="lazy"
                            alt=""
                            src="/iconsaxlinearprevious.svg"
                          />
                        </div>
                        <img
                          className={styles.iconsaxlinearplay}
                          loading="lazy"
                          alt=""
                          src="/iconsaxlinearplay.svg"
                        />
                        <div className={styles.blindingLightsTitle1}>
                          <img
                            className={styles.iconsaxlinearnext}
                            loading="lazy"
                            alt=""
                            src="/iconsaxlinearnext.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.imageContainer1}>
                        <img
                          className={styles.iconsaxlinearrepeat}
                          alt=""
                          src="/iconsaxlinearrepeat.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.queueText}>
        <div className={styles.timerFrame}>
          <b className={styles.queue1}>Queue</b>
        </div>
        <div className={styles.designParentFrame}>
          <div className={styles.blankFrameForArt}>
            <img
              className={styles.blankFrameForArtChild}
              alt=""
              src="/group-4.svg"
            />
            <div className={styles.backFrameElement}>
              <img
                className={styles.backIcon}
                loading="lazy"
                alt=""
                src="/back@2x.png"
              />
            </div>
            <div className={styles.songInfoWithIcon}>
              <div className={styles.weekndInfoBox}>
                <img
                  className={styles.image2Icon}
                  loading="lazy"
                  alt=""
                  src="/image-2@2x.png"
                />
              </div>
              <div className={styles.loveSymbol}>
                <div className={styles.blindingLights}>Blinding Lights</div>
                <div className={styles.mediaPlayerControls}>
                  <div className={styles.theWeeknd}>The Weeknd</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.songList}>
            <img className={styles.songListChild} alt="" src="/ellipse-6.svg" />
            <img
              className={styles.forwardIcon}
              loading="lazy"
              alt=""
              src="/forward@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.topSongsSection}>
        <div className={styles.chatBubbleGroupParent}>
          <div className={styles.chatBubbleGroup}>
            <b className={styles.topSongs}>Top Songs</b>
          </div>
          <div className={styles.singleSongItem}>
            <div className={styles.songDurationText}>
              <div className={styles.song}># Song</div>
              <div className={styles.duration}># Duration</div>
            </div>
            <img
              className={styles.singleSongItemChild}
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.image2Parent}>
              <img
                className={styles.image2Icon1}
                loading="lazy"
                alt=""
                src="/image-2-1@2x.png"
              />
              <div className={styles.showmeSongTitle}>
                <div className={styles.chrisBrownArtistName}>
                  <div className={styles.blindingLights1}>Blinding Lights</div>
                  <div className={styles.theWeeknd1}>The Weeknd</div>
                </div>
              </div>
              <div className={styles.emptySpaceWrapper}>
                <div className={styles.emptySpace}>04:01</div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.greenDotGroupParent}>
                <div className={styles.greenDotGroup}>
                  <img
                    className={styles.iconsaxlinearheart}
                    loading="lazy"
                    alt=""
                    src="/iconsaxlinearheart-1.svg"
                  />
                </div>
                <div className={styles.chatimgFrame}>
                  <div className={styles.wrapperGroup1}>
                    <img
                      className={styles.wrapperGroup1Child}
                      loading="lazy"
                      alt=""
                      src="/group-1.svg"
                    />
                  </div>
                </div>
                <button className={styles.moreOptionsButtonParent}>
                  <div className={styles.moreOptionsButton} />
                  <img
                    className={styles.iconsaxlinearmore}
                    alt=""
                    src="/iconsaxlinearmore.svg"
                  />
                </button>
              </div>
            </div>
          </div>
          <img
            className={styles.vectorDividerIcon}
            alt=""
            src="/vector-2.svg"
          />
          <div className={styles.frameContainer}>
            <div className={styles.image2Group}>
              <img
                className={styles.image2Icon2}
                loading="lazy"
                alt=""
                src="/image-2-2@2x.png"
              />
              <div className={styles.frameDiv}>
                <div className={styles.showMeParent}>
                  <div className={styles.showMe}>Show me</div>
                  <div className={styles.chrisBrown}>Chris Brown</div>
                </div>
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.div}>04:01</div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.greenDotGroupGroup}>
                <div className={styles.greenDotGroup1}>
                  <img
                    className={styles.iconsaxlinearheart1}
                    loading="lazy"
                    alt=""
                    src="/iconsaxlinearheart-2.svg"
                  />
                </div>
                <div className={styles.chatTextArea}>
                  <div className={styles.wrapperGroup2}>
                    <img
                      className={styles.wrapperGroup2Child}
                      loading="lazy"
                      alt=""
                      src="/group-2.svg"
                    />
                  </div>
                </div>
                <button className={styles.ellipseParent}>
                  <div className={styles.frameChild} />
                  <img
                    className={styles.iconsaxlinearmore1}
                    alt=""
                    src="/iconsaxlinearmore.svg"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text1;
