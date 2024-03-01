"use client";

import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import PayInput from "@/components/UIElements/PayInput";

export default function Infos() {
  useEffect(() => emailjs.init("7wPgQ2gB49ojl_weS"), []);

  const fromNameRef = useRef<HTMLInputElement>(null);
  const fromSurnameRef = useRef<HTMLInputElement>(null);
  const fromEmailRef = useRef<HTMLInputElement>(null);
  const fromIndirizzoRef = useRef<HTMLInputElement>(null);
  const fromCivicoRef = useRef<HTMLInputElement>(null);
  const fromCapRef = useRef<HTMLInputElement>(null);
  const fromCittaRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);

  const validateFields = (): boolean => {
    if (
      !fromNameRef?.current?.value ||
      !fromSurnameRef?.current?.value ||
      !fromEmailRef?.current?.value ||
      !fromIndirizzoRef?.current?.value ||
      !fromCivicoRef?.current?.value ||
      !fromCapRef?.current?.value ||
      !fromCittaRef?.current?.value
    ) {
      return false;
    }
    setLoading(false);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();

    if (!validateFields()) {
      return;
    }

    const serviceId = "service_srgwufg";
    const templateId = "template_nm6mcul";

    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: fromNameRef?.current?.value,
        surname: fromSurnameRef?.current?.value,
        email: fromEmailRef?.current?.value,
        indirizzo: fromIndirizzoRef?.current?.value,
        civico: fromCivicoRef?.current?.value,
        cap: fromCapRef?.current?.value,
        citta: fromCittaRef?.current?.value,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-[75%] max-[1620px]:w-[100%] flex justify-center flex-wrap mb-16 mt-12"
      id="contactus"
    >
      <div className="w-full flex justify-center p-10">
        <div className="w-[100%] max-[700px]:w-[100%] flex justify-center text-6xl mb-5 max-[400px]:text-3xl text-center font-bold text-[#1db3f4]">
          Contattateci per maggiori informazioni
        </div>
      </div>
      <section className="w-[50%] max-sm:w-full flex justify-center">
        <form
          className="for max-[930px]:w-full w-[100%] flex justify-center flex-wrap max-[400px]:space-y-5 space-y-5 p-5"
          onSubmit={handleSubmit}
        >
          <div className="w-full justify-center flex flex-nowrap max-[400px]:flex-wrap max-[400px]:space-y-5 max-[400px]:space-x-0 space-x-10">
            <PayInput
              ref={fromNameRef}
              idFor="nameRef"
              type="text"
              placeholder="Inserisci il nome"
            />
            <PayInput
              ref={fromSurnameRef}
              idFor="surnameRef"
              type="text"
              placeholder="Inserisci il cognome"
            />
          </div>
          <div className="w-full justify-center flex flex-nowrap space-x-10">
            <PayInput
              ref={fromEmailRef}
              idFor="emailRef"
              type="email"
              placeholder="Inserisci l'email"
            />
          </div>
          <div className="w-full justify-center flex flex-nowrap max-[400px]:flex-wrap max-[400px]:space-y-5 max-[400px]:space-x-0 space-x-10">
            <PayInput
              ref={fromCapRef}
              idFor="capRef"
              type="number"
              placeholder="Inserisci il cap"
            />
            <PayInput
              ref={fromCittaRef}
              idFor="cittaRef"
              type="text"
              placeholder="Inserisci la cittá"
            />
          </div>
          <div className="w-full justify-center flex flex-nowrap max-[400px]:flex-wrap max-[400px]:space-y-5 max-[400px]:space-x-0 space-x-10">
            <PayInput
              ref={fromIndirizzoRef}
              idFor="indirizzoRef"
              type="text"
              placeholder="Inserisci l'indirizzo"
            />
            <PayInput
              ref={fromCivicoRef}
              idFor="civicoRef"
              type="number"
              placeholder="Inserisci il civico"
            />
          </div>

          <button
            className="btn bg-blue-600 text-white font-bold flex w-[50%] max-[1350px]:w-full justify-center items-center rounded-xl h-[40px] hover:bg-blue-300"
            disabled={loading}
          >
            {`${loading ? "Invio..." : "Conferma informazioni"}  `}
          </button>
        </form>
      </section>
    </div>
  );
}
