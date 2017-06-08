import React from 'react';

export default class TranslatedText extends React.Component {
  render() {
    return (
      <div className="translated-text">
        <textarea
          className="translated-text__textarea"
          disabled
          value={this.props.text}
        />
      </div>
    );
  }
}
