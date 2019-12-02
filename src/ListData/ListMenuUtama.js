import React, {Component} from "react";

class ListMenuUtama extends Component {
  render () {
    return (
      <div>
        <center>
          <h1>Selamat Datang di Warung Nusantara</h1>
          <img
            src={this.props.linkgambar}
            alt="Masakan Nusantara"
            width="600"
          />
        </center>
      </div>
    );
  }
}

export default ListMenuUtama;
