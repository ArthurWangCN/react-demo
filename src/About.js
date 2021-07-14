import { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        { id: 111, title: "111" },
        { id: 222, title: "222" }
      ]
    };
  }

  componentDidMount() {
    console.log(this.props.match);
  }

  render() {
    return (
      <div>
        <h2>About1</h2>
        <ul>
          {this.state.list.map((item) => {
            return (
              <li key={item.id}>
                <Link to={`${this.props.match.path}/${item.id}`}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default About;
