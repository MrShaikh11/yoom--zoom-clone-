"use client";
import { tokenProvider } from "@/actions/stream.actions";
import Loader from "@/components/ui/Loader";
import { useUser } from "@clerk/nextjs";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

export default function StreamVideoProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [videoClient, setVideoClient] = useState<StreamVideoClient | undefined>(
    undefined
  );
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user || !apiKey) return;

    const client = new StreamVideoClient({
      apiKey,
      tokenProvider,
    });

    client
      .connectUser(
        {
          id: user.id,
          name: user.username || user.id,
          image: user.imageUrl,
        },
        tokenProvider
      )
      .then(() => setVideoClient(client))
      .catch((err) => console.error("Failed to connect Stream user:", err));

    return () => {
      client.disconnectUser();
    };
  }, [user, isLoaded]);

  if (!videoClient) return <Loader />; // Or a loading spinner

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
}
