import Head from 'next/head'
import Script from 'next/script'
import React from 'react'

const BikHeader = () => {
  return (
    <>
        <Script
            id='facebook-pixel'
            language="javascript"
            type="text/javascript"
            strategy='afterInteractive'
            onLoad={()=>{
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window,document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '875651633516102'); 
                fbq('track', 'PageView');
            }}
        />
        <noscript>
            <img height="1" width="1" style="display:none" 
                src="https://www.facebook.com/tr?id=875651633516102&ev=PageView&noscript=1"/>
        </noscript>
        <Script
          id="bik"
          src={`https://cdn.p.analitik.bik.gov.tr/tracker`}
          data-website-id="657f41c4-4e9d-405a-95e8-84eb9ec7719a"
          data-host-url='//657f41c4-4e9d-405a-95e8-84eb9ec7719a.collector.p.analitik.bik.gov.tr'
        />
    </>
   )
}

export default BikHeader
