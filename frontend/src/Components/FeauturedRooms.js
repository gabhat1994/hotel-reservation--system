import React, { Component } from "react";
import { RoomContext } from "../context";

export default class FeauturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    const { name, greetig } = this.context;
    return <div>{name}</div>;
  }
}
