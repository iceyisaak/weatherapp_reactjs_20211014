const SearchBar = () => {
  return (
    <form>
      <h2>Search City</h2>
      <input
        placeholder='e.g. Frankfurt'
      />
      <button>
        Check Weather
      </button>
      or
      <button>
        Check Weather in My Area
      </button>
    </form>
  );
};

export default SearchBar;
