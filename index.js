var SearchHighlighter = {
      options: {
        backgroundColor: 'red',
        textColor: 'white',
        contentElementId: 'content'
      },
      search: function(query, container) {
        var elements = container.getElementsByTagName('p');
        var results = [];

        for (var i = 0; i < elements.length; i++) {
          var text = elements[i].textContent.toLowerCase();

          if (text.includes(query.toLowerCase())) {
            results.push(elements[i]);
          }
        }

        return results;
      },
      highlight: function(query, container) {
        var elements = container.getElementsByTagName('p');

        for (var i = 0; i < elements.length; i++) {
          var text = elements[i].textContent.toLowerCase();

          if (text.includes(query.toLowerCase())) {
            var regex = new RegExp(query, 'gi');
            var highlightedText = elements[i].textContent.replace(regex, function(match) {
              return '<span style="background-color: ' + SearchHighlighter.options.backgroundColor + '; color: ' + SearchHighlighter.options.textColor + ';">' + match + '</span>';
            });

            elements[i].innerHTML = highlightedText;
          }
        }
      },
      setContentElementId: function(elementId) {
        SearchHighlighter.options.contentElementId = elementId;
      }
    };

    var searchInput = document.getElementById('searchInput');
    var content = document.getElementById(SearchHighlighter.options.contentElementId);

    searchInput.addEventListener('input', function() {
      var query = this.value;

      var highlightedElements = content.querySelectorAll('span[style="background-color: ' + SearchHighlighter.options.backgroundColor + '; color: ' + SearchHighlighter.options.textColor + ' ;"]');
      for (var i = 0; i < highlightedElements.length; i++) {
        var parent = highlightedElements[i].parentNode;
        parent.replaceChild(document.createTextNode(highlightedElements[i].textContent), highlightedElements[i]);
      }

      var searchResults = SearchHighlighter.search(query, content);
      SearchHighlighter.highlight(query, content);

      console.log(searchResults);
    });

    SearchHighlighter.setContentElementId('content');
