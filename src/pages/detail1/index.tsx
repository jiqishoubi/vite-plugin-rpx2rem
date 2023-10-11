import { router } from 'kuririn-react-router'
import React from 'react'

const Index: React.FC = () => {
  return (
    <>
      <h1>detail1 page</h1>

      <button
        onClick={() => {
          router.back()
        }}
      >
        go back
      </button>
    </>
  )
}
export default Index
