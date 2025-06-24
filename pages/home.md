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
    <div class="text-container" style="flex: 0 0 70%; max-width: 100%;">
      <p>Leland James is the winner of the Aesthetica Creative Writing Award and the Conclave Character Prize in fiction. In addition to fiction, Leland has published poetry worldwide, authoring eight poetry collection and five children's books in verse, garnering over a dozen international prizes and awards including nomination for a Pushcart Prize. His writing style is described by Don Williams, Editor Emeritus of New Millennium Writings as "mystical yet earthbound."</p>
    </div>
    <div class="image-container" style="flex: 0 0 30%; max-width: 100%;">
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
        <p></p>
        <h2>Order book</h2>
        <p><a href="https://www.amazon.com/dp/163299996X">Amazon - Paperback + Kindle eBook</a></p>
        <p><a href="https://www.barnesandnoble.com/w/enworld-leland-james/1147646329?ean=9781632999962">Barnes & Noble - Paperback</a></p>   
        <p><a href="https://bookshop.org/p/books/enworld-an-encapsulated-future/96819dbb21b7433b?ean=9781632999962&next=t">Bookshop.org - Paperback</a></p>
        <p><a href="https://books.apple.com/us/book/enworld/id6747411565">Apple Books - eBook</a></p>
      </a>
    </div>
      <div class="text-container">
        <h1>ENWORLD</h1>
        <p><em>An Encapsulated Future</em></p>
        <h2>A NOVEL</h2>
        <p><b>A World Ruled by Algorithms and Ambition</b></p>
        <p>A searing satire and a rallying cry, EnWorld exposes the seductive dangers of totalitarianism in the modern age and the fragile line between good and evil. For fans of Orwell, Huxley, and Bradbury, <em>EnWorld</em> pushes further into a future that mankind must avoid. As Orwell said, "Don't let it happen."</p>
        <h3>Reviews</h3>
        <p>"A blend of speculative fiction, satire, and thought experiment, explores themes of identity and morality... James’ literary loop-the-loops result in a fun, brainy read. Entertaining and inventive storytelling."</p>
        <p><strong>–Kirkus Reviews</strong></p>
        <p>“EnWorld is a richly philosophical dystopian novel imagining a future where technological progress and totalitarian domination merge to remake human civilization.”</p>
        <p><strong>–Readers Favorite Review, 5-Stars</strong></p>
        <p><a href="/assets/pdf/enworld-prologue.pdf" target="_blank">Read the prologue (PDF)</a></p> 
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

