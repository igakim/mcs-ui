export const isEqualTypes = (type, compareType) => (
  type && type === compareType
);

export const getButtonType = type => (
  type && `mcs-button-${type}`
);

export const getClassNameFromArray = classesList => classesList
  .filter(el => (el !== undefined && el !== null))
  .join('-');
