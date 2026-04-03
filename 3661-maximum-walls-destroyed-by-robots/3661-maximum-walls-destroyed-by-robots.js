var maxWalls = function(robots, distance, walls) {
  const n = robots.length;
  if (n === 0) return 0;

  const arr = robots.map((pos, i) => [pos, distance[i]]);
  arr.sort((a, b) => a[0] - b[0]);

  const pos = arr.map(x => x[0]);
  const dist = arr.map(x => x[1]);

  walls.sort((a, b) => a - b);

  function lowerBound(nums, target) {
    let l = 0, r = nums.length;
    while (l < r) {
      const mid = (l + r) >> 1;
      if (nums[mid] < target) l = mid + 1;
      else r = mid;
    }
    return l;
  }

  function upperBound(nums, target) {
    let l = 0, r = nums.length;
    while (l < r) {
      const mid = (l + r) >> 1;
      if (nums[mid] <= target) l = mid + 1;
      else r = mid;
    }
    return l;
  }

  function countWalls(left, right) {
    if (left > right) return 0;
    return upperBound(walls, right) - lowerBound(walls, left);
  }

  const L = new Array(n).fill(0);
  const R = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const p = pos[i];
    const d = dist[i];

    let leftStart = p - d;
    if (i > 0) leftStart = Math.max(leftStart, pos[i - 1] + 1);
    L[i] = countWalls(leftStart, p);

    let rightEnd = p + d;
    if (i + 1 < n) rightEnd = Math.min(rightEnd, pos[i + 1] - 1);
    R[i] = countWalls(p, rightEnd);
  }

  const overlap = new Array(n - 1).fill(0);

  for (let i = 0; i < n - 1; i++) {
    const p1 = pos[i];
    const p2 = pos[i + 1];

    const rLeft = p1;
    const rRight = Math.min(p1 + dist[i], p2 - 1);

    const lLeft = Math.max(p2 - dist[i + 1], p1 + 1);
    const lRight = p2;

    const interLeft = Math.max(rLeft, lLeft);
    const interRight = Math.min(rRight, lRight);

    overlap[i] = countWalls(interLeft, interRight);
  }

  let prevLeft = L[0];
  let prevRight = R[0];

  for (let i = 1; i < n; i++) {
    const curLeft = Math.max(
      prevLeft + L[i],
      prevRight + L[i] - overlap[i - 1]
    );

    const curRight = Math.max(
      prevLeft + R[i],
      prevRight + R[i]
    );

    prevLeft = curLeft;
    prevRight = curRight;
  }

  return Math.max(prevLeft, prevRight);
};