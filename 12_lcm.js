function lcm(a, b) {
  let max = a > b ? a : b;
  while (max) {
    if (max % a === 0 && max % b === 0) {
      console.log(`${max} is LCM`);
      break;
    }
    max++;
  }
}
lcm(4, 7); // 28
