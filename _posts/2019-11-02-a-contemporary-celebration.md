---
layout: poem
title: 節日
filename: a-contemporary-celebration
date: 2019-11-02
tags: [poetry]
---

{% assign text = site.texts
    | where_exp:"text", "text.filename == page.filename" 
    | first %}

{{ text.content }}
