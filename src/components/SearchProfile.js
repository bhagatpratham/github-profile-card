import React from "react";

const SearchProfile = () => {
  return (
    <div className='search-box'>
      <form>
        <label>
          <input type='search' placeholder='Type Username + Enter' />
        </label>
      </form>
    </div>
  );
};

export default SearchProfile;
