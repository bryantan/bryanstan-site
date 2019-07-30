---
layout: page
title: Places
---

<br>

{% for post in site.tags.places %}
   {% assign text = site.texts
       | where_exp:"text", "text.filename == post.filename" 
       | first %}

   {{ text.output }}
{% endfor %}
