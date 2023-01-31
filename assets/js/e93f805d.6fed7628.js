"use strict";(self.webpackChunkcodeyourfuture_syllabus=self.webpackChunkcodeyourfuture_syllabus||[]).push([[2461],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r=n(86010),o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(16550),s=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function g(e){var t,n,a,o,l=e.defaultValue,i=e.queryString,s=void 0!==i&&i,u=e.groupId,d=p(e),g=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:d})})),b=g[0],f=g[1],k=h({queryString:s,groupId:u}),v=k[0],w=k[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=y[0],x=y[1],T=function(){var e=null!=v?v:N;return m({value:e,tabValues:d})?e:null}();return(0,r.useEffect)((function(){T&&f(T)}),[T]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);f(e),w(e),x(e)}),[w,x,d]),tabValues:d}}var b=n(72389),f="tabList__CuJ",k="tabItem_LNqP";function v(e){var t=e.className,n=e.block,i=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(d(t),s(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;n=null!=(o=c[l])?o:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",k,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function w(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function N(e){var t=(0,b.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},57723:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t="https://docs.google.com/forms/d/e/1FAIpQLScq8Zgr0pz7aMDj0D768eCpW798XgtDsKfpA6BquqK5Hdtj4A/viewform?embedded=true&entry.1672476057="+e.module.replace(" ","+")+"&entry.74981796="+e.week.replace(" ","+");return a.createElement("div",{className:"feedback"},a.createElement("div",{className:"feedback__wrapper"},a.createElement("iframe",{src:t,width:"640",height:"640",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading\u2026"),a.createElement("center",null,a.createElement("p",null,"Not loading? Form can be found"," ",a.createElement("a",{target:"_blank",href:t},"here"),". Click"," ",a.createElement("a",{target:"_blank",href:"https://docs.google.com/forms/d/1F2mB10japkHAPb3H-9Q4YrYH0i61GoMG1tk-P4ZT808/edit"},"here")," ","to get edit access."))))}},55078:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return h}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=n(74866),i=n(85162),s=n(57723),u=["components"],c={id:"lesson",title:"JavaScript Core III - 3",sidebar_label:"Lesson"},d=void 0,p={unversionedId:"js-core-3/week-3/lesson",id:"js-core-3/week-3/lesson",title:"JavaScript Core III - 3",description:"Learning Objectives",source:"@site/docs/js-core-3/week-3/lesson.md",sourceDirName:"js-core-3/week-3",slug:"/js-core-3/week-3/lesson",permalink:"/js-core-3/week-3/lesson",draft:!1,editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/js-core-3/week-3/lesson.md",tags:[],version:"current",frontMatter:{id:"lesson",title:"JavaScript Core III - 3",sidebar_label:"Lesson"},sidebar:"JavaScriptCore3",previous:{title:"Instructor Notes",permalink:"/js-core-3/week-2/instructors"},next:{title:"Coursework",permalink:"/js-core-3/week-3/homework"}},m={},h=[{value:"Learning Objectives",id:"learning-objectives",level:2},{value:"Agenda",id:"agenda",level:2},{value:"1. Variable Scope",id:"1-variable-scope",level:2},{value:"The Problem",id:"the-problem",level:3},{value:"The Solution",id:"the-solution",level:3},{value:"What is Scope?",id:"what-is-scope",level:3},{value:"Global scope",id:"global-scope",level:3},{value:"Local Variables",id:"local-variables",level:3},{value:"Nesting",id:"nesting",level:3},{value:"Block scope",id:"block-scope",level:3},{value:"Code block",id:"code-block",level:4},{value:"var vs let and const",id:"var-vs-let-and-const",level:4},{value:"Exercise",id:"exercise",level:3},{value:"2. Array Destructuring",id:"2-array-destructuring",level:2},{value:"The Problem",id:"the-problem-1",level:3},{value:"Exercise (1)",id:"exercise-1",level:4},{value:"Destructuring syntax",id:"destructuring-syntax",level:3},{value:"Exercise (2)",id:"exercise-2",level:4},{value:"Exercise (3)",id:"exercise-3",level:4},{value:"Exercise (4)",id:"exercise-4",level:4},{value:"Exercise (5)",id:"exercise-5",level:4},{value:"Resources",id:"resources",level:3},{value:"3. Project Work",id:"3-project-work",level:2},{value:"Explanation",id:"explanation",level:3},{value:"Coursework",id:"coursework",level:2},{value:"Feedback",id:"feedback",level:2}],g={toc:h};function b(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"learning-objectives"},"Learning Objectives"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The learner should understand the concept of variable scope and be able to define them in global, local and block scope"),(0,o.kt)("li",{parentName:"ul"},"The learner should be able to use destructuring to extract data from arrays"),(0,o.kt)("li",{parentName:"ul"},"The learner can describe why you would want to use array destructuring")),(0,o.kt)("h2",{id:"agenda"},"Agenda"),(0,o.kt)("p",null,"The purpose of this class is to introduce to the trainee:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The scoping of variables, specifically in reference to:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Global"),(0,o.kt)("li",{parentName:"ul"},"Local"),(0,o.kt)("li",{parentName:"ul"},"Block"))),(0,o.kt)("li",{parentName:"ol"},"Array Destructuring"),(0,o.kt)("li",{parentName:"ol"},"Project Work")),(0,o.kt)("h2",{id:"1-variable-scope"},"1. Variable Scope"),(0,o.kt)("h3",{id:"the-problem"},"The Problem"),(0,o.kt)("p",null,"Variables are amazing! Variables let us store data and reuse it many times rather than writing the same data over and over again, also if the variables are well named then it makes it much easier to think about what our code is doing."),(0,o.kt)("p",null,"As we know, after we declare or define a new variable we can refer to it later in our code using the variable name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let name = "mo";\nlet age = 42;\nlet favouriteFoods = ["pizza", "apples", "tofu"];\n\n// lots of code here\n\n// later\nconsole.log("My name is " + name);\n')),(0,o.kt)("p",null,"Now, imagine what would happen when our code gets really long. Every time we want to define a new variable we have to check that it hasn't already been used for something else. If that variable is already being used and we redefine it, bad things can happen. We could overwrite something important."),(0,o.kt)("p",null,"Imagine a banking app being built by two developers. Developer 1 uses the variable name ",(0,o.kt)("inlineCode",{parentName:"p"},"money")," to store the total amount of cash a single customer has in the bank, Developer 2 uses the variable name ",(0,o.kt)("inlineCode",{parentName:"p"},"money")," to store the total amount of cash that ALL customers have in the bank added together, the total money in the bank's vaults. This could be really good news for a customer who accidentally receives the entire bank's money in their account, but really BAD news for us as the owners of a bank."),(0,o.kt)("h3",{id:"the-solution"},"The Solution"),(0,o.kt)("p",null,"One solution might be that every time we want to create a new variable, we call around all of the other developers on the project and ask them if it's safe to use the variable name ",(0,o.kt)("inlineCode",{parentName:"p"},"money"),". We can quickly see a problem with this, some codebases are millions of lines long! No single person knows what is contained in every file. It would be impossible to know what variables are safe to use and which are not."),(0,o.kt)("p",null,"Instead, we need to find a way to make variables ",(0,o.kt)("strong",{parentName:"p"},"safer"),". We need a way to use the best variable name to describe our data, without worrying that we will be causing problems in a different part of the codebase."),(0,o.kt)("p",null,"We call this ",(0,o.kt)("inlineCode",{parentName:"p"},"scope"),"."),(0,o.kt)("h3",{id:"what-is-scope"},"What is Scope?"),(0,o.kt)("p",null,"Think about the way that laws are set in different countries. Most laws are set by the government of that country and are ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," to that country. However, some laws are international, laws like 'no slavery' apply across all countries, these are ",(0,o.kt)("inlineCode",{parentName:"p"},"global")," laws."),(0,o.kt)("p",null,"In some countries, different regions inside the country can set their own laws too. In America you must be 21 to drink (national law), but in the state of Massachusetts all bars must be closed by 2AM (state law). These are two levels of local laws."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i0.wp.com/blog.codeanalogies.com/wp-content/uploads/2017/11/474b7-1ywpubaj-_gmws4jedvbufa.png?w=730&ssl=1",alt:"Types of laws"})),(0,o.kt)("p",null,"In Massachusetts, a citizen must follow all 3: International Law, National Law and State Law."),(0,o.kt)("p",null,"But a pirate \ud83c\udff4\u200d\u2620\ufe0f in the middle of the ocean only needs to follow International Law (and perhaps the law of the Ship)."),(0,o.kt)("p",null,"In the same way we think about which laws apply to which ",(0,o.kt)("strong",{parentName:"p"},"parts of a country")," we must also think about which variables apply to which ",(0,o.kt)("strong",{parentName:"p"},"parts of your code"),". Variables, like laws, only apply to a certain area."),(0,o.kt)("p",null,"When we try to access a variable that does not exist or has gone out of scope, JavaScript will throw a ",(0,o.kt)("inlineCode",{parentName:"p"},"ReferenceError")," telling us that a variable is not defined."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let globalLaw = "no slavery";\n// only 1 law applies here\n\nfunction usa() {\n  let nationalLaw = "drinking age is 21";\n  // 2 laws apply here\n\n  function massachusetts() {\n    let stateLaw = "bars closed at 2am";\n    // all 3 laws apply here\n  }\n}\n\nconsole.log(stateLaw); // Error: \'stateLaw\' is not defined\n')),(0,o.kt)("p",null,"In the example above, the State Law only applies to Massachusetts. When we try to ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"stateLaw")," variable at the end, it is not defined. This part of your code does not even know this variable exists!"),(0,o.kt)("h3",{id:"global-scope"},"Global scope"),(0,o.kt)("p",null,"Variables declared outside of any function or code block are available throughout an application. They are referred to as global variables and exist in global scope."),(0,o.kt)("p",null,"We can see in the previous example that ",(0,o.kt)("inlineCode",{parentName:"p"},"globalLaw")," is a global variable."),(0,o.kt)("p",null,"Because global variables are visible by throughout the application, data stored in them can be read and updated by any part of your code. At first this might seem convenient, but in practice this is likely to cause problems in longer term as your code base grows."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It may not be obvious where in your code global variables are used, which can make refactoring hard"),(0,o.kt)("li",{parentName:"ul"},"Other part of your code may accidentally overwrite values in global variables and lead to bugs.")),(0,o.kt)("p",null,"Because of above ",(0,o.kt)("strong",{parentName:"p"},"it is good engineering practice to only use global variables when absolutely necessary"),"."),(0,o.kt)("p",null,"Note that you can also declare a global variable by assigning to a variable without declaring it with a ",(0,o.kt)("inlineCode",{parentName:"p"},"var"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," keyword."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function accidentallyGlobal() {\n  oops = "I am global";\n}\n\naccidentallyGlobal();\n\nconsole.log(oops);\n')),(0,o.kt)("p",null,"Be sure to keep an eye out for above problem and avoid it."),(0,o.kt)("h3",{id:"local-variables"},"Local Variables"),(0,o.kt)("p",null,"Let's rewind and look at this in detail. We know that variables are declared using the ",(0,o.kt)("inlineCode",{parentName:"p"},"var"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," keyword."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let greeting = "Hi ";\n')),(0,o.kt)("p",null,"If we define a variable inside a function, it becomes ",(0,o.kt)("strong",{parentName:"p"},"local")," to that function. If we want to use a fancy word, we can also say it becomes ",(0,o.kt)("strong",{parentName:"p"},"scoped")," to that function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function greetUser(name) {\n  let greeting = "Hi "; // This variable only exists here\n  console.log(greeting + name);\n}\n\ngreetUser("Naima");\nconsole.log(greeting); // It doesn\'t exist here\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log(greeting)"),' on the last line throws an error, it tells us that "greeting is not not defined". Why is this? Because the variable ',(0,o.kt)("inlineCode",{parentName:"p"},"greeting")," was defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"greetUser")," function, it ",(0,o.kt)("strong",{parentName:"p"},"does not exist")," outside the function."),(0,o.kt)("p",null,"This lets us do new things with variables. You cannot usually create two variables with the same name. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function greetUser(name) {\n  let greeting = "Hi";\n  let greeting = "Shalom";\n  // Error: \'greeting\' has already been declared\n}\n')),(0,o.kt)("p",null,"But in the same way countries have own laws, functions have own ",(0,o.kt)("inlineCode",{parentName:"p"},"scopes"),"! And so it becomes possible to use the same variable name for different situations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function greetOnce(name) {\n  let greeting = "Hi ";\n  console.log(greeting + name);\n}\n\nfunction greetAgain(name) {\n  let greeting = "Shalom ";\n  console.log(greeting + name);\n}\n')),(0,o.kt)("p",null,"We have used the variable name ",(0,o.kt)("inlineCode",{parentName:"p"},"greeting")," twice but it's very important to remember that ",(0,o.kt)("strong",{parentName:"p"},"these are not the same variable"),"! The two variables called 'greeting' do not even know each other exist."),(0,o.kt)("h3",{id:"nesting"},"Nesting"),(0,o.kt)("p",null,"It is important to note that scope is nested. That means when you have one function inside another function, you can access variables defined in outer function from the inner function. However you cannot access variables defined in inner function from outer function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function grandfather() {\n  let name = "Hammad";\n  // likes is not accessible here\n  function parent() {\n    // name is accessible here\n    // likes is not accessible here\n    function child() {\n      // Innermost level of the scope chain\n      // name is also accessible here\n      let likes = "Coding";\n    }\n\n    child();\n  }\n\n  parent();\n}\n\ngrandfather();\n')),(0,o.kt)("h3",{id:"block-scope"},"Block scope"),(0,o.kt)("h4",{id:"code-block"},"Code block"),(0,o.kt)("p",null,"A block is piece of code inside by curly brackets, for example following ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statements and ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"while")," loops."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"if (age > 18) {\n  // code block\n}\n")),(0,o.kt)("h4",{id:"var-vs-let-and-const"},"var vs let and const"),(0,o.kt)("p",null,"In addition to previous scope rules, JavaScript uses different scope methods for variables depending how they are defined."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Variables declared using ",(0,o.kt)("inlineCode",{parentName:"li"},"var")," keyword use function scope. That means variables defined using ",(0,o.kt)("inlineCode",{parentName:"li"},"var")," exist within function they are defined in."),(0,o.kt)("li",{parentName:"ul"},"Variables declared using ",(0,o.kt)("inlineCode",{parentName:"li"},"let")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"const")," keyword use block scope. Variables defined using ",(0,o.kt)("inlineCode",{parentName:"li"},"let")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"const")," keywords exist within the block they are defined in.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function getBook() {\n  if (true) {\n    var bookOne = "JavaScript: The Good Parts";\n    let bookTwo = "Eloquent JavaScript";\n    const bookThree = "The JS Way";\n  }\n\n  console.log(bookOne); // JavaScript: The Good Parts\n  console.log(bookTwo); // ReferenceError: bookTwo is not defined\n  console.log(bookThree); // ReferenceError: bookThree is not defined\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Any time you define a variable inside a block, that variable cannot escape that block.")," We say the variable is ",(0,o.kt)("inlineCode",{parentName:"p"},"scoped")," to that block."),(0,o.kt)("p",null,"Scope allows us to control where our variables can be accessed from. We want to ensure that variables are available where they are needed and ideally as little as possible elsewhere to prevent naming collisions or accidental updates. As a result using ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," is preferrable to using ",(0,o.kt)("inlineCode",{parentName:"p"},"var")," since they has stricter scope definition."),(0,o.kt)("h3",{id:"exercise"},"Exercise"),(0,o.kt)("admonition",{title:"Exercise",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In small groups answer the following the questions."),(0,o.kt)("p",{parentName:"admonition"},"Try to solve each exercise before running code to verify answer. Try to explain your answer using what you learned above about scope. Think about the order JavaScript will execute each piece of code and what the values will be at each stage."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// 1.\nfunction one() {\n  var a = 10;\n}\none();\nconsole.log(a); // what is the value of a\n\n// 2.\nfunction two() {\n  let b = 10;\n  let b = 20;\n}\ntwo();\nconsole.log(b); // what is the value of b and why\n\n// 3.\nlet c;\nfunction three() {\n  c = 25;\n}\nthree();\nconsole.log(c); // what is the value of c and why\n\n// 4.\nfunction four() {\n  d = 25;\n}\nfour();\nconsole.log(d); // what is the value of d and why\n\n// 5.\nlet e;\nfunction five() {\n  const greeting = "Hello";\n\n  function greet() {\n    let name = "Eddie";\n    e = `${greeting} ${name}`;\n  }\n  greet();\n}\nfive();\nconsole.log(e); // what is the value of e and why\n\n// 6.\nfunction six() {\n  if (true) {\n    let f = 50;\n  }\n  console.log(f); // what is the value of f and why\n}\n\nsix();\n'))),(0,o.kt)("h2",{id:"2-array-destructuring"},"2. Array Destructuring"),(0,o.kt)("h3",{id:"the-problem-1"},"The Problem"),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"https://syllabus.codeyourfuture.io/js-core-1/week-2/lesson#arrays"},"Javascript 1 - Lesson 2"),", you learnt how to store multiple values in one variable using an ",(0,o.kt)("strong",{parentName:"p"},"array"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let fruits = ["apple", "orange", "banana"];\n')),(0,o.kt)("p",null,"You also learnt that you can retrieve a value from an Array by using the ",(0,o.kt)("strong",{parentName:"p"},"index")," of the value to access it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let firstFruit = fruits[0];\nconsole.log(firstFruit); // This will print 'apple'\n\nlet secondFruit = fruits[1];\nconsole.log(secondFruit); // This will print 'orange'\n\nlet thirdFruit = fruits[2];\nconsole.log(thirdFruit); // This will print 'banana'\n\nconsole.log(\n  `My fruits array contains: ${firstFruit}, ${secondFruit} and ${thirdFruit}.`\n);\n")),(0,o.kt)("h4",{id:"exercise-1"},"Exercise (1)"),(0,o.kt)("admonition",{title:"Exercise",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We have the names of the Simpsons family stored in an array called ",(0,o.kt)("inlineCode",{parentName:"p"},"familyMembers"),". Create variables to store the names of the family members so that the ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log")," will print out the following message:\n",(0,o.kt)("inlineCode",{parentName:"p"},"In the Simpsons family, Homer and Marge are the parents. Bart is the son, Lisa is the daughter, and Maggie is the baby.")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let familyMembers = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];\n\n// Create variables to store the values here\n\nconsole.log(\n  `In the Simpsons family, ${dad} and ${mum} are the parents. ${son} is the son, ${daughter} is the daughter, and ${baby} is the baby.`\n);\n')),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Question"),": How many lines of code did you add?")),(0,o.kt)("h3",{id:"destructuring-syntax"},"Destructuring syntax"),(0,o.kt)("p",null,"There is a way to extract all the values of an array into variable in just ",(0,o.kt)("strong",{parentName:"p"},"one line of code"),". This technique is called ",(0,o.kt)("strong",{parentName:"p"},"destructuring")," and it has a special syntax."),(0,o.kt)("p",null,"Here is the code we used in the last exercise with array destructuring."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let familyMembers = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];\n\nlet [dad, mum, son, daughter, baby] = familyMembers;\n\nconsole.log(\n  `In the Simpsons family, ${dad} and ${mum} are the parents. ${son} is the son, ${daughter} is the daughter, and ${baby} is the baby.`\n);\n')),(0,o.kt)("p",null,"With array destructuring you were able to reduce this code down from 7 lines of code to just 3 lines of code. This means your code is shorter and there is less chance for you to have a bug in your code."),(0,o.kt)("h4",{id:"exercise-2"},"Exercise (2)"),(0,o.kt)(l.Z,{defaultValue:"exercise",values:[{label:"Exercise",value:"exercise"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"exercise",mdxType:"TabItem"},(0,o.kt)("admonition",{title:"Exercise",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Rewrite the code below to use array destructuring instead of assigning each value to a variable."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let sentence = ["Hello", "Code", "Your", "Future"];\n\nlet firstWord = item[0];\nlet secondWord = item[1];\nlet thirdWord = item[2];\nlet fourthWord = item[3];\n\nconsole.log(\n  `FirstWord: ${firstWord}, SecondWord: ${secondWord}, ThirdWord: ${thirdWord}, FourthWord: ${fourthWord},`\n);\n')))),(0,o.kt)(i.Z,{value:"solution",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let sentence = ["Hello", "Code", "Your", "Future"];\n\nlet [firstWord, secondWord, thirdWord, fourthWord] = sentence;\n\nconsole.log(\n  `FirstWord: ${firstWord}, SecondWord: ${secondWord}, ThirdWord: ${thirdWord}, FourthWord: ${fourthWord},`\n);\n')))),(0,o.kt)("h4",{id:"exercise-3"},"Exercise (3)"),(0,o.kt)(l.Z,{defaultValue:"exercise",values:[{label:"Exercise",value:"exercise"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"exercise",mdxType:"TabItem"},(0,o.kt)("admonition",{title:"Exercise",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We have a function called ",(0,o.kt)("inlineCode",{parentName:"p"},"sumAndMultiply"),". It will take two numbers and then return an array where the first number is the sum of the two numbers, and the second number is the multiplication of the two numbers."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function sumAndMultiply(a, b) {\n  return [a + b, a * b];\n}\n\n// Assign variables using array destructuring on this line\n\nconsole.log(\n  `The sum of the two numbers is ${sum}, the multiplication of the two numbers is ${multiply}`\n);\n")),(0,o.kt)("p",{parentName:"admonition"},"Which of the following lines of code can be used above?"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"A) let sum, multiply = sumAndMultiply(2, 3);"),(0,o.kt)("li",{parentName:"ul"},"B) let ","[sumAndMultiply]"," = sumAndMultiply(2, 3);"),(0,o.kt)("li",{parentName:"ul"},"C) let ","[sum, multiply]"," = sumAndMultiply(a, b);"),(0,o.kt)("li",{parentName:"ul"},"D) let ","[sum, multiply]"," = sumAndMultiply(2, 3);")))),(0,o.kt)(i.Z,{value:"solution",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Option D\nlet [sum, multiply] = sumAndMultiply(2, 3);\n")))),(0,o.kt)("h4",{id:"exercise-4"},"Exercise (4)"),(0,o.kt)(l.Z,{defaultValue:"exercise",values:[{label:"Exercise",value:"exercise"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"exercise",mdxType:"TabItem"},(0,o.kt)("admonition",{title:"Exercise",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When you do array destructuring, the array can be of any data type. Try destructuring with the next array, which contains objects."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let citiesByPopulation = [\n  { name: "London", population: 8000000 },\n  { name: "Birmingham", population: 1000000 },\n  { name: "Glasgow", population: 600000 },\n  { name: "Manchester", population: 500000 },\n];\n\n// Assign variables using array destructuring on this line\n\nconsole.log(`${london.name} population is ${london.population}`);\nconsole.log(`${birmingham.name} population is ${birmingam.population}`);\nconsole.log(`${glasgow.name} population is ${glasgow.population}`);\nconsole.log(`${manchester.name} population is ${manchester.population}`);\n')))),(0,o.kt)(i.Z,{value:"solution",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let citiesByPopulation = [\n  { name: "London", population: 8000000 },\n  { name: "Birmingham", population: 1000000 },\n  { name: "Glasgow", population: 600000 },\n  { name: "Manchester", population: 500000 },\n];\n\nlet [london, birmingham, glasgow, manchester] = citiesByPopulation;\n\nconsole.log(`${london.name} population is ${london.population}`);\nconsole.log(`${birmingham.name} population is ${birmingham.population}`);\nconsole.log(`${glasgow.name} population is ${glasgow.population}`);\nconsole.log(`${manchester.name} population is ${manchester.population}`);\n')))),(0,o.kt)("h4",{id:"exercise-5"},"Exercise (5)"),(0,o.kt)("admonition",{title:"Exercise",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Complete all of the exercises found ",(0,o.kt)("a",{parentName:"p",href:"https://repl.it/@codeyourfuture0/ArrayDestructuring"},"here"))),(0,o.kt)("h3",{id:"resources"},"Resources"),(0,o.kt)("p",null,"Here are some useful resources to help you understand this material"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/"},"FreeCodeCamp's Intro To Array Destructuring")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=NIq3qLaHCIs"},"Why Is Array/Object Destructuring So Useful And How To Use It (Video)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers"},"The Most In-Depth Yet Understandable ES6 Destructuring Tutorial"))),(0,o.kt)("h2",{id:"3-project-work"},"3. Project Work"),(0,o.kt)("h3",{id:"explanation"},"Explanation"),(0,o.kt)("p",null,"For the rest of the day we'll be working together on our group projects"),(0,o.kt)("p",null,"The project is called ",(0,o.kt)("a",{parentName:"p",href:"/js-core-3/tv-show-dom-project/"},"TV Show")),(0,o.kt)("p",null,"Trainees should group into teams based on the Level that they are working on currently."),(0,o.kt)("h2",{id:"coursework"},"Coursework"),(0,o.kt)("p",null,"Click ",(0,o.kt)("a",{parentName:"p",href:"./homework"},"here")," to view the homework for this lesson."),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)("p",null,"Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers."),(0,o.kt)(s.Z,{module:"JavaScript Core 3",week:"Week 3",mdxType:"Feedback"}))}b.isMDXComponent=!0}}]);