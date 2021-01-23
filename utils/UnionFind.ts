export class UnionFind {
  private readonly parent: number[];
  private readonly rank: number[];
  constructor(size: number) {
    this.parent = new Array(size);
    this.rank = new Array(size).fill(1);
    for (let i = 0; i < size; i++) this.parent[i] = i;
  }
  
  public find(x: number): number {
    return x === this.parent[x] ? x : this.parent[x] = this.find(this.parent[x]);
  }
  
  public union(a: number, b: number) {
    let pa = this.find(a);
    let pb = this.find(b);
    if (pa === pb) return;
    if (this.rank[pa] > this.rank[pb]) [pa, pb] = [pb, pa];
    this.parent[pa] = pb;
    this.rank[pb] += this.rank[pa];

  }
  
  public getSize(x: number) {
    const root = this.find(x);
    return this.rank[root];
  }
}
