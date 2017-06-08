import React from 'react';

export default class FromText extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onChange(e.target.value);
  }
  render() {
    return (
      <div className="from-text">
        <textarea
          className="from-text__textarea"
          onChange={this.handleChange}
          value={this.props.text}
        />
      </div>
    );
  }
}
