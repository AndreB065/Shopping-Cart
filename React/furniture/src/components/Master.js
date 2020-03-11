import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        sizeOfCollection: '',
      everyOne: []
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:4000/admin`)
      .then(res => {
        this.setState({ everyOne: res.data.data });
        this.setState({sizeOfCollection: res.data.size});
      })
      .catch(err => {
        console.log("Theres an " + err);
      });
      
  }

  killItem = e => {
    console.log(e.target.value);
    var prompt = alert('Are you Sure you want to end it?');
    if (prompt == null || prompt === "" ){
      axios.delete(`http://localhost:4000/admin/${e.target.value}`)
      .then(res => {
        console.log('Dead!')
      })
    }
  }
  render() {
    return (
      <div>
        <h1>Main Page</h1>
        <Link to="/admin/add">
          Add Item
        </Link>
        <h1>There are currently {this.state.sizeOfCollection} items in the database.</h1>
        <div className="whole">
          {this.state.everyOne.map(folks => (
            <div className="individual">
              <h1>{folks.pageNumber}</h1>
              <p>Item Number: {folks.itemNumber}</p>
              <p>Unit Pkg: {folks.unitPkg}</p>
              <p>Unit Prc: ${folks.unitPriceCost}</p>
              <p>PricePkg: ${folks.pkgPricePkgCost}</p>
              <p>PieceCntPkg: {folks.pieceCntPkg}</p>
              <p>ListPricePiece: ${folks.listPricePiece}</p>
              <p>PricePkg: {folks.listPricePkg}</p>
              <Link to={`/v1/admin/${folks._id}`}>
                <button class="item-button">View Item</button>
              </Link>
                <button onClick={this.killItem} value={folks._id} class="item-button">Delete Item</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default MainPage;