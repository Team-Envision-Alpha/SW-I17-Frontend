import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "e3318c50ecd449b193008c5ef67905b8";
const token =
  "007eJxTYIjxNCiYtf8SQ9rp3C2r3Ew9Am48Mfsh8Pl81uIae+Z7SwMVGFKNjQ0tkk0NUpNTTEwskwwtjQ0MgPzUNDNzSwPTJAs9C9bkdZ1syVHCexgYoRDEZ2HITczMY2AAADrUH2c=";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
