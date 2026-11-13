const nums = [];
for (let i = 0; i < 5; i++) {
    const num = parseInt(prompt("Enter a number:"));
    nums.push(num);
}
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}