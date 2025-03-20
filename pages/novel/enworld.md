---
layout: page
permalink: /novel/enworld/
title: ENWORLD
thumbnail: /assets/img/enworld.jpg
description: 
hide_title: true
eleventyNavigation:
  key: ENWORLD
  parent: NOVEL
  order: 1
---

<div class="container">
  <div class="image-container">
    <img src="/assets/img/enworld.jpg" alt="Book Cover">
  </div>
  <div class="text-container">
    <h2>ENWORLD</h2>
    <p><b>COMING SOON</b></p>
    <p><em>EnWorld: An Encapsulated Future</em></p>
    <p><b>A World Ruled by Algorithms and Ambition</b></p>
    <p>A searing satire and a rallying cry, EnWorld exposes the seductive dangers of totalitarianism in the modern age and the fragile line between good and evil. For fans of Orwell, Huxley, and Bradbury, <em>EnWorld</em> pushes further into a future that mankind must avoid. As Orwell said, "Don't let it happen."</p>
    <p><a href="#" id="toggle-sample">Read prologue</a></p>    
  </div>
</div>
<div class="centered-content" id="sample-content" style="display: none;">
  <div class="mobile-only">
    <a href="/assets/pdf/enworld-prologue.pdf" target="_blank">Read the Prologue (PDF)</a>
  </div>
  <div class="desktop-only">
      <iframe src="/assets/pdf/enworld-prologue.pdf"  height="600px" width="100%" style="border: none;"></iframe>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const toggleLink = document.getElementById("toggle-sample");
    const prologueContent = document.getElementById("sample-content");

    toggleLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior
      if (prologueContent.style.display === "none") {
        prologueContent.style.display = "block"; // Show content
        toggleLink.textContent = "Hide prologue"; // Change link text
        prologueContent.scrollIntoView({ behavior: "smooth" }); // Scroll to content
      } else {
        prologueContent.style.display = "none"; // Hide content
        toggleLink.textContent = "Read prologue"; // Change link text back
      }
    });
  });
</script>
