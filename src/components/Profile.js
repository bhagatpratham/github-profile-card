import React from "react";

const Profile = ({ data }) => {
  let followers = `${data.homeUrl}/followers`;
  let repositories = `${data.homeUrl}?tab=repositories`;
  let following = `${data.homeUrl}/following`;

  if (data.notFound === "Not Found")
    return (
      <div className='notfound'>
        <h2>Oops !!!</h2>
        <p>The Component Couldn't Find The You Were Looking For . Try Again </p>
      </div>
    );
  else
    return (
      <div>
        <section className='github-profile-info'>
          <div className='__info'>
            <a
              href={data.homeUrl}
              target='_blank'
              title={data.name || data.username}
            >
              <img src={data.avatar} alt={data.username} />
            </a>

            <h2 className='Username'>
              <a href={data.homeUrl} title={data.username} target='_blank'>
                <span className='Username'>{data.name || data.username}</span>
              </a>
            </h2>
            <h3 className='Location'>{data.location}</h3>
          </div>
          <div className='github-profile-stats'>
            <ul>
              <li>
                <a href={followers} target='_blank' title='Number Of Followers'>
                  <i>{data.followers}</i>
                  <span className='followers'>Followers</span>
                </a>
              </li>
              <li>
                <a
                  href={repositories}
                  target='_blank'
                  title='Number Of Repositoriy'
                >
                  <i>{data.repos}</i>
                  <span className='followers'>Repositories</span>
                </a>
              </li>
              <li>
                <a href={following} target='_blank' title='Number Of Following'>
                  <i>{data.following}</i>
                  <span className='followers'>Following</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
};

export default Profile;
