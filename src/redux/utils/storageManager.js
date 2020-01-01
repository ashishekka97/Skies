import storageProvider from './storageProvider';

class StorageManagerClass {
  constructor() {
    this.$storage = storageProvider;
  }

  get(key) {
    return this.$storage.getItem(key);
  }

  set(key, value) {
    return this.$storage.setItem(key, value);
  }
}

const StorageManager = new StorageManagerClass();

export default StorageManager;
