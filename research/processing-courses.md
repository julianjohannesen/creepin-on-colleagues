
## PROBLEM: Courses appear multiple times
## QUESTIONS: 
1. Why doesn't the deduping algo catch these courses?

## Background
Each badge has a list of courses that were completed in order to earn the badge. The courses appear in order of course, then course part. For example, the badges for "Sorting Algorithms" and "Searching Names" have these courses associated with them:
- Algorithms: Sorting and Searching
- Sorting Algorithms
- Algorithms: Sorting and Searching
- Searching Names

Every course has a url. Some of the urls are two or more subdomains deep, e.g. course/course-part

I want to group courses with their 