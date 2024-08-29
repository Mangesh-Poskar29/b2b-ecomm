import React from 'react';
import { FaUserTie, FaStore, FaRegLightbulb, FaComments } from 'react-icons/fa';
import './KnowledgeBasePage.css';

const KnowledgeBasePage = () => {
  return (
    <div className="Hknowledge-base-page">
      <div className="Hheader">
        <div className="Hcard">
          <FaUserTie size={50} color="#e97171" />
          <h2>I'm a Buyer</h2>
          <p>90 Articles / 4 Categories</p>
        </div>
        <div className="Hcard">
          <FaStore size={50} color="#e97171" />
          <h2>I'm a Seller</h2>
          <p>315 Articles / 8 Categories</p>
        </div>
        <div className="Hcard">
          <FaRegLightbulb size={50} color="#e97171" />
          <h2>Product Updates</h2>
          <p>20 Articles / 8 Categories</p>
        </div>
      </div>

      <div className="Hcontent-section">
        <div className="Hknowledge-base">
          <h3>Buyer Knowledge Base</h3>
          <ul>
            <li>Does B2B Mart provide shipping service?</li>
            <li>What is verified supplier?</li>
            <li>How do I search for a product/service on B2B Mart?</li>
            <li>How to view/delete the Buy Requirements posted by me?</li>
            <li>What is Customer Care Number of B2B Mart?</li>
            <li>How does a buyer provide feedback/rating to a seller listed on B2B Mart?</li>
            <li>How do I post a Buying Requirement?</li>
          </ul>
        </div>

        <div className="Hknowledge-base">
          <h3>Seller Knowledge Base</h3>
          <ul>
            <li>How do I register for paid services on B2B Mart?</li>
            <li>How to Sell Items on B2B Mart?</li>
            <li>Integration of B2B Mart’s Lead Manager CRM API with Third Party CRMs</li>
            <li>How to Create Free Seller account on B2B Mart?</li>
            <li>How to upload Product images?</li>
            <li>TrustSEAL Service</li>
            <li>B2B Mart Leads API</li>
          </ul>
        </div>

        <div className="Hknowledge-base">
          <h3>Trending Articles</h3>
          <ul>
            <li>Why am I getting irrelevant BuyLeads?</li>
            <li>How do I check my account manager details in B2B Mart?</li>
            <li>How to Consume BuyLeads in B2B Mart?</li>
            <li>How to Update Primary Mobile Number?</li>
            <li>How do I Add products in my B2B Mart catalog?</li>
            <li>IM Insta: Connect More, Convert More</li>
            <li>How can I get my monthly payment receipt and Invoice?</li>
          </ul>
        </div>
      </div>

      <div className="Hchat-icon">
        <FaComments size={24} />
        <p>Chat With Us</p>
      </div>
    </div>
  );
};

export default KnowledgeBasePage;
