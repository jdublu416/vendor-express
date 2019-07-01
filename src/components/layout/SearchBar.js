import React from 'react';



const SearchBar = () => {
  // const text = useRef('');

  const onChange = e => {
    // searchLogs(text.current.value);
    console.log('I am working....'+ e)
  }

  return (
    <nav style= {{marginBottom:"30 px"}} className="purple">
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input id='search' type='search' placeholder='Search Logs...' 
            onChange={onChange} />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};



export default SearchBar;
