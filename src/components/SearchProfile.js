const SearchProfile = ({ handleSubmit, inputRef }) => {
  return (
    <div className='search-box'>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type='search'
            placeholder='Type Username + Enter'
            ref={inputRef}
          />
        </label>
      </form>
    </div>
  );
};

export default SearchProfile;
