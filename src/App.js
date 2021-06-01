import { useEffect, useRef, useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import SearchProfile from "./components/SearchProfile";

const API = "https://api.github.com/users";

function App() {
  const [state, setState] = useState({
    username: "bhagatpratham",
    name: "",
    avatar: "",
    location: "",
    repos: "",
    followers: "",
    following: "",
    homeUrl: "",
    notFound: "",
  });

  const inputRef = useRef(null);

  function fetchProfile(username) {
    let url = `${API}/${username}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setState({
          username: data.login,
          name: data.name,
          avatar: data.avatar_url,
          location: data.location,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          homeUrl: data.html_url,
        });
      })
      .catch((error) => console.log("Oops! . There Is A Problem"));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let username = inputRef.current.value;
    fetchProfile(username);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>
      <section className='card'>
        <SearchProfile
          fetchProfile={fetchProfile}
          handleSubmit={handleSubmit}
          inputRef={inputRef}
        />
        <Profile data={state} />
      </section>
      <span className='pratham'>
        GitHub Card With ReactJs - Created By{" "}
        <a
          href='https://twitter.com/pratham__10'
          target='_blank'
          title='Pratham Bhagat'
        >
          Pratham Bhagat
        </a>
      </span>
    </div>
  );
}

export default App;
