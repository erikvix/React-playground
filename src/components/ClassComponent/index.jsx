import React, { Component } from "react";
import "./index.css";
const apiUrl = "https://official-joke-api.appspot.com/jokes/random";
class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setup: "",
      punchline: "",
      loading: false,
    };
    this.handleFetch = this.handleFetch.bind(this);
  }

  componentDidMount() {
    console.log("component mounted");
  }

  componentDidUpdate() {
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("component unmounted");
  }

  handleFetch() {
    this.setState({ loading: true });
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          setup: res.setup,
          punchline: res.punchline,
        });
      })
      .finally(() => {
        this.setState({ loading: false });
      })

      .catch((error) => {
        this.setState({
          loading: false,
        });
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1 className="titulo">Every Day Joke</h1>
        <div>
          <p className="setup">{this.state.setup}</p>
          <p className="punchline">{this.state.punchline}</p>
          {this.state.loading ? (
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M2,12A11.2,11.2,0,0,1,13,1.05C12.67,1,12.34,1,12,1a11,11,0,0,0,0,22c.34,0,.67,0,1-.05C6,23,2,17.74,2,12Z"
                >
                  <animateTransform
                    attributeName="transform"
                    dur="0.6s"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 12 12;360 12 12"
                  ></animateTransform>
                </path>
              </svg>
            </button>
          ) : (
            <button onClick={this.handleFetch}>Get your joke</button>
          )}
        </div>
      </div>
    );
  }
}

export default ClassComponent;
