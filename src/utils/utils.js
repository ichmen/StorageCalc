export function costCalculator({ storage, transfer, hdd, multi }) {
  return {
    backblaze: backblazeCount(transfer, storage),
    bunny: bunnyCount(transfer, storage, hdd),
    scaleway: scalewayCount(transfer, storage, multi),
    vultr: vultrCount(transfer, storage),
  };
}

function backblazeCount(transferAmount, storageAmount) {
  const result = transferAmount * 0.01 + storageAmount * 0.005;
  if (result === 0) {
    return 0;
  }
  return result <= 7 ? 7 : result;
}

function bunnyCount(transferAmount, storageAmount, mode) {
  const result = transferAmount * 0.01 + storageAmount * (mode ? 0.01 : 0.02);
  return result >= 10 ? 10 : result;
}

function scalewayCount(transferAmount, storageAmount, mode) {
  const transfer = transferAmount <= 75 ? 0 : transferAmount - 75;
  const storage = storageAmount <= 75 ? 0 : storageAmount - 75;
  return transfer * 0.02 + storage * (mode ? 0.06 : 0.03);
}

function vultrCount(transferAmount, storageAmount) {
  const result = transferAmount * 0.01 + storageAmount * 0.01;
  if (result === 0) {
    return 0;
  }
  return result <= 5 ? 5 : result;
}
