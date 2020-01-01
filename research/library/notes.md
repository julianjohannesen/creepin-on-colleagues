# Problem: How do I get my workshop object over to where I can use it without just copying and pasting it? Like, can I use node to request the page and then process it like any other page and export the result to use elsewhere?

# This was all awesome.
li.id - The unique ID of the item
li a.href - the item's URL in the Treehouse library
li a div span.textContent - The item's estimated completion time
li a strong.className - The item type, e.g. course, practice, workshop
li a h3.textContent - The item title
li a p.textContent - The item description
li ul li(class="topic-whatever topic topic") a span.textContent - The item's topic
li ul li(class="difficulty") span.textContent - Item's difficulty level 

<li
    class="card workshop topic-design"
    data-location="library"
    data-activity="workshop/3685"
    id="Workshop-3685"
>
    <a class="card-box" href="/library/before-and-after-typography">
        <div class="card-progress">
            <span class="card-estimate add-topic-background-color">6 min</span>
        </div>
        <strong class="card-type">Practice</strong>
        <h3 class="card-title">Before and After: Typography</h3>
        <p class="card-description">Improve the typography on an existing design.</p>
        <div class="card-status">
            <span class="card-status-title">Viewed</span>
        </div>
    </a>
    <ul class="card-tags tags">
        <li class="topic-design topic topic">
            <a data-filter-list-val="topic:design" href="/library/topic:design"
                ><span>Design</span></a
            >
        </li>
        <li class="difficulty"><span>Beginner</span></li>
        <li class="truncated-tags">
            <span></span>
            <ul></ul>
        </li>
    </ul>
</li>
