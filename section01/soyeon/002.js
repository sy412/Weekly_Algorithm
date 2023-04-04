// 삼각형 판별하기

function solution(A, B, C) {
  let answer = "Yes";
  const sum = A + B + C;
  let max = A;
  if (max < B) max = B;
  else max = A;
  if (max < C) max = C;
  sum - max > max ? (answer = "YES") : (answer = "NO");
  return answer;
}
console.log(solution(13, 33, 17));
