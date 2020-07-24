const TrieNode = require('./trieNode');
const Trie = require('./trie');

test('insert/search of "dog" works', () => {
  // Arrange
  const words = ['dog'];
  const trie = new Trie();
  words.forEach(w => trie.insert(w));

  // Act
  const searchForDog = trie.search('dog');
  const searchForDo = trie.search('do');
  const searchForD = trie.search('d');

  // Assert
  expect(searchForDog).toStrictEqual(true);
  expect(searchForDo).toStrictEqual(false);
  expect(searchForD).toStrictEqual(false);
});


test('insert/search of "dog" and "cat" works', () => {
  // Arrange
  const words = ['dog', 'cat'];
  const trie = new Trie();
  words.forEach(w => trie.insert(w));

  // Act
  const searchForDog = trie.search('dog');
  const searchForCat = trie.search('cat');
  const searchForBird = trie.search('bird');

  // Assert
  expect(searchForDog).toStrictEqual(true);
  expect(searchForCat).toStrictEqual(true);
  expect(searchForBird).toStrictEqual(false);
});

test('autocomplete of "d" and "do" both return ["dog"] with dictionary of ["dog"]', () => {
  // Arrange
  const words = ['dog'];
  const trie = new Trie();
  words.forEach(w => trie.insert(w));

  // Act
  const autoCompleteDo = trie.autocomplete('do');
  const autoCompleteD = trie.autocomplete('d');

  // Assert
  expect(autoCompleteDo).toStrictEqual(['dog']);
  expect(autoCompleteD).toStrictEqual(['dog']);
});

test('autocomplete of "do" returns ["dog", "door"] with dictionary of ["dog", "door"]', () => {
  // Arrange
  const words = ['dog', 'door'];
  const trie = new Trie();
  words.forEach(w => trie.insert(w));

  // Act
  const autoCompleteDo = trie.autocomplete('do');

  // Assert
  expect(autoCompleteDo).toStrictEqual(['dog', 'door']);
});

test('autocomplete of "b" returns ["bird"] with dictionary of ["dog", "cat", "bird"]', () => {
  // Arrange
  const words = ['dog', 'cat', 'bird'];
  const trie = new Trie();
  words.forEach(w => trie.insert(w));

  // Act
  const autoCompleteDo = trie.autocomplete('b');

  // Assert
  expect(autoCompleteDo).toStrictEqual(['bird']);
});
