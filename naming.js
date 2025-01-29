function totalAmount(amounts) {
 let totalAmount = 0;
 amounts.forEach(amount => {
  totalAmount += amount;
 });
 return totalAmount;
}

let bestPurchaseAmounts = [10000, 20000, 30000];
console.log(totalAmount(bestPurchaseAmounts));