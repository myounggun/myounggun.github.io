---
layout: default
title: Archive
permalink: /archive/
---

<!-- https://github.com/jekyll/jekyll-archives/blob/master/docs/layouts.md -->
<h1>Archives</h1>

<ul class="posts">
{% for post in site.posts %}
  <li style="margin: 10px">
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    <br>
    <span class="post-date" style="font-size: 16px">{{ post.date | date: "%Y %B %-d" }}</span>
  </li>
{% endfor %}
</ul>
