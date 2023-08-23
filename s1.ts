// Step 1: נתון לכם אינאם - אתם רשאים להפוך אותו למשהו אחר
export enum ItemType {
  Book = 'book',
  DVD = 'dvd',
}

// Step 2:  ספר צריך להכיל שדות
interface Book {
  type: string
  title: string
  author: string
}

interface DVD {
  type: string
  title: string
  duration: number
}

function filterItems<T>(items: T[], filterFn: (item: T) => boolean): T[] {
  const filterItems: T[] = items.filter(filterFn)
  return filterItems
}
console.log(filterItems<number>([2, 43, 54, 2], (item: number) => item % 2 === 0));


// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט
function printItemsData<T>(items: T[]): void {
  for (let i = 0; i < items.length; i++) {
    console.log(items[i])
  }
}

// Test data
const libraryItems: (Book | DVD)[] = [
  { type: ItemType.Book, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { type: ItemType.DVD, title: 'Inception', duration: 148 },
  { type: ItemType.Book, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { type: ItemType.DVD, title: 'Avatar', duration: 162 },
  { type: ItemType.Book, title: 'Go Set a Watchman', author: 'Harper Lee' },
];
// Step 5:  הדפיסו את כל המידע הנתון
printItemsData<Book | DVD>(libraryItems)
// Step 6: ממשו את פונקצית הפילטור כך שתחזיר סרטים ארוכים משעתיים והדפיסו את המערך
function longMovies<T extends DVD>(arr: T[], filterFunc: (item: T) => boolean): void {
  const filterItems: T[] = arr.filter(filterFunc)
  console.log(filterItems)
}
let a = libraryItems.filter(item => item.type === ItemType.DVD) as DVD[];
longMovies(a, item => item.duration > 120);

// Step 7:  Harper Lee ממשו את פונקצית הפילטור כך שתחזיר רק ספרים של  
function onlyHarperLee<T extends Book>(arr: T[], filterFunc: (item: T) => boolean): void {
  const filterItems: T[] = arr.filter(filterFunc)
  console.log(filterItems)
}
let a2 = libraryItems.filter(item => item.type === ItemType.Book && (item as Book).author === 'Harper Lee') as Book[];
onlyHarperLee(a2, item => item.author === 'Harper Lee');
