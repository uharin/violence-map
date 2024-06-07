/* eslint-disable object-curly-newline */
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    /* eslint-disable import/no-unresolved */
    import('web-vitals').then((module) => {
      const { getCLS, getFID, getFCP, getLCP, getTTFB } = module.default;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
