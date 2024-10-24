"use client";

import React, { useRef } from "react";
import useSplitPara from "@/hooks/use-split-para";
import ContactForm from "./contact-form";

const paragraph = "We don’t just tell you what to do—we show you! Our goal is to ensure you leave feeling confident in your gardening abilities and that you reap a bountiful harvest."
const txt = "Let’s get more healthy food in your diet - one garden at a time. Whether you need personalized consulting, help with a family vegetable garden project, or are interested in booking a workshop, we’re here to make it easy and rewarding for you.";
const emailTxt = "Email us directly."
const mailAddress = "support@sproutingroots.com"

const Contact = () => {
    const container = useRef(null);
  
    const title = useSplitPara(txt, container);
    const para = useSplitPara(paragraph, container);
    const emailText = useSplitPara(emailTxt, container);
    const email = useSplitPara(mailAddress, container);

  return (
    <div className="md:px-12 px-4 py-24 h-screen grid place-items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div ref={container} className="space-y-2">
                <h1 className="font-bold mb-4">Ready to Grow?</h1>
                <p className="leading-tight flex flex-wrap gap-x-2">
                    {title}
                </p>
                <p className="leading-tight flex flex-wrap gap-x-2">
                    {para}
                </p>
                <p className="leading-tight flex flex-wrap gap-x-2">
                    {emailText}
                </p>
                <p className="leading-tight flex flex-wrap gap-x-2">
                    {email}
                </p>
            </div>
            <ContactForm />
        </div>
    </div>
  )
}

export default Contact