function maximumTime(time: string): string {
  const arr = time.split('');
  for (let i = 0; i < time.length; i++) {
    if (i === 0 && arr[i] === '?') {
      if (arr[1] === '?') arr[i] = '2';
      else if (arr[1] >= '4') arr[i] = '1'
      else arr[i] = '2';
    }
    if (i === 1 && arr[i] === '?') {
      if (arr[0] === '2') arr[i] = '3';
      else arr[i] = '9';
    }
    if(i === 3 && arr[i] === '?') arr[i] = '5';
    if(i === 4 && arr[i] === '?') arr[i] = '9';
  }
  return arr.join('');
};