import * as React from 'react';

interface ScrollProps {
	children: JSX.Element[] | JSX.Element
}


const Scroll:React.SFC<ScrollProps> = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;