interface MyMap {
  [Key: string]: number
}
function subdomainVisits(cpdomains: string[]): string[] {
  let resMap: MyMap = {};
  cpdomains.forEach(cpd => {
    const arr = cpd.split(' ');
    const count = +arr[0];
    const domain = arr[1];
    const subDomains = domain.split('.');
    let currentSubDomain = ''
    for (let i = subDomains.length - 1; i >= 0; i--) {
      if (currentSubDomain) currentSubDomain = `${subDomains[i]}.${currentSubDomain}`
      else currentSubDomain = subDomains[i];
      if (resMap[currentSubDomain]) resMap[currentSubDomain] += count;
      else resMap[currentSubDomain] = count;
    }
  });
  return Object.keys(resMap).map(sd => `${resMap[sd]} ${sd}`)
}
