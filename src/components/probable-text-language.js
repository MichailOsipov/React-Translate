import React from 'react';

export default class ProbableTextLanguage extends React.Component {
  render() {
    return (
      <div className="probable-text-language">
        {
        this.props.isLanguageCorrect ? (
          <span>You have correct language</span>
        ) : (
          <a
            role="link"
            tabIndex={0}
            onClick={() => { this.props.onClick(this.props.probableTextLanguage); }}
          >
            Probable text language: {this.props.locale}
          </a>
        )
      }
      </div>
    );
  }
}
