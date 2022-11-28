import React from  'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <diV>
            {
              robots.map((user, i) => {
                 return (
                 <Card 
                  key={i}
                  id={robots[i].id} 
                  name={robots[i].name} 
                  email={robots[i].email}
           />
       );
       })
    }
   </diV>
    )
}
export default CardList;