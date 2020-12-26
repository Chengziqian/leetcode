function reformatNumber(number: string): string {
  const str = number.replace(/-/g, '').replace(/\s/g, '');
  const res: string[] = [];
  for(let i = 0; i < str.length; i += 3) {
    if (str.length - i <= 4) {
      if (str.length - i === 4) {
        res.push(str.slice(i, i + 2));
        res.push(str.slice(i + 2));
      } else {
        res.push(str.slice(i));
      }
      break;
    } else {
      res.push(str.slice(i, i + 3));
    }
  }
  return res.join('-');
};