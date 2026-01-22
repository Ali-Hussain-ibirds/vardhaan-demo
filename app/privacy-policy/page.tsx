import React from 'react';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy - Vardaan Hospital & Research Centre Ranchi",
  description: "Privacy Policy of Vardaan Hospital, Ranchi. Learn how we protect your data and ensure secure healthcare service usage.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const page = () => {
  return (
    <PrivacyPolicyPage/>
  );
};

export default page;

