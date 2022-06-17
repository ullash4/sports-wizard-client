import React from 'react'
import { Helmet } from 'react-helmet-async';

function DynamicTitle({name}) {
  return (
    <Helmet>
        <title>{name} - Sports Wizard</title>
    </Helmet>
  )
}

export default DynamicTitle