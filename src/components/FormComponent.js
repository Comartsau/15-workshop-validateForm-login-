import React from 'react'
import { useState } from 'react'
import "./FormComponent.css"

function FormComponent() {
    const [username,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [againpassword,setAgainPassword] = useState('')

    const [errorusername,setErrorUserName] = useState('')
    const [erroremail,setErrorEmail] = useState('')
    const [errorpassword,setErrorPassword] = useState('')
    const [erroragainpassword,setErrorAgainPassword] = useState('')

    const [usernameColor,setUserNameColor] = useState('')
    const [emailColor,setEmailColor] = useState('')
    const [passwordcolor,setPasswordColor] = useState('')
    const [againpasswordcolor,setAgainPasswordColor] = useState('')


    const validateForm = (e) => {
        e.preventDefault();
        if (username.length > 8) {
            setErrorUserName('')
            setUserNameColor('green')
        } else  {
                setErrorUserName('ป้อนชื่อผู้ใช้จำนวนมากกว่า 8 ตัวอักษร')
                setUserNameColor('red')
                }


        if (email.includes('@')) {
            setErrorEmail('')
            setEmailColor('green')
        } else {
            setErrorEmail(' รูปแบบ Email ไม่ถูกต้อง')
            setEmailColor('red')
         }


         if (password.length > 8) {
             setErrorPassword('')
             setPasswordColor('green')
            } else {
                setErrorPassword('ป้อนรหัสผ่านมากกว่า 8 ตัวอักษร')
                setPasswordColor('red')
         }

         if(password === againpassword && againpassword !== '') {
            setErrorAgainPassword('')
            setAgainPasswordColor('green')
        } else {
            setErrorAgainPassword('รหัสผ่านไม่เหมือนกัน')
            setAgainPasswordColor('red')
         }


        }

 

  return (
    <div className='container'>
        <form className='form' onSubmit={validateForm}>
            <h2>แบบฟอร์มลงทะเบียน</h2>
            <div className='form-control'>
                <label>ชื่อผู้ใช้</label>
                <input type="text" style={{borderColor:usernameColor}} value={username} onChange={(e) => setUserName(e.target.value)} />
                <small style={{color:usernameColor}}>{errorusername}</small>
            </div>
            <div className='form-control'>
                <label>อีเมล</label>
                <input type="text" style={{borderColor:emailColor}} value={email} onChange={(e) => setEmail(e.target.value)}/>
                <small style={{color:emailColor}}>{erroremail}</small>
            </div>
            <div className='form-control'>
                <label>รหัสผ่าน</label>
                <input type="password" style={{borderColor:passwordcolor}} value={password} onChange={(e) => setPassword(e.target.value)} />
                <small style={{color:passwordcolor}}>{errorpassword}</small>
            </div>
            <div className='form-control'>
                <label>ยืนยันรหัสผ่าน</label>
                <input type="password" style={{borderColor:againpasswordcolor}}  value={againpassword} onChange={(e) => setAgainPassword(e.target.value)} />
                <small style={{color:againpasswordcolor}}>{erroragainpassword}</small>
            </div>
            <button type="submit">ลงทะเบียน</button>
        </form>
    </div>
  )
}

export default FormComponent