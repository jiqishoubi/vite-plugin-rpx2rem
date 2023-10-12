import React, { useEffect, useState } from 'react'
import styles from './index.module.less'

const Index: React.FC = () => {
  return (
    <>
      <h1>index page</h1>

      <div className={styles.red}>test css modules</div>

      <div
        className={styles.test_size}
        style={{
          fontSize: '20rpx',
        }}
      >
        test px rem
      </div>
    </>
  )
}
export default Index
