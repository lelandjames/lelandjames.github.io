---
layout: page
permalink: /childrens/giving-secret/
title: THE GIVING SECRET
description: 
hide_title: true
eleventyNavigation:
  key: THE GIVING SECRET
  parent: CHILDRENS
---

<div class="container">
  <div class="image-container">
    <img src="/assets/img/giving-secret.jpg" alt="Book Cover">
  </div>
  <div class="text-container">
    <h2>THE GIVING SECRET</h2>
    <p><em>The Giving Secret, a true story</em> is an illustrated story of the power of giving, relationships, and imagination written by award-winning poet Leland James. It is a book of understated wisdom (Winnie the Pooh), exposing the apparent contradiction between emotional and artistic <em>truths</em> versus logical conclusions or mathematical facts. It is warm and intellectually stimulating.</p>
    <p><em>"The Giving Secret</em> by Leland James is like a magic amulet, a guide back to the age of innocence and wonder, where a small, ordinary moment can become an exciting, all-encompassing world."</p>
    <p>--Terry Cazatt, former creative writing instructor at the Interlochen Center for the Arts.</p>
    <p><a href="#" id="toggle-sample">Read sample</a></p>
    <p><a href="https://www.barnesandnoble.com/w/the-giving-secret-leland-james/1146687694">Order book</a></p>
  </div>
</div>

<div class="centered-content" id="sample-content" style="display: none;">
<p><img src="/assets/img/giving-secret-illus.jpg" alt="Giving Secret Illustration" /></p>
<p>There lived a little girl, no not a fairy princess,</p>
<p>or wizardess, nothing like that; a quite ordinary</p>
<p>little girl, smart, cheerful, and pretty in her way.</p>
<p>This little girl's father gave her a wonderful gift.</p>
<p>Not a Teddy Bear or a toy balloon. He gave her</p>
<p>the moon! Now, that can't be. Everyone knows</p>
<p>the moon belongs to everyone. It's as plain as</p>
<p>salt in the sea, the nose on your face and A.B.C.</p>
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
      } else {
        prologueContent.style.display = "none"; // Hide content
        toggleLink.textContent = "Read sample"; // Change link text back
      }
    });
  });
</script>
