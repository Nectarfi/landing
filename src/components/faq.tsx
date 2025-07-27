import { useState } from "react";
import star from "../assets/stars.png";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs = defaultFAQs }) => {
  const [openFAQ, setOpenFAQ] = useState<string | null>("faq1"); // Default open the first FAQ

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="bg-[#060606] py-16 px-4 md:px-8 lg:px-16 relative rounded-b-3xl">
      {/* Background element */}
      {/* <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="text-[#F0B67F] text-[200px] font-bold transform -rotate-12 whitespace-nowrap">
          Stablecoins USDT - USDC - NCT
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">

        {/* <div className="flex justify-center lg:mb-7"> */}
          <div className="inline-flex gap-1.5 items-center rounded-full py-1.5 px-2.5 border border-[#626262] bg-gradient-to-r from-[#313131] to-[#CACACA]">
            <img src={star} alt="star" className="w-4 h-4" />
            <span className="text-[#FDFDFD] font-nunito font-bold text-sm">
              FAQ
            </span>
          </div>
        {/* </div> */}

        {/* Section Title */}
        <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start lg:mt-4">
          <h2 className="text-5xl lg:text-6xl font-extrabold text-[#FDFDFD] font-sora">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="lg:w-2/3">
          {faqs.map((faq) => (
            <FAQAccordion
              key={faq.id}
              faq={faq}
              isOpen={openFAQ === faq.id}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>
        </div>
        
      </div>
    </section>
  );
};

interface FAQAccordionProps {
  faq: FAQItem;
  isOpen: boolean;
  toggleFAQ: (id: string) => void;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faq,
  isOpen,
  toggleFAQ,
}) => {
  return (
    <div className="border-b border-gray-800 overflow-hidden">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={() => toggleFAQ(faq.id)}
      >
        <h3 className="text-base md:text-2xl font-semibold text-[#FDFDFD] font-sora">
          {faq.question}
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#F0B67F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <path d="M7 17l10-10M7 7l10 10" />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[#FDFDFD] lg:pr-12 font-nunito text-sm lg:text-base">{faq.answer}</p>
      </div>
    </div>
  );
};

const defaultFAQs: FAQItem[] = [
  {
    id: "faq1",
    question: "What is NectarFi about?",
    answer: "NectarFi is a super app that lets you easily convert your local currency to stablecoins (like USDC or USDT), which you can then stake to earn a high profit. Think of it as a smart alternative to traditional banking—an app where you can protect your savings from inflation and earn better interest rates, giving you an easy way to grow your wealth.",
      
  },
  {
    id: "faq2",
    question: "How do I start earning?",
    answer: "You can start earning by first downloading the NectarFi app, completing the simple verification process, and depositing your funds. Once your funds are in your account, you can choose a vault to stake your stablecoins and start earning yields right away. Our platform offers competitive rates that are significantly higher than traditional savings accounts.",
  },
  {
    id: "faq3",
    question: "How do I choose the right vault?",
    answer: "Choosing the right vault depends on your financial goals. NectarFi offers various vaults with different yield rates, lock-up periods, and risk profiles. For beginners, we recommend starting with our standard vaults that offer moderate returns with minimal risk. If you re more experienced, you might prefer our advanced vaults with higher potential returns. You can compare all options directly in the app.",
  },
  {
    id: 'faq4',
    question: 'Can I withdraw my money anytime, or are there restrictions?',
    answer: 'Most of our vaults allow you to withdraw your funds at any time without penalties. However, some high-yield vaults may have specific lock-up periods to maximize returns. These terms are clearly displayed before you stake your funds. Even with lock-up periods, we have made the process as flexible as possible, with most withdrawals processing within 24 hours.',

  },
  {
    id: 'faq5',
    question: 'Do I need to know about crypto to use NectarFi?',
    answer: 'Not at all! NectarFi is designed to be user-friendly, especially for those new to cryptocurrency. We handle all the technical aspects behind the scenes. You simply deposit your money, and we convert it to stablecoins and manage the staking process for you. The app interface is intuitive and similar to traditional banking apps you might already be familiar with.'
  },
  {
    id: 'faq6',
    question: 'Do I need to complete KYC to use NectarFi?',
    answer: 'Yes, we require a simple KYC (Know Your Customer) verification process to comply with financial regulations and ensure the security of our platform. The process is quick and can usually be completed within minutes. You\'ll need to provide a government-issued ID and take a selfie for verification. This helps us maintain a safe environment for all users and prevents fraud.'
  }
];

export default FAQSection;
