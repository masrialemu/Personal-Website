import React, { useEffect, useState } from 'react'
import axios from 'axios'
function test() {
  const [email,setEmail]= useState('')
  const [unm,setUnm]= useState('')
  const [pass,setPass]= useState('')
  const [error,setError]= useState(false)
  const action=async(e)=>{
    const res  = await axios.post('',{
      email,unm,pass
    })
    try {
      res.data && window.location.replace('/')
    } catch (error) {
      setError(true)
    }
  }
  return (
    <div>
    <form onSubmit={action}>
      <input type="text" name="email"  onChange={setEmail(e=>{e.target.value})}  />
      <input type="text" name="username"  onChange={setUnm(e=>{e.target.value})} />
      <input type="text" name="password"  onChange={setPass(e=>{e.target.value})} />
      <button type='submit'>submit</button>
    </form>
    </div>
  )
}

export default test