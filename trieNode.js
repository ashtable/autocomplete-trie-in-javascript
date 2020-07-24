class TrieNode {
  constructor(value) {
    this.value = value;
    this.isWord = false;
    this.children = {};
  }
}

module.exports = TrieNode;
