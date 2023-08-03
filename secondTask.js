function sumOfDistinctElements(set1, set2) {
  const distinctElements = [];

  set1.forEach((element) => {
    if (!distinctElements.includes(element)) {
      distinctElements.push(element);
    }
  });

  set2.forEach((element) => {
    if (!distinctElements.includes(element)) {
      distinctElements.push(element);
    }
  });

  return distinctElements.reduce((sum, element) => sum + element, 0);
}

// Example usage:
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = sumOfDistinctElements(set1, set2);
console.log("Sum of distinct elements from both sets:", result);
