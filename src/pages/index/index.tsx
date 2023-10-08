import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Index: React.FC = () => {
  const navigate = useNavigate()
  const [list, setList] = useState<any[]>([])

  useEffect(() => {
    console.log('index load')
    setList(new Array(100).fill(0))
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
          navigate('/detail')
        }}
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          width: 100,
          height: 100,
        }}
      >
        go detail2
      </button>
    </>
  )
}
export default Index
