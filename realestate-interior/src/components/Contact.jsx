function Contact() {
  return (
    <section id="contact" className="py-20 px-5 bg-[#111]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-10">
          Contact Us
        </h2>

        <form className="grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl bg-black border border-gray-700"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-xl bg-black border border-gray-700"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="p-4 rounded-xl bg-black border border-gray-700"
          ></textarea>

          <button className="bg-yellow-500 text-black py-4 rounded-xl font-bold">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;