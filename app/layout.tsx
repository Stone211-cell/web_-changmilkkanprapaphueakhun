import type { Metadata } from "next";

import "@/lib/fontawesome";
import "./globals.css";
import Headeravbar from "@/components/Navbar/Headeravbar";
import { Kanit } from "next/font/google";
import Footerbar from "@/components/Footer/Footerbar";

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["200", "400", "700"],
});

// กำหนด base url สำหรับ metadata
export const metadataBase = new URL("https://xn--12cli4ea7apbo8ioaeft01a.com/");

export const metadata: Metadata = {
  title:
    "ช่างมิลการประปา | รับซ่อมประปา หาจุดรั่ว กทม. และปริมณฑล 24 ชม.",
  description:
    "ช่างมิลการประปา บริการรับซ่อมประปา หาจุดรั่ว เดินท่อประปา ติดตั้งปั๊มน้ำ แท็งก์น้ำ และเปลี่ยนสุขภัณฑ์ ครบวงจร โดยทีมช่างมืออาชีพ ประเมินหน้างานฟรี ทั่วกรุงเทพฯ-ปริมณฑล",
  keywords: [
    "ช่างประปา",
    "รับซ่อมประปา",
    "หาจุดรั่ว",
    "ซ่อมท่อรั่ว",
    "ช่างประปา กทม",
    "ซ่อมปั๊มน้ำ",
    "ติดตั้งถังน้ำ",
    "เดินท่อประปา",
    "ช่างประปาใกล้ฉัน",
    "ช่างประปา 24 ชั่วโมง",
  ],

  icons: {
    icon: "/images/service/LOGO.jpg",
    apple: "/images/service/LOGO.jpg",
    shortcut: "/images/service/LOGO.jpg",
  },

  openGraph: {
    title:
      "ช่างมิลการประปา | รับซ่อมประปา หาจุดรั่ว กทม. และปริมณฑล 24 ชม.",
    description:
      "ช่างมิลการประปา บริการรับซ่อมประปา หาจุดรั่ว เดินท่อประปา ติดตั้งปั๊มน้ำ แท็งก์น้ำ และเปลี่ยนสุขภัณฑ์ ครบวงจร โดยทีมช่างมืออาชีพ ประเมินหน้างานฟรี ทั่วกรุงเทพฯ-ปริมณฑล",
    url: "https://xn--12cli4ea7apbo8ioaeft01a.com/",
    type: "website",
    images: [
      {
        url: "/images/service/LOGO.jpg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "ช่างมิลการประปา | รับซ่อมประปา หาจุดรั่ว กทม. และปริมณฑล 24 ชม.",
    description:
      "ช่างมิลการประปา บริการรับซ่อมประปา หาจุดรั่ว เดินท่อประปา ติดตั้งปั๊มน้ำ แท็งก์น้ำ และเปลี่ยนสุขภัณฑ์ ครบวงจร โดยทีมช่างมืออาชีพ ประเมินหน้างานฟรี ทั่วกรุงเทพฯ-ปริมณฑล",
    images: ["/images/service/LOGO.jpg"],
  },

  other: {
    charset: "UTF-8",
    canonical: "https://xn--12cli4ea7apbo8ioaeft01a.com/",
  },
};

// แยก export viewport ออกมาต่างหาก (Next.js แนะนำแบบนี้)
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ช่างมิลการประปา",
    "image": "https://xn--12cli4ea7apbo8ioaeft01a.com/images/service/LOGO.jpg",
    "@id": "https://xn--12cli4ea7apbo8ioaeft01a.com/",
    "url": "https://xn--12cli4ea7apbo8ioaeft01a.com/",
    "telephone": "0644088510",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "กรุงเทพและปริมณฑล",
      "addressLocality": "Bangkok",
      "addressRegion": "Bangkok",
      "postalCode": "10000",
      "addressCountry": "TH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.7563,
      "longitude": 100.5018
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/share/1SAASdGE8Y/?mibextid=wwXIfr"
    ]
  };

  return (
    <html lang="th" className={kanit.className}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Headeravbar />
        {children}
        <Footerbar />
      </body>
    </html>
  );
}
