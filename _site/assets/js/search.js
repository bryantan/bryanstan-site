// Based on a script by Kathie Decora : katydecorah.com/code/lunr-and-jekyll/

// Create the lunr index for the search
var index = elasticlunr(function () {
  this.addField('title')
  this.addField('author')
  this.addField('layout')
  this.addField('content')
  this.setRef('id')
});

// Add to this index the proper metadata from the Jekyll content

index.addDoc({
  title: "節日",
  author: null,
  layout: "poem",
  content: "\n\n  當代的你，曾是土壤的延伸\n  你在日與月之間蝕盡了年歲\n  在水深處將它幻化成山與林\n  而朝霧離去時你輕輕揮別了\n  所有豢養著你的故事與言語\n  割捨花瓣的辰露，當代的你\n\n\n",
  id: 0
});
index.addDoc({
  title: "September Scotland",
  author: null,
  layout: "post",
  content: "\nIf there is one thought from this time in Scotland, it is that Scotland is kind—unexpectedly, and almost overwhelmingly so, as though we are aliens, still in tact, swallowed by the earth beneath, and beneficiaries of a graciousness that needs no words. Its landscape was quite different from my expectations; less sheer cliffs and jagged rock, and more rolling hills and soft, smooth waters. The colours are gentle, the rain gentle, the sheep gentle. The people, too, and more so than anything else. There is a notion that the weather here is a ravaging monster with a soul of its own. Perhaps that is true—September says nothing of extremes—but even in the rains, without cover and up into the heights of the Fairy Pools, the heavens still feel to be a caressing hand upon this land, and I can’t see that to be otherwise. And so it is with these places so dear to the earth. It is not only a ruggedness borne out in such environments; it is an understanding, an acknowledgement of our place here, and what it means to be a part of this world. And that, too, is what it means to be gentle.\n\n",
  id: 1
});
index.addDoc({
  title: "Nice, Monaco, Corsica",
  author: null,
  layout: "post",
  content: "\nOf Oran, the city of his childhood, Albert Camus had said, “these are lands of innocence.” It was these words that I could not escape through my days in the South of France and on Corsica; Nice and France are, an ocean away,  much different from Oran and Algeria, and Camus’s notion of such innocence, pantheistic and near-primal, doesn’t apply quite so well to these places, but the resonance of lands built by the coast of the Mediterranean, under uninterrupted days of sun, rang persistent. To us in a different age, this may perhaps be as close as we can get to his innocence. I felt that some in Nice, both at a villa set upon the mountains with a clear view down to the undulating city and still, matte ocean, and in a converted worker’s flat, un-air conditioned and but a few dusty steps away from the pier, in that slow, unhurried pace and smell of warmth that permeates the air, the chattering of pebbles and feet that walk upon them, ship horns and the glint of numerous rays and salt on the back of the hand and in the hair. It was there, less, but there still in Monaco, down quiet streets beneath old looming city walls, among buildings of all styles and identities, against the dolosse enabling the safe havens of wealth and extravagance, and concrete constructions made of sands from many miles away. But this innocence was most present, of course, in Corsica. We, as the only foreigners, inundated by the native language of Camus, undeserving recipients of a kindness present only far away, driving around Cap Corse, its villages, harbours, beaches. At the vantage point at Moulin Mattei, too, from where one looks upon the east and the west, there too the glimmer of the sun off the ocean is soft, gentle, lulling you into a breathless trance, eyes transfixed upon mirrored gradients, with but imperfect ships marring a dream-like surface. The colours are innocent; not of man, not capable of man, and gone by the time you reach the water’s edge, replaced by reflections and buoys and laughter. Yet even they are innocent, and you can’t help but hold your breath, to listen close to the life around. And that is the innocence of our age—not what is far from the civilised man, but that what we do not know and do not understand.\n\n",
  id: 2
});
index.addDoc({
  title: "A to Z",
  author: null,
  layout: "poem",
  content: "\n\n  If I had a letter for every year\n  I could spell ‘azure’:\n  A colour of a coast\n  that draws desires upon its warm waters\n  And calls forth ships and souls,\n  and lighthouses and moons, new and full\n  A colour, all but perfectly clear\n  at the furthest reaches of its embrace\n  And indistinguishable\n  from the sky at the line beyond the eyes\n  A colour transcending name and form,\n  beyond letters and words, cadences and tides\n  I could spell it, a radiant desert\n  at home against a land it made beautiful\n  devoured in the instant,\n  belonging to millennia\n  I could spell it, and that would be all I could do\n  and that would be enough\n\n\n",
  id: 3
});
index.addDoc({
  title: "New Yorker on Hacker News",
  author: null,
  layout: "article",
  content: "\nI love this. Something that I love, talking about something that I loathe to love (or love to loathe?). So many gems here, such as:\n\n\n  The site’s now characteristic tone of performative erudition—hyperrational, dispassionate, contrarian, authoritative—often masks a deeper recklessness. Ill-advised citations proliferate; thought experiments abound; humane arguments are dismissed as emotional or irrational. Logic, applied narrowly, is used to justify broad moral positions.\n\n\nand:\n\n\n  Recently, an essay in the New Atlantis titled “Do Elephants Have Souls?,” from 2013, hit the front page. The piece generated immediate resistance. Commenters responded literally to the question posed in the title and bickered about the word “soul.” Conversation spiralled, with users making arguments about Cartesian metaphysics and quoting Socrates. “Why is such an unscientific question so high on HN?” one commenter asked. “Or to rephrase, if we don’t know what a soul is, how can we hope to answer it WRT elephants? So how and why should a reasoning person rate an article like this?”\n\n\nBeyond the beautifully written disparagement of traits and mindsets common in the industry, there is a thoughtful look into what moderation on Hacker News looks like and the challenges involved. Admittedly, this is supposed to be the whole point of the article, which was a little lost on me as I read through trying to find aspects of tech culture I dislike and descriptors I could co-opt into my own language. But bringing a more human side to moderating an online forum is difficult and not something commonly seen, and to see how well-received and appreciated the moderators’ work is was neat.\n\nI may identify more with The New Yorker than with Hacker News, but in many ways I am closer to the latter than the former; I did find this article on Hacker News, after all. To read this, then, feels like both an acknowledgement of these differences and a closing of the gap of sorts. And that, I am content in.\n\n",
  id: 4
});
index.addDoc({
  title: "Taipei, a City of Rain",
  author: null,
  layout: "post",
  content: "\nLiving in London now, the first reaction I get from most people when I say I moved from California is one of shock. California, to what seems like just about everyone, is a paradise in which the sun is ever unobscured and you drive your convertible, hood down, through radiant streets, and lie beside the sea on equally golden sands, day after day. Why would someone ever come here? There’s a rather pernicious belief underlying these reactions, held by both locals and anyone who knows anything about this city—that London is dreary, grey and rainy all the time. I wonder what it is that has made such a lie so pervasive; as someone who has spent a few years in Pittsburgh, I’m a bit offended when people think the weather here is unpleasant to the point of being the first thing someone thinks about when they hear the name of this city.\n\nIt’s worth noting, then, that ‘dreary’ is not the first thing that comes to mind when people talk about Taipei. Despite its penchant for both unleashing torrential downpours at unsuspecting hours and steadily drizzling for days on end, I suspect people don’t recall Taipei as cloudy and wet. It’s a city with a climate determined not by what the weather does from one day to the next, but by an unconsciousness yet visceral perception of its identity.\n\nA brilliant day in London brings out colours once present, as though a haze removed from our eyes, an entity fundamentally unchanged, and hence we dwell upon, blame the grey that obscures the beauty of this city of centuries. Less of London when overcast and raining, more of it when the moments are bright, but, more or less, still the same. For Taipei, a city of a latitude that has but a passing notion of seasons, the changing of the months that evoke the romantic perception of the turning of time have been replaced by a day to day immediacy of the wrestling between a city and its heavens, the product of which is a place that has as many faces as names for its precipitation.\n\nIn this manner, the city of Taipei is reflected in its rain: it is patchwork, with a mind of its own; it heeds no calls, and resists the telling of its fortunes; it is to be immersed within, to be upon the earth. It is not a violent city, where the waters are unceasing and the inhabitants resigned in the rivers that course through the city, nor is it a wild one, one in which extremities are magnified and blessings and curses flow abundantly.\n\nTaipei is not an idea, or an attitude, or a photograph; no sights are proclaimed, and no emotions are invoked by its name. Of its imperfections, many are seen at first glance: in worn streets, concrete free of refuse but dotted with permanent stains and blooming with sprawling cracks and fissures and wild flowers, and on the myriad buildings missing wall tiles and decorated with dark streaks flowing from windowsills and gutters, covered by half-torn election campaign posters and bright red numbers you can dial to hang an advertisement in its place. But it is a city of seven million, where travelers are invited to eat the same foods and walk the same roads as its inhabitants. In short, Taipei is human—just like its rain, not to be known, but to be lived alongside of.\n\n",
  id: 5
});
index.addDoc({
  title: "Was the Automotive Era a Terrible Mistake?",
  author: null,
  layout: "article",
  content: "\nI’ve never really wanted to own a car—it has always seemed to be quite the hassle, whether driving or parking, maintenance and insurance, or being both responsible for and at the whims of those around you. I probably could have saved dozens of hours of my life if I had a car back when I was in California; hopefully I’ve made up for it by the number of interesting and insightful (and inconsequential to anything save the sating of my curiousity) articles I’ve read in all those rideshares and Caltrain journeys. There is a freedom, though, in being able to drive. To be able to be somewhere on your own terms, at, more or less, your own time, to be able to go further than you would have on your own legs; to be alone on the road at night, within a kingdom that stretches as far as you can go, and safe from the elements, from the wild and the unknown. That’s why biking to me feels like a break from what we are conditioned to desire: personal liberty, efficiency, control. It’s even sweeter, of course, when you are faster on two wheels than someone on four.\n\nThe question itself is never answered outright, but I suppose solutions are more important than answers.\n\n",
  id: 6
});
index.addDoc({
  title: "Offshore",
  author: null,
  layout: "poem",
  content: "\n\n  Endless is—2.9 miles\n  the distance from the eye to the horizon\n  \n    and all the sights one will ever see\n  \n  Endless is—a year, or three, or seven\n  the duration between decisions\n  \n    and a lifetime of mistakes yet made\n  \n  Endless, too, is yesterday, or tomorrow\n  the time of memories, the time of possibilities\n  \n    and the moments that are not today\n  \n  And endless, endless is offshore\n  the place beyond the oceans\n  where storms rage and suns shine\n  where the world lies, and where stories are untold\n\n\n",
  id: 7
});
index.addDoc({
  title: "Brighton",
  author: null,
  layout: "post",
  content: "\nIt just occurred to me that I’ve never been to a beach with such a late sunset. It’s a shame, isn’t it? For the days to be long, in a place where there are no sands to sink your feet into. Yet to say so is a bit facetious; I am told there are some nice beaches somewhere in this country. Perhaps the shame is that such places are always further, rather than closer.\nOn that note, I’ve heard people complain about this place. The beach is pebbly, the waters cold and murky, thoughts of the like. I wonder, what is it that informs our notion of the beauty of a place like this? Is it but a form that we have innate knowledge of? Are there colours we desire, ones that we would travel miles and days for? Or do we seek nothing but extremes, from the rugged solitude of cliffs beyond reach to an unimpeachable sense of do-nothingness invoked by warm summer haze and sands formed by the near-eternal coming and going of the tides? Is there beauty in the middling? Or—can there be beauty in the middling? If only your heart did not betray your answer.\n\nI. There’s a couple making out on this beach. I wonder if it’s not uncomfortable; I suppose that is why they are fully clothed.\nII. Two people are playing fetch here with their dogs. The catch is, well, the dogs never catch the thrown object—a pebble—and the object is never returned. Is it still a game of fetch if nothing is ever retrieved? I wonder too what the dogs think, but I imagine that they’d rather run than find.\nIII. Speaking of long summer days, would a beach at a place with endless summer days be enjoyable? Do we seek out beginnings and endings? Or is it more so that there is beauty at such an hour?\n\n",
  id: 8
});
index.addDoc({
  title: "Hours, give or take",
  author: null,
  layout: "poem",
  content: "\n4AM, and your eyes open, with the lucidity of one who has regained sight after a decade in darkness, to the muted room you fell asleep in some inadequate number of hours ago. The city is in a silver silence, save for the wind blowing over slicked asphalt roads and a heartbeat you named your own. You see, in visions of fireworks, as the one who moulded this diorama, and you command the multitudes, captivated by the shackles of slumber you have cast off. Here in the quiet you lord over all thoughts, all desires, and you expel them, leaving only a canvas of white that shall fade into colours as the day rises; still, you layer the primer and the paint, over and over, wordless, awake.\n\nSometime in the early afternoon, you sleep with a carnal ferocity, with a lust after the contours of those five minute dreams, vivid and ephemeral and gone before you can forget them, those dreams that you wished to have lasted longer and by which you come to despise the second, and third, and fourth notes of the song you had repeatedly and naïvely hoped would bring you gentle into the waking world, but instead plunge you deeper into irrational depths and immobile ecstasies of new moments thought to be old and old moments thought to be new and a numbing disorientation/disorienting numbness oppressive and vague and blue/green and calling you to believe in the reality of it all—or nothing at all.\n\nYou’ve just made it to your desk, but have somehow spent all the effort required in a day of work just to put down your backpack, with no results (or even attempts) to show for it. So you head for the espresso machine, pull two shots, pretend like you are capable of latte art, and stare into an amateur Rorschach test haphazardly administered and invoking nothing but anger and a dull and ambiguous gastric discomfort telling you you’ve had both too much and too little. It heeds you to find answers; you walk back to your spot and sit down, sipping away at the asymmetries, and put each thing in front of you into its place. And then you get up, to go make your second cup of coffee.\n\nIt’s a bit past midnight, and your consciousness wavers somewhere between ‘pretty awake’ and ‘could go to bed in an hour or so’. You are assaulted by everything and nothing indiscriminately: Tlön and labyrinths, Kafka and Proteus, the ticking of the clock you thought you took the battery out of and the rising sun six thousand miles away. In some perverse, masochistic manner, I suppose you enjoy it, when the hours come and go, wild and effortless. It’s sacrilegious, a sin, you tell me, that the minutes are unaccounted for, but you are glad to be free, because there is nothing that makes you feel more alive, and that you enjoy journey and destination equally. I nod. It’s 4AM again.\n\n",
  id: 9
});
index.addDoc({
  title: "A photo booth of four days",
  author: null,
  layout: "poem",
  content: "\n\n  It’s a new season, but I’ve been gone for as many weeks,\n  in as many months, as years since the last. A coincidence, to be sure\n  (though I did fudge the numbers a little). They say it’s inauspicious—\n  I suppose they too have never seen the stone among stones,\n  and so heard the wrong tones, unfurled the wrong tongues.\n  Such are the languages we speak: interchangeable, wrong, sufficient;\n  still yet I listen, proud, indifferent, as though I may understand.\n\n\n",
  id: 10
});
index.addDoc({
  title: "SNAKISMS",
  author: null,
  layout: "article",
  content: "\nOkay, it’s not an article. Whatever.\n\nThe word ‘snakisms’ looks like it should be the anagram of something.\n\n",
  id: 11
});
console.log( jQuery.type(index) );

// Builds reference data (maybe not necessary for us, to check)
var store = [{
  "title": "節日",
  "author": null,
  "layout": "poem",
  "link": "/a-contemporary-celebration/",
}
,{
  "title": "September Scotland",
  "author": null,
  "layout": "post",
  "link": "/september-scotland/",
}
,{
  "title": "Nice, Monaco, Corsica",
  "author": null,
  "layout": "post",
  "link": "/nice-monaco-corsica/",
}
,{
  "title": "A to Z",
  "author": null,
  "layout": "poem",
  "link": "/a-to-z/",
}
,{
  "title": "New Yorker on Hacker News",
  "author": null,
  "layout": "article",
  "link": "/new-yorker-on-hacker-news/",
}
,{
  "title": "Taipei, a City of Rain",
  "author": null,
  "layout": "post",
  "link": "/taipei-city-of-rain/",
}
,{
  "title": "Was the Automotive Era a Terrible Mistake?",
  "author": null,
  "layout": "article",
  "link": "/automotive-era-terrible-mistake/",
}
,{
  "title": "Offshore",
  "author": null,
  "layout": "poem",
  "link": "/offshore/",
}
,{
  "title": "Brighton",
  "author": null,
  "layout": "post",
  "link": "/brighton/",
}
,{
  "title": "Hours, give or take",
  "author": null,
  "layout": "poem",
  "link": "/hours-give-or-take/",
}
,{
  "title": "A photo booth of four days",
  "author": null,
  "layout": "poem",
  "link": "/photo-booth-of-four-days/",
}
,{
  "title": "SNAKISMS",
  "author": null,
  "layout": "article",
  "link": "/snakisms/",
}
]

// Query
var qd = {}; // Gets values from the URL
location.search.substr(1).split("&").forEach(function(item) {
    var s = item.split("="),
        k = s[0],
        v = s[1] && decodeURIComponent(s[1]);
    (k in qd) ? qd[k].push(v) : qd[k] = [v]
});

function doSearch() {
  var resultdiv = $('#results');
  var query = $('input#search').val();

  // The search is then launched on the index built with Lunr
  var result = index.search(query);
  resultdiv.empty();
  if (result.length == 0) {
    resultdiv.append('<p class="">No results found.</p>');
  } else if (result.length == 1) {
    resultdiv.append('<p class="">Found '+result.length+' result</p>');
  } else {
    resultdiv.append('<p class="">Found '+result.length+' results</p>');
  }
  // Loop through, match, and add results
  for (var item in result) {
    var ref = result[item].ref;
    var searchitem = '<div class="result"><p><a href="'+store[ref].link+'?q='+query+'">'+store[ref].title+'</a></p></div>';
    resultdiv.append(searchitem);
  }
}

$(document).ready(function() {
  if (qd.q) {
    $('input#search').val(qd.q[0]);
    doSearch();
  }
  $('input#search').on('keyup', doSearch);
});
