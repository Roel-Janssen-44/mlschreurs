"use client";

import React, { useState, useRef } from "react";
import { PrismicNextLink } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ContactSlice} ContactSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactSlice>} ContactProps
 * @param {ContactProps}
 */
const Contact = ({ slice }) => {
  // Handle inputs
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    checkbox: false,
  });

  const form = useRef(null);

  const [status, setStatus] = useState("");
  const [loader, setLoader] = useState(false);
  const [nameErrorValue, setNameErrorValue] = useState("");
  let nameError = true;
  const [emailErrorValue, setEmailErrorValue] = useState("");
  let emailError = true;
  const [phoneErrorValue, setPhoneErrorValue] = useState("");
  let phoneError = true;
  const [messageErrorValue, setMessageErrorValue] = useState("");
  let messageError = true;
  // const [checkboxErrorValue, setCheckboxErrorValue] = useState("");
  // let checkboxError = true;

  const [sendStatus, setSendStatus] = useState("");

  const handleChange = (event) => {
    if (event.target.id === "checkbox") {
      setInputs((values) => ({ ...values, ["checkbox"]: !inputs.checkbox }));
      return;
    }
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // Single inputs checks
  const handleName = () => {
    if (inputs.name === "" || inputs.name === undefined) {
      nameError = true;
      setNameErrorValue("vul een naam in");
      return;
    }
    if (inputs.name !== "") {
      nameError = false;
      setNameErrorValue("");
    }
  };
  const handleEmail = () => {
    if (inputs.email === "" || inputs.email === undefined) {
      emailError = true;
      setEmailErrorValue("vul een email in");
      return;
    }
    if (inputs.email !== "") {
      emailError = false;
      setEmailErrorValue("");
    }
  };
  const handlePhone = () => {
    if (inputs.phone === "" || inputs.phone === undefined) {
      phoneError = true;
      setPhoneErrorValue("vul een telefoonnummer in");
      return;
    }
    if (inputs.phone !== "") {
      phoneError = false;
      setPhoneErrorValue("");
    }
  };
  const handleMessage = () => {
    messageError = false;
    setMessageErrorValue("");
  };
  // const handleCheckbox = () => {
  //   if (inputs.checkbox) {
  //     checkboxError = false;
  //     setCheckboxErrorValue("");
  //     return;
  //   }
  //   setCheckboxErrorValue(
  //     "U dient akkoord te gaan met de algemene voorwaarden"
  //   );
  // };

  const handleForm = (event) => {
    handleName();
    handleEmail();
    handlePhone();
    handleMessage();
    // handleCheckbox();
    if (
      nameError === false &&
      emailError === false &&
      phoneError === false &&
      messageError === false &&
      checkboxError === false
    ) {
      setLoader(true);
      setStatus("");
      handleSubmit(event, inputs);
    }
  };

  const handleSubmit = async (event, inputs) => {
    event.preventDefault();
    setSendStatus("Aan het laden...");
    const data = new FormData(form.current);
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setSendStatus("Verzonden");
        } else {
          setSendStatus(
            "Wegens een technische storing is het formulier niet verzonden."
          );
        }
      });
  };
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-20"
    >
      <div className="container max-w-4xl">
        <p
          className={`text-xl mb-10 ml-1 ${
            sendStatus === "Verzonden" ? "text-green-600" : ""
          } 
      ${sendStatus === "Aan het laden..." ? "text-gray" : ""}
      ${
        sendStatus ===
        "Wegens een technische storing is het formulier niet verzonden."
          ? "text-red-600"
          : ""
      }`}
        >
          {sendStatus}
        </p>
        <form ref={form}>
          <input
            type="hidden"
            name="access_key"
            value="6a218f25-e603-432d-98a1-0c09bb55e009"
          />
          {/* <input
          type="hidden"
          name="subject"
          value="Contactformulier Websidesign"
        /> */}
          {/* <input type="hidden" name="form-name" value="Websidesign-ContactForm" /> */}
          <div className="w-full md:top-20 max-w-md mx-auto sm:max-w-none">
            <div className="relative mb-8 w-10/12 sm:w-8/12 mx-auto md:ml-0 md:w-full lg:w-[47.5%] lg:mr-[2.5%] lg:inline-block">
              <input
                onChange={handleChange}
                className="text-gray peer border-b-2 border-blue py-2 px-2 mb-1 w-full placeholder-transparent focus:outline-none"
                type="text"
                id="name"
                name="name"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="cursor-auto font-bold peer-placeholder-shown:font-normal peer-focus:font-bold absolute ml-2 left-0 text-blue opacity-100 -top-4 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:opacity-85 peer-focus:-top-4 peer-focus:opacity-100 peer-focus:text-sm"
              >
                {slice.primary.name}
              </label>
              <p className="text-[red] w-full">{nameErrorValue}</p>
            </div>
            <div className="relative mb-8 w-10/12 sm:w-8/12 mx-auto md:ml-0 md:w-full lg:w-[47.5%] lg:ml-[2.5%] lg:inline-block">
              <input
                onChange={handleChange}
                className="text-gray peer border-b-2 border-blue py-2 px-2 mb-1 w-full placeholder-transparent focus:outline-none"
                type="text"
                id="phone"
                name="phone"
                placeholder=" "
              />
              <label
                htmlFor="phone"
                className="cursor-auto font-bold peer-placeholder-shown:font-normal peer-focus:font-bold absolute ml-2 left-0 text-blue opacity-100 -top-4 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:opacity-85 peer-focus:-top-4 peer-focus:opacity-100 peer-focus:text-sm"
              >
                {slice.primary.phone}
              </label>
              <p className="text-[red] w-full">{phoneErrorValue}</p>
            </div>
            <div className="relative mb-8 w-10/12 sm:w-8/12 mx-auto md:ml-0 md:w-full">
              <input
                onChange={handleChange}
                className="text-gray peer border-b-2 border-blue py-2 px-2 mb-1 w-full placeholder-transparent focus:outline-none"
                type="text"
                id="email"
                name="email"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="cursor-auto font-bold peer-placeholder-shown:font-normal peer-focus:font-bold absolute ml-2 left-0 text-blue opacity-100 -top-4 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:opacity-85 peer-focus:-top-4 peer-focus:opacity-100 peer-focus:text-sm"
              >
                {slice.primary.email}
              </label>
              <p className="text-[red] w-full">{emailErrorValue}</p>
            </div>
            <div className="relative mb-4 w-10/12 sm:w-8/12 mx-auto md:ml-0 md:w-full">
              <textarea
                onChange={handleChange}
                className="text-gray peer border-b-2 border-blue py-2 px-2 mb-1 w-full placeholder-transparent focus:outline-none"
                rows={3}
                id="message"
                name="message"
                placeholder=" "
              />
              <label
                htmlFor="message"
                className="cursor-auto font-bold absolute ml-2 left-0 text-blue opacity-100 -top-4 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:font-normal peer-placeholder-shown:text-base peer-placeholder-shown:opacity-85 peer-focus:-top-4 peer-focus:opacity-100 peer-focus:text-sm peer-focus:font-bold"
              >
                {slice.primary.message}
              </label>
              <p className="text-[red] w-full">{messageErrorValue}</p>
            </div>

            {/* <div className="w-10/12 sm:w-8/12 mx-auto md:ml-0 md:w-full mb-8 -mt-4">
              <input
                className="text-blue peer border-b-2 mr-2 border-blue py-2 px-2 mb-1"
                type="checkbox"
                id="checkbox"
                name="checkbox"
                onChange={handleChange}
              />
              <label htmlFor="checkbox" className="cursor-auto text-black">
                Ik heb de
                <PrismicNextLink
                  href="/algemene-voorwaarden"
                  className="font-bold text-blue font-swiss"
                  target="_blank"
                >
                  {" "}
                  Algemene voorwaarden{" "}
                </PrismicNextLink>
                en
                <PrismicNextLink
                  href="/privacy-verklaring"
                  className="font-bold text-blue font-swiss"
                  target="_blank"
                >
                  {" "}
                  Privacy verklaring{" "}
                </PrismicNextLink>
                gelezen en ga hiermee akkoord *
              </label>
              <p className="text-[red] w-full">{checkboxErrorValue}</p>
            </div> */}

            <div className="w-10/12 sm:w-8/12 mx-auto md:ml-0 md:w-full">
              <button
                onClick={() => {
                  handleForm(event);
                  setLoader(false);
                  setStatus("");
                }}
                type="button"
                className="inline px-6 py-3 md:text-lg md:px-7 md:my-4 leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0  active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
                text-white bg-black hover:bg-gray-800 focus:bg-gray-700 active:bg-gray-600"
              >
                {slice.primary.button}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
