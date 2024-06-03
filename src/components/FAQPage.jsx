import React, { useState } from 'react';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
     {
      question: "What is airdrop campaigning?",
      answer: "Airdrop campaigning is a marketing strategy in the cryptocurrency and blockchain space. It involves NFT Airdropping to a specific group of individuals or the wider community as a way to promote a new project, raise awareness, incentivize participation, or reward loyal users."
    },
    {
      question: "How are web3 socials different?",
      answer: "Web3 social media platforms promote the values of transparency and authenticity through the use of smart contracts. In Web3 socials, community engagement is prioritized, and the pace of interactions is faster than in Web2.0. The user base tends to consist of individuals with a higher level of Web3 education and awareness."
    },
    {
      question: "What types of projects or businesses can benefit from Web3 marketing?",
      answer: "Web3 marketing benefits a range of projects and businesses: Initial Offerings (ICO, IEO, IDO) attract investors, traffic activation enhances Web3 platforms, startups from scratch build presence, boosting trading volume in crypto markets, and scaling decentralized communities fosters engagement and participation."
    },
    {
      question: "Would you create our marketing roadmap?",
      answer: "Absolutely! At Wallet Hunter we are extremely Data Driven. Hold on your Seat belts to take a deep dive into Data Backed Marketing Strategies."
    },
    // Add more FAQ items as needed
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '36px', height: '2cm', color: 'white', marginBottom: '20px' }}>Frequently Asked Questions</h1>
      <div style={{ width: '80%', maxWidth: '600px' }}>
        {faqs.map((faq, index) => (
          <div key={index} style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
            <div style={{ background: 'linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)', color: 'black', padding: '12px 20px', cursor: 'pointer' }}
                 onClick={() => toggleAccordion(index)}
                 onMouseEnter={(e) => e.target.style.background = 'linear-gradient(-20deg, #21d4fd 0%, #b721ff 100%)'}
                 onMouseLeave={(e) => e.target.style.background = 'linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)'}>
              {faq.question}
            </div>
            <div style={{ maxHeight: activeIndex === index ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.5s ease-in-out' }}>
              <div style={{ background: 'linear-gradient(-20deg, #4facfe 0%, #00f2fe 100%)', color: 'black', padding: '12px 20px' }}>{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
