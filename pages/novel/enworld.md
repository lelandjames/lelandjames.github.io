---
layout: page
permalink: /novel/enworld/
title: ENWORLD
thumbnail: /assets/img/enworld.jpg
description: 
galleryOrder: 1
hide_title: true
eleventyNavigation:
  key: ENWORLD
  parent: NOVEL
  order: 1
---

<div class="container">
  <div class="image-container">
    <img src="/assets/img/enworld.jpg" alt="Book Cover">
    <p></p>
    <h2>Order book</h2>
    <p><a href="https://www.amazon.com/dp/163299996X">Amazon - Paperback + Kindle eBook</a></p>
    <p><a href="https://www.barnesandnoble.com/w/enworld-leland-james/1147646329?ean=9781632999962">Barnes & Noble - Paperback</a></p>   
    <p><a href="https://bookshop.org/p/books/enworld-an-encapsulated-future/96819dbb21b7433b?ean=9781632999962&next=t">Bookshop.org - Paperback</a></p>
    <p><a href="https://books.apple.com/us/book/enworld/id6747411565">Apple Books - eBook</a></p>
  </div>
  <div class="text-container">
    <h2>ENWORLD</h2>
    <p><em>EnWorld: An Encapsulated Future</em></p>
    <p><b>A World Ruled by Algorithms and Ambition</b></p>
    <p>A searing satire and a rallying cry, EnWorld exposes the seductive dangers of totalitarianism in the modern age and the fragile line between good and evil. For fans of Orwell, Huxley, and Bradbury, <em>EnWorld</em> pushes further into a future that mankind must avoid. As Orwell said, "Don't let it happen."</p>
    <h3>Reviews</h3>
    <p>"A blend of speculative fiction, satire, and thought experiment, explores themes of identity and morality... James’ literary loop-the-loops result in a fun, brainy read. Entertaining and inventive storytelling."</p>
    <p><strong>–Kirkus Reviews</strong></p>
    <p>“EnWorld is a richly philosophical dystopian novel imagining a future where technological progress and totalitarian domination merge to remake human civilization.”</p>
    <p><strong>–Readers Favorite Review, 5-Stars</strong></p>
    <p>“This is a polished, satirical examination of what evil truly means in our modern world. Sharp, witty satire sifting fiction, reality, and contemporary life."</p>
    <p><strong>–PW's Booklife</strong></p>        
    <p><a href="/assets/pdf/enworld-prologue.pdf" target="_blank">Read the prologue (PDF)</a></p> 
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
