# What are we learning this week?
## Middleware
### Functions
```$xslt
next() -> this function handovers the process to the next middleware.

app.use('/', (req, res, next) => {}); 
-> '/' doesn't mean that it is the exact path. Any path that contains this, will run this middleware. If there is a next() in the previous middleware or if it's the first MW.
```