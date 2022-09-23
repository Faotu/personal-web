import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

export default function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:faotuhappy@gmail.com?subject=${formData.subject}&body=Hey, my name ${formData.name}, ${formData.message}, ${formData.email}`;
  };

  return (
    <div className="h-screen flex relative flex-col md:text-left md:flex-row max-w-7xlpx-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 ">
        <h4 className="text-4xl font-semibold text-center">
          I got all the skills your are looking for. {""}
          <span className="decoration-[#FFABE1]/50 underline">
            Drop a message
          </span>
        </h4>

        <div className="space-y-2">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#FFABE1] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+2348036283915</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#FFABE1] h-7 w-7 animate-pulse" />
            <p className="text-2xl">faotuhappy@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#FFABE1] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Lagos, Nigeria</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput "
              type="text"
            />
            <input
              {...register("email")}
              placeholder="email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message....."
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[pink] py-5 px-10 rounded-md text-black animate-pulse font-bold font-sans"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}