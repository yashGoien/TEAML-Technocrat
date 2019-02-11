import React, { Component } from "react";

class ProjectPopup extends Component {
  state = { projects: [] };

  render() {
    const { projects } = this.props;
    return (
      <div
        className="modal fade"
        id="exampleModalCenter1"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle1 p-title">
                <strong>{projects[0].name}</strong>
              </h5>

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <div className="row">
                <div className="col-6" id="p-left">
                  <h6>
                    <strong>Members</strong>
                  </h6>

                  <span
                    className="badge badge-pill badge-info"
                    style={{ margin: "2px" }}
                  >
                    Info
                  </span>

                  <span
                    className="badge badge-pill badge-info"
                    style={{ margin: "2px" }}
                  >
                    Info
                  </span>
                </div>

                <div className="col-6" id="p-right">
                  <h6>
                    <strong>Skills </strong>
                  </h6>

                  <span
                    className="badge badge-pill badge-success"
                    style={{ margin: "2px" }}
                  >
                    Success
                  </span>

                  <span
                    className="badge badge-pill badge-success"
                    style={{ margin: "2px" }}
                  >
                    Success
                  </span>
                </div>
              </div>

              <hr />

              <div id="p-desc">
                <h6>
                  <strong>Description:</strong>
                </h6>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam reprehenderit veniam odit voluptatum itaque eos quia,
                  deserunt explicabo, illo labore laborum dolore repudiandae
                  voluptas debitis optio nemo, aliquid natus ratione!
                </p>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Leave Project
              </button>

              <button type="button" className="btn btn-primary">
                Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectPopup;
