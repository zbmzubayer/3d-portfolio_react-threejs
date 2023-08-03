import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import emailjs from "@emailjs/browser";
import { emailJSConfig } from "../utils/emailConfig";
import { toast } from "react-hot-toast";

// template_pzrawdf
// service_djy5lih
// kDrKCwEvYeBkrTUpk
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        emailJSConfig.serviceID,
        emailJSConfig.templateID,
        {
          from_name: form.name,
          from_email: form.email,
          to_name: "Zubayer",
          to_email: emailJSConfig.toEmail,
          message: form.message,
        },
        emailJSConfig.publicKey
      )
      .then(() => {
        setLoading(false);
        toast.success("Message sent successfully");
        setForm({ name: "", email: "", message: "" });
      }),
      (err) => {
        setLoading(false);
        console.log(err);
        toast.error("Something went wrong!");
      };
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="What's your name?"
              onChange={handleChange}
              className="bg-tertiary px-6 py-4 placeholder:text-secondary rounded-lg border-none outline-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="What's your email?"
              onChange={handleChange}
              className="bg-tertiary px-6 py-4 placeholder:text-secondary rounded-lg border-none outline-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              placeholder="What do you want to say?"
              onChange={handleChange}
              className="bg-tertiary px-6 py-4 placeholder:text-secondary rounded-lg border-none outline-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary px-8 py-3 w-fit outline-none font-bold shadow-md shadow-primary rounded-xl hover:text-secondary hover:shadow-primary hover:shadow-xl"
          >
            {loading ? "Sending" : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
