(function () {
  const BOOK_ORDER = [
    'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy',
    'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings',
    '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job',
    'Psalm', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah',
    'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah',
    'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi',
    'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians',
    'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians',
    '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter',
    '1 John', '2 John', '3 John', 'Jude', 'Revelation'
  ];

  const BOOK_INDEX = new Map(
    BOOK_ORDER.flatMap((book, index) => {
      if (book === 'Psalm') return [[book, index], ['Psalms', index]];
      return [[book, index]];
    })
  );

  const BOOKS_BY_LENGTH = [...BOOK_INDEX.keys()].sort((a, b) => b.length - a.length);

  function parseRef(ref) {
    const text = (ref || '').trim();
    if (!text) return { bookIndex: Number.MAX_SAFE_INTEGER, chapter: 0, verse: 0 };

    for (const book of BOOKS_BY_LENGTH) {
      if (text === book) {
        return { bookIndex: BOOK_INDEX.get(book), chapter: 0, verse: 0 };
      }
      if (text.startsWith(book + ' ')) {
        const rest = text.slice(book.length).trim();
        const match = rest.match(/^(\d+)(?::(\d+))?/);
        return {
          bookIndex: BOOK_INDEX.get(book),
          chapter: match ? Number(match[1]) : 0,
          verse: match && match[2] ? Number(match[2]) : 0
        };
      }
    }

    return { bookIndex: Number.MAX_SAFE_INTEGER, chapter: 0, verse: 0 };
  }

  function compareRefs(a, b) {
    const left = parseRef(a);
    const right = parseRef(b);

    if (left.bookIndex !== right.bookIndex) return left.bookIndex - right.bookIndex;
    if (left.chapter !== right.chapter) return left.chapter - right.chapter;
    return left.verse - right.verse;
  }

  function sortContainer(container, selector) {
    const items = Array.from(container.querySelectorAll(selector));
    items.sort((itemA, itemB) => {
      const refA = itemA.getAttribute('data-bible-ref') || itemA.querySelector('h2, h3')?.textContent || '';
      const refB = itemB.getAttribute('data-bible-ref') || itemB.querySelector('h2, h3')?.textContent || '';
      const refCompare = compareRefs(refA, refB);
      if (refCompare !== 0) return refCompare;

      const orderA = Number(itemA.getAttribute('data-series-order') || 0);
      const orderB = Number(itemB.getAttribute('data-series-order') || 0);
      return orderA - orderB;
    });
    items.forEach(item => container.appendChild(item));
  }

  window.BibleSort = { sortContainer, compareRefs, parseRef };
})();
