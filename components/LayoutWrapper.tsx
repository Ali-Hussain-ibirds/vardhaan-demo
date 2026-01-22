"use client";
import "../app/globals.css";

import Header from '@/components/Header';
import { usePathname } from 'next/navigation';
import Footer from './Footer';
import LPHeader from "./LPHeader";
import LPFooter from "./LPFooter";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const noHeaderPages = ['/gynaecologist-in-ranchi' , '/gynaecology-in-ranchi-meta-lp'];
  const showHeader = !noHeaderPages.includes(pathname);

  return (
    <>
      {showHeader ? <Header /> : <LPHeader />}
      {children}
      {showHeader ? <Footer /> : <LPFooter />}
    </>
  );
}