import React, { useEffect, useState } from 'react'
import { router } from 'kuririn-react-router'

const Index: React.FC = () => {
  return (
    <>
      <h1>index page</h1>

      <button
        onClick={() => {
          router.push('/detail1')
        }}
      >
        push detail1
      </button>
    </>
  )
}
export default Index
