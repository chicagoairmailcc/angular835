[![pipeline status](https://gitlab.com/angular835/angular835.gitlab.io/badges/master/pipeline.svg)](https://gitlab.com/angular835/angular835.gitlab.io/commits/master)

[![coverage report](https://gitlab.com/angular835/angular835.gitlab.io/badges/master/coverage.svg)](https://gitlab.com/angular835/angular835.gitlab.io/commits/master)



# Angular835

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

I have a problem. 

Please visit https://angular835.netlify.com/item/apple 
and look at the console log 

particularly for this console log: 

```typescript
  getCurrentUrl() {
    this.activatedRoute.url.subscribe(data => {
      console.log({urlSegmentsFromItem: data});
    });
  }
```

you'd think you'd get "item", "apple" but I get "". 
Why?

Thank you for looking and please help. 

Sincerely, 

