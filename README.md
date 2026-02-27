# 📚 Book Inventory API

A dynamic book inventory management app built with Vanilla JavaScript that fetches data from a JSON file hosted on GitHub.

## 🖥️ Demo

You can open the project directly in your browser — no server setup required.

## 📋 Features

- **API Data Fetching** – Book data is retrieved using the `fetch` API from a `products.json` file hosted on GitHub Raw
- **localStorage Caching** – Data is saved to `localStorage` on the first load, so no repeated API requests are made on page refresh
- **Card-Based Listing** – Each book is displayed as a Bootstrap card showing its cover image, title, author, genre, price, and stock
- **Inline Editing** – Clicking the "Edit" button on any card opens an editable form directly below it
- **Instant Save** – Changes are immediately reflected in both the UI and `localStorage`

## 🗂️ Project Structure

```
Book_Inventory_api/
├── index.html       # Main HTML file
├── script.js        # App logic (fetching, rendering, editing)
├── style.css        # Custom styles
└── products.json    # Book data source hosted on GitHub
```

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/esraevrim/Book_Inventory_api.git
   ```
2. Navigate to the project folder:
   ```bash
   cd Book_Inventory_api
   ```
3. Open `index.html` in your browser.

> **Note:** Due to CORS restrictions, opening the file via the `file://` protocol may cause issues. In that case, use VS Code's **Live Server** extension or run:
> ```bash
> npx serve .
> ```

## 🔧 Technologies Used

| Technology | Description |
|------------|-------------|
| HTML5 | Page structure |
| CSS3 | Custom styling |
| JavaScript (ES6+) | App logic, `async/await`, `fetch` |
| Bootstrap | Card components and general layout |
| GitHub Raw | Used as a JSON data source |
| localStorage | Client-side data caching |

## 📦 Data Structure

Each book entry in `products.json` contains the following fields:

```json
{
  "name": "Book Title",
  "author": "Author Name",
  "genre": "Genre",
  "price": 99.90,
  "stock": 10,
  "image": "https://..."
}
```

## ⚙️ How It Works

1. On page load, the app checks whether data exists in `localStorage`.
2. If not, it fetches the JSON file from GitHub Raw and saves it to `localStorage`.
3. Books are rendered as Bootstrap cards on the page.
4. Clicking the "Edit" button opens an inline form below the corresponding card.
5. Clicking "Save" writes the changes back to the `products` array and `localStorage`, then re-renders the list.

## 🙋‍♀️ Developer

**Esra Evrim** – [@esraevrim](https://github.com/esraevrim)
