import React, { Component } from "react";

class ProfilePopup extends Component {
  state = {};
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div>
            <div className="container">
              <div className="row">
                <div className="img">
                  <img
                    src="https://media.giphy.com/media/lJNoBCvQYp7nq/giphy.gif"
                    alt=""
                    className="img-rounded"
                    style={{ width: "14vw", padding: "10px" }}
                  />
                </div>

                <div className="col-4 details">
                  <blockquote>
                    <h5 className="textAnimate">Anony._.mouse</h5>

                    <small>Bat Cave, United States of America</small>
                  </blockquote>

                  <p>
                    fionagallager@shameless.com <br />
                    www.bootsnipp.com <br />
                    June 18, 1990
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePopup;
