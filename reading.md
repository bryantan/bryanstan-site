---
layout: page
title: Reading
---
Intro text

{% for post in site.tags.reading %}
   {% assign text = site.texts
       | where_exp:"text", "text.filename == post.filename" 
       | first %}

   {{ text.output }}
{% endfor %}
