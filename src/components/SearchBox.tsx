import * as React from 'react';

interface sBprops {
  searchChange: React.ChangeEventHandler<{}>
}

const SearchBox:React.SFC<sBprops> = ( props ) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={props.searchChange}
      />
    </div>
  );
};

export default SearchBox;