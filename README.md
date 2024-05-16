// 1, install express
// 2, install cookie-parser

// for Session and ccokies we need to use this two lines

app.use(express.json());
app.use(express.urlencoded({ extended: true}))
