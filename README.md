# Creepin' on Colleagues

## What is this?

Creepin' on Colleagues is a toy app that allows Treehouse students to "creep" on each other's progress though the Treehouse curriculum. 

To use it, simply enter a Treehouse student's Treehouse username. The students stats will load.

## Dev notes

Creepin' on Colleagues is a Node.js app built with Express.js and serving a static front-end. In fact, at present, there are not scripts running on the client-side.

The request to Treehouse for student profile data is handled server-side, which is not typical and adds additional overhead to the server. The reason for requesting data server-side was to demonstrate how that might be done. Ordinarily, the request would be made client-side, sparing the server the work.

The app is deployed on Heroku. 