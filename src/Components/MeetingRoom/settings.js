import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "e3318c50ecd449b193008c5ef67905b8";
const token =
  "007eJxTYPBhqb/Ww7PvwMtfTDdZOQzO3TZu2XAr9FhixUeP3qtMz7kVGFKNjQ0tkk0NUpNTTEwskwwtjQ0MgPzUNDNzSwPTJIsgMfbkS+kcySl3ZzIyMkAgiM/CkJuYmcfAAABnKyBu";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
