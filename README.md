# Search Highlighter

A lightweight JavaScript library for highlighting search terms within the specified container.

## Features

- Highlights search terms in text content.
- Supports case sensitivity for search terms.
- Customizable highlight styles (background color and text color).

## Installation

You can install the package via npm:

```bash
npm i @imvora/searchhighlighter
```

## Usage

```html
<!-- Include the SearchHighlighter script -->
<script src="path/to/search-highlighter.js"></script>

<!-- HTML content to be searched and highlighted -->
<div id="content">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<!-- Search input -->
<input type="text" id="searchInput" placeholder="Search...">

<!-- Initialize SearchHighlighter -->
<script>
  SearchHighlighter.setContentElementId('content');

  var searchInput = document.getElementById('searchInput');
  var content = document.getElementById(SearchHighlighter.options.contentElementId);

  searchInput.addEventListener('input', function() {
    var query = this.value;
    SearchHighlighter.highlight(query, content);
  });
</script>
```

## API

#### SearchHighlighter.search(query, container)
Searches for the specified query in the content of the container element. Returns an array of elements containing the search results.

#### SearchHighlighter.highlight(query, container)
Highlights the occurrences of the query in the content of the container element with the custom styles defined in the SearchHighlighter.options object.

#### SearchHighlighter.setContentElementId(elementId)
Sets the contentElementId to the specified elementId. This is the ID of the HTML element containing the content to be searched and highlighted.

## Options

The SearchHighlighter object has the following customizable options:

```js
SearchHighlighter.options = {
  backgroundColor: 'red',
  textColor: 'white',
  contentElementId: 'content'
};
```

- backgroundColor: Specifies the background color of the highlighted text.
- textColor: Specifies the text color of the highlighted text.
- contentElementId: Specifies the ID of the HTML element containing the content to be searched and highlighted.

## License 

This project is licensed under the MIT License.
