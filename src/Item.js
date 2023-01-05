import { React } from "react";

const Item = ({ item, onRemoveItem }) => (
  <li>
    <span>Name: </span>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{` Author: ${item.author} `}</span>
    <span>{`Comments: ${item.num_comments} `}</span>
    <span>{`Points: ${item.points} `}</span>
    <span>
      <button type="button" onClick={() => onRemoveItem(item)}>
        Dismiss
      </button>
    </span>
  </li>
);

export default Item;
