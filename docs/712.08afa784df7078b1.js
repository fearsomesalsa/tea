"use strict";(self.webpackChunktea_project=self.webpackChunktea_project||[]).push([[712],{8712:(_,p,u)=>{u.r(p),u.d(p,{ProductsModule:()=>Z});var n=u(6814),m=u(6208),i=u(594),t=u(9468),a=u(5993);let h=(()=>{var r;class e{transform(o,c=95){return o.length>c?o.slice(0,c)+"...":o}}return(r=e).\u0275fac=function(o){return new(o||r)},r.\u0275pipe=t.Yjl({name:"productDescriptionLength",type:r,pure:!0}),e})();const g=function(r){return["/products",r]};let f=(()=>{var r;class e{constructor(){this.product={id:0,image:"",title:"",price:0,description:""}}}return(r=e).\u0275fac=function(o){return new(o||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["product-card-component"]],inputs:{product:"product"},decls:12,vars:11,consts:[[1,"card"],[1,"product-popup-link",3,"href"],[1,"card-img-top",3,"src","alt"],[1,"card-body","my-1","mx-2"],[1,"product-title","h5","card-title","fw-bold","mb-2"],[1,"product-description","card-text","pt-1","mb-4"],[1,"product-action"],[1,"btn","btn-primary","px-5",3,"routerLink"]],template:function(o,c){1&o&&(t.TgZ(0,"div",0)(1,"a",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"h5",4),t._uU(5),t.qZA(),t.TgZ(6,"p",5),t._uU(7),t.ALo(8,"productDescriptionLength"),t.qZA(),t.TgZ(9,"div",6)(10,"a",7),t._uU(11,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),t.qZA()()()()),2&o&&(t.xp6(1),t.s9C("href",c.product.image,t.LSH),t.xp6(1),t.s9C("src",c.product.image,t.LSH),t.MGl("alt","Tea ",c.product.id,""),t.xp6(3),t.Oqu(c.product.title),t.xp6(2),t.Oqu(t.xi3(8,6,c.product.description,99)),t.xp6(3),t.Q6J("routerLink",t.VKq(9,g,c.product.id)))},dependencies:[i.rH,h],encapsulation:2}),e})();function b(r,e){1&r&&t._UZ(0,"product-card-component",6),2&r&&t.Q6J("product",e.$implicit)}function P(r,e){1&r&&(t.TgZ(0,"div",7),t._UZ(1,"div",8),t.qZA())}const y=function(r){return{product:r}},C=[{path:"",component:(()=>{var r;class e{constructor(o,c){this.productService=o,this.activatedRoute=c,this.products=[],this.subscriptionProducts=null,this.subscriptionQueryParams=null,this.searchString="",this.title="",this.loading=!1}ngOnInit(){this.loading=!0,this.subscriptionQueryParams=this.activatedRoute.queryParams.subscribe(o=>{this.searchString=o.search?o.search:"",this.title=this.searchString?`\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 "${this.searchString}"`:"\u041d\u0430\u0448\u0438 \u0447\u0430\u0439\u043d\u044b\u0435 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438",this.subscriptionProducts=this.productService.getProducts(this.searchString).subscribe({next:c=>{this.loading=!1,Array.isArray(c)?(this.products=c,0===c.length&&(this.title="\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")):this.products=Object.values(c)},error:c=>{this.loading=!1}})})}ngOnDestroy(){this.subscriptionQueryParams?.unsubscribe(),this.subscriptionProducts?.unsubscribe()}}return(r=e).\u0275fac=function(o){return new(o||r)(t.Y36(a.M),t.Y36(i.gz))},r.\u0275cmp=t.Xpm({type:r,selectors:[["products-component"]],decls:7,vars:3,consts:[[1,"products","text-black","pt-4","pb-5"],[1,"container","overflow-hidden"],[1,"h2","text-center","fw-bold","text-black","mb-5"],[1,"row","gy-4"],["class","col-xl-4 col-md-6 col-sm-12",3,"product",4,"ngFor","ngForOf"],["class","loader-bg",4,"ngIf"],[1,"col-xl-4","col-md-6","col-sm-12",3,"product"],[1,"loader-bg"],[1,"loader"]],template:function(o,c){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,b,1,1,"product-card-component",4),t.qZA()()(),t.YNc(6,P,2,0,"div",5)),2&o&&(t.xp6(3),t.Oqu(c.title),t.xp6(2),t.Q6J("ngForOf",c.products),t.xp6(1),t.Q6J("ngIf",c.loading))},dependencies:[n.sg,n.O5,f],encapsulation:2}),e})()},{path:":id",component:(()=>{var r;class e{constructor(o,c,d){this.activatedRoute=o,this.productService=c,this.router=d,this.subscriptionProducts=null,this.subscriptionParams=null,this.product={id:0,image:"",title:"",price:0,description:""}}ngOnInit(){this.subscriptionProducts=this.productService.getProducts().subscribe({next:o=>{this.subscriptionParams=this.activatedRoute.params.subscribe(c=>{if(c.id){const d=o.find(T=>T.id===+c.id);d?this.product=d:this.router.navigate(["/"])}})}})}ngOnDestroy(){this.subscriptionProducts?.unsubscribe(),this.subscriptionParams?.unsubscribe()}addToCart(){this.router.navigate(["/order"],{queryParams:{product:this.product.title}})}}return(r=e).\u0275fac=function(o){return new(o||r)(t.Y36(i.gz),t.Y36(a.M),t.Y36(i.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["product-component"]],decls:14,vars:13,consts:[[1,"product"],[1,"container"],[1,"card","d-block","p-3"],[1,"card-img-top","float-start","w-25",3,"src","alt"],[1,"product__title","card-title","fw-bold","mb-3"],[1,"product__action","mb-3"],[1,"product__price","pe-5","fw-bold"],["routerLink","/order",1,"btn","btn-primary","px-5",3,"queryParams"],[1,"product__description","card-text","pt-1","mb-4"]],template:function(o,c){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"h5",4),t._uU(5),t.qZA(),t.TgZ(6,"div",5)(7,"span",6),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"a",7),t._uU(11,"\u041a\u0443\u043f\u0438\u0442\u044c"),t.qZA()(),t.TgZ(12,"p",8),t._uU(13),t.qZA()()()()),2&o&&(t.xp6(3),t.s9C("src",c.product.image,t.LSH),t.MGl("alt","Tea ",c.product.id,""),t.xp6(2),t.Oqu(c.product.title),t.xp6(3),t.hij("\u0426\u0435\u043d\u0430: ",t.gM2(9,6,c.product.price,"RUB","\u0440\u0443\u0431.","1.0-0"),""),t.xp6(2),t.Q6J("queryParams",t.VKq(11,y,c.product.title)),t.xp6(3),t.Oqu(c.product.description))},dependencies:[i.rH,n.H9],encapsulation:2}),e})()}];let l=(()=>{var r;class e{}return(r=e).\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[i.Bz.forChild(C),i.Bz]}),e})(),Z=(()=>{var r;class e{}return(r=e).\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[n.ez,m.m,i.Bz,l,l]}),e})()}}]);