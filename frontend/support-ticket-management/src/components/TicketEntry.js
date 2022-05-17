import React from "react";
import axios from "axios";

class TicketEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productSerialNumber: undefined,
      purchaseDate: undefined,
      description: undefined,
      message: "",
      error: "",
    };
  }

  handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleDateChange = (e) => {
    const value = e.target.value;
    if (value) {
      this.setState({
        purchaseDate: new Date(e.target.value).toLocaleString(),
      });
    } else {
      this.setState({ purchaseDate: new Date().toLocaleString() });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { productSerialNumber, purchaseDate, description } = this.state;
    const payload = {
      prd_sr_num: productSerialNumber,
      pur_date: purchaseDate,
      description: description,
    };
    console.log(payload);
    axios
      .post("http://localhost:5000/add_ticket", payload)
      .then((resp) => {
        this.setState({
          message: resp.data?.msg, 
        });
      })
      .catch((err) => {
        this.setState({ error: err?.message });
      });
  };

  render() {
    return (
      <div className="container my-4">
        <h2 className="text-center">Support Ticket Entry Form</h2>
        <form className="form mt-5">
          <div className="row form-group">
            <div className="col-sm-12 col-md-6">
              <label className="form-label">Product Serial Number</label>
            </div>
            <div className="col-sm-12 col-md-6">
              <input
                className="form-control"
                type="text"
                name="productSerialNumber"
                placeholder="Enter product serial number"
                onChange={this.handleInput}
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-sm-12 col-md-6">
              <label className="form-label">Purchase Date</label>
            </div>
            <div className="col-sm-12 col-md-6">
              <input
                className="form-control"
                type="date"
                name="purchaseDate"
                onChange={this.handleDateChange}
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-sm-12 col-md-6">
              <label className="form-label">Description</label>
            </div>
            <div className="col-sm-12 col-md-6">
              <input
                className="form-control"
                type="text"
                name="description"
                placeholder="Enter description"
                onChange={this.handleInput}
              />
            </div>
          </div>
          {this.state.message && (
            <div className="row">
              <div className="col-12 text-success text-center fs-3 fw-bold">{this.state.message}</div>
            </div>
          )}
          {this.state.error && (
            <div className="row">
              <div className="col-12 text-danger text-center">{this.state.error}</div>
            </div>
          )}
          <div className="d-flex justify-content-center mt-5">
            <button
              className="btn btn-success align-self-center"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default TicketEntry;
