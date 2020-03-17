import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class AddPage extends Component {
  constructor(props) {
    super();
    this.state = {
      pageNum: "",
      itemNum: "",
      unitPkg: "",
      unitPrc: "",
      pricePkg: "",
      pieceCntPkg: "",
      pricePiece: "",
      listPricePkg: "",
      imageUrl: "",
      itsGoneJim: false
    };
  }

  changePageNum = e => {
    this.setState({ pageNum: e.target.value }, () => {
      console.log(this.state.pageNum);
    });
  };
  changeItemNum = e => {
    this.setState({ itemNum: e.target.value }, () => {
      console.log(this.state.itemNum);
    });
  };
  changeUnitPkg = e => {
    this.setState({ unitPkg: e.target.value }, () => {
      console.log(this.state.unitPkg);
    });
  };

  changeUnitPrc = e => {
    this.setState({ unitPrc: e.target.value }, () => {
      console.log(this.state.unitPrc);
    });
  };

  changePricePkg = e => {
    this.setState({ pricePkg: e.target.value }, () => {
      console.log(this.state.pricePkg);
    });
  };

  changePieceCntPkg = e => {
    this.setState({ pieceCntPkg: e.target.value }, () => {
      console.log(this.state.pieceCntPkg);
    });
  };

  changelistPricePiece = e => {
    this.setState({ pricePiece: e.target.value }, () => {
      console.log(this.state.pricePiece);
    });
  };

  changelistPricePkg = e => {
    this.setState({ listPricePkg: e.target.value }, () => {
      console.log(this.state.listPricePkg);
    });
  };
  changeimageUrl = e => {
    this.setState({ imageUrl: e.target.value }, () => {
      console.log(this.state.imageUrl);
    });
  };

  sendIt = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/admin`, {
        pageNumber: this.state.pageNum,
        itemNumber: this.state.itemNum,
        unitPkg: this.state.unitPkg,
        unitPriceCost: this.state.unitPrc,
        pkgPricePkgCost: this.state.pricePkg,
        pieceCntPkg: this.state.pieceCntPkg,
        listPricePiece: this.state.pricePiece,
        listPricePkg: this.state.listPricePkg,
        imageUrl: this.state.imageUrl
      })
      .then(res => {
        this.setState({ itsGoneJim: true });
      })
      .catch(err => {
        console.log("Something went wrong!!! :(");
      });
  };

  render() {
    if (this.state.itsGoneJim === false) {
      return (
        <div>
          <form onSubmit={this.sendIt}>
            <h1>Page Number: </h1>
            <input
              type="text"
              name="pageNum"
              id=""
              onChange={this.changePageNum}
            ></input>
            <h1>Item Number: </h1>
            <input
              type="text"
              name="itemNum"
              id=""
              onChange={this.changeItemNum}
            ></input>
            <h1>Unit Package: </h1>
            <input
              type="text"
              name="unitPkg"
              id=""
              onChange={this.changeUnitPkg}
            ></input>
            <h1>Unit Price Cost:</h1>
            <input
              type="text"
              name="unitPrc"
              id=""
              onChange={this.changeUnitPrc}
            ></input>
            <h1>Change Price Package</h1>
            <input
              type="text"
              name="pricePkg"
              id=""
              onChange={this.changePricePkg}
            ></input>
            <h1>Change PieceCnt/Pkg</h1>
            <input
              type="text"
              name="pieceCntPkg"
              id=""
              onChange={this.changePieceCntPkg}
            ></input>
            <h1>Change Price Piece</h1>
            <input
              type="text"
              name="listPricePiece"
              id=""
              onChange={this.changelistPricePiece}
            ></input>
            <h1>Change List Price</h1>
            <input
              type="text"
              name="listPricePkg"
              id=""
              onChange={this.changelistPricePkg}
            ></input>
            <h1>Change Image</h1>
            <input
              type="text"
              name="imageUrl"
              id=""
              onChange={this.changeimageUrl}
            ></input>
            <button>Send Me</button>
          </form>
        </div>
      );
    }
    if (this.state.itsGoneJim) {
      return <Redirect to="/" />;
    }
  }
}
export default AddPage;
