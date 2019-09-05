import React from 'react';
import './searchList.scss';

const SearchList = (props) => (

  <div className="mainSearch_List showMainSerach">
    <div className="search_List">
      <ul className="List">
        <li className="list_Item">
          <a className="item">
            {props.des}
          </a>
        </li>
      </ul>
    </div>
  </div>
);
export default SearchList;
