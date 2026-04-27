import { useEffect, useRef } from "react";
import { io } from "socket.io-client";


export const useSocket = () => {
	const socketRef = useRef(null);

	useEffect(() => {
		socketRef.current = io("http://localhost:3000", {
			autoConnect: true,
		});

		return () => {
			socketRef.current?.disconnect();
		};
	}, []);

	return socketRef.current;
};
