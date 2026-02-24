"use client";

import { useRef } from "react";
import { ContactIcon } from "./ContactIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFacebookMessenger,
  faLine,
} from "@fortawesome/free-brands-svg-icons";

gsap.registerPlugin(ScrollTrigger);

type classtype = {
  classtype?: string;
  pops?: string;
};

const ContactedBox = ({ classtype, pops }: classtype) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(containerRef.current?.children ? Array.from(containerRef.current.children) : [], {
      scale: 0.8,
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
      },
    });
  }, { scope: containerRef });

  return (
    <div className="w-full flex justify-center my-6">
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-4 md:px-8 max-w-7xl w-full"
      >
        <div className="h-full w-full">
          <ContactIcon
            pops={pops}
            sizeicon="2x"
            coloricon="blue"
            msg="Messenger"
            description="ช่างมิล วิศกรการประปา"
            LINKBTN="https://www.facebook.com/share/1SAASdGE8Y/?mibextid=wwXIfr"
            icontype={faFacebookMessenger}
            classtype={classtype}
          />
        </div>

        <div className="h-full w-full">
          <ContactIcon
            pops={pops}
            sizeicon="2x"
            coloricon="blue"
            msg="Facebook"
            description="ช่างมิล วิศกรการประปา"
            LINKBTN="https://www.facebook.com/share/1SAASdGE8Y/?mibextid=wwXIfr"
            icontype={faFacebook}
            classtype={classtype}
          />
        </div>

        <div className="h-full w-full">
          <ContactIcon
            pops={pops}
            sizeicon="2x"
            coloricon="red"
            msg="โทรสอบถาม"
            description="064-408-8510"
            LINKBTN="tel:0644088510"
            icontype={faPhone}
            classtype={classtype}
          />
        </div>

        <div className="h-full w-full">
          <ContactIcon
            pops={pops}
            sizeicon="2x"
            coloricon="green"
            msg="LINE ID"
            description="064-408-8510"
            LINKBTN="tel:0644088510"
            icontype={faLine}
            classtype={classtype}
          />
        </div>
      </div>
    </div>
  );
};
export default ContactedBox;
