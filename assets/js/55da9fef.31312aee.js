"use strict";(self.webpackChunkcodeyourfuture_syllabus=self.webpackChunkcodeyourfuture_syllabus||[]).push([[694],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=o,h=m["".concat(i,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14226:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=["components"],s={id:"aws-dynamodb",title:"AWS & DynamoDB Workshop",sidebar_label:"AWS & DynamoDB Workshop"},i=void 0,p={unversionedId:"workshops/aws-dynamodb",id:"workshops/aws-dynamodb",title:"AWS & DynamoDB Workshop",description:"What we will learn today?",source:"@site/docs/workshops/aws-dynamodb-workshop.md",sourceDirName:"workshops",slug:"/workshops/aws-dynamodb",permalink:"/workshops/aws-dynamodb",draft:!1,editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/workshops/aws-dynamodb-workshop.md",tags:[],version:"current",frontMatter:{id:"aws-dynamodb",title:"AWS & DynamoDB Workshop",sidebar_label:"AWS & DynamoDB Workshop"}},d={},u=[{value:"Before we start",id:"before-we-start",level:2},{value:"Databases overview",id:"databases-overview",level:2},{value:"Why a database",id:"why-a-database",level:2},{value:"Relational and non-relational databases",id:"relational-and-non-relational-databases",level:2},{value:"Mongo",id:"mongo",level:2},{value:"BSON (JSON-like document)",id:"bson-json-like-document",level:2},{value:"Mongo Shell",id:"mongo-shell",level:2},{value:"1. Create a database",id:"1-create-a-database",level:3},{value:"2. Create a collection",id:"2-create-a-collection",level:3},{value:"3. Querying data",id:"3-querying-data",level:3},{value:"Exercise",id:"exercise",level:3},{value:"Key Concepts so far",id:"key-concepts-so-far",level:2},{value:"Node with Mongo",id:"node-with-mongo",level:2},{value:"Exercise part 1",id:"exercise-part-1",level:3},{value:"Exercise part 2: refactor the code",id:"exercise-part-2-refactor-the-code",level:3},{value:"Exercise Part 3: Deploy our app",id:"exercise-part-3-deploy-our-app",level:3},{value:"Mongo on Heroku",id:"mongo-on-heroku",level:2},{value:"Environment variables",id:"environment-variables",level:2},{value:"Coursework",id:"coursework",level:2},{value:"Resources",id:"resources",level:2}],m={toc:u};function c(e){var t=e.components,s=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What we will learn today?")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Databases overview"),(0,r.kt)("li",{parentName:"ul"},"MongoDB"),(0,r.kt)("li",{parentName:"ul"},"Mongo Shell"),(0,r.kt)("li",{parentName:"ul"},"Mongo with Node")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"before-we-start"},"Before we start"),(0,r.kt)("p",null,"Download and install MongoDb from ",(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/download-center#community"},"https://www.mongodb.com/download-center#community"),".\nFollow the instructions for your platform (Windows, Linux or OS X)."),(0,r.kt)("p",null,"Also download and install ",(0,r.kt)("em",{parentName:"p"},"RoboMongo")," from ",(0,r.kt)("a",{parentName:"p",href:"https://robomongo.org/download"},"https://robomongo.org/download"),"."),(0,r.kt)("p",null,"Open two instances of terminal.\nRun ",(0,r.kt)("inlineCode",{parentName:"p"},"mongod"),"\u2014this will start MongoDB then run ",(0,r.kt)("inlineCode",{parentName:"p"},"mongo")," on the other window."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"mongo")," shell (terminal), run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"version()")," and you should get\nthe version of Mongo printed on the terminal"),(0,r.kt)("h2",{id:"databases-overview"},"Databases overview"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Discussion:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"What is a database role?"),(0,r.kt)("li",{parentName:"ul"},"Why do we need a database? Why not just use the file system?"),(0,r.kt)("li",{parentName:"ul"},"What would make a good database?"))),(0,r.kt)("h2",{id:"why-a-database"},"Why a database"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Databases can store very large numbers of records efficiently (they take up\nlittle space)."),(0,r.kt)("li",{parentName:"ul"},"You can have strucutre on your data"),(0,r.kt)("li",{parentName:"ul"},"You can query for data in a database, you can sort data, add/edit/delete data"),(0,r.kt)("li",{parentName:"ul"},"You can optimise a database to make searches (queries) quicker"),(0,r.kt)("li",{parentName:"ul"},"You can relate pieces of data to each other to avoid duplication which makes\nyour information more reliable and less prone to errors"),(0,r.kt)("li",{parentName:"ul"},"ACID",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"In computer science, ACID (Atomicity, Consistency, Isolation, Durability) is\na set of properties of database transactions intended to guarantee validity\neven in the event of errors, power failures, etc."))),(0,r.kt)("li",{parentName:"ul"},"Databases can handle very large data sets."),(0,r.kt)("li",{parentName:"ul"},"Databases are concurrent; multiple users can use them at the same time without\ncorrupting the data."),(0,r.kt)("li",{parentName:"ul"},"Databases scale well")),(0,r.kt)("h2",{id:"relational-and-non-relational-databases"},"Relational and non-relational databases"),(0,r.kt)("p",null,"There are mainly two flavours of databases used commercially these days.\n",(0,r.kt)("strong",{parentName:"p"},"Relational")," (SQL) and ",(0,r.kt)("strong",{parentName:"p"},"non-relational")," (NoSQL) databases."),(0,r.kt)("p",null,"Relational databases include MySQL, Postgres, Microsoft SQL Server, Oracle\nDatabase and many others. They've been around for a long time and they're used\nfor all kind of applications."),(0,r.kt)("p",null,"Non-relational databases are relatively new and they include the likes of\nMongoDB, Casandra, Neo4j etc..."),(0,r.kt)("h2",{id:"mongo"},"Mongo"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"MongoDB is a free and open-source cross-platform document-oriented database\nprogram. Classified as a NoSQL database program, MongoDB uses JSON-like\ndocuments.")),(0,r.kt)("h2",{id:"bson-json-like-document"},"BSON (JSON-like document)"),(0,r.kt)("p",null,"In a Relational database, information is organised in ",(0,r.kt)("em",{parentName:"p"},"rows")," in ",(0,r.kt)("em",{parentName:"p"},"tables")," with\npredefined ",(0,r.kt)("em",{parentName:"p"},"columns"),"."),(0,r.kt)("p",null,"In a non-relational database, information is organised in ",(0,r.kt)("em",{parentName:"p"},"documents"),". MongoDB\nstores data records in a format similar to JSON called BSON. BSON is a binary\nrepresentation of JSON documents, though it contains more data types than JSON."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.mongodb.com/manual/_images/crud-annotated-document.bakedsvg.svg",alt:"BSON object"})),(0,r.kt)("p",null,"Let's look at this database table ",(0,r.kt)("em",{parentName:"p"},"Students")," containing information about\nstudents participating in a course ",(0,r.kt)("img",{alt:"students table",src:n(51049).Z,width:"3096",height:"910"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Exercise: What are the columns, rows and tables?")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SQL and MongoDB correspondence",src:n(84336).Z,width:"702",height:"362"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Exercise: Open ",(0,r.kt)("a",{parentName:"p",href:"https://jsonlint.com/"},"https://jsonlint.com/")," and write a JSON representation of two\nrows in the Students table example. Click ",(0,r.kt)("em",{parentName:"p"},"Validate JSON")," and make sure the\ndocument is valid."),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Are there any alternative representations you can think of?"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BSON")," is very similar to JSON. It contains more data types than JSON, it also\nallows the field names to not be quoted. Read more information about the\nformat: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/core/document/"},"https://docs.mongodb.com/manual/core/document/"),"."),(0,r.kt)("h2",{id:"mongo-shell"},"Mongo Shell"),(0,r.kt)("p",null,"Let's go to ",(0,r.kt)("inlineCode",{parentName:"p"},"mongo")," shell and start interacting with our database system."),(0,r.kt)("h3",{id:"1-create-a-database"},"1. Create a database"),(0,r.kt)("p",null,"On the shell, type the command ",(0,r.kt)("inlineCode",{parentName:"p"},"use profile")," The shell should respond with\n",(0,r.kt)("strong",{parentName:"p"},"switched to db profile"),". At this stage, the database does not necessarily\nexist once we start adding information (collections) then the database will be\ncreated and the collection added to them."),(0,r.kt)("p",null,"To check the current database, run ",(0,r.kt)("inlineCode",{parentName:"p"},"db"),"."),(0,r.kt)("h3",{id:"2-create-a-collection"},"2. Create a collection"),(0,r.kt)("p",null,"Now let's create our first collection. Make sure you're using the ",(0,r.kt)("strong",{parentName:"p"},"profile"),"\ndatabase. Run ",(0,r.kt)("inlineCode",{parentName:"p"},"db")," and it should print ",(0,r.kt)("strong",{parentName:"p"},"profile")," on the terminal."),(0,r.kt)("p",null,"We will insert a simple document representing a student."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"db.students.insertOne({ name: 'Habiiba', country: 'Somalia', assignedMentors: ['Ashleigh'] })"))),(0,r.kt)("p",null,"You should get a confirmation with the number of records inserted."),(0,r.kt)("p",null,"You can also insert more than one document at a time. Run this command"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"db.students.insertMany([{ name: 'Khalid', country: 'Yemen' }, { name: 'Yohannes', country: 'Ethiopia', assignedMentors: ['Michael'] }])"))),(0,r.kt)("p",null,"run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"db.students.count()")," and you should get that you have 3\ndocuments."),(0,r.kt)("h3",{id:"3-querying-data"},"3. Querying data"),(0,r.kt)("p",null,"Querying is one of the most important reasons that we use databases. SQL is the\nlanguage used for querying relational databases, In MongoDB, we can use the\nmethod ",(0,r.kt)("inlineCode",{parentName:"p"},"db.collection.find"),", passing a query in the form of a JSON object as a\nfirst parameter."),(0,r.kt)("p",null,"Let's try few queries:"),(0,r.kt)("p",null,"Get all the students from Ethiopia."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"db.students.find({country: 'Ethiopia'})"))),(0,r.kt)("p",null,"We can also provide an extra parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"projection")," to define what fields we\nwant back from the query."),(0,r.kt)("p",null,"For example, if we're only interested in the name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'db.students.find({ country: "Ethiopia" }, { name: 1 });\n// you can also use { name: true }\n')),(0,r.kt)("p",null,"Let's add another two students to the collection"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"db.students.insertOne({ name: 'Mohamed', country: 'Sudan', assignedMentors: ['Michael'] })")),(0,r.kt)("p",null,"and"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"db.students.insertOne({ name: 'Mohamed', country: 'Syria', assignedMentors: ['Michael', 'Ashleigh'] })")),(0,r.kt)("p",null,"Now let's query for all the students that have ",(0,r.kt)("strong",{parentName:"p"},"Michael")," as mentor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'db.students.find({ assignedMentors: ["Michael"] });\n')),(0,r.kt)("p",null,'What if we want to find any student whose name is "Mohamed" AND whose country is\n"Sudan". You can then use the ',(0,r.kt)("strong",{parentName:"p"},"logical query operator \\$and"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'db.students.find({\n  $and: [{ name: "Mohamed" }, { country: "Sudan" }],\n});\n')),(0,r.kt)("p",null,"Notice that name and country are case-sensitive."),(0,r.kt)("h3",{id:"exercise"},"Exercise"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Find all students for whom ",(0,r.kt)("strong",{parentName:"li"},"Ashleigh")," is an assigned mentor."),(0,r.kt)("li",{parentName:"ol"},"Find all students that have ",(0,r.kt)("strong",{parentName:"li"},"Michael")," as their only mentor"),(0,r.kt)("li",{parentName:"ol"},"Find students whose name is ",(0,r.kt)("strong",{parentName:"li"},"Mohamed")," OR ",(0,r.kt)("strong",{parentName:"li"},"Michael")," is their only mentor"),(0,r.kt)("li",{parentName:"ol"},"Read about the\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/operator/query/in/#op._S_in"},"\\$in operator"),"\nand use it to find students whose country is either Sudan or Ethiopia."),(0,r.kt)("li",{parentName:"ol"},"Look at the other\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/operator/query-comparison/"},"Comparison Query Operators"),"\nand the\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/operator/query-logical/"},"Logical Query Operators"),"\nand use few of them.")),(0,r.kt)("h2",{id:"key-concepts-so-far"},"Key Concepts so far"),(0,r.kt)("p",null,"In Mongo, a ",(0,r.kt)("strong",{parentName:"p"},"database")," contains ",(0,r.kt)("strong",{parentName:"p"},"collections")," that contain ",(0,r.kt)("strong",{parentName:"p"},"BSON\ndocuments"),". We can use the ",(0,r.kt)("strong",{parentName:"p"},"mongo shell")," to interact with our Mongo\ndatabases. The ",(0,r.kt)("strong",{parentName:"p"},"query documents")," are used to specify a selection filter using\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/operator/query/"},(0,r.kt)("strong",{parentName:"a"},"query operators")),"\nto search for documents in the collections."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Checkpoint: Do you understand all the words highlighed in the last paragraph?")),(0,r.kt)("h2",{id:"node-with-mongo"},"Node with Mongo"),(0,r.kt)("p",null,"So far we've been connecting to Mongo using the Mongo shell. Mongo has drivers\nfor most major programming languages but it's especially popular with NodeJS\napplications as its API and Query model is very close to JavaScript syntax and\npatterns."),(0,r.kt)("p",null,"Let's start wiring Node with MongoDB as a datastore."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fork and Clone the project\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CodeYourFuture/mongo-node-workshop"},"https://github.com/CodeYourFuture/mongo-node-workshop"),".\nrun ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install")," then ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev")," to run the application with autoreload -\nGo to the browser and make sure it's up and running.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the MongoDB Node.js Driver ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install mongodb --save"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Let's add an endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"api/students")," that returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," containing all the\nstudents that we've been saving to the database from the shell."))),(0,r.kt)("p",null,"Go to the file ",(0,r.kt)("inlineCode",{parentName:"p"},"controllers/apiController"),", on top of the file, require the\nmodule"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const MongoClient = require("mongodb").MongoClient;\n')),(0,r.kt)("p",null,"then add an endpoint for ",(0,r.kt)("inlineCode",{parentName:"p"},"/students")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'router.get("/students", (req, res) => {\n  const mongoConnection = "mongodb://localhost:27017/profile";\n\n  MongoClient.connect(mongoConnection, (err, db) => {\n    const cursor = db.collection("students").find({});\n    cursor.toArray((error, students) => {\n      db.close();\n      res.json(students);\n    });\n  });\n});\n')),(0,r.kt)("p",null,"Go to your browser ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/students")," and you should see a JSON containing the\ndocuments we've added to the ",(0,r.kt)("em",{parentName:"p"},"students")," collection earlier."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Exercise: Let's step through the previous code and understand it line by line."),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"What is a Mongo conection string?"))),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/connection-string/"},"connection string"),"\nfollows this format:\n",(0,r.kt)("inlineCode",{parentName:"p"},"mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]"),".\nWhat parts do you have in our connection string right now?"),(0,r.kt)("h3",{id:"exercise-part-1"},"Exercise part 1"),(0,r.kt)("p",null,"Now let's change the ",(0,r.kt)("inlineCode",{parentName:"p"},"api/posts")," to also use the mongo database instead of the\njson file under /data."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"First step is to save the ",(0,r.kt)("em",{parentName:"p"},"posts")," in the database. Similar to what we did\nwith ",(0,r.kt)("em",{parentName:"p"},"students")," collection, use the Mongo shell to create a new collection\ncalled ",(0,r.kt)("em",{parentName:"p"},"posts")," and use ",(0,r.kt)("strong",{parentName:"p"},"insertMany")," to insert all the documents.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/posts")," to read its contents from the database (very\nsimilar code to what we wrote in ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/students")," endpoint). Go to\n",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/api/posts")," and make sure you see the posts. Update a\ndocument in the database (either check the documentation for\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/operator/update/set/#set-top-level-fields"},"update"),"\nor use RoboMongo) and see if it gets reflected.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once you have the endpoint running, delete the json ",(0,r.kt)("inlineCode",{parentName:"p"},"data/posts.json"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now if you go to the root of your application ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),", you\nwill encounter an error as it will still try to read from the file system but\nwe deleted the file. Update the ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," endpoint to also get the Posts from the\ndatabase."))),(0,r.kt)("h3",{id:"exercise-part-2-refactor-the-code"},"Exercise part 2: refactor the code"),(0,r.kt)("p",null,"Even though our code does what's supposed to do, it has several issues. We have\na lot of duplicate code\u2014both endpoints GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/posts")," and GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," do the\nsame call to the database and then do ",(0,r.kt)("em",{parentName:"p"},"something")," with it. It's only that\n",(0,r.kt)("em",{parentName:"p"},"something")," (the callback) that is different so let's refactor the code to\neliminate duplication (DRY)."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The variable ",(0,r.kt)("inlineCode",{parentName:"p"},"mongoConnection")," is declared multiple times, that means that if\nthe connection string changes then we need to change multiple places causing\npossibilities of missing one instance and causing errors. Let's declare it\nonce and use it in the rest of the app."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Why is it bad to have duplicate code?"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Extract the Mongo calls to seperate functions. Extract the route for\n",(0,r.kt)("inlineCode",{parentName:"p"},"/api/students")," into a function named ",(0,r.kt)("inlineCode",{parentName:"p"},"getStudents")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"What will the function signature be?"),(0,r.kt)("li",{parentName:"ul"},"Remember the ",(0,r.kt)("strong",{parentName:"li"},"Single Responsibility Principle"),"\u2014the route handlers have\nmultiple responsibilities right now: Connecting to Mongo, getting the data\nthen sending it back as a response."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Move the new function to a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"helpers/db-client.js"),", export the\nfunctions and use them in the original file."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Do you remember how we create modules and use them? ",(0,r.kt)("inlineCode",{parentName:"li"},"module.exports")," and\n",(0,r.kt)("inlineCode",{parentName:"li"},"require"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Do the same for the ",(0,r.kt)("inlineCode",{parentName:"p"},"/posts")))),(0,r.kt)("h3",{id:"exercise-part-3-deploy-our-app"},"Exercise Part 3: Deploy our app"),(0,r.kt)("p",null,"Let's deploy our Database-Driven Application to Heroku. If you don't remember\nthe steps, refresh your memory from\n",(0,r.kt)("a",{parentName:"p",href:"/node/week-3/lesson#heroku"},"a previous lesson"),"."),(0,r.kt)("p",null,"Once you're finished, Go to your application on heroku and see if it is working\nproperly."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"It should not be working.")),(0,r.kt)("p",null,"Can you have a guess on what went wrong? To see what's happening on the heroku\nserver, run ",(0,r.kt)("inlineCode",{parentName:"p"},"heroku logs")," from the terminal and check the logs."),(0,r.kt)("h2",{id:"mongo-on-heroku"},"Mongo on Heroku"),(0,r.kt)("p",null,"Heroku, AWS and other cloud services allows us to use databases and other\nservices on the cloud without having to maintain physical servers making it easy\nto scale, monitor costs and build good solutions in general."),(0,r.kt)("p",null,"We've already used ",(0,r.kt)("strong",{parentName:"p"},"DynamoDB")," on AWS. This week, we'll do ",(0,r.kt)("strong",{parentName:"p"},"MongoDB"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to Heroku dashboard\n",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.heroku.com"},"https://dashboard.heroku.com"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on your app name in the dashboard. Go to ",(0,r.kt)("em",{parentName:"p"},"Resources"),", under ",(0,r.kt)("em",{parentName:"p"},"addons"),",\nsearch for ",(0,r.kt)("em",{parentName:"p"},"mLab MongoDB")," and choose it. When you're prompted with this\nscreen\u2014click on ",(0,r.kt)("strong",{parentName:"p"},"Provision"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"MongoDB on Heroku",src:n(6479).Z,width:"1060",height:"892"})),(0,r.kt)("p",{parentName:"li"},"The new MongoDB service will appear under Resources-you can click on it and it\nwill take you to a web interface to administer your MongoDB instance.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("em",{parentName:"p"},"Settings")," and click on ",(0,r.kt)("strong",{parentName:"p"},"Reveal Config Vars"),". You should see the\na variable called MongoDB_URI\u2014that is the connection string for the MongoDB\ninstance on Heroku (on mLab used by Heroku)."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"So how can we use this connection string instead of our local one?")))),(0,r.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,r.kt)("p",null,"In NodeJS, The ",(0,r.kt)("inlineCode",{parentName:"p"},"process.env")," property returns an object containing the user\nenvironment. Environment variables allow us to configure different aspects of\nour application based on the environment where it's running\u2014so for instance,\nwhen we run our application locally, we want to connect to the local MongoDB but\non Heroku, we want to connect to a different one."),(0,r.kt)("p",null,"Connection strings are typically saved and used as Environment variables, other\ntypical uses are with passwords, secrets, URLs of other services etc... Anything\nthat is environment specific and that shouldn't live in the source code."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Security tip"),": Never add passwords, connection strings or any sensitive\ninformation in your source code, always use an Environment variable.")),(0,r.kt)("p",null,"Services like Heroku and AWS can then use these environment variables to\nconfigure aspects of the application."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We've already used one Environment variable for Heroku before\u2014what was it?"),(0,r.kt)("p",{parentName:"blockquote"},"Exercise: Use the environment ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoDB_URI")," to connect to MongoDB on Heroku,\nbut fallback to ",(0,r.kt)("strong",{parentName:"p"},"localhost connection string")," if there is no environment\nvariable provided.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Commit and push the changes to Heroku and see if it works.")),(0,r.kt)("h2",{id:"coursework"},"Coursework"),(0,r.kt)("p",null,"Refer to the MongoDB/Node workshop for the Homework tasks -\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CodeYourFuture/mongo-node-workshop"},"https://github.com/CodeYourFuture/mongo-node-workshop")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read ",(0,r.kt)("a",{parentName:"li",href:"https://www.upguard.com/articles/mysql-vs-mongodb"},"https://www.upguard.com/articles/mysql-vs-mongodb"))),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Why use a database:\n",(0,r.kt)("a",{parentName:"li",href:"https://softwareengineering.stackexchange.com/questions/190482/why-use-a-database-instead-of-just-saving-your-data-to-disk"},"https://softwareengineering.stackexchange.com/questions/190482/why-use-a-database-instead-of-just-saving-your-data-to-disk")),(0,r.kt)("li",{parentName:"ul"},"Databases and Collections:\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/core/databases-and-collections/"},"https://docs.mongodb.com/manual/core/databases-and-collections/")),(0,r.kt)("li",{parentName:"ul"},"Documents in MongoDB:\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/core/document/"},"https://docs.mongodb.com/manual/core/document/")),(0,r.kt)("li",{parentName:"ul"},"Practice on a web Mongo shell:\n",(0,r.kt)("a",{parentName:"li",href:"https://www.tutorialspoint.com/mongodb_terminal_online.php"},"https://www.tutorialspoint.com/mongodb_terminal_online.php")),(0,r.kt)("li",{parentName:"ul"},"Environment Variables:\n",(0,r.kt)("a",{parentName:"li",href:"https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html"},"https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html")),(0,r.kt)("li",{parentName:"ul"},"MongoDB SQL comparison:\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/sql-comparison/"},"https://docs.mongodb.com/manual/reference/sql-comparison/"))))}c.isMDXComponent=!0},84336:function(e,t,n){t.Z=n.p+"assets/images/SQL-MongoDB-f91f72260b3377e964110e13eb105b09.png"},6479:function(e,t,n){t.Z=n.p+"assets/images/heroku-mongo-ceb3b1f2c97c395de26be8357cfa5fb5.png"},51049:function(e,t,n){t.Z=n.p+"assets/images/table-example-f4794a6fdcfa1602e3fa7935ab67a734.png"}}]);