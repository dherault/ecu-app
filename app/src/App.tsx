// ecu-file-id 8txd0jvsM
import { useState } from 'react'
// import React, { useCallback, useEffect, useMemo, useState } from 'react'

import CoolDiv from './components/CoolDiv'
import CoolDaddy from './components/CoolDaddy'

const onetwo = [1, 2]
// const someElementArray = [
//   <div key={1}>1</div>,
//   <div key={2}><div>2</div></div>,
// ]
// ecu-function-id 7EylnAleqA
// function useCustomHook(n: number) {
//   return useMemo(() => n * n, [n])
// }
// const onehundredantwentythree = 123
// const falsy = false

// const icon = <div>I'm an icon</div>

// ecu-function-id 0pmQZMibKj
function App() {
  const [count, setCount] = useState(0)

  // const memoedValue = useMemo(() => 123, [])
  // const fromCustomHookValue = useCustomHook(12)

  // function logMe() {
  //   console.log('I will return')

  //   return true
  // }

  // const icon2 = <div>I'm an icon too</div>

  // const renderCount = useCallback(() => (
  //   <div>
  //     I was rendered by a useCallback:
  //     {' '}
  //     {count}
  //   </div>
  // ), [count])

  // TODO imported functions
  // TODO arrow function
  // function renderSomething() {
  //   return `something ${1}`
  // }

  // function mapSomething(x: number) {
  //   return <div key={x}>{x}</div>
  // }

  // const renderSomeDiv2 = useCallback(() => {
  //   if (count % 2) return null
  //   if (count % 2 === 1) return 'I was rendered by a useCallback on some count'

  //   return (
  //     <div>I was rendered by a useCallback on even count</div>
  //   )
  // }, [count])

  // useEffect(() => {
  //   console.log('I\'m within a useEffect')
  // }, [])

  // if (falsy) {
  //   return <div>Will you see me?</div>
  // }

  return (
    <>
      {/* <button
        type="button"
        onClick={() => setCount(x => x + 1)}>
        The count is
        {' '}
        {count % 2 ? 'odd' : 'even'}
       </button> */}
      {/* <div>0</div> */}
      {/* {onetwo.length ? (<div>true</div>) : (<div>false</div>)} */}
      {/* {onetwo.filter(x => x % 2 === 0).map(x => (
        <div key={x}>
          I'm even:
          {' '}
          {x}
        </div>
       ))} */}
      {/* {onetwo}
       {someElementArray}
       <div>3</div> */}
      <button
        type="button"
        onClick={() => setCount(x => x + 1)}>
        The count is
        {' '}
        {count}
      </button>
      {Array(count).fill(true).map((_x, i) => <CoolDaddy key={i}>{i}</CoolDaddy>)}
      <CoolDaddy>
        <div className="super-cool cool">I'm a child!</div>
        <CoolDiv />
        <CoolDiv />
        {/* <CoolDaddy>
          <div>I'm a deeper child!</div>
          <CoolDiv />
         </CoolDaddy> */}
      </CoolDaddy>
      {/* {false}
        {true} */}
      {/* {renderSomething()}
       {`something ${1}`} */}
      {/* {icon}
       {icon}
       {icon2}
       {icon2}
       Some raw text
       <div>
        <div>
          <div>
            A div within a div within a div
          </div>
        </div>
       </div>
       <button
        type="button"
        onClick={() => setCount(x => x + 1)}>
        The count is
        {' '}
        {count}
       </button>
       <CoolDaddy>
        <div>I'm a child!</div>
        <CoolDaddy>
          <div>I'm a deeper child!</div>
        </CoolDaddy>
       </CoolDaddy> */}
      {/* <CoolDaddy>
        <div>
          I'm a child!
          {' '}
          {count}
        </div>
        <CoolDaddy>
          <div>I'm a deeper child!</div>
        </CoolDaddy>
        <div>
          I'm a child!
          {' '}
          {count}
        </div>
        <CoolDaddy>
          <div>
            I'm a child!
            {' '}
            {count}
          </div>
          <CoolDaddy>
            <div>I'm a deeper child!</div>
          </CoolDaddy>
          <div>
            I'm a child!
            {' '}
            {count}
          </div>
          <CoolDaddy>
            <div>
              I'm a child!
              {' '}
              {count}
            </div>
            <CoolDaddy>
              <div>I'm a deeper child!</div>
            </CoolDaddy>
            <div>
              I'm a child!
              {' '}
              {count}
            </div>
            <CoolDaddy>
              <div>
                I'm a child!
                {' '}
                {count}
              </div>
              <CoolDaddy>
                <div>I'm a deeper child!</div>
              </CoolDaddy>
              <div>
                I'm a child!
                {' '}
                {count}
              </div>
              <CoolDaddy>
                <div>
                  I'm a child!
                  {' '}
                  {count}
                </div>
                <CoolDaddy>
                  <div>I'm a deeper child!</div>
                </CoolDaddy>
                <div>
                  I'm a child!
                  {' '}
                  {count}
                </div>
                <CoolDaddy>
                  <div>
                    I'm a child!
                    {' '}
                    {count}
                  </div>
                  <CoolDaddy>
                    <div>I'm a deeper child!</div>
                  </CoolDaddy>
                  <div>
                    I'm a child!
                    {' '}
                    {count}
                  </div>
                  <CoolDaddy>
                    <div>
                      I'm a child!
                      {' '}
                      {count}
                    </div>
                    <CoolDaddy>
                      <div>I'm a deeper child!</div>
                    </CoolDaddy>
                    <div>
                      I'm a child!
                      {' '}
                      {count}
                    </div>
                  </CoolDaddy>
                </CoolDaddy>
              </CoolDaddy>
            </CoolDaddy>
          </CoolDaddy>
        </CoolDaddy>
       </CoolDaddy> */}
    </>
  )
}

export default App
