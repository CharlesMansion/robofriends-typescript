import * as React from 'react';


interface CardProps {
	id:number,
	email:string,
	name:string
}
const Card: React.SFC<CardProps> = (props) => {
  const { id, name, email } = props;
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;