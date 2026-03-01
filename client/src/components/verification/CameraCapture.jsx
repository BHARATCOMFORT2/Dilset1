import React, { useRef, useState, useEffect } from "react";

export default function CameraCapture({ onCapture }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, []);

  async function startCamera() {
    try {
      const s = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });
      videoRef.current.srcObject = s;
      setStream(s);
    } catch (e) {
      console.error("Camera error", e);
    }
  }

  function stopCamera() {
    stream?.getTracks().forEach((t) => t.stop());
  }

  function capture() {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);

    const image = canvas.toDataURL("image/jpeg", 0.9);
    onCapture && onCapture(image);
  }

  return (
    <div className="camera-capture">
      <video ref={videoRef} autoPlay playsInline className="camera-view" />
      <canvas ref={canvasRef} style={{ display: "none" }} />

      <button className="capture-btn" onClick={capture}>
        Capture
      </button>
    </div>
  );
}
