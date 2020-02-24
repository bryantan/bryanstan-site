---
layout: poem
title: Concentric
filename: concentric
date: 2019-12-16
tags: [places, poetry]
---

{% assign text = site.texts
    | where_exp:"text", "text.filename == page.filename" 
    | first %}

{{ text.content }}
