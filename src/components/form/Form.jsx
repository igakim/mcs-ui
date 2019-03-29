import React from 'react';

import Input from './Input';

class Form extends React.Component {
  constructor(props) {
    super(props);
    const textInputsList = React.Children
      .toArray(props.children)
      .filter(el => el.props.type === 'text')
      .reduce((acc, el) => ({
        ...acc,
        [el.props.name]: {
          value: el.props.defaultValue || '',
        },
      }), {});

    this.state = {
      fields: {
        ...textInputsList,
      },
    };
  }

  handleInputChange = (e) => {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const fieldName = target.name;
    this.setState({
      fields: {
        ...this.state.fields,
        [fieldName]: { value },
      },
    });
  }

  handleSubmit = (e) => {
    const { onSubmit } = this.props;
    e.preventDefault();
    onSubmit(this.state.fields);
  }

  render() {
    const {
      children, className, onSubmit, ...rest
    } = this.props;

    const userClasses = className || '';

    const wrappedChildren = React.Children
      .map(children, child => React.cloneElement(child, { onChange: this.handleInputChange }));

    return (
      <form className={`mcs-form ${userClasses}`} {...rest} onSubmit={this.handleSubmit}>
        {wrappedChildren}
      </form>
    );
  }
}

Form.Input = Input;

export default Form;
