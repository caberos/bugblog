// AdBanner.jsx
import React, { useEffect } from "react";

export default function AdVertical() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error", e);
    }
  }, []);

  return (
    <ins class="adsbygoogle"
     style={{display:"block"}}
     data-ad-client="ca-pub-7727148443229606"
     data-ad-slot="6157146942"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
  );
}
