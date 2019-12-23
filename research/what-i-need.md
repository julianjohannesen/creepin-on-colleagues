# What to scrape

## From the Library Page, Search All Whatever

https://teamtreehouse.com/library/type:course
https://teamtreehouse.com/library/type:workshop
https://teamtreehouse.com/library/type:practice
https://teamtreehouse.com/library/type:bonus

By default everything is in order from newest to oldest.

Here's the card html for the cards on those pages:

```html
<li class="card course syllabus topic-front-end" data-location="library" data-activity="syllabus/4846" id="Syllabus-4846">

  <a class="card-box" href="/library/using-sql-orms-with-nodejs">
    <div class="card-progress">
        <svg class="course-icon card-icon" preserveAspectRatio="xMinYMin meet" viewBox="0 0 18 18"><use xlink:href="/assets/icons-9bdb8530f3f097b4a47774ce4686c3b94b482eb486b20b5cbf252e7b0cb5860b.svg#course-icon"></use></svg>
        <!-- CARD STAGES = COURSE STAGES -->
      <ul class="card-stages">
          <li>1</li>
          <li>2</li>
          <li>3</li>
      </ul>
        <!-- CARD ESTIMATE = COURSE TIME -->
      <span class="card-estimate">100 min</span>
    </div>
    <!-- CARD TYPE = COURSE TYPE -->
    <strong class="card-type">Course</strong>
    <!-- CARD TITLE = COURSE TITLE -->
    <h3 class="card-title">Using SQL ORMs with Node.js</h3>
    <!-- CARD DESCRIPTION = COURSE DESCRIPTION -->
    <p class="card-description">
      In this course, you'll learn how to use the Sequelize ORM to leverage the power of SQL within your Node.js applications.
    </p>


      <div class="card-status">
        <svg class="complete-icon card-status-icon" preserveAspectRatio="xMinYMin meet" viewBox="140 0 140 120"><use xlink:href="/assets/icons-9bdb8530f3f097b4a47774ce4686c3b94b482eb486b20b5cbf252e7b0cb5860b.svg#complete-icon"></use></svg>
        <span class="card-status-title"></span>
      </div>
</a>
<!-- TOPICS AND DIFFICULTY -->
  <ul class="card-tags tags">
    <li class="topic-front-end topic topic">
        <a data-filter-list-val="topic:javascript" href="/library/topic:javascript">
            <span>JavaScript</span>
        </a>
    </li>
    <li class="difficulty"><span>Intermediate</span></li>
    <li class="truncated-tags"><span></span><ul></ul></li>
  </ul>
</li>
```

I can use that to get:

- CARD STAGES = COURSE STAGES
- CARD ESTIMATE = COURSE TIME
- CARD TYPE = COURSE TYPE
- CARD TITLE = COURSE TITLE
- CARD DESCRIPTION = COURSE DESCRIPTION
- TAGS FOR TOPICS AND DIFFICULTY

See the course page example.

## How do you do this?

1. Request the page
2. Once you have the html, turn it into an object
3. Grab all the stuff I want

