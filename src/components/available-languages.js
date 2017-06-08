import React from 'react';

export default class AvailableLanguages extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onChange(e.target.value);
  }
  render() {
    const langItems = this.props.langs.map(key => ({
      key,
      locale: this.props.locale[key]
    }));

    langItems.sort((a, b) => {
      return a.locale > b.locale ? 1 : -1;
    });

    return (
      <div className="available-languages">
        <select onChange={this.handleChange}>
          {langItems.map(item =>
            (<option
              key={item.key}
              value={item.key}
            >
              {item.locale}
            </option>
          ))
          }
        </select>
      </div>
    );
  }
}
