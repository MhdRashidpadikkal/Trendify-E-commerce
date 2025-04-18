import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import contactSvg from "../../assets/Contact-us-bro.svg";
import { useToastContext } from "@/context/ToastContext";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  const { dispatch } = useToastContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (name && email && message) {
      navigate('/')
      
      dispatch({
        type: "SHOW_TOAST",
        payload: {
          message: "Thanks for reaching out! Our team will contact you shortly.",
          toastType: "success",
        },
      });

      // optionally clear form
      setFormData({ name: "", email: "", message: "" });

    }

  };

  return (
    <div className="flex items-center justify-center min-h-screen py-12 md:px-6 bg-gray-50">
      <div className="w-full max-w-5xl p-10 bg-white shadow-xl rounded-2xl md:flex md:gap-12">
        {/* Left */}
        <div className="mb-10 md:w-1/2 md:mb-0">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">
            Contact <span className="text-[#5eba07]">Trendify</span>
          </h2>
          <p className="mb-6 text-gray-600">
            Have questions or need support? We're here to help! Fill out the
            form or reach out directly — the Trendify team will get back to you
            shortly.
          </p>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <Mail className="text-[green]" />
              <span>support@trendify.store</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[green]" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-[green]" />
              <span>Kochi, Kerala, India</span>
            </div>
          </div>
          <img
            src={contactSvg}
            alt="Contact Illustration"
            className="hidden shadow-lg rounded-xl md:block w-[300px]"
          />
        </div>

        {/* Right - Form */}
        <form className="space-y-5 md:w-1/2" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 border border-black focus:border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[green]"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 border border-black focus:border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[green]"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              placeholder="Your message..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 border border-black focus:border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[green]"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white transition-all cursor-pointer bg-gradient-to-r from-[green] to-[#264602] rounded-xl hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
