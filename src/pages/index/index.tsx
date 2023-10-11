import React, { useEffect, useState } from 'react'
import { router } from 'kuririn-react-router'
import styles from './index.module.less'

const Index: React.FC = () => {
  return (
    <>
      <h1>index page</h1>

      <div className={styles.red}>test css modules</div>

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
