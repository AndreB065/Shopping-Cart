import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

class OnlyOne extends Component {
  constructor(props, { match }) {
    super();
    this.state = {
      id: "",
      pageNum: "",
      itemNum: "",
      unitPkg: "",
      unitPrc: "",
      pricePkg: "",
      pieceCntPkg: "",
      pricePiece: "",
      listPricePkg: "",
      imageUrl: "",
      itDontExist: false
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:4000/admin/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          _id: res.data.data._id,
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
        this.setState({ itDontExist: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ itDontExist: true });
        console.log(this.state);
      });
  }

  render() {
    //OLD SCHOOL WAY
    if (this.state.itDontExist === false) {
      return (
        <div>
          <h1>{this.state.pageNum}</h1>
          <h1>{this.state.itemNum}</h1>
          <h1>$ {this.state.unitPkg}</h1>
          <h1>$ {this.state.unitPrc}</h1>
          <h1>{this.state._id}</h1>
          <img className="furni-image"src={this.state.imageUrl} alt=""/>
          <Link to={`/v1/update/${this.state._id}`}>Update Page</Link>
        </div>
      );
    } else if (this.state.itDontExist === true) {
      return <h1>Does Not Exist</h1>;
    } else if (this.state.soloOne == null) {
      return <h1>ALSO Does Not Exist</h1>;
    }
  }

  //   return this.state.itExists ? (
  //     <div>
  //       <div>
  //         <h1>Only One</h1>
  //         <h1>{this.state.soloOne.name}</h1>
  //         <h1>{this.state.soloOne.country}</h1>
  //         <h1>{this.state.soloOne.description}</h1>
  //         <Link to={`/v1/update/${this.state.soloOne._id}`}>Update Page</Link>
  //       </div>
  //     </div>
  //   ) : (
  //     <Redirect to="/deepurple/error" />
  //   );
  // }
}

export default OnlyOne;
