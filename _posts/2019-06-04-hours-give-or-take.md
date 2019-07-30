---
layout: poem
title: Hours, give or take
filename: hours-give-or-take
date: 2019-06-04
tags: [poetry]
---

{% assign text = site.texts
    | where_exp:"text", "text.filename == page.filename" 
    | first %}

{{ text.content }}
