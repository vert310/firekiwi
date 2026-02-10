"use client";

import { useEffect, useRef } from "react";

/**
 * AdSense Component for Next.js
 * 
 * To get your ad slot ID:
 * 1. Go to https://www.google.com/adsense
 * 2. Navigate to Ads > By ad unit
 * 3. Create a new ad unit or use an existing one
 * 4. Copy the ad slot ID (format: 1234567890)
 * 
 * For auto ads (no manual placement needed):
 * - Just ensure the script is loaded in layout.tsx
 * - Enable auto ads in your AdSense dashboard
 * - Remove this component from the page
 */
interface AdSenseProps {
  adSlot: string;
  adFormat?: "auto" | "rectangle" | "vertical" | "horizontal";
  style?: React.CSSProperties;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdSense({
  adSlot,
  adFormat = "auto",
  style = { display: "block", textAlign: "center", minHeight: "100px" },
  className = "",
}: AdSenseProps) {
  const adInitialized = useRef(false);

  useEffect(() => {
    // Wait for the script to load and initialize only once
    const initializeAd = () => {
      if (adInitialized.current) return;
      
      try {
        if (typeof window !== "undefined" && window.adsbygoogle) {
          // Check if adsbygoogle is an array (script loaded)
          if (Array.isArray(window.adsbygoogle)) {
            window.adsbygoogle.push({});
            adInitialized.current = true;
          }
        } else {
          // Script not loaded yet, retry after a short delay
          setTimeout(initializeAd, 100);
        }
      } catch (err) {
        console.error("AdSense error:", err);
      }
    };

    // Start initialization
    initializeAd();

    // Also try after a delay in case script loads later
    const timeoutId = setTimeout(() => {
      if (!adInitialized.current) {
        initializeAd();
      }
    }, 500);
    
    return () => clearTimeout(timeoutId);
  }, []);

  // Don't render if adSlot is placeholder
  if (!adSlot || adSlot === "YOUR_AD_SLOT_ID") {
    return (
      <div className={`adsense-wrapper ${className}`} style={{ minHeight: "100px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px dashed #666", padding: "20px" }}>
        <p className="text-text-muted text-sm">
          AdSense: Replace &apos;YOUR_AD_SLOT_ID&apos; with your actual ad slot ID from Google AdSense
        </p>
      </div>
    );
  }

  return (
    <div className={`adsense-wrapper ${className}`}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-2650916309334823"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
}

