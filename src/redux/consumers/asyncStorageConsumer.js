import StorageManager from '../utils/storageManager';

export function getPosition(key = 'position') {
  return StorageManager.get(key)
  .then(position => {
    console.log(position)
    return JSON.parse(position);
  });
}

export function setPosition(key = 'position', value = {}) {
  return StorageManager.set(key, JSON.stringify(value))
  .then(success => {
    console.log(success)
    return success;
  });
}