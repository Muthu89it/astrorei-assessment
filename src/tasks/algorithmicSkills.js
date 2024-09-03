function algorithmicSkillsTask(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  return arr2.map((val) => {
    let count = 0;
    for (let num of arr1) {
      if (num < val) {
        count++;
      }
    }
    return count;
  });
}

export default algorithmicSkillsTask;
