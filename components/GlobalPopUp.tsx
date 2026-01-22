"use client";

import { usePopup } from "@/content/PopupContent";
import Loading from "./Loading";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";

export default function Popup() {
  const { isOpen, togglePopup } = usePopup();
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    mssg: "",
  });

  
  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    if (token) {
      setCaptchaError("");
    }
  };

  const handleAppointment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate captcha
    if (!captchaToken) {
      setCaptchaError("Please complete the captcha verification");
      return;
    }

    setLoading(true);
    setCaptchaError("");

    try {
      const token =
        "dc7d6100-c0e0-4328-8118-5566c77a25a41761198775224:4843d8bf-fcfd-4776-80a5-87d9fc7fb6dc";

      const endUrl =
        "https://next-api.telecrm.in/enterprise/6787546f0a1a6403329262ba/autoupdatelead";
      const payload = {
        fields: {
          name: formData.name,
          phone: `+91${formData.phone}`, 
          email: formData.email,
          status: "Fresh",
          mssg: formData.mssg || " ",
        },
      };
      const response = await fetch(endUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      console.log(response)

      setFormData({ name: "", email: "", phone: "", mssg: "" });
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
      togglePopup(false);
      router.push("/thank-you");

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {loading && <Loading />}

      <div className="fixed inset-0 bg-black/50 backdrop-blur-lg flex items-center z-[10000] justify-center p-4">
        <div
          className="fixed inset-0 z-[1]"
          onClick={() => togglePopup(false)}
        ></div>

        <div className="p-4 relative z-[2] bg-[var(--accentSuperDark)] rounded-2xl w-full max-w-[600px]">
          <h2 className="text-white text-center text-3xl mb-6">
            Book your Appointment
          </h2>

          <form
            className="flex flex-col contact-form gap-5 items-center"
            onSubmit={handleAppointment}
          >
            <input
              type="text"
              placeholder="Your Name *"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Your Email *"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              type="tel"
              placeholder="Your Phone Number *"
              required
              pattern="^[0-9]{10}$"
              title="Please enter a valid 10-digit phone number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />

            <textarea
              placeholder="Your Message / Concern"
              value={formData.mssg}
              onChange={(e) =>
                setFormData({ ...formData, mssg: e.target.value })
              }
            />
            
            <div className="w-full flex flex-col items-center gap-2">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                onChange={handleCaptchaChange}
                theme="dark"
              />
              {captchaError && (
                <p className="text-red-400 text-sm mt-1">{captchaError}</p>
              )}
            </div>

            <button className="btn w-fit" type="submit" disabled={loading}>
              {loading ? "Booking..." : "Book Appointment"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
