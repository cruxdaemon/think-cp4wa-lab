(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{QeB1:function(a,t,e){"use strict";e.r(t),e.d(t,"_frontmatter",(function(){return r})),e.d(t,"default",(function(){return b}));var i=e("wx14"),n=e("zLVn"),s=(e("q1tI"),e("7ljp")),o=e("013z"),r=(e("qKvR"),{}),c={_frontmatter:r},p=o.a;function b(a){var t=a.components,e=Object(n.a)(a,["components"]);return Object(s.b)(p,Object(i.a)({},c,e,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",null,"Introduction"),Object(s.b)("p",null,"  AI Manager collects information from all of your IT assets, such as applications, the infrastructure that they run on, and the networking systems that support them. It then uses that data to uncover hidden insights and identify root causes of events. Using this data to train your models leads to better event discovery and a more accurate understanding of your topology."),Object(s.b)("p",null,"  ",Object(s.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1146px"}}),"\n      ",Object(s.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.26388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/ElEQVQoz2Pg4eaWlpKSk5eXlJRkZmZmIAmU5hc9vPvwzLmzT+7cdnNzA4rAjWBkYGRiYuLh4+Pg5OLm4YWIMzIyQkgQo7qm9vWzFyeOH79995abpwdQgomNBSjJwMQCZLOysmqZWxs6uOmY2UhISikpKamoqKiqqMjLybGwsDC4urrMnTd79syZk6ZM09XVBdnMxskgH8ho2i5uEMnCxMDNJyAkIsbHL8jJySUABPz8ooKCLBDXVTS2fP///82nT19//YuMjgOKSJnEWmTvSuq7IuS9REDJLr8gJ6OgqKiyUkNTk5eHR1hYWERUVEZGRlxcnMHV23f6vLmz581fuXpVYlqqkCCXnFVaePfN9Mk3NKJXalqFbz18cN6OvasPHfPw8gI62NDQEOh4RUVFUVFRhuSUhPMXL1y5cffajRv///+fMXMG0Ke+ufNsczZrupfwcHPa29i6ODq6OjkKCgoCw4+NjQ0R2hHRkcdOXdx58Mju9WvPHz1UVFYCCic2DjYufpAXpKTW7z84b8vODYeOenh6SoiLq4IBUBwUYP5BwQcOHNy4ffeurdv3HDxWVFED1AOUgESJpKTU2l0HVuzYv/XIKUdHZ3Y2NmEwEBISYmdnZ6itqfr6//+952+/ff72/8f/hf2TUKKakZGPh1eQn1+Ajw/oZrQ0AgBg2Zw/s6KL1QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"AI Manager can ingest data from lots of sources to provide insights about applications.",title:"AI Manager can ingest data from lots of sources to provide insights about applications.",src:"/think-cp4wa-lab/static/7bb8eabe2475df85e01343f09c91410c/318d7/aimgr1.png",srcSet:["/think-cp4wa-lab/static/7bb8eabe2475df85e01343f09c91410c/7fc1e/aimgr1.png 288w","/think-cp4wa-lab/static/7bb8eabe2475df85e01343f09c91410c/a5df1/aimgr1.png 576w","/think-cp4wa-lab/static/7bb8eabe2475df85e01343f09c91410c/318d7/aimgr1.png 1146w"],sizes:"(max-width: 1146px) 100vw, 1146px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\nIBM Cloud Pak for Watson AIOps can process both structured data like metrics or events and unstructured data like logs or tickets."),Object(s.b)("h2",null,"Lab setup."),Object(s.b)("p",null,"  To start the lab, if you have not done so, access the VM images. If it has not been started, start the ",Object(s.b)("inlineCode",{parentName:"p"},"rhdesk")," images. The system should log you in automatically but just in case login as ",Object(s.b)("inlineCode",{parentName:"p"},"ibmadmin")," with password ",Object(s.b)("inlineCode",{parentName:"p"},"engageibm!"),"."),Object(s.b)("p",null,"  ",Object(s.b)("strong",{parentName:"p"},"Note:")," You can start the VMs by clicking on the ",Object(s.b)("inlineCode",{parentName:"p"},"play")," icon above each image, either the play symbol at the top to start both images or upon each monitor’s picture."),Object(s.b)("img",{src:"https://github.com/cruxdaemon/think-cp4wa-lab/raw/gatsby/src/pages/mm/images/mm02.png",alt:"Watson AIOps Lab images",width:500,align:"center"}),Object(s.b)("h1",null,"Lab"),Object(s.b)("p",null,"  This lab will walk you through how you can use data that has been connected to train Cloud Pak for Watson AIOps to detect anomalies. Then it will walk you through how those insights can save you time in a typical scenario. It can take hours to train data using the prebuilt models, so this lab is facilitated by using a click-through captured from the product."),Object(s.b)("p",null,"  This lab works best if you maximize the skytap window using the maximize button from the skytap drop down that looks like this ",Object(s.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"30px"}}),"\n      ",Object(s.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"86.66666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAIAAABSJhvpAAAACXBIWXMAAAsTAAALEwEAmpwYAAACI0lEQVQ4y4WTS48hURiG/TWZ3qCqKFXFVFmITE8vqBVGEBGXUKOTdhuXH2BrYWNpaUviGnrc261JtF9g3i5pwwzpN5WTU995n/Od76tTCsOZjEbj188Ez8mvOIf1ej3xmeC5AnMc53L9SKWSqUul06lf70pjAjkcDoZhjvkBczLI4rXb7W6328Hg93g8Oj3D4aDdbmPp+bn/9rYbjUYPD98Zhob/Ap5MJqFQ8O7uC03rtFoKD0kSFoslk8k8PsZgSyaTm81GFG0wyDDHySyLcwyGw5+SRBGEwPPojEkQEMfYbDYPhwMOHo/HV+u1zWqldTqj4RLGkaRoVKNW83JbkRdjpVKZTqer1SoB9Olp/fp6Cx5Go1GSIBAB6bDb+/0eqhVtNqfTeX//DX3DLn9hThbLsujeeDz2+/1WqzUpa7/fl8tlLFEUhQ6rVKpcLgcYBp1OZ/gfDgQCiUQCFaJ5kUgEJlQgCILJZMI8n8/fhPFZvF6vx+2Go1qtarVaZENa3A2SJJVKJfZdLBZXYHz3+ctLoVCw2+2xWCybzYbDYbfb7fF4sKPP50O8VCrtdjtRFC/go4rFYqfTaTQatVqtXq/3er2+rGOw1WrhtqALZrMZLfj3bkOokKbpYDA4m82Wy+V8PseIucvlQhU8z59qfIepS6E2jUaDLUKhkCRJ6BlGnB8RxLF6blYwZ2I/hF8HVvWHMEfktHryK4w3hFT8ma56/gBKQtNjBLYeLgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Maximize",title:"Maximize",src:"/think-cp4wa-lab/static/7d6895fdd4e540250ea59286f9c8aaaf/e2555/aimgr3.png",srcSet:["/think-cp4wa-lab/static/7d6895fdd4e540250ea59286f9c8aaaf/e2555/aimgr3.png 30w"],sizes:"(max-width: 30px) 100vw, 30px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),". "),Object(s.b)("p",null,"  To access the AI Manager lab, go to ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"http://cp4wa.169.47.14.148.nip.io/aimgr"}),"http://cp4wa.169.47.14.148.nip.io/aimgr")," and click the start button that looks like this: ",Object(s.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"36px"}}),"\n      ",Object(s.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"94.44444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAIAAAAf7rriAAAACXBIWXMAAAsTAAALEwEAmpwYAAABv0lEQVQ4y41US48BQRDu/5+I4OTmMheCYFjvEIk4iDiQjGQYhATxfr+G/TK1W9oOu1uHTk9Nf199VV3V4m6zm2W/e8jE/Y2Zprler+fz+eFwYIq/wZvNplKpxOPxD8sSiUQymdR1HXRvwUTcarUCgQDAo9EIMc/n82q1arfb4AILeGUJQkY2m81gMAipL0XW6/VQKLTdbvmv4B1CAYk8KWHyY3P7NnhqtVo6nX6STT9SqZSmaYyEwt1uJ0ugjaqq3W6XPgW5ZrNZJBK5XC58CBXy+XyGYdiLks1mn8A4msvl5CsFvdPp9Hg8OCrnOZ1OEZzUCS5VuVyWwYgJpNfrdTgckLBYLCg+ioKy7/f7BxhiisXij8hutxvBFUWBruv1Sv7lcolrowQFlxpi5NwAcLlcpVLpeDzKpP1+H53zlTMDYrHYYDDgak8mk16vJ8NozefzjUbjASYv7gnB5XNERGBiBF04HD6dTi86DGmj5ow3LePI4/HY7/cPh8OnDpMnqVAo4MKRGDcZVnRLtVoFktvjxVSRF2OgWpbJZCAEIxWNRiGKOlfueWF/CUgCCtbpdFBzqKBhsk+L+M9L8s75Ce/7KJi9S0mwAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Start button",title:"Start button",src:"/think-cp4wa-lab/static/eeeba5a3f9dbfe439851a8f1ecbf9272/e8fb5/aimgr2.png",srcSet:["/think-cp4wa-lab/static/eeeba5a3f9dbfe439851a8f1ecbf9272/e8fb5/aimgr2.png 36w"],sizes:"(max-width: 36px) 100vw, 36px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-aimgr-index-mdx-d45958114f2380dfc7c6.js.map