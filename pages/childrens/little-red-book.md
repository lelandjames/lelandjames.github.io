---
layout: page
permalink: /childrens/little-red-book/
title: LITTLE RED BOOK OF WORDPLAY
description: 
galleryOrder: 11
thumbnail: /assets/img/little-red-book.jpg
hide_title: true
eleventyNavigation:
  key: LITTLE RED BOOK OF WORDPLAY
  parent: CHILDRENS
  order: 4
---

<div class="container">
  <div class="image-container">
    <img src="/assets/img/little-red-book.jpg" alt="Book Cover">
  </div>
  <div class="text-container">
    <h2>LITTLE RED BOOK OF WORDPLAY</h2>
    <p>“Here’s a great learning experience for the kids … a big, wonderful box of literary tools and devices—a veritable symphony of words that runs the gamut from the silly to the sublime. Have some fun with the English language and let Perspicacious Cat lead the way on an amazing, informative journey.”</p>
    <p><strong>—Terry Caszatt, former creative writing instructor, Interlochen Center for the Arts, 
            and author of the children’s novel Brass Monkeys.</strong></p>
    <p><a href="#" id="toggle-sample">Read sample</a></p>
    <p><a href="https://littleredtree.com/a-little-red-book-of-wordplay-with-perspicacious-the-cat/">Order book</a></p>
  </div>
</div>

<div class="centered-content" id="sample-content" style="display: none;">
<p>Wordplay is not like building with blocks,</p>
<p>more like hopscotch, or the tying of knots;</p>
<p>Or filling your pockets with exquisite rocks;</p>
<p>Or guessing how many a beetle has spots….</p>
<p><img src="/assets/img/little-red-book-illus.jpg" alt="Little Red Book Illustration" /></p>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const toggleLink = document.getElementById("toggle-sample");
    const prologueContent = document.getElementById("sample-content");

    toggleLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior
      if (prologueContent.style.display === "none") {
        prologueContent.style.display = "block"; // Show content
        toggleLink.textContent = "Hide sample"; // Change link text
        prologueContent.scrollIntoView({ behavior: "smooth" }); // Scroll to content
      } else {
        prologueContent.style.display = "none"; // Hide content
        toggleLink.textContent = "Read sample"; // Change link text back
      }
    });
  });
</script>
