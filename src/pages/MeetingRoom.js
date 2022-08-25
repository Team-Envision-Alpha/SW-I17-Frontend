/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../Assets/Images/aicte.png";
import micIcon from "../Assets/Images/micIcon.svg";
import vidIcon from "../Assets/Images/vidIcon.svg";
// import userMeet from "../Assets/Images/userMeet.svg";
import { useState, useEffect } from "react";
import {
  config,
  useClient,
  useMicrophoneAndCameraTracks,
  channelName,
} from "../Components/MeetingRoom/settings";
import { AgoraVideoPlayer } from "agora-rtc-react";

// import { Grid } from "@material-ui/core";
// import Video from "../Components/MeetingRoom/Video";
// import Controls from "../Components/MeetingRoom/Controls";

// import { useClient } from "./settings";

const MeetingRoom = () => {
  const [users, setUsers] = useState([]);
  const [start, setStart] = useState(false);
  const client = useClient();
  const [inCall, setInCall] = useState(false);
  const { ready, tracks } = useMicrophoneAndCameraTracks();

  // const client = useClient();
  // const { tracks, setStart, setInCall } = props;
  const [trackState, setTrackState] = useState({ video: true, audio: true });

  const mute = async (type) => {
    if (type === "audio") {
      await tracks[0].setEnabled(!trackState.audio);
      setTrackState((ps) => {
        return { ...ps, audio: !ps.audio };
      });
    } else if (type === "video") {
      await tracks[1].setEnabled(!trackState.video);
      setTrackState((ps) => {
        return { ...ps, video: !ps.video };
      });
    }
  };

  const leaveChannel = async () => {
    await client.leave();
    client.removeAllListeners();
    tracks[0].close();
    tracks[1].close();
    setStart(false);
    setInCall(false);
  };

  useEffect(() => {
    let init = async (name) => {
      client.on("user-published", async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        if (mediaType === "video") {
          setUsers((prevUsers) => {
            return [...prevUsers, user];
          });
        }
        if (mediaType === "audio") {
          user.audioTrack.play();
        }
      });

      client.on("user-unpublished", (user, mediaType) => {
        if (mediaType === "audio") {
          if (user.audioTrack) user.audioTrack.stop();
        }
        if (mediaType === "video") {
          setUsers((prevUsers) => {
            return prevUsers.filter((User) => User.uid !== user.uid);
          });
        }
      });

      client.on("user-left", (user) => {
        setUsers((prevUsers) => {
          return prevUsers.filter((User) => User.uid !== user.uid);
        });
      });
      let join
      try {
        join = await client.join(config.appId, name, config.token, null);
      } catch (error) {
        console.log("error");
      }

      if (tracks && join) await client.publish([tracks[0], tracks[1]]);
      setStart(true);
    };

    if (ready && tracks) {
      try {
        init(channelName);
      } catch (error) {
        console.log(error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelName, client, ready, tracks]);

  return (
    <>
      <div
        className="px-10 py-4  flex flex-col gap-4 h-[100vh]"
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <p className="text-4xl font-bold font-IBM-Sans tracking-wide">
            AICTE MEETING ROOM
          </p>
        </div>
        {start && tracks &&
          <div className="flex flex-wrap justify-center items-center gap-10">


            {/* Main */}

            <ul className="flex flex-wrap justify-center items-center gap-10">
              <li>
                <div className="w-[25vw] h-[30vh] rounded-xl bg-[#DEDEDE80] shadow-sm flex justify-center items-center object-contain">
                  <AgoraVideoPlayer
                    videoTrack={tracks[1]}
                    style={{ height: "100%", width: "100%", objectFit: "contain" }}

                  />
                </div>
              </li>
            </ul>
            {users.length > 0 &&
              users.map((user, key) => {
                if (user.videoTrack) {
                  return (
                    <div key={key}>
                      <div className="w-[25vw] h-[30vh] rounded-xl bg-[#DEDEDE80] shadow-sm flex justify-center items-center ">
                        {/* <img
                    src={userMeet}
                    alt="userMeet"
                    className="w-[10vw] h-[20vh] rounded-full"
                  /> */}
                        <AgoraVideoPlayer
                          videoTrack={user.videoTrack}
                          key={user.uid}
                          style={{ height: "100%", width: "100%", objectFit: "contain" }}
                        />
                      </div>
                      {/* <div className="bg-[#00000080] w-[5vw] rounded-bl-xl rounded-tr-xl relative bottom-7">
                        <p className="text-white text-sm text-center py-1 ">text</p>
                      </div> */}
                    </div>

                  );
                } else return null;
              })}

          </div>
        }


        {/* Controls */}

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div>
              <img
                src={logo}
                alt="logo"
                className="w-[3vw] h-[6vh] rounded-full"
              />
            </div>
            <div>
              <p className="font-bold text-lg">text</p>
              <p className="text-base text-[#65676B]">text</p>
            </div>
          </div>
          {ready && tracks && (
            <div className="flex items-center gap-4">
              <button className="w-[5vw] h-[4vw]  bg-[#DEDEDE80] rounded-xl border-2 border-[#4B556380] flex items-center justify-center"
                onClick={() => mute("audio")}
              >
                <img src={micIcon} alt="micIcon" />
              </button>
              <button className="w-[5vw] h-[4vw] bg-[#DEDEDE80] rounded-xl border-2 border-[#4B556380] flex items-center justify-center"
                onClick={() => mute("video")}


              >
                <img src={vidIcon} alt="vidIcon" />
              </button>
            </div>
          )}

          <div>
            <button className="flex justify-center items-center p-4 rounded-xl font-IBM-Sans bg-[#EF4444] text-white" onClick={() => leaveChannel()}>
              Leave Meeting
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetingRoom;
