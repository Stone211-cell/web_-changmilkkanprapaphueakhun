"use client";

import Script from 'next/script';
import { useEffect } from 'react';

export function GoogleAdsTracker() {
  useEffect(() => {
    // ดักจับการคลิกทุกลิงก์บนหน้าเว็บ
    const handleLineClick = (e: MouseEvent) => {
      // ค้นหา Element <a> ที่ถูกคลิก (เผื่อว่าคลิกโดน span หรือ svg ข้างใน)
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.href) {
        // ตรวจสอบว่าเป็นลิงก์ Line หรือไม่ (line.me หรือ lin.ee)
        if (link.href.includes('line.me') || link.href.includes('lin.ee') || link.href.includes('line:')) {
          // ยิง Event ไปหา Google Ads ตามโค้ด Conversion (Line)
          // @ts-ignore
          if (typeof window !== 'undefined' && window.gtag) {
            // @ts-ignore
            window.gtag('event', 'conversion', { 'send_to': 'AW-17199863176/G6iUCNL8stsaEIirxIlA' });
          }
        } 
        // ตรวจสอบว่าเป็นปุ่ม "โทรออก" หรือไม่ (tel:)
        else if (link.href.startsWith('tel:')) {
          // ยิง Event ไปหา Google Ads ตามโค้ด Conversion (โทรศัพท์)
          // @ts-ignore
          if (typeof window !== 'undefined' && window.gtag) {
            // @ts-ignore
            window.gtag('event', 'conversion', { 
              'send_to': 'AW-17199863176/BJV3CMKXr8ocEIirxIlA',
              'value': 1.0,
              'currency': 'THB'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleLineClick);

    return () => {
      document.removeEventListener('click', handleLineClick);
    };
  }, []);

  return (
    <>
      {/* โค้ด Google Tag พื้นฐาน */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17199863176"
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-17199863176');
        `}
      </Script>
    </>
  );
}
