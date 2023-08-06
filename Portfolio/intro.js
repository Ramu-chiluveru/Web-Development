
    function showContent(contentType) {
      // Hide all content sections
      const allContent = document.querySelectorAll('.content');
      allContent.forEach((content) => {
        content.style.display = 'none';
      });

      // Show the selected content
      const selectedContent = document.getElementById(`${contentType}-content`);
      selectedContent.style.display = 'block';
    }
