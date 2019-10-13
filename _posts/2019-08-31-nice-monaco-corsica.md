---
layout: post
title: Nice, Monaco, Corsica
filename: nice-monaco-corsica
date: 2019-08-31
tags: [places]
---

{% assign text = site.texts
    | where_exp:"text", "text.filename == page.filename" 
    | first %}

{{ text.content }}
