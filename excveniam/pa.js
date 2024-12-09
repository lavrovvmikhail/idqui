function bandSpace(count, paddingInner, paddingOuter) {
  let result = '';
  for (let i = 0; i < count; i++) {
    result += ' '.repeat(paddingInner);
    result += 'Hello World!'.repeat(1);
    result += ' '.repeat(paddingOuter);
  }
  return result;
}
