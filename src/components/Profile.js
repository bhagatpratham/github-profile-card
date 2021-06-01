import React, { useState } from "react";

const Profile = () => {
  return (
    <div>
      <section>
        <div className='github-profile-info'>
          <a className='avatar'>
            <img></img>
          </a>
          <h2 className='Username'>
            <a>Name</a>
          </h2>
          <h3 className='Location'>Location</h3>
        </div>
        <div className='github-profile-stats'>
          <ul>
            <li>
              <a>
                <i></i>
                <span>Followers</span>
              </a>
            </li>
            <li>
              <a>
                <i></i>
                <span>Repositories</span>
              </a>
            </li>
            <li>
              <a>
                <i></i>
                <span>Following</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Profile;
