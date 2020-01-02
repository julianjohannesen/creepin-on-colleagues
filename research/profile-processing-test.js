const { courses } = require("./courses.json")

const profile = {
    name: 'Julian Johannesen',
    profile_name: 'julianj',
    profile_url: 'https://teamtreehouse.com/julianj',
    gravatar_url:
        'https://secure.gravatar.com/avatar/fec387db7a26ce1ca2c853b030c93a2f?s=400\u0026d=https%3A%2F%2Fstatic.teamtreehouse.com%2Fassets%2Fcontent%2Fdefault_avatar-ea7cf6abde4eec089a4e03cc925d0e893e428b2b6971b12405a9b118c837eaa2.png\u0026r=pg',
    gravatar_hash: 'fec387db7a26ce1ca2c853b030c93a2f',
    badges: [
        {
            id: 49,
            name: 'Newbie',
            url: 'https://teamtreehouse.com/julianj',
            icon_url: 'https://achievement-images.teamtreehouse.com/Generic_Newbie.png',
            earned_date: '2019-09-05T14:25:20.000Z',
            courses: [],
        },
        {
            id: 16772,
            name: 'Sorting Algorithms',
            url:
                'https://teamtreehouse.com/library/algorithms-sorting-and-searching/sorting-algorithms',
            icon_url: 'https://achievement-images.teamtreehouse.com/badges_addressbook_Stage3.png',
            earned_date: '2019-09-05T14:30:03.000Z',
            courses: [
                {
                    title: 'Algorithms: Sorting and Searching',
                    url: 'https://teamtreehouse.com/library/algorithms-sorting-and-searching',
                    badge_count: 1,
                },
                {
                    title: 'Sorting Algorithms',
                    url:
                        'https://teamtreehouse.com/library/algorithms-sorting-and-searching/sorting-algorithms',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 16782,
            name: 'Searching Names',
            url:
                'https://teamtreehouse.com/library/algorithms-sorting-and-searching/searching-names',
            icon_url: 'https://achievement-images.teamtreehouse.com/badges_addressbook_Stage2.png',
            earned_date: '2019-09-05T14:30:03.000Z',
            courses: [
                {
                    title: 'Algorithms: Sorting and Searching',
                    url: 'https://teamtreehouse.com/library/algorithms-sorting-and-searching',
                    badge_count: 1,
                },
                {
                    title: 'Searching Names',
                    url:
                        'https://teamtreehouse.com/library/algorithms-sorting-and-searching/searching-names',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 12872,
            name: 'Introducing JavaScript',
            url: 'https://teamtreehouse.com/library/introducing-javascript/lets-make-a-game',
            icon_url:
                'https://achievement-images.teamtreehouse.com/stage1-introducing-javascript.png',
            earned_date: '2019-09-05T16:57:46.000Z',
            courses: [
                {
                    title: 'Introducing JavaScript',
                    url: 'https://teamtreehouse.com/library/introducing-javascript',
                    badge_count: 1,
                },
                {
                    title: "Let's Make a Game",
                    url:
                        'https://teamtreehouse.com/library/introducing-javascript/lets-make-a-game',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 14002,
            name: 'Finishing the Game',
            url: 'https://teamtreehouse.com/library/introducing-javascript/finishing-the-game',
            icon_url: 'https://achievement-images.teamtreehouse.com/stage2-introducing-js.png',
            earned_date: '2019-09-05T17:11:14.000Z',
            courses: [
                {
                    title: 'Introducing JavaScript',
                    url: 'https://teamtreehouse.com/library/introducing-javascript',
                    badge_count: 1,
                },
                {
                    title: 'Finishing the Game',
                    url:
                        'https://teamtreehouse.com/library/introducing-javascript/finishing-the-game',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 8692,
            name: 'Getting Familiar with HTML and CSS ',
            url:
                'https://teamtreehouse.com/library/introduction-to-html-and-css/-getting-familiar-with-html-and-css',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_intro_to_html_css_stage-01.png',
            earned_date: '2019-09-05T20:14:46.000Z',
            courses: [
                {
                    title: 'Introduction to HTML and CSS',
                    url: 'https://teamtreehouse.com/library/introduction-to-html-and-css',
                    badge_count: 1,
                },
                {
                    title: ' Getting Familiar with HTML and CSS ',
                    url:
                        'https://teamtreehouse.com/library/introduction-to-html-and-css/-getting-familiar-with-html-and-css',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 8702,
            name: 'HTML: The Structural Foundation of Web Pages and Applications',
            url:
                'https://teamtreehouse.com/library/introduction-to-html-and-css/html-the-structural-foundation-of-web-pages-and-applications',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_intro_to_html_css_stage-02.png',
            earned_date: '2019-09-05T20:25:16.000Z',
            courses: [
                {
                    title: 'Introduction to HTML and CSS',
                    url: 'https://teamtreehouse.com/library/introduction-to-html-and-css',
                    badge_count: 1,
                },
                {
                    title: 'HTML: The Structural Foundation of Web Pages and Applications',
                    url:
                        'https://teamtreehouse.com/library/introduction-to-html-and-css/html-the-structural-foundation-of-web-pages-and-applications',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 8712,
            name: 'Make It Beautiful with CSS',
            url:
                'https://teamtreehouse.com/library/introduction-to-html-and-css/make-it-beautiful-with-css',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_intro_to_html_css_stage-03.png',
            earned_date: '2019-09-05T20:31:11.000Z',
            courses: [
                {
                    title: 'Introduction to HTML and CSS',
                    url: 'https://teamtreehouse.com/library/introduction-to-html-and-css',
                    badge_count: 1,
                },
                {
                    title: 'Make It Beautiful With CSS',
                    url:
                        'https://teamtreehouse.com/library/introduction-to-html-and-css/make-it-beautiful-with-css',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 8722,
            name: 'Adding a New Web Page ',
            url:
                'https://teamtreehouse.com/library/introduction-to-html-and-css/adding-a-new-web-page',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_intro_to_html_css_stage-04.png',
            earned_date: '2019-09-05T20:37:09.000Z',
            courses: [
                {
                    title: 'Introduction to HTML and CSS',
                    url: 'https://teamtreehouse.com/library/introduction-to-html-and-css',
                    badge_count: 1,
                },
                {
                    title: 'Adding a New Web Page ',
                    url:
                        'https://teamtreehouse.com/library/introduction-to-html-and-css/adding-a-new-web-page',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 2122,
            name: 'Introducing JavaScript',
            url: 'https://teamtreehouse.com/library/javascript-basics/introducing-javascript',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage1.png',
            earned_date: '2019-09-06T15:50:35.000Z',
            courses: [
                {
                    title: 'JavaScript Basics',
                    url: 'https://teamtreehouse.com/library/javascript-basics',
                    badge_count: 1,
                },
                {
                    title: 'Introducing JavaScript',
                    url:
                        'https://teamtreehouse.com/library/javascript-basics/introducing-javascript',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 2132,
            name: 'JavaScript Variables',
            url:
                'https://teamtreehouse.com/library/javascript-basics/storing-and-tracking-information-with-variables',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage2.png',
            earned_date: '2019-09-06T16:11:49.000Z',
            courses: [
                {
                    title: 'JavaScript Basics',
                    url: 'https://teamtreehouse.com/library/javascript-basics',
                    badge_count: 1,
                },
                {
                    title: 'Storing and Tracking Information with Variables',
                    url:
                        'https://teamtreehouse.com/library/javascript-basics/storing-and-tracking-information-with-variables',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 3182,
            name: 'JavaScript Numbers',
            url: 'https://teamtreehouse.com/library/javascript-basics/working-with-numbers',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage0-34.png',
            earned_date: '2019-09-06T16:57:09.000Z',
            courses: [
                {
                    title: 'JavaScript Basics',
                    url: 'https://teamtreehouse.com/library/javascript-basics',
                    badge_count: 1,
                },
                {
                    title: 'Working With Numbers',
                    url: 'https://teamtreehouse.com/library/javascript-basics/working-with-numbers',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 2142,
            name: 'JavaScript Conditional Statements',
            url:
                'https://teamtreehouse.com/library/javascript-basics/making-decisions-with-conditional-statements',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage3.png',
            earned_date: '2019-09-06T17:25:50.000Z',
            courses: [
                {
                    title: 'JavaScript Basics',
                    url: 'https://teamtreehouse.com/library/javascript-basics',
                    badge_count: 1,
                },
                {
                    title: 'Making Decisions with Conditional Statements',
                    url:
                        'https://teamtreehouse.com/library/javascript-basics/making-decisions-with-conditional-statements',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 2152,
            name: 'JavaScript Functions',
            url:
                'https://teamtreehouse.com/library/javascript-basics/creating-reusable-code-with-functions',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage4B.png',
            earned_date: '2019-09-06T17:47:22.000Z',
            courses: [
                {
                    title: 'JavaScript Basics',
                    url: 'https://teamtreehouse.com/library/javascript-basics',
                    badge_count: 1,
                },
                {
                    title: 'Creating Reusable Code with Functions',
                    url:
                        'https://teamtreehouse.com/library/javascript-basics/creating-reusable-code-with-functions',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 2222,
            name: 'JavaScript Loops',
            url:
                'https://teamtreehouse.com/library/javascript-loops-arrays-and-objects/simplify-repetitive-tasks-with-loops',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage6.png',
            earned_date: '2019-09-07T20:59:38.000Z',
            courses: [
                {
                    title: 'JavaScript Loops, Arrays and Objects',
                    url: 'https://teamtreehouse.com/library/javascript-loops-arrays-and-objects',
                    badge_count: 1,
                },
                {
                    title: 'Simplify Repetitive Tasks with Loops',
                    url:
                        'https://teamtreehouse.com/library/javascript-loops-arrays-and-objects/simplify-repetitive-tasks-with-loops',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 2162,
            name: 'JavaScript Arrays',
            url:
                'https://teamtreehouse.com/library/javascript-loops-arrays-and-objects/tracking-multiple-items-with-arrays',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage5.png',
            earned_date: '2019-09-10T14:14:08.000Z',
            courses: [
                {
                    title: 'JavaScript Loops, Arrays and Objects',
                    url: 'https://teamtreehouse.com/library/javascript-loops-arrays-and-objects',
                    badge_count: 1,
                },
                {
                    title: 'Tracking Multiple Items with Arrays ',
                    url:
                        'https://teamtreehouse.com/library/javascript-loops-arrays-and-objects/tracking-multiple-items-with-arrays',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 4602,
            name: 'JavaScript Objects',
            url:
                'https://teamtreehouse.com/library/javascript-loops-arrays-and-objects/tracking-data-using-objects',
            icon_url: 'https://achievement-images.teamtreehouse.com/javascript-loops-stage3.png',
            earned_date: '2019-09-10T15:14:19.000Z',
            courses: [
                {
                    title: 'JavaScript Loops, Arrays and Objects',
                    url: 'https://teamtreehouse.com/library/javascript-loops-arrays-and-objects',
                    badge_count: 1,
                },
                {
                    title: 'Tracking Data Using Objects',
                    url:
                        'https://teamtreehouse.com/library/javascript-loops-arrays-and-objects/tracking-data-using-objects',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 5492,
            name: 'Planning for Performance',
            url:
                'https://teamtreehouse.com/library/introduction-to-front-end-performance-optimization/planning-for-performance',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges-devtools-performance-stage1.png',
            earned_date: '2019-09-30T21:53:25.000Z',
            courses: [
                {
                    title: 'Introduction to Front End Performance Optimization',
                    url:
                        'https://teamtreehouse.com/library/introduction-to-front-end-performance-optimization',
                    badge_count: 1,
                },
                {
                    title: 'Planning for Performance',
                    url:
                        'https://teamtreehouse.com/library/introduction-to-front-end-performance-optimization/planning-for-performance',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 5502,
            name: 'Measuring Performance',
            url:
                'https://teamtreehouse.com/library/introduction-to-front-end-performance-optimization/measuring-performance',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges-devtools-performance-stage2.png',
            earned_date: '2019-09-30T21:53:25.000Z',
            courses: [
                {
                    title: 'Introduction to Front End Performance Optimization',
                    url:
                        'https://teamtreehouse.com/library/introduction-to-front-end-performance-optimization',
                    badge_count: 1,
                },
                {
                    title: 'Measuring Performance',
                    url:
                        'https://teamtreehouse.com/library/introduction-to-front-end-performance-optimization/measuring-performance',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 5512,
            name: 'Optimize Assets',
            url:
                'https://teamtreehouse.com/library/introduction-to-front-end-performance-optimization/optimize-assets',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges-devtools-performance-stage3.png',
            earned_date: '2019-09-30T21:53:25.000Z',
            courses: [
                {
                    title: 'Introduction to Front End Performance Optimization',
                    url:
                        'https://teamtreehouse.com/library/introduction-to-front-end-performance-optimization',
                    badge_count: 1,
                },
                {
                    title: 'Optimize Assets',
                    url:
                        'https://teamtreehouse.com/library/introduction-to-front-end-performance-optimization/optimize-assets',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 5522,
            name: 'Combine and Minify Assets',
            url:
                'https://teamtreehouse.com/library/introduction-to-front-end-performance-optimization/combine-and-minify-assets',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges-devtools-performance-stage4.png',
            earned_date: '2019-09-30T21:53:25.000Z',
            courses: [
                {
                    title: 'Introduction to Front End Performance Optimization',
                    url:
                        'https://teamtreehouse.com/library/introduction-to-front-end-performance-optimization',
                    badge_count: 1,
                },
                {
                    title: 'Combine and Minify Assets',
                    url:
                        'https://teamtreehouse.com/library/introduction-to-front-end-performance-optimization/combine-and-minify-assets',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 4282,
            name: 'Getting Started with CSS',
            url: 'https://teamtreehouse.com/library/css-basics/getting-started-with-css',
            icon_url: 'https://achievement-images.teamtreehouse.com/badges_css_basics_stage1.png',
            earned_date: '2019-10-01T02:47:41.000Z',
            courses: [
                {
                    title: 'CSS Basics',
                    url: 'https://teamtreehouse.com/library/css-basics',
                    badge_count: 1,
                },
                {
                    title: 'Getting Started with CSS',
                    url: 'https://teamtreehouse.com/library/css-basics/getting-started-with-css',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 4292,
            name: 'Basic Selectors',
            url: 'https://teamtreehouse.com/library/css-basics/basic-selectors',
            icon_url: 'https://achievement-images.teamtreehouse.com/badges_css_basics_stage2.png',
            earned_date: '2019-10-01T02:47:41.000Z',
            courses: [
                {
                    title: 'CSS Basics',
                    url: 'https://teamtreehouse.com/library/css-basics',
                    badge_count: 1,
                },
                {
                    title: 'Basic Selectors',
                    url: 'https://teamtreehouse.com/library/css-basics/basic-selectors',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 4302,
            name: 'Understanding Values and Units',
            url: 'https://teamtreehouse.com/library/css-basics/understanding-values-and-units',
            icon_url: 'https://achievement-images.teamtreehouse.com/badges_css_basics_stage3.png',
            earned_date: '2019-10-01T02:47:41.000Z',
            courses: [
                {
                    title: 'CSS Basics',
                    url: 'https://teamtreehouse.com/library/css-basics',
                    badge_count: 1,
                },
                {
                    title: 'Understanding Values and Units',
                    url:
                        'https://teamtreehouse.com/library/css-basics/understanding-values-and-units',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 4452,
            name: 'The Box Model',
            url: 'https://teamtreehouse.com/library/css-basics/the-box-model',
            icon_url: 'https://achievement-images.teamtreehouse.com/badges_css_basics_stage4.png',
            earned_date: '2019-10-01T02:47:41.000Z',
            courses: [
                {
                    title: 'CSS Basics',
                    url: 'https://teamtreehouse.com/library/css-basics',
                    badge_count: 1,
                },
                {
                    title: 'The Box Model',
                    url: 'https://teamtreehouse.com/library/css-basics/the-box-model',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 4312,
            name: 'Basic Layout',
            url: 'https://teamtreehouse.com/library/css-basics/basic-layout',
            icon_url: 'https://achievement-images.teamtreehouse.com/badges_css_basics_stage5.png',
            earned_date: '2019-10-01T02:47:41.000Z',
            courses: [
                {
                    title: 'CSS Basics',
                    url: 'https://teamtreehouse.com/library/css-basics',
                    badge_count: 1,
                },
                {
                    title: 'Basic Layout',
                    url: 'https://teamtreehouse.com/library/css-basics/basic-layout',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 4332,
            name: 'Designing with the Latest Features',
            url: 'https://teamtreehouse.com/library/css-basics/enhancing-the-design-with-css',
            icon_url: 'https://achievement-images.teamtreehouse.com/badges_css_basics_stage6.png',
            earned_date: '2019-10-01T02:47:41.000Z',
            courses: [
                {
                    title: 'CSS Basics',
                    url: 'https://teamtreehouse.com/library/css-basics',
                    badge_count: 1,
                },
                {
                    title: 'Enhancing the Design With CSS',
                    url:
                        'https://teamtreehouse.com/library/css-basics/enhancing-the-design-with-css',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 4322,
            name: 'Fundamental Concepts',
            url: 'https://teamtreehouse.com/library/css-basics/fundamental-concepts',
            icon_url: 'https://achievement-images.teamtreehouse.com/badges_css_basics_stage7.png',
            earned_date: '2019-10-01T02:47:42.000Z',
            courses: [
                {
                    title: 'CSS Basics',
                    url: 'https://teamtreehouse.com/library/css-basics',
                    badge_count: 1,
                },
                {
                    title: 'Fundamental Concepts',
                    url: 'https://teamtreehouse.com/library/css-basics/fundamental-concepts',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 408,
            name: 'Chrome DevTools Basics',
            url: 'https://teamtreehouse.com/library/website-optimization/chrome-devtools-basics',
            icon_url: 'https://achievement-images.teamtreehouse.com/badges_chromeDev_Stage1.png',
            earned_date: '2019-10-01T02:53:22.000Z',
            courses: [
                {
                    title: 'Website Optimization',
                    url: 'https://teamtreehouse.com/library/website-optimization',
                    badge_count: 1,
                },
                {
                    title: 'Chrome DevTools Basics',
                    url:
                        'https://teamtreehouse.com/library/website-optimization/chrome-devtools-basics',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 7402,
            name: 'Getting Started with CSS Layout',
            url:
                'https://teamtreehouse.com/library/css-layout-basics/getting-started-with-css-layout',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_css_layout_basics_stage1.png',
            earned_date: '2019-10-01T03:00:25.000Z',
            courses: [
                {
                    title: 'CSS Layout Basics',
                    url: 'https://teamtreehouse.com/library/css-layout-basics',
                    badge_count: 1,
                },
                {
                    title: 'Getting Started with CSS Layout',
                    url:
                        'https://teamtreehouse.com/library/css-layout-basics/getting-started-with-css-layout',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 7602,
            name: 'Controlling Layout with CSS Display Modes',
            url:
                'https://teamtreehouse.com/library/css-layout-basics/controlling-layout-with-css-display-modes',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_css_layout_basics_stage2.png',
            earned_date: '2019-10-01T03:00:25.000Z',
            courses: [
                {
                    title: 'CSS Layout Basics',
                    url: 'https://teamtreehouse.com/library/css-layout-basics',
                    badge_count: 1,
                },
                {
                    title: 'Controlling Layout with CSS Display Modes',
                    url:
                        'https://teamtreehouse.com/library/css-layout-basics/controlling-layout-with-css-display-modes',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 7612,
            name: 'Page Layout with the Float Property',
            url:
                'https://teamtreehouse.com/library/css-layout-basics/page-layout-with-the-float-property',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_css_layout_basics_stage3.png',
            earned_date: '2019-10-01T03:00:25.000Z',
            courses: [
                {
                    title: 'CSS Layout Basics',
                    url: 'https://teamtreehouse.com/library/css-layout-basics',
                    badge_count: 1,
                },
                {
                    title: 'Page Layout with the Float Property',
                    url:
                        'https://teamtreehouse.com/library/css-layout-basics/page-layout-with-the-float-property',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 7922,
            name: 'CSS Layout Project',
            url: 'https://teamtreehouse.com/library/css-layout-basics/css-layout-project',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_css_layout_basics_stage4.png',
            earned_date: '2019-10-01T03:00:25.000Z',
            courses: [
                {
                    title: 'CSS Layout Basics',
                    url: 'https://teamtreehouse.com/library/css-layout-basics',
                    badge_count: 1,
                },
                {
                    title: 'CSS Layout Project',
                    url: 'https://teamtreehouse.com/library/css-layout-basics/css-layout-project',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 7622,
            name: 'Positioning Page Content',
            url: 'https://teamtreehouse.com/library/css-layout-basics/positioning-page-content',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_css_layout_basics_stage5.png',
            earned_date: '2019-10-01T03:00:25.000Z',
            courses: [
                {
                    title: 'CSS Layout Basics',
                    url: 'https://teamtreehouse.com/library/css-layout-basics',
                    badge_count: 1,
                },
                {
                    title: 'Positioning Page Content',
                    url:
                        'https://teamtreehouse.com/library/css-layout-basics/positioning-page-content',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 5822,
            name: 'Responsive Theory',
            url: 'https://teamtreehouse.com/library/responsive-layouts/responsive-theory',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges-CSS-ResponsiveLayouts-stage1.png',
            earned_date: '2019-10-01T03:04:19.000Z',
            courses: [
                {
                    title: 'Responsive Layouts',
                    url: 'https://teamtreehouse.com/library/responsive-layouts',
                    badge_count: 1,
                },
                {
                    title: 'Responsive Theory',
                    url: 'https://teamtreehouse.com/library/responsive-layouts/responsive-theory',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 5832,
            name: 'Media Queries',
            url: 'https://teamtreehouse.com/library/responsive-layouts/media-queries',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges-CSS-ResponsiveLayouts-stage2.png',
            earned_date: '2019-10-01T03:04:19.000Z',
            courses: [
                {
                    title: 'Responsive Layouts',
                    url: 'https://teamtreehouse.com/library/responsive-layouts',
                    badge_count: 1,
                },
                {
                    title: 'Media Queries',
                    url: 'https://teamtreehouse.com/library/responsive-layouts/media-queries',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 5842,
            name: 'Responsive Patterns',
            url: 'https://teamtreehouse.com/library/responsive-layouts/responsive-patterns',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges-CSS-ResponsiveLayouts-stage3.png',
            earned_date: '2019-10-01T03:04:19.000Z',
            courses: [
                {
                    title: 'Responsive Layouts',
                    url: 'https://teamtreehouse.com/library/responsive-layouts',
                    badge_count: 1,
                },
                {
                    title: 'Responsive Patterns',
                    url: 'https://teamtreehouse.com/library/responsive-layouts/responsive-patterns',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 7942,
            name: 'Understanding Flexbox',
            url: 'https://teamtreehouse.com/library/css-flexbox-layout/understanding-flexbox',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_css_flexbox_layout_stage1.png',
            earned_date: '2019-10-01T03:09:17.000Z',
            courses: [
                {
                    title: 'CSS Flexbox Layout',
                    url: 'https://teamtreehouse.com/library/css-flexbox-layout',
                    badge_count: 1,
                },
                {
                    title: 'Understanding Flexbox',
                    url:
                        'https://teamtreehouse.com/library/css-flexbox-layout/understanding-flexbox',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 8012,
            name: 'Flexbox Properties',
            url: 'https://teamtreehouse.com/library/css-flexbox-layout/flexbox-properties',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_css_flexbox_layout_stage2.png',
            earned_date: '2019-10-01T03:09:17.000Z',
            courses: [
                {
                    title: 'CSS Flexbox Layout',
                    url: 'https://teamtreehouse.com/library/css-flexbox-layout',
                    badge_count: 1,
                },
                {
                    title: 'Flexbox Properties',
                    url: 'https://teamtreehouse.com/library/css-flexbox-layout/flexbox-properties',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 7952,
            name: 'Building a Layout with Flexbox',
            url:
                'https://teamtreehouse.com/library/css-flexbox-layout/building-a-layout-with-flexbox',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_css_flexbox_layout_stage3.png',
            earned_date: '2019-10-01T03:09:17.000Z',
            courses: [
                {
                    title: 'CSS Flexbox Layout',
                    url: 'https://teamtreehouse.com/library/css-flexbox-layout',
                    badge_count: 1,
                },
                {
                    title: 'Building a Layout with Flexbox',
                    url:
                        'https://teamtreehouse.com/library/css-flexbox-layout/building-a-layout-with-flexbox',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 4792,
            name: 'Selectors - Beyond the Basics',
            url: 'https://teamtreehouse.com/library/css-selectors/selectors-beyond-the-basics',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_css_selectors_stage01.png',
            earned_date: '2019-10-01T03:19:37.000Z',
            courses: [
                {
                    title: 'CSS Selectors',
                    url: 'https://teamtreehouse.com/library/css-selectors',
                    badge_count: 1,
                },
                {
                    title: 'Selectors - Beyond the Basics',
                    url:
                        'https://teamtreehouse.com/library/css-selectors/selectors-beyond-the-basics',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 4802,
            name: 'Going Further with Attribute Selectors and Pseudo-Classes',
            url:
                'https://teamtreehouse.com/library/css-selectors/going-further-with-attribute-selectors-and-pseudoclasses',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_css_selectors_stage02.png',
            earned_date: '2019-10-01T03:19:37.000Z',
            courses: [
                {
                    title: 'CSS Selectors',
                    url: 'https://teamtreehouse.com/library/css-selectors',
                    badge_count: 1,
                },
                {
                    title: 'Going Further with Attribute Selectors and Pseudo-Classes',
                    url:
                        'https://teamtreehouse.com/library/css-selectors/going-further-with-attribute-selectors-and-pseudoclasses',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 4812,
            name: 'Advanced Selectors',
            url: 'https://teamtreehouse.com/library/css-selectors/advanced-selectors',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_css_selectors_stage03.png',
            earned_date: '2019-10-01T03:19:37.000Z',
            courses: [
                {
                    title: 'CSS Selectors',
                    url: 'https://teamtreehouse.com/library/css-selectors',
                    badge_count: 1,
                },
                {
                    title: 'Advanced Selectors',
                    url: 'https://teamtreehouse.com/library/css-selectors/advanced-selectors',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 14802,
            name: 'Getting to Know Bootstrap 4',
            url:
                'https://teamtreehouse.com/library/bootstrap-4-basics-2/getting-to-know-bootstrap-4',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badge_bootstrap-4-basics_stage01.png',
            earned_date: '2019-10-01T03:25:28.000Z',
            courses: [
                {
                    title: 'Bootstrap 4 Basics',
                    url: 'https://teamtreehouse.com/library/bootstrap-4-basics-2',
                    badge_count: 1,
                },
                {
                    title: 'Getting to Know Bootstrap 4',
                    url:
                        'https://teamtreehouse.com/library/bootstrap-4-basics-2/getting-to-know-bootstrap-4',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 14812,
            name: 'Responsive Layouts With the Bootstrap Grid',
            url:
                'https://teamtreehouse.com/library/bootstrap-4-basics-2/responsive-layouts-with-the-bootstrap-grid',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badge_bootstrap-4-basics_stage02.png',
            earned_date: '2019-10-01T03:25:28.000Z',
            courses: [
                {
                    title: 'Bootstrap 4 Basics',
                    url: 'https://teamtreehouse.com/library/bootstrap-4-basics-2',
                    badge_count: 1,
                },
                {
                    title: 'Responsive Layouts With the Bootstrap Grid',
                    url:
                        'https://teamtreehouse.com/library/bootstrap-4-basics-2/responsive-layouts-with-the-bootstrap-grid',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 14822,
            name: 'Using Bootstrap Components',
            url:
                'https://teamtreehouse.com/library/bootstrap-4-basics-2/using-bootstrap-components',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badge_bootstrap-4-basics_stage03.png',
            earned_date: '2019-10-01T03:25:28.000Z',
            courses: [
                {
                    title: 'Bootstrap 4 Basics',
                    url: 'https://teamtreehouse.com/library/bootstrap-4-basics-2',
                    badge_count: 1,
                },
                {
                    title: 'Using Bootstrap Components',
                    url:
                        'https://teamtreehouse.com/library/bootstrap-4-basics-2/using-bootstrap-components',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 14832,
            name: 'Building Forms With Bootstrap',
            url:
                'https://teamtreehouse.com/library/bootstrap-4-basics-2/building-forms-with-bootstrap',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badge_bootstrap-4-basics_stage04.png',
            earned_date: '2019-10-01T03:25:28.000Z',
            courses: [
                {
                    title: 'Bootstrap 4 Basics',
                    url: 'https://teamtreehouse.com/library/bootstrap-4-basics-2',
                    badge_count: 1,
                },
                {
                    title: 'Building Forms With Bootstrap',
                    url:
                        'https://teamtreehouse.com/library/bootstrap-4-basics-2/building-forms-with-bootstrap',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 3142,
            name: 'Table Basics',
            url: 'https://teamtreehouse.com/library/html-tables/table-basics',
            icon_url: 'https://achievement-images.teamtreehouse.com/badges_html_tables_stage1.png',
            earned_date: '2019-10-01T03:34:34.000Z',
            courses: [
                {
                    title: 'HTML Tables',
                    url: 'https://teamtreehouse.com/library/html-tables',
                    badge_count: 1,
                },
                {
                    title: 'Table Basics',
                    url: 'https://teamtreehouse.com/library/html-tables/table-basics',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 3152,
            name: 'Structuring Tables',
            url: 'https://teamtreehouse.com/library/html-tables/structuring-tables',
            icon_url: 'https://achievement-images.teamtreehouse.com/badges_html_tables_stage2.png',
            earned_date: '2019-10-01T03:34:34.000Z',
            courses: [
                {
                    title: 'HTML Tables',
                    url: 'https://teamtreehouse.com/library/html-tables',
                    badge_count: 1,
                },
                {
                    title: 'Structuring Tables',
                    url: 'https://teamtreehouse.com/library/html-tables/structuring-tables',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 13462,
            name: 'Media Basics',
            url: 'https://teamtreehouse.com/library/html-video-and-audio-2/media-basics',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges-html-video-audio-stage1-2.png',
            earned_date: '2019-10-01T03:37:31.000Z',
            courses: [
                {
                    title: 'HTML Video and Audio',
                    url: 'https://teamtreehouse.com/library/html-video-and-audio-2',
                    badge_count: 1,
                },
                {
                    title: 'Media Basics',
                    url: 'https://teamtreehouse.com/library/html-video-and-audio-2/media-basics',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 13472,
            name: 'Captioning Video',
            url: 'https://teamtreehouse.com/library/html-video-and-audio-2/captioning-video',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges-html-videoaudio-stage2-2.png',
            earned_date: '2019-10-01T03:37:31.000Z',
            courses: [
                {
                    title: 'HTML Video and Audio',
                    url: 'https://teamtreehouse.com/library/html-video-and-audio-2',
                    badge_count: 1,
                },
                {
                    title: 'Captioning Video',
                    url:
                        'https://teamtreehouse.com/library/html-video-and-audio-2/captioning-video',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 11332,
            name: 'The Browser Environment',
            url:
                'https://teamtreehouse.com/library/javascript-and-the-dom-2/the-browser-environment',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_JavaScript_DOM_Stage-41.png',
            earned_date: '2019-10-01T14:25:02.000Z',
            courses: [
                {
                    title: 'JavaScript and the DOM',
                    url: 'https://teamtreehouse.com/library/javascript-and-the-dom-2',
                    badge_count: 1,
                },
                {
                    title: 'The Browser Environment',
                    url:
                        'https://teamtreehouse.com/library/javascript-and-the-dom-2/the-browser-environment',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 11342,
            name: 'Getting a Handle on the DOM',
            url:
                'https://teamtreehouse.com/library/javascript-and-the-dom-2/getting-a-handle-on-the-dom',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_JavaScript_DOM_Stage-42.png',
            earned_date: '2019-10-01T14:25:02.000Z',
            courses: [
                {
                    title: 'JavaScript and the DOM',
                    url: 'https://teamtreehouse.com/library/javascript-and-the-dom-2',
                    badge_count: 1,
                },
                {
                    title: 'Getting a Handle on the DOM',
                    url:
                        'https://teamtreehouse.com/library/javascript-and-the-dom-2/getting-a-handle-on-the-dom',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 11352,
            name: 'Making Changes to the DOM',
            url:
                'https://teamtreehouse.com/library/javascript-and-the-dom-2/making-changes-to-the-dom',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_JavaScript_DOM_Stage-43.png',
            earned_date: '2019-10-01T14:25:02.000Z',
            courses: [
                {
                    title: 'JavaScript and the DOM',
                    url: 'https://teamtreehouse.com/library/javascript-and-the-dom-2',
                    badge_count: 1,
                },
                {
                    title: 'Making Changes to the DOM',
                    url:
                        'https://teamtreehouse.com/library/javascript-and-the-dom-2/making-changes-to-the-dom',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 11362,
            name: 'Responding to User Interaction',
            url:
                'https://teamtreehouse.com/library/javascript-and-the-dom-2/responding-to-user-interaction',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_JavaScript_DOM_Stage-44.png',
            earned_date: '2019-10-01T14:25:02.000Z',
            courses: [
                {
                    title: 'JavaScript and the DOM',
                    url: 'https://teamtreehouse.com/library/javascript-and-the-dom-2',
                    badge_count: 1,
                },
                {
                    title: 'Responding to User Interaction',
                    url:
                        'https://teamtreehouse.com/library/javascript-and-the-dom-2/responding-to-user-interaction',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 11372,
            name: 'Traversing the DOM',
            url: 'https://teamtreehouse.com/library/javascript-and-the-dom-2/traversing-the-dom',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_JavaScript_DOM_Stage-45.png',
            earned_date: '2019-10-01T14:25:02.000Z',
            courses: [
                {
                    title: 'JavaScript and the DOM',
                    url: 'https://teamtreehouse.com/library/javascript-and-the-dom-2',
                    badge_count: 1,
                },
                {
                    title: 'Traversing the DOM',
                    url:
                        'https://teamtreehouse.com/library/javascript-and-the-dom-2/traversing-the-dom',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 17270,
            name: 'AJAX Concepts',
            url: 'https://teamtreehouse.com/library/ajax-basics-2/ajax-concepts',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_JavaScript_AJAXBasics_Stage1.png',
            earned_date: '2019-10-01T14:43:00.000Z',
            courses: [
                {
                    title: 'AJAX Basics',
                    url: 'https://teamtreehouse.com/library/ajax-basics-2',
                    badge_count: 1,
                },
                {
                    title: 'AJAX Concepts',
                    url: 'https://teamtreehouse.com/library/ajax-basics-2/ajax-concepts',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 17271,
            name: 'Programming AJAX',
            url: 'https://teamtreehouse.com/library/ajax-basics-2/programming-ajax',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_JavaScript_AJAXBasics_Stage2.png',
            earned_date: '2019-10-01T14:43:00.000Z',
            courses: [
                {
                    title: 'AJAX Basics',
                    url: 'https://teamtreehouse.com/library/ajax-basics-2',
                    badge_count: 1,
                },
                {
                    title: 'Programming AJAX',
                    url: 'https://teamtreehouse.com/library/ajax-basics-2/programming-ajax',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 14072,
            name: 'Getting Started With HTML',
            url: 'https://teamtreehouse.com/library/html-basics-2/getting-started-with-html',
            icon_url: 'https://achievement-images.teamtreehouse.com/badges_html-basics_stage01.png',
            earned_date: '2019-10-01T15:01:32.000Z',
            courses: [
                {
                    title: 'HTML Basics',
                    url: 'https://teamtreehouse.com/library/html-basics-2',
                    badge_count: 1,
                },
                {
                    title: 'Getting Started with HTML',
                    url:
                        'https://teamtreehouse.com/library/html-basics-2/getting-started-with-html',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 14082,
            name: 'Structuring Your Content',
            url: 'https://teamtreehouse.com/library/html-basics-2/structuring-your-content',
            icon_url: 'https://achievement-images.teamtreehouse.com/badges_html-basics_stage02.png',
            earned_date: '2019-10-01T15:12:51.000Z',
            courses: [
                {
                    title: 'HTML Basics',
                    url: 'https://teamtreehouse.com/library/html-basics-2',
                    badge_count: 1,
                },
                {
                    title: 'Structuring Your Content',
                    url: 'https://teamtreehouse.com/library/html-basics-2/structuring-your-content',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 14092,
            name: 'Images, Text and Links',
            url: 'https://teamtreehouse.com/library/html-basics-2/images-text-and-links',
            icon_url: 'https://achievement-images.teamtreehouse.com/badges_html-basics_stage03.png',
            earned_date: '2019-10-01T15:21:09.000Z',
            courses: [
                {
                    title: 'HTML Basics',
                    url: 'https://teamtreehouse.com/library/html-basics-2',
                    badge_count: 1,
                },
                {
                    title: 'Images, Text and Links',
                    url: 'https://teamtreehouse.com/library/html-basics-2/images-text-and-links',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 14102,
            name: 'Going Further with HTML',
            url: 'https://teamtreehouse.com/library/html-basics-2/going-further-with-html',
            icon_url: 'https://achievement-images.teamtreehouse.com/badges_html-basics_stage04.png',
            earned_date: '2019-10-01T15:34:36.000Z',
            courses: [
                {
                    title: 'HTML Basics',
                    url: 'https://teamtreehouse.com/library/html-basics-2',
                    badge_count: 1,
                },
                {
                    title: 'Going Further with HTML',
                    url: 'https://teamtreehouse.com/library/html-basics-2/going-further-with-html',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 17211,
            name: 'What is Asynchronous Programming?',
            url:
                'https://teamtreehouse.com/library/asynchronous-programming-with-javascript/what-is-asynchronous-programming',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badge_async-programming-with-JS_stage1.png',
            earned_date: '2019-10-01T19:49:16.000Z',
            courses: [
                {
                    title: 'Asynchronous Programming with JavaScript',
                    url:
                        'https://teamtreehouse.com/library/asynchronous-programming-with-javascript',
                    badge_count: 1,
                },
                {
                    title: 'What is Asynchronous Programming?',
                    url:
                        'https://teamtreehouse.com/library/asynchronous-programming-with-javascript/what-is-asynchronous-programming',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 17212,
            name: 'Asynchronous JavaScript with Callbacks',
            url:
                'https://teamtreehouse.com/library/asynchronous-programming-with-javascript/asynchronous-javascript-with-callbacks',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badge_async-programming-with-JS_stage2.png',
            earned_date: '2019-10-01T20:53:02.000Z',
            courses: [
                {
                    title: 'Asynchronous Programming with JavaScript',
                    url:
                        'https://teamtreehouse.com/library/asynchronous-programming-with-javascript',
                    badge_count: 1,
                },
                {
                    title: 'Asynchronous JavaScript with Callbacks',
                    url:
                        'https://teamtreehouse.com/library/asynchronous-programming-with-javascript/asynchronous-javascript-with-callbacks',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 17213,
            name: 'Understanding Promises',
            url:
                'https://teamtreehouse.com/library/asynchronous-programming-with-javascript/understanding-promises',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badge_async-programming-with-JS_stage3.png',
            earned_date: '2019-10-02T20:45:54.000Z',
            courses: [
                {
                    title: 'Asynchronous Programming with JavaScript',
                    url:
                        'https://teamtreehouse.com/library/asynchronous-programming-with-javascript',
                    badge_count: 1,
                },
                {
                    title: 'Understanding Promises',
                    url:
                        'https://teamtreehouse.com/library/asynchronous-programming-with-javascript/understanding-promises',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 2442,
            name: 'Form Basics',
            url: 'https://teamtreehouse.com/library/html-forms/form-basics',
            icon_url: 'https://achievement-images.teamtreehouse.com/badges_html_forms_stage1.png',
            earned_date: '2019-10-04T15:11:08.000Z',
            courses: [
                {
                    title: 'HTML Forms',
                    url: 'https://teamtreehouse.com/library/html-forms',
                    badge_count: 1,
                },
                {
                    title: 'Form Basics',
                    url: 'https://teamtreehouse.com/library/html-forms/form-basics',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 2452,
            name: 'Organizing Forms',
            url: 'https://teamtreehouse.com/library/html-forms-2/organizing-forms',
            icon_url: 'https://achievement-images.teamtreehouse.com/badges_html_forms_stage2.png',
            earned_date: '2019-10-04T15:20:23.000Z',
            courses: [
                {
                    title: 'HTML Forms',
                    url: 'https://teamtreehouse.com/library/html-forms',
                    badge_count: 1,
                },
                {
                    title: 'Organizing Forms',
                    url: 'https://teamtreehouse.com/library/html-forms-2/organizing-forms',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 2462,
            name: 'Choosing Options',
            url: 'https://teamtreehouse.com/library/html-forms/choosing-options',
            icon_url: 'https://achievement-images.teamtreehouse.com/badges_html_forms_stage3.png',
            earned_date: '2019-10-04T15:47:19.000Z',
            courses: [
                {
                    title: 'HTML Forms',
                    url: 'https://teamtreehouse.com/library/html-forms',
                    badge_count: 1,
                },
                {
                    title: 'Choosing Options',
                    url: 'https://teamtreehouse.com/library/html-forms/choosing-options',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 14362,
            name: 'Introducing jQuery (2017)',
            url: 'https://teamtreehouse.com/library/jquery-basics-2/introducing-jquery',
            icon_url: 'https://achievement-images.teamtreehouse.com/badge_jquerybasics_stage1.png',
            earned_date: '2019-10-04T19:04:37.000Z',
            courses: [
                {
                    title: 'jQuery Basics',
                    url: 'https://teamtreehouse.com/library/jquery-basics-2',
                    badge_count: 1,
                },
                {
                    title: 'Introducing jQuery',
                    url: 'https://teamtreehouse.com/library/jquery-basics-2/introducing-jquery',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 14372,
            name: 'Understanding jQuery Events and DOM Traversal (2017)',
            url:
                'https://teamtreehouse.com/library/jquery-basics-2/understanding-jquery-events-and-dom-traversal',
            icon_url: 'https://achievement-images.teamtreehouse.com/badge_jquerybasics_stage2.png',
            earned_date: '2019-10-07T15:23:41.000Z',
            courses: [
                {
                    title: 'jQuery Basics',
                    url: 'https://teamtreehouse.com/library/jquery-basics-2',
                    badge_count: 1,
                },
                {
                    title: 'Understanding jQuery Events and DOM Traversal',
                    url:
                        'https://teamtreehouse.com/library/jquery-basics-2/understanding-jquery-events-and-dom-traversal',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 14382,
            name: 'Working with jQuery Collections (2017)',
            url:
                'https://teamtreehouse.com/library/jquery-basics-2/working-with-jquery-collections',
            icon_url: 'https://achievement-images.teamtreehouse.com/badge_jquerybasics_stage3.png',
            earned_date: '2019-10-07T16:00:50.000Z',
            courses: [
                {
                    title: 'jQuery Basics',
                    url: 'https://teamtreehouse.com/library/jquery-basics-2',
                    badge_count: 1,
                },
                {
                    title: 'Working with jQuery Collections',
                    url:
                        'https://teamtreehouse.com/library/jquery-basics-2/working-with-jquery-collections',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 17267,
            name: 'Exploring Async/Await',
            url:
                'https://teamtreehouse.com/library/asynchronous-programming-with-javascript/exploring-asyncawait',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badge_async-programming-with-JS_stage4.png',
            earned_date: '2019-10-07T18:26:15.000Z',
            courses: [
                {
                    title: 'Asynchronous Programming with JavaScript',
                    url:
                        'https://teamtreehouse.com/library/asynchronous-programming-with-javascript',
                    badge_count: 1,
                },
                {
                    title: 'Exploring Async/Await',
                    url:
                        'https://teamtreehouse.com/library/asynchronous-programming-with-javascript/exploring-asyncawait',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 16872,
            name: 'Introducing Slack for the Techdegree',
            url:
                'https://teamtreehouse.com/library/slack-for-the-techdegree/introducing-slack-for-the-techdegree',
            icon_url: 'https://achievement-images.teamtreehouse.com/badge-slack-td.png',
            earned_date: '2019-10-07T18:59:50.000Z',
            courses: [
                {
                    title: 'Slack for the Techdegree',
                    url: 'https://teamtreehouse.com/library/slack-for-the-techdegree',
                    badge_count: 1,
                },
                {
                    title: 'Introducing Slack for the Techdegree',
                    url:
                        'https://teamtreehouse.com/library/slack-for-the-techdegree/introducing-slack-for-the-techdegree',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 16762,
            name: 'Using Slack Effectively',
            url:
                'https://teamtreehouse.com/library/slack-for-the-techdegree/using-slack-effectively',
            icon_url: 'https://achievement-images.teamtreehouse.com/badge-using-slack.png',
            earned_date: '2019-10-07T19:28:45.000Z',
            courses: [
                {
                    title: 'Slack for the Techdegree',
                    url: 'https://teamtreehouse.com/library/slack-for-the-techdegree',
                    badge_count: 1,
                },
                {
                    title: 'Using Slack Effectively',
                    url:
                        'https://teamtreehouse.com/library/slack-for-the-techdegree/using-slack-effectively',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 15092,
            name: 'Defining Variables With let and const',
            url:
                'https://teamtreehouse.com/library/getting-started-with-es2015-2/defining-variables-with-let-and-const',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badge_introducing-es2015_stage1.png',
            earned_date: '2019-10-11T15:32:48.000Z',
            courses: [
                {
                    title: 'Getting Started With ES2015',
                    url: 'https://teamtreehouse.com/library/getting-started-with-es2015-2',
                    badge_count: 1,
                },
                {
                    title: 'Defining Variables With let and const',
                    url:
                        'https://teamtreehouse.com/library/getting-started-with-es2015-2/defining-variables-with-let-and-const',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 15102,
            name: 'Using Template Literals',
            url:
                'https://teamtreehouse.com/library/getting-started-with-es2015-2/using-template-literals',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badge_introducing-es2015_stage2.png',
            earned_date: '2019-10-11T18:46:33.000Z',
            courses: [
                {
                    title: 'Getting Started With ES2015',
                    url: 'https://teamtreehouse.com/library/getting-started-with-es2015-2',
                    badge_count: 1,
                },
                {
                    title: 'Using Template Literals',
                    url:
                        'https://teamtreehouse.com/library/getting-started-with-es2015-2/using-template-literals',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 15112,
            name: 'Create Function Using Arrow Syntax',
            url:
                'https://teamtreehouse.com/library/getting-started-with-es2015-2/create-functions-using-arrow-syntax',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badge_introducing-es2015_stage3.png',
            earned_date: '2019-10-11T18:54:17.000Z',
            courses: [
                {
                    title: 'Getting Started With ES2015',
                    url: 'https://teamtreehouse.com/library/getting-started-with-es2015-2',
                    badge_count: 1,
                },
                {
                    title: 'Create Functions Using Arrow Syntax',
                    url:
                        'https://teamtreehouse.com/library/getting-started-with-es2015-2/create-functions-using-arrow-syntax',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 17208,
            name: 'Selector Basics',
            url: 'https://teamtreehouse.com/library/css-selectors-quickstart/css-selector-basics',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_css_selectors_quickstart_stage01.png',
            earned_date: '2019-10-11T19:05:28.000Z',
            courses: [
                {
                    title: 'CSS Selectors Quickstart ',
                    url: 'https://teamtreehouse.com/library/css-selectors-quickstart',
                    badge_count: 1,
                },
                {
                    title: 'CSS Selector Basics',
                    url:
                        'https://teamtreehouse.com/library/css-selectors-quickstart/css-selector-basics',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 17209,
            name: 'Pseudo-classes and Combinators',
            url:
                'https://teamtreehouse.com/library/css-selectors-quickstart/pseudoclasses-and-combinators',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_css_selectors_quickstart_stage02.png',
            earned_date: '2019-10-11T19:51:50.000Z',
            courses: [
                {
                    title: 'CSS Selectors Quickstart ',
                    url: 'https://teamtreehouse.com/library/css-selectors-quickstart',
                    badge_count: 1,
                },
                {
                    title: 'Pseudo-classes and Combinators',
                    url:
                        'https://teamtreehouse.com/library/css-selectors-quickstart/pseudoclasses-and-combinators',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 17210,
            name: 'The Role of Selectors in JavaScript',
            url:
                'https://teamtreehouse.com/library/css-selectors-quickstart/the-role-of-selectors-in-javascript',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_css_selectors_quickstart_stage03.png',
            earned_date: '2019-10-11T20:03:43.000Z',
            courses: [
                {
                    title: 'CSS Selectors Quickstart ',
                    url: 'https://teamtreehouse.com/library/css-selectors-quickstart',
                    badge_count: 1,
                },
                {
                    title: 'The Role of Selectors in JavaScript',
                    url:
                        'https://teamtreehouse.com/library/css-selectors-quickstart/the-role-of-selectors-in-javascript',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 11732,
            name: 'Adding and Removing Names',
            url:
                'https://teamtreehouse.com/library/dom-scripting-by-example/adding-and-removing-names',
            icon_url: 'https://achievement-images.teamtreehouse.com/naming.png',
            earned_date: '2019-10-12T00:32:03.000Z',
            courses: [
                {
                    title: 'DOM Scripting By Example',
                    url: 'https://teamtreehouse.com/library/dom-scripting-by-example',
                    badge_count: 1,
                },
                {
                    title: 'Adding and Removing Names',
                    url:
                        'https://teamtreehouse.com/library/dom-scripting-by-example/adding-and-removing-names',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 11742,
            name: 'Editing and Filtering Names',
            url:
                'https://teamtreehouse.com/library/dom-scripting-by-example/editing-and-filtering-names',
            icon_url: 'https://achievement-images.teamtreehouse.com/filter.png',
            earned_date: '2019-10-17T17:13:40.000Z',
            courses: [
                {
                    title: 'DOM Scripting By Example',
                    url: 'https://teamtreehouse.com/library/dom-scripting-by-example',
                    badge_count: 1,
                },
                {
                    title: 'Editing and Filtering Names',
                    url:
                        'https://teamtreehouse.com/library/dom-scripting-by-example/editing-and-filtering-names',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 11752,
            name: 'Improving the Application Code',
            url:
                'https://teamtreehouse.com/library/dom-scripting-by-example/improving-the-application-code',
            icon_url: 'https://achievement-images.teamtreehouse.com/cleanCode.png',
            earned_date: '2019-10-17T17:38:17.000Z',
            courses: [
                {
                    title: 'DOM Scripting By Example',
                    url: 'https://teamtreehouse.com/library/dom-scripting-by-example',
                    badge_count: 1,
                },
                {
                    title: 'Improving the Application Code',
                    url:
                        'https://teamtreehouse.com/library/dom-scripting-by-example/improving-the-application-code',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 15992,
            name: 'JavaScript is Everywhere',
            url:
                'https://teamtreehouse.com/library/the-landscape-of-javascript/javascript-is-everywhere',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badge_the-landscape-of-javascript_stage1.png',
            earned_date: '2019-10-18T21:30:42.000Z',
            courses: [
                {
                    title: 'The Landscape of JavaScript',
                    url: 'https://teamtreehouse.com/library/the-landscape-of-javascript',
                    badge_count: 1,
                },
                {
                    title: 'JavaScript is Everywhere',
                    url:
                        'https://teamtreehouse.com/library/the-landscape-of-javascript/javascript-is-everywhere',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 16002,
            name: 'JavaScript Tools and Workflows',
            url:
                'https://teamtreehouse.com/library/the-landscape-of-javascript/javascript-tools-and-workflows',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badge_the-landscape-of-javascript_stage2.png',
            earned_date: '2019-10-18T21:40:21.000Z',
            courses: [
                {
                    title: 'The Landscape of JavaScript',
                    url: 'https://teamtreehouse.com/library/the-landscape-of-javascript',
                    badge_count: 1,
                },
                {
                    title: 'JavaScript Tools and Workflows',
                    url:
                        'https://teamtreehouse.com/library/the-landscape-of-javascript/javascript-tools-and-workflows',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 14012,
            name: 'Regular Expressions',
            url:
                'https://teamtreehouse.com/library/regular-expressions-in-javascript/regular-expressions',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_regular_expressions_JS_Stage1.png',
            earned_date: '2019-10-28T23:43:41.000Z',
            courses: [
                {
                    title: 'Regular Expressions in JavaScript',
                    url: 'https://teamtreehouse.com/library/regular-expressions-in-javascript',
                    badge_count: 1,
                },
                {
                    title: 'Regular Expressions',
                    url:
                        'https://teamtreehouse.com/library/regular-expressions-in-javascript/regular-expressions',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 14022,
            name: 'Validating a Form with Regular Expressions',
            url:
                'https://teamtreehouse.com/library/regular-expressions-in-javascript/validating-a-form',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_regular_expressions_JS_Stage2.png',
            earned_date: '2019-10-29T00:08:14.000Z',
            courses: [
                {
                    title: 'Regular Expressions in JavaScript',
                    url: 'https://teamtreehouse.com/library/regular-expressions-in-javascript',
                    badge_count: 1,
                },
                {
                    title: 'Validating a Form',
                    url:
                        'https://teamtreehouse.com/library/regular-expressions-in-javascript/validating-a-form',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 14032,
            name: 'Reformatting User Input',
            url:
                'https://teamtreehouse.com/library/regular-expressions-in-javascript/reformatting-user-input',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_regular_expressions_JS_Stage3.png',
            earned_date: '2019-10-29T00:28:48.000Z',
            courses: [
                {
                    title: 'Regular Expressions in JavaScript',
                    url: 'https://teamtreehouse.com/library/regular-expressions-in-javascript',
                    badge_count: 1,
                },
                {
                    title: 'Reformatting User Input',
                    url:
                        'https://teamtreehouse.com/library/regular-expressions-in-javascript/reformatting-user-input',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 15832,
            name: 'Introduction to Object-Oriented JavaScript',
            url:
                'https://teamtreehouse.com/library/objectoriented-javascript-2/introduction-to-objectoriented-javascript',
            icon_url: 'https://achievement-images.teamtreehouse.com/stage1.png',
            earned_date: '2019-10-29T01:47:12.000Z',
            courses: [
                {
                    title: 'Object-Oriented JavaScript',
                    url: 'https://teamtreehouse.com/library/objectoriented-javascript-2',
                    badge_count: 1,
                },
                {
                    title: 'Introduction to Object-Oriented JavaScript',
                    url:
                        'https://teamtreehouse.com/library/objectoriented-javascript-2/introduction-to-objectoriented-javascript',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 15842,
            name: 'Object Basics',
            url: 'https://teamtreehouse.com/library/objectoriented-javascript-2/object-basics',
            icon_url: 'https://achievement-images.teamtreehouse.com/stage2.png',
            earned_date: '2019-10-29T01:58:39.000Z',
            courses: [
                {
                    title: 'Object-Oriented JavaScript',
                    url: 'https://teamtreehouse.com/library/objectoriented-javascript-2',
                    badge_count: 1,
                },
                {
                    title: 'Object Basics',
                    url:
                        'https://teamtreehouse.com/library/objectoriented-javascript-2/object-basics',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 16892,
            name: 'Practicing Object Basics',
            url:
                'https://teamtreehouse.com/library/practice-object-basics-in-javascript/practicing-object-basics',
            icon_url: 'https://achievement-images.teamtreehouse.com/practice_object_basics.png',
            earned_date: '2019-10-29T04:43:14.000Z',
            courses: [
                {
                    title: 'Practice Object Basics in JavaScript',
                    url: 'https://teamtreehouse.com/library/practice-object-basics-in-javascript',
                    badge_count: 1,
                },
                {
                    title: 'Practicing Object Basics',
                    url:
                        'https://teamtreehouse.com/library/practice-object-basics-in-javascript/practicing-object-basics',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 17082,
            name: 'Practicing Classes',
            url:
                'https://teamtreehouse.com/library/practice-classes-in-javascript/practicing-classes',
            icon_url: 'https://achievement-images.teamtreehouse.com/stage3.png',
            earned_date: '2019-10-29T14:22:36.000Z',
            courses: [
                {
                    title: 'Practice Classes in JavaScript',
                    url: 'https://teamtreehouse.com/library/practice-classes-in-javascript',
                    badge_count: 1,
                },
                {
                    title: 'Practicing Classes',
                    url:
                        'https://teamtreehouse.com/library/practice-classes-in-javascript/practicing-classes',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 15852,
            name: 'Working with Classes in JavaScript',
            url:
                'https://teamtreehouse.com/library/objectoriented-javascript-2/working-with-classes-in-javascript',
            icon_url: 'https://achievement-images.teamtreehouse.com/stage3.png',
            earned_date: '2019-10-29T20:10:20.000Z',
            courses: [
                {
                    title: 'Object-Oriented JavaScript',
                    url: 'https://teamtreehouse.com/library/objectoriented-javascript-2',
                    badge_count: 1,
                },
                {
                    title: 'Working with Classes in JavaScript',
                    url:
                        'https://teamtreehouse.com/library/objectoriented-javascript-2/working-with-classes-in-javascript',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 17182,
            name: 'Practicing Getters and Setters',
            url:
                'https://teamtreehouse.com/library/practice-getters-and-setters-in-javascript/practicing-getters-and-setters',
            icon_url: 'https://achievement-images.teamtreehouse.com/stage4.png',
            earned_date: '2019-10-30T15:29:09.000Z',
            courses: [
                {
                    title: 'Practice Getters and Setters in JavaScript',
                    url:
                        'https://teamtreehouse.com/library/practice-getters-and-setters-in-javascript',
                    badge_count: 1,
                },
                {
                    title: 'Practicing Getters and Setters',
                    url:
                        'https://teamtreehouse.com/library/practice-getters-and-setters-in-javascript/practicing-getters-and-setters',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 16182,
            name: 'Getters and Setters',
            url:
                'https://teamtreehouse.com/library/objectoriented-javascript-2/getters-and-setters',
            icon_url: 'https://achievement-images.teamtreehouse.com/stage4.png',
            earned_date: '2019-10-30T15:52:20.000Z',
            courses: [
                {
                    title: 'Object-Oriented JavaScript',
                    url: 'https://teamtreehouse.com/library/objectoriented-javascript-2',
                    badge_count: 1,
                },
                {
                    title: 'Getters and Setters',
                    url:
                        'https://teamtreehouse.com/library/objectoriented-javascript-2/getters-and-setters',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 17194,
            name: 'The Rough Plan',
            url: 'https://teamtreehouse.com/library/practice-object-interaction/the-rough-plan',
            icon_url: 'https://achievement-images.teamtreehouse.com/badges_writeplan_Stage1.png',
            earned_date: '2019-10-31T13:11:15.000Z',
            courses: [
                {
                    title: 'Practice Object Interaction',
                    url: 'https://teamtreehouse.com/library/practice-object-interaction',
                    badge_count: 1,
                },
                {
                    title: 'The Rough Plan',
                    url:
                        'https://teamtreehouse.com/library/practice-object-interaction/the-rough-plan',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 17199,
            name: 'Starting with Some Methods',
            url:
                'https://teamtreehouse.com/library/practice-object-interaction/starting-with-some-methods',
            icon_url: 'https://achievement-images.teamtreehouse.com/stage4.png',
            earned_date: '2019-10-31T13:49:29.000Z',
            courses: [
                {
                    title: 'Practice Object Interaction',
                    url: 'https://teamtreehouse.com/library/practice-object-interaction',
                    badge_count: 1,
                },
                {
                    title: 'Starting with Some Methods',
                    url:
                        'https://teamtreehouse.com/library/practice-object-interaction/starting-with-some-methods',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 17200,
            name: 'Checking Out and Returning a Book',
            url:
                'https://teamtreehouse.com/library/practice-object-interaction/checking-out-and-returning-a-book',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_DD_Copyright_Stage1-52.png',
            earned_date: '2019-10-31T16:24:10.000Z',
            courses: [
                {
                    title: 'Practice Object Interaction',
                    url: 'https://teamtreehouse.com/library/practice-object-interaction',
                    badge_count: 1,
                },
                {
                    title: 'Checking Out and Returning a Book',
                    url:
                        'https://teamtreehouse.com/library/practice-object-interaction/checking-out-and-returning-a-book',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 14042,
            name: 'Introduction to Callback Functions',
            url:
                'https://teamtreehouse.com/library/callback-functions-in-javascript/introduction-to-callback-functions',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_callback_functions_JS_stage1.png',
            earned_date: '2019-10-31T16:37:32.000Z',
            courses: [
                {
                    title: 'Callback Functions in JavaScript',
                    url: 'https://teamtreehouse.com/library/callback-functions-in-javascript',
                    badge_count: 1,
                },
                {
                    title: 'Introduction to Callback Functions',
                    url:
                        'https://teamtreehouse.com/library/callback-functions-in-javascript/introduction-to-callback-functions',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 14052,
            name: 'Callbacks with Timers',
            url:
                'https://teamtreehouse.com/library/callback-functions-in-javascript/callbacks-with-timers',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_callback_functions_JS_stage2.png',
            earned_date: '2019-10-31T16:43:59.000Z',
            courses: [
                {
                    title: 'Callback Functions in JavaScript',
                    url: 'https://teamtreehouse.com/library/callback-functions-in-javascript',
                    badge_count: 1,
                },
                {
                    title: 'Callbacks with Timers',
                    url:
                        'https://teamtreehouse.com/library/callback-functions-in-javascript/callbacks-with-timers',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 14062,
            name: 'Callbacks and the DOM',
            url:
                'https://teamtreehouse.com/library/callback-functions-in-javascript/callbacks-and-the-dom',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_callback_functions_JS_stage3.png',
            earned_date: '2019-10-31T17:00:37.000Z',
            courses: [
                {
                    title: 'Callback Functions in JavaScript',
                    url: 'https://teamtreehouse.com/library/callback-functions-in-javascript',
                    badge_count: 1,
                },
                {
                    title: 'Callbacks and the DOM',
                    url:
                        'https://teamtreehouse.com/library/callback-functions-in-javascript/callbacks-and-the-dom',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 15272,
            name: 'Practice forEach',
            url:
                'https://teamtreehouse.com/library/practice-foreach-in-javascript/practice-foreach',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badge_Practice-Array-Iteration-Methods_stage1.png',
            earned_date: '2019-10-31T19:09:31.000Z',
            courses: [
                {
                    title: 'Practice forEach in JavaScript',
                    url: 'https://teamtreehouse.com/library/practice-foreach-in-javascript',
                    badge_count: 1,
                },
                {
                    title: 'Practice forEach',
                    url:
                        'https://teamtreehouse.com/library/practice-foreach-in-javascript/practice-foreach',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 14912,
            name: 'Array Iteration',
            url:
                'https://teamtreehouse.com/library/javascript-array-iteration-methods/array-iteration',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badge_javascript-array-iteration-methods_stage01.png',
            earned_date: '2019-10-31T19:14:15.000Z',
            courses: [
                {
                    title: 'JavaScript Array Iteration Methods',
                    url: 'https://teamtreehouse.com/library/javascript-array-iteration-methods',
                    badge_count: 1,
                },
                {
                    title: 'Array Iteration',
                    url:
                        'https://teamtreehouse.com/library/javascript-array-iteration-methods/array-iteration',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 14922,
            name: 'Array Manipulation',
            url:
                'https://teamtreehouse.com/library/javascript-array-iteration-methods/array-manipulation',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badge_javascript-array-iteration-methods_stage02.png',
            earned_date: '2019-11-01T14:29:37.000Z',
            courses: [
                {
                    title: 'JavaScript Array Iteration Methods',
                    url: 'https://teamtreehouse.com/library/javascript-array-iteration-methods',
                    badge_count: 1,
                },
                {
                    title: 'Array Manipulation',
                    url:
                        'https://teamtreehouse.com/library/javascript-array-iteration-methods/array-manipulation',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 14932,
            name: 'Combining Array Methods',
            url:
                'https://teamtreehouse.com/library/javascript-array-iteration-methods/combining-array-methods',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badge_javascript-array-iteration-methods_stage03.png',
            earned_date: '2019-11-01T21:01:22.000Z',
            courses: [
                {
                    title: 'JavaScript Array Iteration Methods',
                    url: 'https://teamtreehouse.com/library/javascript-array-iteration-methods',
                    badge_count: 1,
                },
                {
                    title: 'Combining Array Methods',
                    url:
                        'https://teamtreehouse.com/library/javascript-array-iteration-methods/combining-array-methods',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 17217,
            name: 'The Command Shell',
            url: 'https://teamtreehouse.com/library/introduction-to-the-terminal/the-command-shell',
            icon_url: 'https://achievement-images.teamtreehouse.com/terminal_1.png',
            earned_date: '2019-11-04T01:58:11.000Z',
            courses: [
                {
                    title: 'Introduction to the Terminal',
                    url: 'https://teamtreehouse.com/library/introduction-to-the-terminal',
                    badge_count: 1,
                },
                {
                    title: 'The Command Shell',
                    url:
                        'https://teamtreehouse.com/library/introduction-to-the-terminal/the-command-shell',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 17218,
            name: 'Directories and Files',
            url:
                'https://teamtreehouse.com/library/introduction-to-the-terminal/directories-and-files',
            icon_url: 'https://achievement-images.teamtreehouse.com/terminal_2.png',
            earned_date: '2019-11-04T02:23:52.000Z',
            courses: [
                {
                    title: 'Introduction to the Terminal',
                    url: 'https://teamtreehouse.com/library/introduction-to-the-terminal',
                    badge_count: 1,
                },
                {
                    title: 'Directories and Files',
                    url:
                        'https://teamtreehouse.com/library/introduction-to-the-terminal/directories-and-files',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 17219,
            name: 'Common Commands',
            url: 'https://teamtreehouse.com/library/introduction-to-the-terminal/common-commands',
            icon_url: 'https://achievement-images.teamtreehouse.com/terminal_3.png',
            earned_date: '2019-11-04T02:42:46.000Z',
            courses: [
                {
                    title: 'Introduction to the Terminal',
                    url: 'https://teamtreehouse.com/library/introduction-to-the-terminal',
                    badge_count: 1,
                },
                {
                    title: 'Common Commands',
                    url:
                        'https://teamtreehouse.com/library/introduction-to-the-terminal/common-commands',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 9642,
            name: 'Introduction to HTTP',
            url: 'https://teamtreehouse.com/library/http-basics/introduction-to-http',
            icon_url: 'https://achievement-images.teamtreehouse.com/http-1.png',
            earned_date: '2019-11-14T19:35:09.000Z',
            courses: [
                {
                    title: 'HTTP Basics',
                    url: 'https://teamtreehouse.com/library/http-basics',
                    badge_count: 1,
                },
                {
                    title: 'Introduction to HTTP',
                    url: 'https://teamtreehouse.com/library/http-basics/introduction-to-http',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 9652,
            name: 'GET and POST Requests in a Browser',
            url: 'https://teamtreehouse.com/library/http-basics/get-and-post-requests-in-a-browser',
            icon_url: 'https://achievement-images.teamtreehouse.com/http-2.png',
            earned_date: '2019-11-15T14:17:06.000Z',
            courses: [
                {
                    title: 'HTTP Basics',
                    url: 'https://teamtreehouse.com/library/http-basics',
                    badge_count: 1,
                },
                {
                    title: 'GET and POST Requests in a Browser',
                    url:
                        'https://teamtreehouse.com/library/http-basics/get-and-post-requests-in-a-browser',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 15492,
            name: 'First Commits',
            url: 'https://teamtreehouse.com/library/introduction-to-git/first-commits',
            icon_url:
                'https://achievement-images.teamtreehouse.com/intro_to_git_badges_DD_Git_Stage1.png',
            earned_date: '2019-11-16T04:18:04.000Z',
            courses: [
                {
                    title: 'Introduction to Git',
                    url: 'https://teamtreehouse.com/library/introduction-to-git',
                    badge_count: 1,
                },
                {
                    title: 'First Commits',
                    url: 'https://teamtreehouse.com/library/introduction-to-git/first-commits',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 16742,
            name: 'Getting the REST You Need 2',
            url:
                'https://teamtreehouse.com/library/introduction-to-rest-apis/getting-the-rest-you-need',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_development-tools_rest-api-basics_stage01.png',
            earned_date: '2019-11-17T01:17:04.000Z',
            courses: [
                {
                    title: 'Introduction to REST APIs',
                    url: 'https://teamtreehouse.com/library/introduction-to-rest-apis',
                    badge_count: 1,
                },
                {
                    title: 'Getting the REST You Need',
                    url:
                        'https://teamtreehouse.com/library/introduction-to-rest-apis/getting-the-rest-you-need',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 15502,
            name: 'Managing Committed Files',
            url: 'https://teamtreehouse.com/library/introduction-to-git/managing-committed-files',
            icon_url:
                'https://achievement-images.teamtreehouse.com/intro_to_git_badges_DD_Git_Stage2.png',
            earned_date: '2019-11-22T16:09:39.000Z',
            courses: [
                {
                    title: 'Introduction to Git',
                    url: 'https://teamtreehouse.com/library/introduction-to-git',
                    badge_count: 1,
                },
                {
                    title: 'Managing Committed Files',
                    url:
                        'https://teamtreehouse.com/library/introduction-to-git/managing-committed-files',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 15512,
            name: 'GitHub and Other Remote Repositories',
            url:
                'https://teamtreehouse.com/library/introduction-to-git/github-and-other-remote-repositories',
            icon_url:
                'https://achievement-images.teamtreehouse.com/intro_to_git_badges_DD_Git_Stage5.png',
            earned_date: '2019-11-22T16:35:43.000Z',
            courses: [
                {
                    title: 'Introduction to Git',
                    url: 'https://teamtreehouse.com/library/introduction-to-git',
                    badge_count: 1,
                },
                {
                    title: 'GitHub and Other Remote Repositories',
                    url:
                        'https://teamtreehouse.com/library/introduction-to-git/github-and-other-remote-repositories',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 16292,
            name: 'JavaScript Outside of the Browser',
            url:
                'https://teamtreehouse.com/library/the-javascript-ecosystem/javascript-outside-of-the-browser',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badge_javascript-ecosystem_stage1.png',
            earned_date: '2019-11-30T16:30:43.000Z',
            courses: [
                {
                    title: 'The JavaScript Ecosystem',
                    url: 'https://teamtreehouse.com/library/the-javascript-ecosystem',
                    badge_count: 1,
                },
                {
                    title: 'JavaScript Outside of the Browser',
                    url:
                        'https://teamtreehouse.com/library/the-javascript-ecosystem/javascript-outside-of-the-browser',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 16302,
            name: 'JavaScript Frameworks, Libraries, and Developer Roles',
            url:
                'https://teamtreehouse.com/library/the-javascript-ecosystem/javascript-frameworks-libraries-and-developer-roles',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badge_javascript-ecosystem_stage2.png',
            earned_date: '2019-11-30T16:38:30.000Z',
            courses: [
                {
                    title: 'The JavaScript Ecosystem',
                    url: 'https://teamtreehouse.com/library/the-javascript-ecosystem',
                    badge_count: 1,
                },
                {
                    title: 'JavaScript Frameworks, Libraries, and Developer Roles',
                    url:
                        'https://teamtreehouse.com/library/the-javascript-ecosystem/javascript-frameworks-libraries-and-developer-roles',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 6642,
            name: 'What is npm?',
            url: 'https://teamtreehouse.com/library/npm-basics/what-is-npm',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_JavaScript_npmbasics_Stage1.png',
            earned_date: '2019-11-30T16:49:46.000Z',
            courses: [
                {
                    title: 'npm Basics',
                    url: 'https://teamtreehouse.com/library/npm-basics',
                    badge_count: 1,
                },
                {
                    title: 'What is npm?',
                    url: 'https://teamtreehouse.com/library/npm-basics/what-is-npm',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 6652,
            name: 'Installing Packages with npm',
            url: 'https://teamtreehouse.com/library/npm-basics/installing-packages-with-npm',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_JavaScript_npmbasics_Stage2.png',
            earned_date: '2019-11-30T19:53:28.000Z',
            courses: [
                {
                    title: 'npm Basics',
                    url: 'https://teamtreehouse.com/library/npm-basics',
                    badge_count: 1,
                },
                {
                    title: 'Installing Packages with npm',
                    url:
                        'https://teamtreehouse.com/library/npm-basics/installing-packages-with-npm',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 6662,
            name: 'Updating and Uninstalling Packages with npm',
            url:
                'https://teamtreehouse.com/library/npm-basics/updating-and-uninstalling-packages-with-npm',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_JavaScript_npmbasics_Stage3.png',
            earned_date: '2019-11-30T20:16:18.000Z',
            courses: [
                {
                    title: 'npm Basics',
                    url: 'https://teamtreehouse.com/library/npm-basics',
                    badge_count: 1,
                },
                {
                    title: 'Updating and Uninstalling Packages with npm',
                    url:
                        'https://teamtreehouse.com/library/npm-basics/updating-and-uninstalling-packages-with-npm',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 12052,
            name: 'Introduction to Node.js',
            url: 'https://teamtreehouse.com/library/nodejs-basics-2/introduction-to-nodejs',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_JavaScript_nodeBasics_Stage1.png',
            earned_date: '2019-11-30T21:18:01.000Z',
            courses: [
                {
                    title: 'Node.js Basics',
                    url: 'https://teamtreehouse.com/library/nodejs-basics-2',
                    badge_count: 1,
                },
                {
                    title: 'Introduction to Node.js',
                    url: 'https://teamtreehouse.com/library/nodejs-basics-2/introduction-to-nodejs',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 12062,
            name: 'Getting Data From an API With Node',
            url:
                'https://teamtreehouse.com/library/nodejs-basics-2/building-a-command-line-application',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_JavaScript_nodeBasics_Stage2.png',
            earned_date: '2019-12-09T18:20:23.000Z',
            courses: [
                {
                    title: 'Node.js Basics',
                    url: 'https://teamtreehouse.com/library/nodejs-basics-2',
                    badge_count: 1,
                },
                {
                    title: 'Building a Command Line Application',
                    url:
                        'https://teamtreehouse.com/library/nodejs-basics-2/building-a-command-line-application',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 12072,
            name: 'Handling Errors in Node',
            url: 'https://teamtreehouse.com/library/nodejs-basics-2/handling-errors-in-node',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_JavaScript_nodeBasics_Stage3.png',
            earned_date: '2019-12-10T03:09:39.000Z',
            courses: [
                {
                    title: 'Node.js Basics',
                    url: 'https://teamtreehouse.com/library/nodejs-basics-2',
                    badge_count: 1,
                },
                {
                    title: 'Handling Errors in Node',
                    url:
                        'https://teamtreehouse.com/library/nodejs-basics-2/handling-errors-in-node',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 12082,
            name: 'Creating a Command Line Weather Application',
            url:
                'https://teamtreehouse.com/library/nodejs-basics-2/create-a-command-line-weather-application',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badges_JavaScript_nodeBasics_Stage4.png',
            earned_date: '2019-12-10T03:20:28.000Z',
            courses: [
                {
                    title: 'Node.js Basics',
                    url: 'https://teamtreehouse.com/library/nodejs-basics-2',
                    badge_count: 1,
                },
                {
                    title: 'Create a Command Line Weather Application',
                    url:
                        'https://teamtreehouse.com/library/nodejs-basics-2/create-a-command-line-weather-application',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 13362,
            name: 'Getting Started with Express',
            url: 'https://teamtreehouse.com/library/express-basics-2/getting-started-with-express',
            icon_url: 'https://achievement-images.teamtreehouse.com/gettingStarted.png',
            earned_date: '2019-12-10T22:09:01.000Z',
            courses: [
                {
                    title: 'Express Basics',
                    url: 'https://teamtreehouse.com/library/express-basics-2',
                    badge_count: 1,
                },
                {
                    title: 'Getting Started with Express',
                    url:
                        'https://teamtreehouse.com/library/express-basics-2/getting-started-with-express',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 17307,
            name: 'You as a Mentee',
            url: 'https://teamtreehouse.com/library/getting-started-as-a-mentee/you-as-a-mentee',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badge_intro-to-mentoring_stage03.png',
            earned_date: '2019-12-13T15:08:58.000Z',
            courses: [
                {
                    title: 'Getting Started as a Mentee',
                    url: 'https://teamtreehouse.com/library/getting-started-as-a-mentee',
                    badge_count: 1,
                },
                {
                    title: 'You as a Mentee',
                    url:
                        'https://teamtreehouse.com/library/getting-started-as-a-mentee/you-as-a-mentee',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 13372,
            name: 'Using Templates with Express',
            url: 'https://teamtreehouse.com/library/express-basics-2/using-templates-with-express',
            icon_url: 'https://achievement-images.teamtreehouse.com/templates.png',
            earned_date: '2019-12-16T14:34:50.000Z',
            courses: [
                {
                    title: 'Express Basics',
                    url: 'https://teamtreehouse.com/library/express-basics-2',
                    badge_count: 1,
                },
                {
                    title: 'Using Templates with Express',
                    url:
                        'https://teamtreehouse.com/library/express-basics-2/using-templates-with-express',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 13382,
            name: 'Deeper into Routing with Express',
            url:
                'https://teamtreehouse.com/library/express-basics-2/deeper-into-routing-with-express',
            icon_url: 'https://achievement-images.teamtreehouse.com/routing.png',
            earned_date: '2019-12-17T17:56:17.000Z',
            courses: [
                {
                    title: 'Express Basics',
                    url: 'https://teamtreehouse.com/library/express-basics-2',
                    badge_count: 1,
                },
                {
                    title: 'Deeper into Routing with Express',
                    url:
                        'https://teamtreehouse.com/library/express-basics-2/deeper-into-routing-with-express',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 13422,
            name: 'Middleware',
            url: 'https://teamtreehouse.com/library/express-basics-2/middleware',
            icon_url: 'https://achievement-images.teamtreehouse.com/middleware_1.png',
            earned_date: '2019-12-18T17:49:24.000Z',
            courses: [
                {
                    title: 'Express Basics',
                    url: 'https://teamtreehouse.com/library/express-basics-2',
                    badge_count: 1,
                },
                {
                    title: 'Middleware',
                    url: 'https://teamtreehouse.com/library/express-basics-2/middleware',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 12712,
            name: '1st Techdegree Peer Review',
            url: 'https://teamtreehouse.com/julianj',
            icon_url: 'https://achievement-images.teamtreehouse.com/badges_peer-review-1.png',
            earned_date: '2019-12-18T18:37:09.000Z',
            courses: [],
        },
        {
            id: 12732,
            name: '5 Star Techdegree Reviewer',
            url: 'https://teamtreehouse.com/julianj',
            icon_url: 'https://achievement-images.teamtreehouse.com/badges_peer-review-5-star.png',
            earned_date: '2019-12-18T18:37:14.000Z',
            courses: [],
        },
        {
            id: 12722,
            name: '5th Techdegree Peer Review',
            url: 'https://teamtreehouse.com/julianj',
            icon_url: 'https://achievement-images.teamtreehouse.com/badges_peer-review-5.png',
            earned_date: '2019-12-18T18:37:18.000Z',
            courses: [],
        },
        {
            id: 13432,
            name: 'Applying Express Knowledge',
            url:
                'https://teamtreehouse.com/library/express-basics-2/parameters-query-strings-and-modularizing-routes',
            icon_url: 'https://achievement-images.teamtreehouse.com/knowledge.png',
            earned_date: '2019-12-18T19:33:56.000Z',
            courses: [
                {
                    title: 'Express Basics',
                    url: 'https://teamtreehouse.com/library/express-basics-2',
                    badge_count: 1,
                },
                {
                    title: 'Parameters, Query Strings, and Modularizing Routes',
                    url:
                        'https://teamtreehouse.com/library/express-basics-2/parameters-query-strings-and-modularizing-routes',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 13402,
            name: 'Serving Static Files in Express',
            url:
                'https://teamtreehouse.com/library/express-basics-2/serving-static-files-in-express',
            icon_url: 'https://achievement-images.teamtreehouse.com/static.png',
            earned_date: '2019-12-18T20:45:05.000Z',
            courses: [
                {
                    title: 'Express Basics',
                    url: 'https://teamtreehouse.com/library/express-basics-2',
                    badge_count: 1,
                },
                {
                    title: 'Serving Static Files in Express',
                    url:
                        'https://teamtreehouse.com/library/express-basics-2/serving-static-files-in-express',
                    badge_count: 1,
                },
            ],
        },
        {
            id: 17225,
            name: 'Asynchronous Code in Express ',
            url:
                'https://teamtreehouse.com/library/asynchronous-code-in-express/asynchronous-code-in-express',
            icon_url:
                'https://achievement-images.teamtreehouse.com/badge_asynchronous-code-in-express_stage01.png',
            earned_date: '2019-12-20T20:23:11.000Z',
            courses: [
                {
                    title: 'Asynchronous Code in Express',
                    url: 'https://teamtreehouse.com/library/asynchronous-code-in-express',
                    badge_count: 1,
                },
                {
                    title: 'Asynchronous Code in Express ',
                    url:
                        'https://teamtreehouse.com/library/asynchronous-code-in-express/asynchronous-code-in-express',
                    badge_count: 1,
                },
            ],
        },
    ],
    points: {
        total: 10161,
        HTML: 936,
        CSS: 640,
        Design: 0,
        JavaScript: 5624,
        Ruby: 0,
        PHP: 0,
        iOS: 0,
        Android: 0,
        'Development Tools': 1154,
        Business: 0,
        Python: 0,
        Java: 0,
        'Digital Literacy': 40,
        'C#': 0,
        Databases: 0,
        'Data Analysis': 0,
        APIs: 0,
        Security: 0,
        Go: 0,
        'Quality Assurance': 0,
        'Machine Learning': 0,
        'Learning Resources': 0,
        'Computer Science': 60,
        Swift: 0,
    },
};

let parentCourses = [];

let childCourses = profile.badges
    .reduce((acc, currentBadge, ind) => {
        // Test whether the first course in cur have already been added to the accumulator. The badge courses array lists the parent course first, before listing child courses.
        if (currentBadge.courses.length > 0) {
            // If the parentCourses array does NOT already include a course title
            if (!parentCourses.includes(currentBadge.courses[0].title)) {
                // then push the new parent course title to the parentCourses array
                parentCourses.push(currentBadge.courses[0].title.trim());
            }
            // And push the child course to the childCourses array
            acc.push(currentBadge.courses[1].title.trim());
        }
        return acc;
}, [])
    .sort();

// this proves that every badge only lists 2 courses: a parent course and a child course
const howManyPerBadge = profile.badges.map(badge=>badge.courses.length);

parentCourses.length; //?

// Remove any duplicates from parent courses. Only two duplicates are removed and I'm not sure how they got in there in the first place.
parentCourses = parentCourses.filter( (dupe,index) => parentCourses.indexOf(dupe) === index).sort();

parentCourses.length; //?

childCourses.length; //?

childCourses = childCourses.filter( (dupe,index) => childCourses.indexOf(dupe) === index).sort();

childCourses.length; //?

parentCourses //?

childCourses //?

// We've got our list of course titles with duplicates removed and now sorted in alphabetical order. Next we want to create a new courses object with all course details. The only thing we cant' get from our courses json is the badges associated with a course.

courses.length //?

// so fucking cool

const completedCourses = parentCourses.reduce( (acc, currentTitle, ind) => {
    courses.forEach( course => {
        if(currentTitle === course.Title){
            acc.push(course);
        }
    });
    return acc;
}, []);

completedCourses[0] //?
completedCourses.length //?

completedCourses //?