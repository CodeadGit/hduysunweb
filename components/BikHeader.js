import Head from 'next/head'
import Script from 'next/script'
import React from 'react'

const BikHeader = () => {
  return (
    <>
        <Script
          id="bik-tracker"
          strategy="worker"
          dangerouslySetInnerHTML={{
            __html: `!function(){var t=document.createElement("script");t.setAttribute("src",'https://cdn.p.analitik.bik.gov.tr/tracker'+(typeof Intl!=="undefined"?(typeof (Intl||"").PluralRules!=="undefined"?'1':typeof Promise!=="undefined"?'2':typeof MutationObserver!=='undefined'?'3':'4'):'4')+'.js'),t.setAttribute("data-website-id","657f41c4-4e9d-405a-95e8-84eb9ec7719a"),t.setAttribute("data-host-url",'//657f41c4-4e9d-405a-95e8-84eb9ec7719a.collector.p.analitik.bik.gov.tr'),document.head.appendChild(t)}();`,
          }}
/>
    </>
   )
}

export default BikHeader
