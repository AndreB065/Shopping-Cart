import React, { Component } from "react";
import { Redirect } from "react-router-dom";
  //So you HAVE to only bring the Redirect and that one only...
import axios from "axios";

class UpdatePage extends Component {
  constructor(props, { match }) {
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
      changedIt: false
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:4000/admin/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
            pageNum: res.data.data.pageNumber,
            itemNum: res.data.data.itemNumber,
            unitPkg: res.data.data.unitPkg,
            unitPrc: res.data.data.unitPriceCost,
            pricePkg: res.data.data.pkgPricePkgCost,
            pieceCntPkg: res.data.data.pieceCntPkg,
            pricePiece: res.data.data.listPricePiece,
            listPricePkg: res.data.data.listPricePkg,
            imageUrl: res.data.data.imageUrl
        });
        this.setState({ changedIt: false });
      })
      .catch(err => {
        //So...just dont log something that doesnt even exist?
        this.setState({ changedIt: true });
      });
  }

  willUpdate = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/admin/${this.props.match.params.id}`, {
        pageNum: this.state.pageNum,
        itemNum: this.state.itemNum,
        unitPkg: this.state.unitPkg,
        imageUrl: this.state.imageUrl
      })
      .then(() => {
        console.log("GOOOD JOB!!!");
        this.setState({ changedIt: false });
      })
      .catch(err => {
        console.log(err)
      });
  };

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
  changeImageUrl = e => {
    this.setState({ imageUrl: e.target.value }, () => {
      console.log(this.state.imageUrl);
    });
  };


  render() {
    if (this.state.changedIt === false) {
      return (
        <div>
          <h1>Update Page</h1>
          <form onSubmit={this.willUpdate}>
            <h1>Page Num: </h1>
            <input
              type="text"
              name="pageNum"
              id=""
              value={this.state.pageNum}
              onChange={this.changePageNum}
            ></input>
            <h1>Item Num: </h1>
            <input
              type="text"
              name="itemNum"
              id=""
              value={this.state.itemNum}
              onChange={this.changeItemNum}
            ></input>
            <h1>Unit Pkg: </h1>
            <input
              type="text"
              name="unitPkg"
              id=""
              value={this.state.unitPkg}
              onChange={this.changeUnitPkg}
            ></input>
            <h1>Image: </h1>
            <input
              type="text"
              name="imageUrl"
              id=""
              value={this.state.imageUrl}
              onChange={this.changeImageUrl}
            ></input>
            <button>Send Me</button>
          </form>
        </div>
      );
    }
    if (this.state.changedIt === true) {
      return (
        <Redirect to="/admin/error" />
      )
    }
  }
}
export default UpdatePage;