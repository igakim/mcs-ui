export const isEqualTypes = (type, compareType) => (
  type && type === compareType
);

export const getButtonType = type => (
  type && `mcs-button-${type}`
);
