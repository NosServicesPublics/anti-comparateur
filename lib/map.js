export function map(gristResponse) {
  return gristResponse.records.reduce((a, v) => {
    a[v.id] = v;
    return a;
  }, {});
}
