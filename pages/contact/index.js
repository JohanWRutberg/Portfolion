import { useState } from "react";
import Circles from "/components/Circles";
import Bulb from "../../components/Bulb";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  const [formData, setFormData] = useState({
    namn: "",
    email: "",
    amne: "",
    meddelande: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      alert("E-post skickad framgångsrikt");
      setFormData({
        namn: "",
        email: "",
        amne: "",
        meddelande: ""
      });
    } else {
      alert("Något gick fel, försök igen");
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div
        className="container mx-auto py-32 text-center xl:text-left flex
        items-center justify-center h-full"
      >
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let´s <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="namn"
                placeholder="namn"
                value={formData.namn}
                onChange={handleChange}
                className="input"
              />
              <input
                type="email"
                name="email"
                placeholder="e-post"
                value={formData.email}
                onChange={handleChange}
                className="input"
              />
            </div>
            <input
              type="text"
              name="amne"
              placeholder="ämne"
              value={formData.amne}
              onChange={handleChange}
              className="input"
            />
            <textarea
              name="meddelande"
              placeholder="meddelande"
              value={formData.meddelande}
              onChange={handleChange}
              className="textarea"
            ></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px]
              px-8 transition-all duration-300 flex items-center justify-center
              overflow-hidden hover:border-accent group"
            >
              <span
                className="group-hover:-translate-y-[120%] group-hover:opacity-0
                transition-all duration-500"
              >
                Let´s talk
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex
                group-hover:-translate-y-0 group-hover:opacity-100 transition-all
                duration-300 absolute text-[22px]"
              />
            </button>
          </motion.form>
        </div>
      </div>
      {/* <Bulb /> */}
    </div>
  );
};

export default Contact;
