import React from 'react';

import SectionCell from './SectionCell';

/**
 * *Children of Section component can be only SectionCell Component.*
 */
class Section extends React.Component {
  render() {
    const TagName = this.props.tagName;
    const { children, className, ...rest } = this.props;
    const userClasses = className || '';

    return (
      <TagName className={`mcs-section ${userClasses}`} {...rest}>
        {children}
      </TagName>
    );
  }
}

Section.SectionCell = SectionCell;

export default Section;
