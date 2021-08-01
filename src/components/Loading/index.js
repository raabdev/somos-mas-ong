import React from 'react'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class Loading extends React.Component {

  render() {
    return (
      <Loader
        type="TailSpin"
        color="#9AC9FB"
        height={60}
        width={60}
        timeout={0}
      />
    );
  }
}