"use client" 
import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FaqComponent() {

    let [activeIndex, setActiveIndex] = useState(null); // Default: none open

    let toggleFaq = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };



    return (
        <section className="max-w-[1320px] m-auto py-10 lg:px-0 md:px-4 px-4">
            {faqData.map((item, index) => (
                <div
                    key={index}
                    className={`border rounded mb-2 transition-all ${index === activeIndex ? "border-[#e0b195]" : "border-transparent"
                        }`}
                >
                    <button
                        className={`w-full flex justify-between items-center text-left p-4 font-semibold text-gray-800 ${index === activeIndex ? "bg-[#fdf7f4] text-[#d28e60]" : "bg-gray-100"
                            }`}
                        onClick={() => toggleFaq(index)}
                    >
                        {item.question}
                        {index === activeIndex ? <FaMinus /> : <FaPlus />}
                    </button>
                    {index === activeIndex && (
                        <div className="p-4 bg-white text-gray-700 border-t border-[#e0b195]">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </section>
    )
}

let faqData = [
    {
        question: "Mauris congue euismod purus at semper. Morbi et vulputate massa?",
        answer: "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
    },
    {
        question: "Morbi gravida, nisi id fringilla ultricies, elit lorem?",
        answer: "Answer for Morbi gravida, nisi id fringilla ultricies, elit lorem...",
    },

    {
        question: "Aenean elit orci, efficitur quis nisl at, accumsan?",
        answer: "Answer for Aenean elit orci, efficitur quis nisl at, accumsan...",
    },
    {
        question: "Pellentesque habitant morbi tristique senectus et netus?",
        answer: "Answer for Pellentesque habitant morbi tristique senectus et netus...",
    },

    {
        question: "Donec mattis finibus elit ut tristique?",
        answer: "Answer for Donec mattis finibus elit ut tristique...",
    },
    {
        question: "Nam pellentesque aliquam metus?",
        answer: "Answer for Nam pellentesque aliquam metus...",
    },

];
