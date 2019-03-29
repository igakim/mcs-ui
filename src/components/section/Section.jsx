import React from 'react';

import SectionCell from './SectionCell';

class Section extends React.Component {
  render() {
    const TagName = this.props.tagName;
    const { children } = this.props;
    return (
      <TagName className="mcs-section">
        {children}
      </TagName>
    );
  }
}

Section.SectionCell = SectionCell;

export default Section;
