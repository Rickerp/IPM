import React, { Component } from 'react'
import { AppConsumer } from "../context";
import Activity from "./Activity";

export default class Feed extends Component {
  render() {
    return (
      <React.Fragment>
        <AppConsumer>
          {value => {
            return value.state.feedData.map(item => {
              return <Activity key={item.id} item={item} />
            })
          }}
        </AppConsumer>
      </React.Fragment>
    )
  }
}
