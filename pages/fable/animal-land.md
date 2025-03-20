---
layout: page
permalink: /fable/animal-land/
title: ANIMAL LAND
description:
thumbnail: /assets/img/animal-land.jpg
eleventyNavigation:
  key: ANIMAL LAND
  parent: FABLE
hide_title: true
---

<div class="container">
  <div class="image-container">
    <img src="/assets/img/animal-land.jpg" alt="Animal Land Book Cover">
  </div>
  <div class="text-container">
    <h2>ANIMAL LAND</h2>
    <p>"Poised skillfully between Aesop's fables and The History of World War II, Leland James' enchanting allegorical tale relates the story of the war with a cast of cleverly chosen animals. Brilliantly illustrated by Anne Zimanski, Animal Land is a must-read for children from nine to ninety. A page-turning mixture of wonder and horror with a message for our own times proclaimed at its closing by a wise old owl."</p>
    <p><strong>—Johnmichael Simon, chief editor Cyclamens and Swords Publishing</strong></p>
    <p>"Hawks. Owls. Giant wolves. Yikes! This is not the Peaceable Kingdom. And when the Crocadogs show up, it's best not to follow a possum's advice. Maybe it's better to follow the badger! But who will save the songbirds? Yes, we need zebras and giraffes, but we also need eagles and lions. Beautifully illustrated by Anne Zimanski, this narrative in verse carries a powerful lesson for children, and for everyone else."</p>
    <p><strong>—W.F. Lantry, Winner of the Nautilus Book Award for Poetry for his book, The Structure of Desire</strong></p>
    <p><a href="#" id="toggle-sample">Read prologue</a></p>
    <p><a href="https://www.amazon.com/animal-land-allegorical-leland-james/dp/193565635x">Order book</a></p>
  </div>
</div>

<div class="centered-content" id="sample-content" style="display: none;">
  <img src="/assets/img/animal-land-illus.jpg" alt="Animal Land Illustration">
  <h2>ANIMAL LAND</h2>
  <h3>Prologue</h3>
  <pre>
Animal Land was at the heart of things,
of the story as it here unfolds,
a land ringed by many other lands
in a far away world quite like,
and quite unlike, our own imperfect world.

In its makeup Animal Land resembled
the other lands in its world,
having seaside, jungle, mountains,
forest and plains, and a diverse,
you might say "zoo like,"
array of inhabitants.

Before the story begins, let us be clear,
Animal Land was not a land
without its own sins, maybe more
than its share of unholy acts.

This is a story of Animal Land, and thereby its world,
in a time long past when Animal Land and
stalwart allies bravely opposed
an army of abominable aberrant beasts.

A time of World War.
  </pre>
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
