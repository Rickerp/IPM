import React, { Component } from 'react'
import FeedData from "../FeedData";
import Activity from "./Activity"

export default class Feed extends Component {
  constructor() {
    super();
    this.state = {
        feed: FeedData
    }
  }

  render() {
    const feedItems = this.state.feed.map(item => <Activity key={item.id} item={item} />)

    return (
      <div>
        {feedItems}
      </div>
    )
  }
}
