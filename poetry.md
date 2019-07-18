---
layout: page
title: Poetry
---
Intro text

{% for post in site.tags.poetry %}
   {% assign text = site.texts
       | where_exp:"text", "text.filename == post.filename" 
       | first %}

   {{ text.output }}
{% endfor %}
