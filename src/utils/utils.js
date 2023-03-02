export function costCalculator(name, transferAmount, storageAmount, flag) {
  // if ()
  let result;
  switch (name) {
    case 'backblaze':
      result = transferAmount * 0.01 + storageAmount * 0.005;

      result = result <= 7 ? 7 : result;
      break;
    case 'bunny':
      const hdd = 0.01;
      const ssd = 0.02;
      result = transferAmount * 0.01 + storageAmount * flag ? hdd : ssd;
      result = result >= 10 ? 10 : result;
      break;
    case 'scaleway':
      result = transferAmount * 0.01 + storageAmount * 0.005;
      result = result <= 7 ? 7 : result;
      break;

    default:
      break;
  }
}

function backblazeCount(transferAmount, storageAmount) {
  const result = transferAmount * 0.01 + storageAmount * 0.005;
  return result <= 7 ? 7 : result;
}

function backblazeCount(transferAmount, storageAmount, mode) {
  const storagePrice = mode === 'hdd' ? 0.01 : 0.02;
  result = transferAmount;
  return result <= 7 ? 7 : result;
}
