import Script from 'next/script'
import React from 'react'

const BikHeader = () => {
  return (
        <Script
          id="bik"
          src={`https://cdn.p.analitik.bik.gov.tr/tracker`}
          data-website-id="657f41c4-4e9d-405a-95e8-84eb9ec7719a"
          data-host-url='//657f41c4-4e9d-405a-95e8-84eb9ec7719a.collector.p.analitik.bik.gov.tr'
        />
   )
}

export default BikHeader
