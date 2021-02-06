import React from "react";

const MenuItem = (props) => {
  // let children;
  // if (props.children) {
  //     children = props.children.map(x =>
  //         <MenuItem key={x.name} link={x.link} name={x.name}></MenuItem>
  //     )
  // }

  return (
    <li>
      <a href={props.link} className={props.isActive ? "is-active" : ""} onClick={props.onClick}>
        {props.name}
      </a>
      {/*{children ? <ul>{children}</ul> : <></>}*/}
    </li>
  );
}

export default MenuItem;