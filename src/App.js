import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import SearchProfile from "./components/SearchProfile";

const API = "https://api.github.com/users";

function App() {
  const [username, setUsername] = useState("bhagatpratham");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [location, setLocation] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");

  function fetchProfile(username) {
    let url = `${API}/${username}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsername(data.login);
      });
  }

  return (
    <div>
      <section className='card'>
        <SearchProfile fetchProfile={fetchProfile} />
        <Profile />
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
