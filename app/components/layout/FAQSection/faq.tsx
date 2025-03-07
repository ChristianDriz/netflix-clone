"use client"

import Image from "next/image";
import { useState } from "react";

type Faqs = {
    title: string;
    description: string;
}

type Props = {
    faqs: Faqs[];
}

export default function FAQ_Section({ faqs } : Props) {

    const [ activeIndex, setActiveIndex ] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    }

    return (
        <section className="w-full px-6 sm:px-8 4xl:px-20 7xl:px-37 9xl:px-88.5 mb-16 4xl:mb-18 ">
            <div className="mx-auto 9xl:w-7xl ">
                <div className="mt-3 4xl:mt-4">
                    <h2 className="text-lg leading-5.5 4xl:text-2xl 4xl:leading-7 9xl:text-[32px] 9xl:leading-9 font-medium 9xl:font-bold">
                        Frequently Asked Questions
                    </h2>
                </div>
                <ul className="mt-4">
                    {faqs.map((faq, idx) => (
                        /* Accordion */
                        <li key={idx} className="mb-2 ">
                            <div className="w-full bg-[#2d2d2d] hover:bg-[#414141] mb-px">
                                <h3 className="w-full text-lg leading-6 4xl:text-2xl 4xl:leading-9">
                                    <button 
                                        onClick={() => toggleAccordion(idx)}
                                        className="w-full flex justify-between items-center p-6 cursor-pointer ">
                                        {faq.title}
                                        <Image 
                                            src={'/icons/plus.svg'} 
                                            alt="plus" 
                                            width={24} 
                                            height={24}
                                            className={`w-6 h-6 4xl:w-9 4xl:h-9 ${activeIndex === idx ? 'rotate-45' : 'rotate-0'}`}
                                        />
                                    </button> 
                                </h3>
                            </div>
                            <div className={`bg-[#2d2d2d] overflow-hidden transition-[max-height] duration-300 ease-in-out ${activeIndex === idx ? 'max-h-[500px]' : 'max-h-0'}`}>                              
                                <p 
                                    className="p-6 text-lg leading-6 4xl:text-2xl 4xl:leading-7" 
                                    dangerouslySetInnerHTML={{ __html: faq.description }}
                                />
                            </div>
                        </li>
                    ))}
                    
                </ul>
            </div>
        </section>
    )
}
