import React, { Component } from "react";
import me from "../me.jpg";
export default class Person extends Component {
  state = {
    fullName: "Mtar Mayssa",
    bio: "I'm a chemical engineer with one year of experience working alongside the executive team of a Fortune 500 company.I'm specializes in polymer chemistry, and now i'm studying web developer skills. In my free time, i like to hike and play sport",
    imgSrc: me,
    profession: "Chemical engineer and Web developper",
    show: true,
  };
  render() {
    return (
      <div>
        <h1> {this.state.fullName}</h1>
        <h2>{this.state.profession}</h2>
        <p>{this.state.bio}</p>
        <img
          src={this.state.imgSrc}
          alt="this is me"
          style={{ width: 350, height: 350, borderRadius: "50%" }}
        />
      </div>
    );
  }
}
