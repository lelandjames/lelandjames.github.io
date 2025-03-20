---
layout: about
title: HOME
permalink: /
subtitle: 
eleventyNavigation:
  key: HOME
  order: 1

profile:
  align: right
  image: leland-james.jpg
  image_circular: false # crops the image to make it circular
  more_info: 

---
<article>
  <div class="container">
    <div class="text-container" style="flex: 0 0 55%; max-width: 100%;">
      <p>Leland James is the winner of the Aesthetica Creative Writing Award and the Conclave Character Prize in fiction. In addition to fiction, Leland has published poetry worldwide, authoring eight poetry collection and five children's books in verse, garnering over a dozen international prizes and awards including nomination for a Pushcart Prize. His writing style is described by Don Williams, Editor Emeritus of New Millennium Writings as "mystical yet earthbound."</p>
    </div>
    <div class="image-container" style="flex: 0 0 45%; max-width: 100%;">
      <img
        src="/assets/img/leland-james.jpg"
        class="img-fluid z-depth-1 rounded"
        width="100%"
        height="auto"
      >
    </div>
  </div>
  <br>
  <div class="container">
    <div class="image-container" style="flex: 0 0 230px;">
      <a href="novel/enworld">
        <img src="/assets/img/enworld.jpg" alt="Book Cover">
      </a>
    </div>
      <div class="text-container">
        <h1>ENWORLD</h1>
        <p><em>An Encapsulated Future</em></p>
        <h2>A NOVEL</h2>
        <p><b>COMING SOON</b></p>
        <p><b>A World Ruled by Algorithms and Ambition</b></p>
        <p>A searing satire and a rallying cry, EnWorld exposes the seductive dangers of totalitarianism in the modern age and the fragile line between good and evil. For fans of Orwell, Huxley, and Bradbury, <em>EnWorld</em> pushes further into a future that mankind must avoid. As Orwell said, "Don't let it happen."</p>
        <a href="novel/enworld">More information (and prologue)</a>
      </div>
  </div>
  <div class="container">
    <h2>Explore more titles</h2>
  </div>
  <div class="gallery">
    <div class="gallery-grid">
        {% for page in collections.galleryItems %}
          <div class="gallery-item">
            <a href="{{ page.url }}">
              <img src="{{ page.data.thumbnail }}" alt="{{ page.data.title | default: 'Page' }}">
            </a>
          </div>
      {% endfor %}
    </div>
  </div>
</article>

