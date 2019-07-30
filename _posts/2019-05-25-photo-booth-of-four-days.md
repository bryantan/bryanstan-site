---
layout: poem
title: A photo booth of four days
filename: photo-booth-of-four-days
date: 2019-05-25
tags: [poetry]
---

{% assign text = site.texts
    | where_exp:"text", "text.filename == page.filename" 
    | first %}

{{ text.content }}
