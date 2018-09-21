import React, {PureComponent} from 'react';


class Application extends PureComponent<void> {
  render() {
    return (
      <div>
        {this.props.children}
      </div>);
  }
}

export default Application;
