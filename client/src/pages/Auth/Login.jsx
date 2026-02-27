import { useState } from "react";
import { setupRecaptcha } from "../../firebase/auth";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [confirm, setConfirm] = useState(null);
  const [otp, setOtp] = useState("");

  const sendOtp = async () => {
    const confirmation = await setupRecaptcha(phone);
    setConfirm(confirmation);
  };

  const verifyOtp = async () => {
    await confirm.confirm(otp);
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>DilSet Login</h2>

      {!confirm && (
        <>
          <input
            placeholder="+91XXXXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={sendOtp}>Send OTP</button>
        </>
      )}

      {confirm && (
        <>
          <input
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify</button>
        </>
      )}

      <div id="recaptcha-container"></div>
    </div>
  );
}
