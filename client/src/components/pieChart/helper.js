const compileDataSet = (data, colors) => {
  let labels = Object.keys(data);
  return labels.map((label, i) => {
    return { label: label, value: data[label].toFixed(2), color: colors[i] };
  });
};

export default compileDataSet;
