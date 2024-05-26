"use client";

import "@livekit/components-styles";
import {
  LiveKitRoom,
  GridLayout,
  ParticipantTile,
  RoomAudioRenderer,
  ControlBar,
  useTracks,
} from "@livekit/components-react";
import { Track } from "livekit-client";
import { useEffect, useState } from "react";

export default function Page() {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [prompted, setPrompted] = useState(false);

  useEffect(() => {
    if (!prompted) {
      const room = prompt("please enter room name");
      const userName = prompt("Please enter your name:");
      if (room) setRoom(room);
      if (userName) setName(userName);
      setPrompted(true); // Ensure prompts are shown only once
    }
  }, [prompted]);

  useEffect(() => {
    if (room && name) {
      (async () => {
        try {
          const resp = await fetch(
            `/api/get-participant-token?room=${room}&username=${name}`,
          );
          const data = await resp.json();
          setToken(data.token);
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }, [room, name]); // Only fetch the token when room and name are set

  if (!prompted || token === "") {
    return <div>Getting token...</div>;
  }

  return (
    <LiveKitRoom
      video={true}
      audio={true}
      token={token}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      data-lk-theme="default"
      style={{ height: "100dvh" }}
    >
      <div className={"aspect-video"}>
        <MyVideoConference />
        <RoomAudioRenderer />
        <ControlBar />
      </div>
    </LiveKitRoom>
  );
}

function MyVideoConference() {
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: false },
  );
  return (
    <GridLayout
      tracks={tracks}
      style={{ height: "calc(100vh - var(--lk-control-bar-height))" }}
    >
      <div>
        <ParticipantTile />
      </div>
    </GridLayout>
  );
}
