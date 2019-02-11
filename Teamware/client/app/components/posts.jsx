import axios from "axios";
import React, { Component } from "react";

class Posts extends Component {
  state = { posts: [] };

  async componentDidMount() {
    const { data: posts } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    this.setState({ posts });
  }

  render() {
    return (
      <div className="w-75" id="p2">
        {this.state.posts.map(post => (
          <div id="p8" key={post.id}>
            <blockquote className="blockquote">
              <p className="mb-0" id="p3">
                {post.title}
              </p>
            </blockquote>
            <hr id="p4" />
            <p className="lead " id="p5">
              {post.body}
            </p>
            <br />
            <a
              data-toggle="collapse"
              href={`#collapseExample${post.id}`}
              role="button"
              aria-expanded="false"
              aria-controls={`collapseExample${post.id}`}
            >
              More comments
            </a>
            <div className="collapse" id={`collapseExample${post.id}`}>
              <div className="card card-body" id="p6">
                <li>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </li>
              </div>
            </div>
            <form>
              <div className="form-group" id="p7">
                <input
                  type="text"
                  className="form-control"
                  id="comment_blog"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Comments Here"
                />
              </div>
            </form>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
