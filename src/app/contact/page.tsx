import Image from "next/image";
import React from "react";
import { contactImg } from "@/assets";
import { ContactForm } from "@/components/contact/ContactForm";

const Contact: React.FC = () => {
  return (
    <div className="relative mt-24 overflow-x-hidden pb-10">
      <div className="p-5 sm:p-20">
        <div className="bg-neutral-xmd py-20 rounded-xl w-full">
          <div className="flex justify-center items-center">
            {" "}
            <h1 className="text-center text-4xl font-main max-w-[15ch]">
              Connect with Us Today
            </h1>
          </div>
          <div className="relative flex flex-row justify-center items-center gap-36">
            <ContactForm />

            {/* Contact Image  */}
            <div className="hidden lg:flex">
              <Image src={contactImg} alt="contact_img" width={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
