import { Component } from "react";

import MenuItem from "../menu-items/menu-item.component";
import "./directory.styles.scss";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "suits",
          imageUrl:
            "https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          id: 2,
          linkUrl: "shop/suits",
        },
        {
          title: "sneakers",
          imageUrl:
            "https://cdn.pixabay.com/photo/2018/09/24/15/37/shoes-3700208_960_720.jpg",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "babies",
          imageUrl:
            "https://cdn.pixabay.com/photo/2014/07/11/22/05/baby-390555_960_720.jpg",
          id: 4,
          linkUrl: "shop/babies",
        },
        {
          title: "oxfords",
          imageUrl:
            "https://cdn.pixabay.com/photo/2016/11/19/11/33/footwear-1838767_960_720.jpg",
          id: 5,
          linkUrl: "shop/oxfords",
        },
        {
          title: "shades",
          imageUrl:
            "https://images.unsplash.com/photo-1501619838605-f3e4c602db04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
          id: 6,
          linkUrl: "shop/shades",
        },
        {
          title: "women",
          imageUrl:
            "https://cdn.pixabay.com/photo/2018/01/24/19/49/people-3104635_960_720.jpg",
          size: "large",
          id: 7,
          linkUrl: "shop/womens",
        },
        {
          title: "men",
          imageUrl:
            "https://cdn.pixabay.com/photo/2016/11/18/17/14/fashion-1835901_960_720.jpg",
          size: "large",
          id: 8,
          linkUrl: "shop/mens",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
