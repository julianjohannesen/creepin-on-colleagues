
## PROBLEM: Show topic summary with number of courses completed in that topic
## QUESTIONS: 
1. How do I know which topics to show?
2. How do I get the total number of courses completed in that topic?

## Background
Each badge has a list of courses that were completed in order to earn the badge. But the courses only show title and url. I want topic and difficulty, and anything else I can scrounge up. 

Given the course title, I should be able to cross reference that with a complete list of courses that I created in json format. (That process took forever, but was a really good exercise in using regex!)

I'd like to do all of that work on the server side and include it in the profile data.

One problem is that I do my deduping and initial sorting on the client side. Maybe I need to move that to the server side and do that first, before cross referencing with my json and sending everything to the client.

That would mean creating a new processing middleware between getting my profile data and rendering the profile view.



