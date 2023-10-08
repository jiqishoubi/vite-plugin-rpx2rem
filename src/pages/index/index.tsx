import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import history from '@/router/history'

const Index: React.FC = () => {
  // const navigate = useNavigate()
  const [list, setList] = useState<any[]>([])

  useEffect(() => {
    console.log('index load')
    // console.log('🚀 ~ list', list)
    setList(new Array(100).fill(0))
    return () => {
      console.log('index unload')
    }
  }, [])

  return (
    <>
      index
      <div
        style={{
          height: 100,
          backgroundColor: 'red',
        }}
      >
        box
      </div>
      <div className="list">
        {list.map((_, index) => (
          <div
            key={index}
            className="item"
            style={{
              height: 30,
              backgroundColor: 'green',
              margin: 5,
            }}
          >
            {index}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          history.push('/pages/detail1/index')
          // navigate('/pages/detail/index')
        }}
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          width: 100,
          height: 100,
        }}
      >
        go detail1
      </button>
    </>
  )
}
export default Index
