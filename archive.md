---
layout: default
title: Archive
permalink: /archive/
---

<!-- https://github.com/jekyll/jekyll-archives/blob/master/docs/layouts.md -->
<h1>Archive of posts from {{ site.date | date: "%B %Y" }}</h1>

<ul class="posts">
{% for post in site.posts %}
  <li>
    <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>