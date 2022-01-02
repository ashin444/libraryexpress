const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
const bodyParser = require('body-parser');  //part #1 point 4 parser to Parser

const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/addbook",
        title:"Add Book"
    },
    {
        link:"/addauthor",
        title:"/Add Author"
    }
];

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter');      //part #1 point 3 changed filename from homerouters to homerouter
const booksRouter = require('./src/routes/booksroute'); //(nav)
const authorsRouter = require('./src/routes/authorsroute');

const app = new express; 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());                         //added app.use(bodyParser.json()); 
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public')));
app.use(cors());  //part #2 point 7 added cors

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{nav,title:"Pustakam"});   //part #2 point 6 added nav,title:Pustakam
    
});





app.listen(5000,()=>{
    console.log("Server Ready on 5000");    //part #1 point 5 changed 3000 to 5000
});


//part #1 point 1 changed name to libraryexpress
//part #1 point 2 npm installed