import React from 'react'

const Profile = () => {
  return (
    <div className='profile jouralLayout'>
      <h1>프로필</h1>
      <div className="profileCard">
        <div className="profileHeader">
          <div className='profilePic'>
            <img src="https://i.pinimg.com/736x/18/c0/14/18c014bfbc73350f9af36fdb05b22c59.jpg" alt="" />
          </div>
          <div className='profileInfo'>
            <h2>김해진</h2>
            <h2>@haejin</h2>
            <h2>haejin@example.com</h2>
          </div>
        </div>
        <div className="profileSettings"></div>
      </div>
    </div>
  )
}

export default Profile