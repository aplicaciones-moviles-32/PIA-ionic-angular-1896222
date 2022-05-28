(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 3551:
/*!****************************************!*\
  !*** ./src/app/alta/alta.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AltaComponent": () => (/* binding */ AltaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _alta_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alta.component.html?ngResource */ 6953);
/* harmony import */ var _alta_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alta.component.scss?ngResource */ 1124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_authusers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authusers.service */ 1898);
/* harmony import */ var _services_realtimefb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/realtimefb.service */ 4807);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ 3628);








let AltaComponent = class AltaComponent {
    constructor(auth, db, alertC) {
        this.auth = auth;
        this.db = db;
        this.alertC = alertC;
        this.newUser = { email: '', pass: '', confirm: '', name: '' };
        this.uploadImg = (user, img) => {
            let url;
            return new Promise((resolve) => {
                this.db.subirImagen(user + "_" + Date.now(), img).then(urlImagen => {
                    this.urlImgFirebase = urlImagen;
                    console.log(this.urlImgFirebase);
                    resolve(this.urlImgFirebase);
                });
            });
        };
    }
    ngOnInit() { }
    uploadedImg(event) {
        try {
            let archivos = event.target.files;
            this.auth.getUserLogged();
            let usuario = this.auth.getUserId();
            let reader = new FileReader();
            reader.readAsDataURL(archivos[0]);
            reader.onloadend = () => {
                //this.SubirImagen(usuario,reader.result);
                this.imgUp = reader.result;
            };
        }
        catch (err) {
            console.log("error subir foto", err);
        }
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertC.create({
                cssClass: 'my-custom-class',
                header: 'Creando usuario',
                subHeader: 'Puede tardar un momento',
                message: ':)',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    Registro() {
        let url;
        console.log(this.newUser.pass + this.newUser.confirm, this.newUser.name, this.newUser.email);
        if (this.newUser.pass == this.newUser.confirm && (this.newUser.name != '') && (this.newUser.pass != '') && (this.newUser.email != '')) {
            this.presentAlert();
            this.uploadImg(this.newUser, this.imgUp).then(x => {
                console.log("subida" + { x });
                url = x;
                let id;
                const { email, pass, name } = this.newUser;
                this.auth.registro(email, pass).then(res => {
                    console.log("Registro exitoso:", res);
                    id = this.auth.getUserId();
                    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)();
                    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.updateProfile)(auth.currentUser, { displayName: name, photoURL: url }).then(() => {
                        console.log("Todo listo");
                        window.location.href = "/feed";
                    }).catch((error) => { });
                });
            });
        }
    }
};
AltaComponent.ctorParameters = () => [
    { type: _services_authusers_service__WEBPACK_IMPORTED_MODULE_2__.AuthusersService },
    { type: _services_realtimefb_service__WEBPACK_IMPORTED_MODULE_3__.RealtimefbService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
AltaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-alta',
        template: _alta_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_alta_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AltaComponent);



/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _alta_alta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alta/alta.component */ 3551);
/* harmony import */ var _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editprofile/editprofile.component */ 212);
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feed/feed.component */ 6989);
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil/perfil.component */ 9998);
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post/post.component */ 3837);
/* harmony import */ var _publicacion_publicacion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./publicacion/publicacion.component */ 1992);









const routes = [
    /*{
      path: 'home',
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },*/
    { path: 'feed', component: _feed_feed_component__WEBPACK_IMPORTED_MODULE_2__.FeedComponent },
    { path: 'profile', component: _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_3__.PerfilComponent },
    { path: 'editprofile', component: _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_1__.EditprofileComponent },
    { path: 'post', component: _post_post_component__WEBPACK_IMPORTED_MODULE_4__.PostComponent },
    { path: 'publi/:id', component: _publicacion_publicacion_component__WEBPACK_IMPORTED_MODULE_5__.PublicacionComponent },
    { path: 'alta', component: _alta_alta_component__WEBPACK_IMPORTED_MODULE_0__.AltaComponent },
    { path: '**', component: _feed_feed_component__WEBPACK_IMPORTED_MODULE_2__.FeedComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_8__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/app */ 9150);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/database */ 6139);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/fire/storage */ 2111);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/google-maps */ 2754);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _alta_alta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alta/alta.component */ 3551);
/* harmony import */ var _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editprofile/editprofile.component */ 212);
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feed/feed.component */ 6989);
/* harmony import */ var _historias_historias_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./historias/historias.component */ 2050);
/* harmony import */ var _histcontent_histcontent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./histcontent/histcontent.component */ 4954);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav/nav.component */ 5375);
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./perfil/perfil.component */ 9998);
/* harmony import */ var _pop_content_pop_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pop-content/pop-content.component */ 6203);
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./popover/popover.component */ 8446);
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./post/post.component */ 3837);
/* harmony import */ var _publicacion_publicacion_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./publicacion/publicacion.component */ 1992);
/* harmony import */ var _publicaciones_publicaciones_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./publicaciones/publicaciones.component */ 6263);
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tabs/tabs.component */ 3957);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 6362);
































let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
            _alta_alta_component__WEBPACK_IMPORTED_MODULE_3__.AltaComponent,
            _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_4__.EditprofileComponent,
            _feed_feed_component__WEBPACK_IMPORTED_MODULE_5__.FeedComponent,
            _historias_historias_component__WEBPACK_IMPORTED_MODULE_6__.HistoriasComponent,
            _histcontent_histcontent_component__WEBPACK_IMPORTED_MODULE_7__.HistcontentComponent,
            _login_login_component__WEBPACK_IMPORTED_MODULE_8__.LoginComponent,
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__.NavComponent,
            _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_10__.PerfilComponent,
            _pop_content_pop_content_component__WEBPACK_IMPORTED_MODULE_11__.PopContentComponent,
            _popover_popover_component__WEBPACK_IMPORTED_MODULE_12__.PopoverComponent,
            _post_post_component__WEBPACK_IMPORTED_MODULE_13__.PostComponent,
            _publicacion_publicacion_component__WEBPACK_IMPORTED_MODULE_14__.PublicacionComponent,
            _publicaciones_publicaciones_component__WEBPACK_IMPORTED_MODULE_15__.PublicacionesComponent,
            _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_16__.TabsComponent
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_21__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_21__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase)),
            (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_22__.provideAuth)(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_22__.getAuth)()),
            (0,_angular_fire_database__WEBPACK_IMPORTED_MODULE_23__.provideDatabase)(() => (0,_angular_fire_database__WEBPACK_IMPORTED_MODULE_23__.getDatabase)()),
            (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_24__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_24__.getFirestore)()),
            (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_25__.provideStorage)(() => (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_25__.getStorage)()),
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_26__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase),
            _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule,
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_29__.GoogleMapsModule
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_30__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonicRouteStrategy }, _angular_common__WEBPACK_IMPORTED_MODULE_31__.DatePipe],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 212:
/*!******************************************************!*\
  !*** ./src/app/editprofile/editprofile.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditprofileComponent": () => (/* binding */ EditprofileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _editprofile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editprofile.component.html?ngResource */ 1572);
/* harmony import */ var _editprofile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editprofile.component.scss?ngResource */ 995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_authusers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authusers.service */ 1898);
/* harmony import */ var _services_realtimefb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/realtimefb.service */ 4807);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ 3628);







let EditprofileComponent = class EditprofileComponent {
    constructor(auth, db) {
        this.auth = auth;
        this.db = db;
        this.user = { email: '', pass: '', confirm: '', name: '' };
        this.userLogged = this.auth.getUserLogged();
        this.SubirImagen = (usuario, image) => {
            let url;
            return new Promise((resolve) => {
                this.db.subirImagen(usuario + "_" + Date.now(), image).then(urlImagen => {
                    this.urlImgFirebase = urlImagen;
                    console.log(this.urlImgFirebase);
                    resolve(this.urlImgFirebase);
                });
            });
        };
    }
    ngOnInit() {
        this.user.name = this.auth.getUserName();
    }
    Update() {
        this.Cimagen();
        if (!this.imgUploaded && this.user.name) {
            this.Cnombre();
        }
        else if (this.imgUploaded) {
            let url;
            const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)();
            (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.updateProfile)(auth.currentUser, { displayName: this.user.name, }).then(() => {
                console.log("Nombre actualizado" + this.user.name);
                this.SubirImagen(this.user, this.imgUploaded).then(x => {
                    url = x;
                    let id;
                    id = this.auth.getUserId();
                    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.updateProfile)(auth.currentUser, { photoURL: url }).then(() => {
                        console.log("Imagen listo");
                        window.location.href = "/perfil";
                    }).catch((error) => { });
                });
            }).catch((error) => { });
        }
    }
    cargarImagen(event) {
        try {
            let archivos = event.target.files;
            this.auth.getUserLogged();
            let usuario = this.auth.getUserId();
            let reader = new FileReader();
            reader.readAsDataURL(archivos[0]);
            reader.onloadend = () => {
                //this.SubirImagen(usuario,reader.result);
                this.imgUploaded = reader.result;
            };
        }
        catch (err) {
            console.log("error subir foto", err);
        }
    }
    Cimagen() {
        let url;
        this.SubirImagen(this.user, this.imgUploaded).then(x => {
            console.log("subida" + { x });
            url = x;
            let id;
            id = this.auth.getUserId();
            const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)();
            (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.updateProfile)(auth.currentUser, { photoURL: url }).then(() => {
                console.log("Imagen listo");
                window.location.href = "/perfil";
            }).catch((error) => { });
        });
    }
    Cnombre() {
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)();
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.updateProfile)(auth.currentUser, { displayName: this.user.name, }).then(() => {
            console.log("Nombre actualizado" + this.user.name);
            window.location.href = "/perfil";
        }).catch((error) => { });
    }
    Ccontrasena() {
        if (this.user.pass == this.user.confirm) {
            const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)();
            const user = auth.currentUser;
            const newPassword = this.user.pass;
            (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.updatePassword)(user, newPassword).then(() => {
                console.log("Contraseña actualizado" + newPassword);
                window.location.href = "/perfil";
            }).catch((error) => {
                // An error ocurred
                // ...
            });
        }
    }
};
EditprofileComponent.ctorParameters = () => [
    { type: _services_authusers_service__WEBPACK_IMPORTED_MODULE_2__.AuthusersService },
    { type: _services_realtimefb_service__WEBPACK_IMPORTED_MODULE_3__.RealtimefbService }
];
EditprofileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-editprofile',
        template: _editprofile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_editprofile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditprofileComponent);



/***/ }),

/***/ 6989:
/*!****************************************!*\
  !*** ./src/app/feed/feed.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedComponent": () => (/* binding */ FeedComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _feed_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feed.component.html?ngResource */ 807);
/* harmony import */ var _feed_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feed.component.scss?ngResource */ 3800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_authusers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authusers.service */ 1898);
/* harmony import */ var _services_realtimefb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/realtimefb.service */ 4807);








let FeedComponent = class FeedComponent {
    constructor(db, auth, popover, route) {
        this.db = db;
        this.auth = auth;
        this.popover = popover;
        this.route = route;
        this.colorheart = "dark";
        this.colorplane = "dark";
        this.colorcoment = "dark";
        this.colorsave = "dark";
        this.userLogged = this.auth.getUserLogged();
        this.key = 123;
        this.posts = [];
        this.reves = [];
        this.tester = [];
        this.entries = {};
        this.filtro = '';
        this.isPopoverOpen = false;
    }
    ngOnInit() {
        this.cargarFeed();
    }
    cargarFeed() {
        this.db.getPublicaciones().subscribe(resp => {
            console.log(resp);
            this.entries = resp;
            console.log(this.entries);
            this.tester = Object.values(resp);
            console.log(this.tester);
            for (let test of this.tester) {
                if (test != null) {
                    //this.alumnos = this.alumnos.concat(test);
                    this.posts.push(test);
                }
            }
            //console.log(this.alumnos);
            console.log(this.posts);
            //console.log(Object.keys(resp).reverse());
            this.reves = this.posts.reverse();
        });
    }
    redirect(id) {
        console.log(id);
        Object.entries(this.entries).forEach(([key, value]) => {
            //console.log(key);
            //console.log(value);
            if (id == value.id) {
                console.log(key);
                this.route.navigate(['/publi', key]);
            }
        });
    }
    //#region Interacciones
    heart() {
        if (this.colorheart == "dark")
            this.colorheart = "danger";
        else
            this.colorheart = "dark";
    }
    plane() {
        if (this.colorplane == "dark")
            this.colorplane = "tertiary";
        else
            this.colorplane = "dark";
    }
    coment() {
        if (this.colorcoment == "dark")
            this.colorcoment = "warning";
        else
            this.colorcoment = "dark";
    }
    save() {
        if (this.colorsave == "dark")
            this.colorsave = "primary";
        else
            this.colorsave = "dark";
    }
};
FeedComponent.ctorParameters = () => [
    { type: _services_realtimefb_service__WEBPACK_IMPORTED_MODULE_3__.RealtimefbService },
    { type: _services_authusers_service__WEBPACK_IMPORTED_MODULE_2__.AuthusersService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
FeedComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-feed',
        template: _feed_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_feed_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FeedComponent);



/***/ }),

/***/ 4954:
/*!******************************************************!*\
  !*** ./src/app/histcontent/histcontent.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistcontentComponent": () => (/* binding */ HistcontentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _histcontent_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./histcontent.component.html?ngResource */ 181);
/* harmony import */ var _histcontent_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./histcontent.component.scss?ngResource */ 8027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let HistcontentComponent = class HistcontentComponent {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() { }
    ngOnDestroy() {
        this.modal.dismiss();
    }
};
HistcontentComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
HistcontentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-histcontent',
        template: _histcontent_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_histcontent_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HistcontentComponent);



/***/ }),

/***/ 2050:
/*!**************************************************!*\
  !*** ./src/app/historias/historias.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoriasComponent": () => (/* binding */ HistoriasComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _historias_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./historias.component.html?ngResource */ 5012);
/* harmony import */ var _historias_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historias.component.scss?ngResource */ 2760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_authusers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authusers.service */ 1898);





let HistoriasComponent = class HistoriasComponent {
    constructor(auth) {
        this.auth = auth;
        this.userLogged = this.auth.getUserLogged();
    }
    ngOnInit() { }
};
HistoriasComponent.ctorParameters = () => [
    { type: _services_authusers_service__WEBPACK_IMPORTED_MODULE_2__.AuthusersService }
];
HistoriasComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-historias',
        template: _historias_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_historias_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HistoriasComponent);



/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 2010);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 9444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_authusers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authusers.service */ 1898);






let LoginComponent = class LoginComponent {
    constructor(auth, alertC, modalC) {
        this.auth = auth;
        this.alertC = alertC;
        this.modalC = modalC;
        this.user = { email: '', pass: '' };
    }
    ngOnInit() {
        if (this.auth.getUserLogged()) {
            this.modalC.dismiss();
        }
    }
    Ingresar() {
        try {
            const { email, pass } = this.user;
            this.auth.login(email, pass).then(res => {
                console.log("Sesion Iniciada:", res);
                this.modalC.dismiss();
            });
        }
        catch (err) {
            this.presentAlert();
        }
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertC.create({
                cssClass: 'my-custom-class',
                header: 'Fallo al inicio de sesion',
                subHeader: 'Favor de verificar sus credenciales',
                message: ':(',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    Registro() {
        const { email, pass } = this.user;
        this.auth.registro("eliam3k@gmail.com", "vr3k22ML").then(res => {
            console.log("Sesion Iniciada con Google:", res);
        });
    }
    IngresarGoogle() {
        console.log('Iniciando con Google');
        const { email, pass } = this.user;
        this.auth.loginGoogle(email, pass).then(res => {
            console.log("Sesion Iniciada con Google:", res);
            this.modalC.dismiss();
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_authusers_service__WEBPACK_IMPORTED_MODULE_2__.AuthusersService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-login',
        template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



/***/ }),

/***/ 5375:
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _nav_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.component.html?ngResource */ 4293);
/* harmony import */ var _nav_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.component.scss?ngResource */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_authusers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authusers.service */ 1898);






let NavComponent = class NavComponent {
    constructor(auth, pop) {
        this.auth = auth;
        this.pop = pop;
        this.userLogged = this.auth.getUserLogged();
    }
    ngOnInit() { }
    logOut() {
        this.auth.logOut();
        this.pop.dismiss();
    }
};
NavComponent.ctorParameters = () => [
    { type: _services_authusers_service__WEBPACK_IMPORTED_MODULE_2__.AuthusersService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController }
];
NavComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-nav',
        template: _nav_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_nav_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NavComponent);



/***/ }),

/***/ 9998:
/*!********************************************!*\
  !*** ./src/app/perfil/perfil.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilComponent": () => (/* binding */ PerfilComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _perfil_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil.component.html?ngResource */ 136);
/* harmony import */ var _perfil_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.component.scss?ngResource */ 5986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_authusers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authusers.service */ 1898);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);






let PerfilComponent = class PerfilComponent {
    constructor(auth) {
        this.auth = auth;
        this.userLogged = this.auth.getUserLogged();
        this.usuario = {};
        this.editando = false;
    }
    ngOnInit() {
        this.ObtenerCoordenadas();
    }
    ObtenerCoordenadas() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const ObtenerCoordenada = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_3__.Geolocation.getCurrentPosition();
            this.latitud = '  ' + String.fromCharCode(0x03BB) + ' ' + ObtenerCoordenada.coords.latitude;
            this.longitud = '  ' + String.fromCharCode(0x03C6) + ObtenerCoordenada.coords.longitude;
        });
    }
    toggleEditar() {
        this.editando = !this.editando;
    }
};
PerfilComponent.ctorParameters = () => [
    { type: _services_authusers_service__WEBPACK_IMPORTED_MODULE_2__.AuthusersService }
];
PerfilComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-perfil',
        template: _perfil_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_perfil_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PerfilComponent);



/***/ }),

/***/ 6203:
/*!******************************************************!*\
  !*** ./src/app/pop-content/pop-content.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopContentComponent": () => (/* binding */ PopContentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pop_content_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop-content.component.html?ngResource */ 7110);
/* harmony import */ var _pop_content_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pop-content.component.scss?ngResource */ 1050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let PopContentComponent = class PopContentComponent {
    constructor() { }
    ngOnInit() { }
};
PopContentComponent.ctorParameters = () => [];
PopContentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pop-content',
        template: _pop_content_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pop_content_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PopContentComponent);



/***/ }),

/***/ 8446:
/*!**********************************************!*\
  !*** ./src/app/popover/popover.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverComponent": () => (/* binding */ PopoverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover.component.html?ngResource */ 730);
/* harmony import */ var _popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover.component.scss?ngResource */ 7072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let PopoverComponent = class PopoverComponent {
    constructor() { }
    ngOnInit() { }
};
PopoverComponent.ctorParameters = () => [];
PopoverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-popover',
        template: _popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PopoverComponent);



/***/ }),

/***/ 3837:
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostComponent": () => (/* binding */ PostComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _post_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post.component.html?ngResource */ 3386);
/* harmony import */ var _post_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.component.scss?ngResource */ 719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_authusers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authusers.service */ 1898);
/* harmony import */ var _services_realtimefb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/realtimefb.service */ 4807);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);










let PostComponent = class PostComponent {
    constructor(db, auth, router, alertC, dp) {
        this.db = db;
        this.auth = auth;
        this.router = router;
        this.alertC = alertC;
        this.dp = dp;
        this.userLogged = this.auth.getUserLogged();
        this.post = { UID: '', user: '', id: '', uImg: '', pImg: '', caption: '', com: '' };
        this.SubirImagen = (usuario, image) => {
            let url;
            return new Promise((resolve) => {
                this.db.subirImagen(usuario + "_" + Date.now(), image).then(urlImagen => {
                    this.urlImgFirebase = urlImagen;
                    this.post.pImg = this.urlImgFirebase;
                    console.log(this.urlImgFirebase);
                    resolve(this.urlImgFirebase);
                });
            });
        };
    }
    ngOnInit() { }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertC.create({
                cssClass: 'my-custom-class',
                header: 'Publicando',
                subHeader: 'Un momento por favor ...',
                message: 'Creando Post',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    TomarFoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto({
                    quality: 100,
                    allowEditing: false,
                    resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraResultType.DataUrl,
                });
                this.picture = image.dataUrl;
                let reader = new FileReader();
                let user = this.auth.getUserId();
                //this.SubirImagen(usuario,image.dataUrl);  
                this.usuario = user;
                this.imagenSubida = image.dataUrl;
            }
            catch (err) {
                console.log("error tomar foto", err);
            }
        });
    }
    cargarImagen(event) {
        try {
            let archivos = event.target.files;
            this.auth.getUserLogged();
            let usuario = this.auth.getUserId();
            let reader = new FileReader();
            reader.readAsDataURL(archivos[0]);
            reader.onloadend = () => {
                //this.SubirImagen(usuario,reader.result);
                this.imagenSubida = reader.result;
                this.usuario = usuario;
            };
        }
        catch (err) {
            console.log("error subir foto", err);
        }
    }
    subir() {
        this.presentAlert();
        console.log("Subiendo foto");
        this.post.UID = this.auth.getUserId();
        this.post.user = this.auth.getUserName();
        this.post.uImg = this.auth.getUserPic();
        this.post.id = this.dp.transform((new Date), 'ddMMyyyyhmmss');
        this.SubirImagen(this.usuario, this.imagenSubida).then(x => {
            console.log("subida" + { x });
            this.db.postPublicacion(this.post).subscribe(res => {
                window.location.href = "/feed";
            });
        });
    }
};
PostComponent.ctorParameters = () => [
    { type: _services_realtimefb_service__WEBPACK_IMPORTED_MODULE_3__.RealtimefbService },
    { type: _services_authusers_service__WEBPACK_IMPORTED_MODULE_2__.AuthusersService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe }
];
PostComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-post',
        template: _post_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_post_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PostComponent);



/***/ }),

/***/ 1992:
/*!******************************************************!*\
  !*** ./src/app/publicacion/publicacion.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicacionComponent": () => (/* binding */ PublicacionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _publicacion_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publicacion.component.html?ngResource */ 1476);
/* harmony import */ var _publicacion_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publicacion.component.scss?ngResource */ 7240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_authusers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authusers.service */ 1898);
/* harmony import */ var _services_realtimefb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/realtimefb.service */ 4807);








let PublicacionComponent = class PublicacionComponent {
    constructor(ruta, db, auth, alertC) {
        this.ruta = ruta;
        this.db = db;
        this.auth = auth;
        this.alertC = alertC;
        this.userLogged = this.auth.getUserLogged();
        this.publicacionImprimir = {};
        this.colorheart = "dark";
        this.colorplane = "dark";
        this.colorcoment = "dark";
        this.colorsave = "dark";
    }
    ngOnInit() {
        //this.cargarFeed();
        this.paramID = this.ruta.snapshot.params['id'];
        console.log(this.paramID);
        console.log('AQUIIIIIIIIII');
        this.getPost(this.paramID);
    }
    //#region FUNCIONES
    getPost(key) {
        //console.log('SI SE PUEDEEEEE');
        this.db.getPost(key).then(res => {
            console.log(res.val());
            this.publicacionImprimir = res.val();
        });
    }
    borrar() {
        this.db.deletePublicacion(this.paramID).subscribe(resp => {
            if (resp == null) {
                console.log('Borro algo...');
                window.location.href = '/feed';
            }
        });
    }
    editar(nuevoCaption) {
        this.db.updatePublicacion(this.paramID, nuevoCaption).subscribe(res => {
            console.log("Se actualizo la base de datos");
            window.location.href = '/feed';
        });
    }
    //#endregion
    //#region ALERTAS DE CONFIRMACION
    EraseAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertC.create({
                cssClass: 'my-custom-class',
                header: 'Advertencia',
                subHeader: 'Accion Irreversible',
                message: '¿Seguro que desea borrar?',
                buttons: [
                    {
                        text: 'Borrar',
                        id: 'confirm-button',
                        handler: () => {
                            console.log('Borrando...');
                            this.borrar();
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        id: 'cancel-button',
                        handler: (Cancelar) => {
                            console.log('Borrado cancelado');
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    EditAlert(objeto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertC.create({
                cssClass: 'my-custom-class',
                header: 'Advertencia',
                subHeader: 'Accion Irreversible',
                message: '¿Seguro que desea aplicar cambios?',
                buttons: [
                    {
                        text: 'Confirmar',
                        id: 'confirm-button',
                        handler: () => {
                            console.log('Editando...');
                            this.editar(objeto);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        id: 'cancel-button',
                        handler: (Cancelar) => {
                            console.log('Borrado cancelado');
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    //#endregion
    //#region Interacciones
    heart() {
        if (this.colorheart == "dark")
            this.colorheart = "danger";
        else
            this.colorheart = "dark";
    }
    plane() {
        if (this.colorplane == "dark")
            this.colorplane = "tertiary";
        else
            this.colorplane = "dark";
    }
    coment() {
        if (this.colorcoment == "dark")
            this.colorcoment = "warning";
        else
            this.colorcoment = "dark";
    }
    save() {
        if (this.colorsave == "dark")
            this.colorsave = "primary";
        else
            this.colorsave = "dark";
    }
};
PublicacionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _services_realtimefb_service__WEBPACK_IMPORTED_MODULE_3__.RealtimefbService },
    { type: _services_authusers_service__WEBPACK_IMPORTED_MODULE_2__.AuthusersService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
PublicacionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-publicacion',
        template: _publicacion_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_publicacion_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PublicacionComponent);



/***/ }),

/***/ 6263:
/*!**********************************************************!*\
  !*** ./src/app/publicaciones/publicaciones.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicacionesComponent": () => (/* binding */ PublicacionesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _publicaciones_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publicaciones.component.html?ngResource */ 953);
/* harmony import */ var _publicaciones_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publicaciones.component.scss?ngResource */ 2213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_authusers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authusers.service */ 1898);
/* harmony import */ var _services_realtimefb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/realtimefb.service */ 4807);







let PublicacionesComponent = class PublicacionesComponent {
    constructor(auth, db, route) {
        this.auth = auth;
        this.db = db;
        this.route = route;
        this.userLogged = this.auth.getUserLogged();
        this.userUID = this.auth.getUserId();
        this.publicaciones = [];
        this.posts = [];
        this.Tposts = [];
        this.activo = 'posts';
    }
    ngOnInit() {
        this.loadUposts();
    }
    loadUposts() {
        this.db.getPublicaciones().subscribe(resp => {
            Object.entries(resp).forEach(([key, value]) => {
                //console.log(key);
                //console.log(value);
                this.publicaciones = resp;
                this.Tposts.push(value); //Extrae un arreglo de posts
            });
            //console.log(this.Tposts);
            for (let post of this.Tposts) {
                if (this.userUID == post.UID) { //Extrae el arreglo de post del usuario logeado
                    this.posts.push(post);
                }
            }
            //console.log(this.posts);
        });
    }
    toggleActivo(activo) {
        console.log(activo.detail.value);
        this.activo = activo.detail.value;
    }
    redirect(id) {
        //console.log(this.publicaciones);
        //console.log(id);
        Object.entries(this.publicaciones).forEach(([key, value]) => {
            //console.log(key);
            //console.log(value);
            if (id == value.id) {
                console.log(key);
                this.route.navigate(['/publi', key]);
            }
        });
    }
};
PublicacionesComponent.ctorParameters = () => [
    { type: _services_authusers_service__WEBPACK_IMPORTED_MODULE_2__.AuthusersService },
    { type: _services_realtimefb_service__WEBPACK_IMPORTED_MODULE_3__.RealtimefbService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
PublicacionesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-publicaciones',
        template: _publicaciones_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_publicaciones_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PublicacionesComponent);



/***/ }),

/***/ 1898:
/*!***********************************************!*\
  !*** ./src/app/services/authusers.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthusersService": () => (/* binding */ AuthusersService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 8427);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ 1577);





let AuthusersService = class AuthusersService {
    constructor(auth) {
        this.auth = auth;
    }
    registro(email, pass) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.auth.createUserWithEmailAndPassword(email.trim(), pass.trim());
            }
            catch (err) {
                console.log("error alta", err);
                return null;
            }
        });
    }
    login(email, pass) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.auth.signInWithEmailAndPassword(email, pass);
            }
            catch (err) {
                console.log("error login", err);
                return null;
            }
        });
    }
    loginGoogle(email, contrasena) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.auth.signInWithPopup(new firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.GoogleAuthProvider());
            }
            catch (err) {
                console.log("error login google", err);
                return null;
            }
        });
    }
    getUserLogged() {
        return this.auth.authState;
    }
    getUserId() {
        const auth = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
        const user = auth.currentUser;
        if (user !== null) {
            const uid = user.uid;
            return uid;
        }
        else {
            return null;
        }
    }
    getUserName() {
        const auth = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
        const user = auth.currentUser;
        if (user !== null) {
            const uid = user.displayName;
            return uid;
        }
        else {
            return null;
        }
    }
    getUserPic() {
        const auth = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
        const user = auth.currentUser;
        if (user !== null) {
            const uid = user.photoURL;
            return uid;
        }
        else {
            return null;
        }
    }
    logOut() {
        this.auth.signOut();
    }
};
AuthusersService.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth }
];
AuthusersService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AuthusersService);



/***/ }),

/***/ 4807:
/*!************************************************!*\
  !*** ./src/app/services/realtimefb.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RealtimefbService": () => (/* binding */ RealtimefbService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 8427);
/* harmony import */ var firebase_compat_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/storage */ 2365);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ 6139);







const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Content-Type': 'application/json'
    })
};
firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase);
let RealtimefbService = class RealtimefbService {
    constructor(http, rtdb) {
        this.http = http;
        this.rtdb = rtdb;
        this.sRef = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].app().storage().ref();
    }
    //#region GET
    getPublicaciones() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase.databaseURL + '/publicaciones.json');
    }
    getFeedmethod2() {
        return (0,_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__.get)((0,_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__.child)((0,_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__.ref)(this.rtdb), `publicaciones`));
    }
    getPost(id) {
        return (0,_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__.get)((0,_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__.child)((0,_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__.ref)(this.rtdb), `publicaciones/` + id));
    }
    getDatosUsuario() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase.databaseURL + '/usuario.json');
    }
    getPublicacionesUsuario() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase.databaseURL + '/usuario/publicaciones.json');
    }
    getPublicacionDetalle(id) {
        console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase.databaseURL + '/publicaciones/' + id + '.json');
        console.log(this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase.databaseURL + '/publicaciones/' + id + '.json'));
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase.databaseURL + '/publicaciones/' + id + '.json');
    }
    //#endregion
    //#region POST
    postPublicacion(post) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase.databaseURL + '/publicaciones.json', post);
    }
    //#endregion
    //#region PUT
    updatePublicacion(key, nuevosDatos) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase.databaseURL + '/publicaciones/' + key.toString() + '.json', nuevosDatos);
    }
    //#endregion
    //#region DELETE
    deletePublicacion(id) {
        console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase.databaseURL + "/publicaciones/" + id.toString() + ".json");
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase.databaseURL + '/publicaciones/' + id.toString() + '.json');
    }
    //#endregion
    subirImagen(nombre, imgBase64) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let respuesta = yield this.sRef.child("users/" + nombre).putString(imgBase64, 'data_url');
                return respuesta.ref.getDownloadURL();
            }
            catch (err) {
                console.log("error subir imagen" + err);
                return null;
            }
        });
    }
};
RealtimefbService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__.Database }
];
RealtimefbService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], RealtimefbService);



/***/ }),

/***/ 3957:
/*!****************************************!*\
  !*** ./src/app/tabs/tabs.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsComponent": () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.component.html?ngResource */ 4872);
/* harmony import */ var _tabs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.component.scss?ngResource */ 2798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_authusers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authusers.service */ 1898);





let TabsComponent = class TabsComponent {
    constructor(auth) {
        this.auth = auth;
        this.userLogged = this.auth.getUserLogged();
    }
    ngOnInit() { }
};
TabsComponent.ctorParameters = () => [
    { type: _services_authusers_service__WEBPACK_IMPORTED_MODULE_2__.AuthusersService }
];
TabsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tabs',
        template: _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsComponent);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    firebase: {
        projectId: 'iogram-ffc82',
        appId: '1:843014883038:web:84572b65153fc6fe6ba44f',
        databaseURL: 'https://iogram-ffc82-default-rtdb.firebaseio.com',
        storageBucket: 'iogram-ffc82.appspot.com',
        apiKey: 'AIzaSyCFhw3TL299JdxGoEm3JNWtpJrjnUZBfOI',
        authDomain: 'iogram-ffc82.firebaseapp.com',
        messagingSenderId: '843014883038',
    },
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 1124:
/*!*****************************************************!*\
  !*** ./src/app/alta/alta.component.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbHRhLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 995:
/*!*******************************************************************!*\
  !*** ./src/app/editprofile/editprofile.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".toolbar-trans {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  color: transparent;\n  margin: 0;\n  --opacity: 1;\n  --padding-top: 0px;\n  --padding-bottom: 0;\n  --margin-top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxBbmd1bGFyJTIwd29ya3NwYWNlXFxJT2dyYW1cXHNyY1xcYXBwXFxlZGl0cHJvZmlsZVxcZWRpdHByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQ0NKIiwiZmlsZSI6ImVkaXRwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXItdHJhbnN7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIC0tb3BhY2l0eTogMTtcclxuICAgIC0tcGFkZGluZy10b3A6IDBweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAtLW1hcmdpbi10b3A6IDBweCAgIWltcG9ydGFudDtcclxuICB9IiwiLnRvb2xiYXItdHJhbnMge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMDtcbiAgLS1vcGFjaXR5OiAxO1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 3800:
/*!*****************************************************!*\
  !*** ./src/app/feed/feed.component.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".usuario {\n  color: gray;\n  font-size: 12px;\n  padding: 20px 10px;\n}\n\n.caption {\n  color: darkgray;\n  font-size: 16px;\n}\n\n.card {\n  border: solid 1px gray;\n  margin-bottom: 10px;\n}\n\nion-avatar {\n  align-self: center;\n  width: 34px;\n  height: 34px;\n}\n\n.label {\n  align-self: center;\n  margin-left: 10px;\n}\n\n.toolbar-trans {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  color: transparent;\n  margin: 0;\n  --opacity: 1;\n  --padding-top: 0px;\n  --padding-bottom: 0;\n  --margin-top: 0px !important;\n}\n\nion-card-content {\n  --margin-top: 0px !important;\n}\n\n@media (max-width: 1000px) {\n  .columns-pad {\n    size: 1;\n  }\n}\n\n@media (min-width: 1000px) {\n  .columns-pad {\n    size: 0.5;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEFuZ3VsYXIlMjB3b3Jrc3BhY2VcXElPZ3JhbVxcc3JjXFxhcHBcXGZlZWRcXGZlZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0tKOztBREhBO0VBQ0kseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUNNSjs7QURKRTtFQUNFLDRCQUFBO0FDT0o7O0FETEE7RUFDSTtJQUVJLE9BQUE7RUNPTjtBQUNGOztBRExBO0VBQ0k7SUFFSSxTQUFBO0VDTU47QUFDRiIsImZpbGUiOiJmZWVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzdWFyaW8ge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbn1cclxuLmNhcHRpb24ge1xyXG4gICAgY29sb3I6IGRhcmtncmF5O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5jYXJkIHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGdyYXk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbmlvbi1hdmF0YXJ7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzRweDtcclxuICAgIGhlaWdodDogMzRweDtcclxufVxyXG4ubGFiZWx7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4udG9vbGJhci10cmFuc3tcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLS1vcGFjaXR5OiAxO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIC0tbWFyZ2luLXRvcDogMHB4ICAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIC0tbWFyZ2luLXRvcDogMHB4ICAhaW1wb3J0YW50O1xyXG4gIH1cclxuQG1lZGlhIChtYXgtd2lkdGggOiAxMDAwcHgpIHtcclxuICAgIC5jb2x1bW5zLXBhZHtcclxuICAgICAgICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgc2l6ZTogMTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aCA6IDEwMDBweCkge1xyXG4gICAgLmNvbHVtbnMtcGFke1xyXG4gICAgICAgIC8vYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBzaXplOiAwLjU7XHJcbiAgICB9XHJcbn1cclxuIiwiLnVzdWFyaW8ge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG59XG5cbi5jYXB0aW9uIHtcbiAgY29sb3I6IGRhcmtncmF5O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLmxhYmVsIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnRvb2xiYXItdHJhbnMge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMDtcbiAgLS1vcGFjaXR5OiAxO1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICAtLW1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jb2x1bW5zLXBhZCB7XG4gICAgc2l6ZTogMTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAuY29sdW1ucy1wYWQge1xuICAgIHNpemU6IDAuNTtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 8027:
/*!*******************************************************************!*\
  !*** ./src/app/histcontent/histcontent.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0Y29udGVudC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 2760:
/*!***************************************************************!*\
  !*** ./src/app/historias/historias.component.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".history-font {\n  font-size: 0.7em;\n  justify-content: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3Rvcmlhcy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcQW5ndWxhciUyMHdvcmtzcGFjZVxcSU9ncmFtXFxzcmNcXGFwcFxcaGlzdG9yaWFzXFxoaXN0b3JpYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJoaXN0b3JpYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlzdG9yeS1mb250e1xyXG4gICAgZm9udC1zaXplOiAuN2VtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCIuaGlzdG9yeS1mb250IHtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";

/***/ }),

/***/ 9444:
/*!*******************************************************!*\
  !*** ./src/app/login/login.component.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 5072:
/*!***************************************************!*\
  !*** ./src/app/nav/nav.component.scss?ngResource ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-avatar, ion-icon {\n  width: 20px;\n  height: 20px;\n}\n\n.container ion-label {\n  text-align: left;\n  flex: 0 0 50%;\n}\n\n#trigger-notificaciones {\n  height: 2em;\n}\n\n.container {\n  text-align: left;\n  display: flex;\n  align-items: center;\n}\n\n.perfil, .notificaciones {\n  flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcQW5ndWxhciUyMHdvcmtzcGFjZVxcSU9ncmFtXFxzcmNcXGFwcFxcbmF2XFxuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxXQUFBO0FDR0o7O0FEREE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0lKOztBREZBO0VBQ0ksY0FBQTtBQ0tKIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIsIGlvbi1pY29ue1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuLmNvbnRhaW5lciBpb24tbGFiZWwge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZsZXg6IDAgMCA1MCU7XHJcbn1cclxuI3RyaWdnZXItbm90aWZpY2FjaW9uZXMge1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucGVyZmlsLCAubm90aWZpY2FjaW9uZXMge1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbn0iLCJpb24tYXZhdGFyLCBpb24taWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5jb250YWluZXIgaW9uLWxhYmVsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZmxleDogMCAwIDUwJTtcbn1cblxuI3RyaWdnZXItbm90aWZpY2FjaW9uZXMge1xuICBoZWlnaHQ6IDJlbTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wZXJmaWwsIC5ub3RpZmljYWNpb25lcyB7XG4gIGZsZXg6IDEgMCBhdXRvO1xufSJdfQ== */";

/***/ }),

/***/ 5986:
/*!*********************************************************!*\
  !*** ./src/app/perfil/perfil.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container-img {\n  position: relative;\n}\n\nion-avatar {\n  width: 120px;\n  height: 120px;\n}\n\n@media screen and (max-width: 768px) {\n  ion-avatar {\n    width: 50px;\n    height: 50px;\n  }\n}\n\n.borde-input {\n  border: solid 1px black;\n}\n\nion-grid {\n  margin: 0;\n}\n\n.profile-photo {\n  border-radius: 50%;\n  margin-top: 10px;\n  width: 7em !important;\n  height: 7em !important;\n}\n\n.profile-info {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  text-align: center;\n}\n\n.info-square {\n  text-align: center;\n}\n\n.follow-button {\n  width: 90%;\n  margin: 0px 10px;\n}\n\n.more-details {\n  padding-left: 10px;\n}\n\nion-segment {\n  height: 50px;\n  border-bottom: 0px solid rgba(160, 160, 160, 0.453);\n}\n\nion-segment-button {\n  border: 5px !important;\n}\n\n.image-grid {\n  padding: 0px;\n  margin: 0px;\n}\n\n.single-row {\n  height: 18rem;\n}\n\n.single-image {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZpbC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcQW5ndWxhciUyMHdvcmtzcGFjZVxcSU9ncmFtXFxzcmNcXGFwcFxccGVyZmlsXFxwZXJmaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNFSjs7QURBQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUNHTjtBQUNGOztBRERBO0VBQ0ksdUJBQUE7QUNHSjs7QURBQTtFQUNJLFNBQUE7QUNHSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FET0E7RUFDSSxZQUFBO0VBQ0EsbURBQUE7QUNKSjs7QURPQTtFQUNJLHNCQUFBO0FDSko7O0FET0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0pKOztBRE9BO0VBQ0ksYUFBQTtBQ0pKOztBRE9BO0VBQ0ksWUFBQTtBQ0pKIiwiZmlsZSI6InBlcmZpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaW1nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5pb24tYXZhdGFye1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgaW9uLWF2YXRhciB7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG59XHJcbi5ib3JkZS1pbnB1dCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5wcm9maWxlLXBob3Rve1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDdlbSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA3ZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByb2ZpbGUtaW5mb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5mby1zcXVhcmV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb2xsb3ctYnV0dG9ue1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gICAgbWFyZ2luOiAwcHggMTBweDtcclxufVxyXG5cclxuLm1vcmUtZGV0YWlsc3tcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuJHNlZ21lbnQtYnV0dG9uLWlvcy1ib3JkZXItcmFkaXVzOiAwcHg7XHJcbiRzZWdtZW50LWJ1dHRvbi1pb3MtdG9vbGJhci1pY29uLXNpemU6IDNyZW07XHJcbiRzZWdtZW50LWJ1dHRvbi1pb3MtdG9vbGJhci1pY29uLXdpZHRoOiAzcmVtO1xyXG5cclxuaW9uLXNlZ21lbnR7Ly9TSUlJSUlJSUlJSUlJSVxyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIHJnYmEoMTYwLCAxNjAsIDE2MCwgMC40NTMpO1xyXG59XHJcblxyXG5pb24tc2VnbWVudC1idXR0b257XHJcbiAgICBib3JkZXI6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW1hZ2UtZ3JpZHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uc2luZ2xlLXJvd3tcclxuICAgIGhlaWdodDogMThyZW07XHJcbn1cclxuXHJcbi5zaW5nbGUtaW1hZ2V7XHJcbiAgICBwYWRkaW5nOjBweDtcclxufSIsIi5jb250YWluZXItaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBpb24tYXZhdGFyIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbn1cbi5ib3JkZS1pbnB1dCB7XG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xufVxuXG5pb24tZ3JpZCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnByb2ZpbGUtcGhvdG8ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiA3ZW0gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA3ZW0gIWltcG9ydGFudDtcbn1cblxuLnByb2ZpbGUtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbmZvLXNxdWFyZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvbGxvdy1idXR0b24ge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDBweCAxMHB4O1xufVxuXG4ubW9yZS1kZXRhaWxzIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tc2VnbWVudCB7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIHJnYmEoMTYwLCAxNjAsIDE2MCwgMC40NTMpO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBib3JkZXI6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uaW1hZ2UtZ3JpZCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5zaW5nbGUtcm93IHtcbiAgaGVpZ2h0OiAxOHJlbTtcbn1cblxuLnNpbmdsZS1pbWFnZSB7XG4gIHBhZGRpbmc6IDBweDtcbn0iXX0= */";

/***/ }),

/***/ 1050:
/*!*******************************************************************!*\
  !*** ./src/app/pop-content/pop-content.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3AtY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 7072:
/*!***********************************************************!*\
  !*** ./src/app/popover/popover.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 719:
/*!*****************************************************!*\
  !*** ./src/app/post/post.component.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 7240:
/*!*******************************************************************!*\
  !*** ./src/app/publicacion/publicacion.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".usuario {\n  color: gray;\n  font-size: 12px;\n  padding: 20px 10px;\n}\n\n.caption {\n  color: darkgray;\n  font-size: 16px;\n}\n\n.card {\n  border: solid 1px gray;\n  margin-bottom: 10px;\n}\n\nion-avatar {\n  align-self: center;\n  width: 34px;\n  height: 34px;\n}\n\n.label {\n  align-self: center;\n  margin-left: 10px;\n}\n\n.toolbar-trans {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  color: transparent;\n  margin: 0;\n  --opacity: 1;\n  --padding-top: 0px;\n  --padding-bottom: 0;\n  --margin-top: 0px !important;\n}\n\nion-card-content {\n  --margin-top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpY2FjaW9uLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxBbmd1bGFyJTIwd29ya3NwYWNlXFxJT2dyYW1cXHNyY1xcYXBwXFxwdWJsaWNhY2lvblxccHVibGljYWNpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0tKOztBREhBO0VBQ0kseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUNNSjs7QURKRTtFQUNFLDRCQUFBO0FDT0oiLCJmaWxlIjoicHVibGljYWNpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXN1YXJpbyB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxufVxyXG4uY2FwdGlvbiB7XHJcbiAgICBjb2xvcjogZGFya2dyYXk7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuaW9uLWF2YXRhcntcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG59XHJcbi5sYWJlbHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi50b29sYmFyLXRyYW5ze1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAtLW9wYWNpdHk6IDE7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgLS1tYXJnaW4tdG9wOiAwcHggICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgLS1tYXJnaW4tdG9wOiAwcHggICFpbXBvcnRhbnQ7XHJcbiAgfSIsIi51c3VhcmlvIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xufVxuXG4uY2FwdGlvbiB7XG4gIGNvbG9yOiBkYXJrZ3JheTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlcjogc29saWQgMXB4IGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1hdmF0YXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG59XG5cbi5sYWJlbCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi50b29sYmFyLXRyYW5zIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDA7XG4gIC0tb3BhY2l0eTogMTtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLW1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgLS1tYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 2213:
/*!***********************************************************************!*\
  !*** ./src/app/publicaciones/publicaciones.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-img::part(image) {\n  height: 100%;\n}\n\n.boton-grid {\n  width: 100%;\n  text-align: center;\n}\n\nion-segment {\n  height: 50px;\n  border-bottom: 0px solid rgba(160, 160, 160, 0.453);\n}\n\nion-segment-button {\n  border: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpY2FjaW9uZXMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEFuZ3VsYXIlMjB3b3Jrc3BhY2VcXElPZ3JhbVxcc3JjXFxhcHBcXHB1YmxpY2FjaW9uZXNcXHB1YmxpY2FjaW9uZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxtREFBQTtBQ0VKOztBRENBO0VBQ0ksc0JBQUE7QUNFSiIsImZpbGUiOiJwdWJsaWNhY2lvbmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWltZzo6cGFydChpbWFnZSkge1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuLmJvdG9uLWdyaWQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50ey8vU0lJSUlJSUlJSUlJSUlcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuNDUzKTtcclxufVxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9ue1xyXG4gICAgYm9yZGVyOiA1cHggIWltcG9ydGFudDtcclxufSIsImlvbi1pbWc6OnBhcnQoaW1hZ2UpIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYm90b24tZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjQ1Myk7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGJvcmRlcjogNXB4ICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 2798:
/*!*****************************************************!*\
  !*** ./src/app/tabs/tabs.component.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 6953:
/*!*****************************************************!*\
  !*** ./src/app/alta/alta.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-md=\"8\" offset-md=\"2\">\n        <ion-card style=\"margin-top: 10%;\">\n          <ion-card-header>\n            <ion-card-title style=\"text-align: center;\">Registro</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-grid>\n              <ion-row style=\"height: 30px;\"></ion-row>\n              <ion-row style=\"border: solid 1px; border-radius: 10px;\">\n                <ion-col>\n                  <ion-input type=\"text\" placeholder=\"Nombre de usuario\" [(ngModel)]=\"newUser.name\" style=\"margin-left: 10px;\"></ion-input>\n                </ion-col>\n              </ion-row>\n              <ion-row style=\"height: 30px;\"></ion-row>\n              <ion-row style=\"border: solid 1px; border-radius: 10px;\">\n                <ion-col>\n                  <ion-input type=\"text\" placeholder=\"Correo electrónico\" [(ngModel)]=\"newUser.email\" style=\"margin-left: 10px;\"></ion-input>\n                </ion-col></ion-row>\n              <ion-row style=\"height: 30px;\"></ion-row>\n              <ion-row style=\"border: solid 1px; border-radius: 10px\">\n                <ion-col>\n                  <ion-input type=\"password\" placeholder=\"Contraseña\" [(ngModel)]=\"newUser.pass\" style=\"margin-left: 10px;\" required></ion-input>\n                </ion-col>\n              </ion-row>\n              <ion-row style=\"height: 30px;\"></ion-row>\n              <ion-row style=\"border: solid 1px; border-radius: 10px\">\n                <ion-col>\n                  <ion-input type=\"password\" placeholder=\"Confirma coontraseña\" [(ngModel)]=\"newUser.confirm\" style=\"margin-left: 10px;\" required></ion-input>\n                </ion-col>\n              </ion-row>\n              <ion-row style=\"height: 30px;\"></ion-row>\n              <ion-row style=\"text-align: center;\">\n                <ion-col>\n                  <input style=\"display: none;\"  type=\"file\" accept=\".png,.jpg,.jpeg\"  (change)=\"uploadedImg($event)\" id=\"inputFile\">\n                  <label style=\"font-size: 30px;\" for=\"inputFile\"><ion-icon name=\"camera-outline\" size=\"large\" style=\"margin-right: 10px;\"></ion-icon>/<ion-icon  size=\"large\" name=\"folder-outline\" style=\"margin-left: 10px;\"></ion-icon></label>       \n                </ion-col>\n              </ion-row>\n              <ion-grid *ngIf=\"imgUp\">\n                <ion-row style=\"text-align: left; align-content: center; align-items: center; justify-content: center;\">\n                  <ion-col size=\"0\" style=\"margin-right: 100px;\">\n                    <ion-avatar style=\"height: 100px; width: 100px;\">\n                      <ion-img [src]=\"imgUp\"></ion-img>\n                    </ion-avatar>\n                  </ion-col>\n                  <ion-col size=\"5\" >\n                    <ion-label class=\"ion-text-warp\" style=\"font-size: 20px;\">{{newUser.name}}</ion-label>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <ion-row style=\"height: 30px;\"></ion-row>\n              <ion-button expand=\"block\" (click)=\"Registro()\">Registrarse</ion-button> \n\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col style=\"text-align: center; margin-bottom: 10px;\">\n       <ion-label>¿Ya eres usuario? <a href=\"/feed\">Inicia Sesión</a></ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app mode=\"ios\">\n  <app-nav></app-nav>\n  <ion-content>\n    <ion-router-outlet></ion-router-outlet>\n    <app-tabs></app-tabs>\n  </ion-content>\n</ion-app>\n";

/***/ }),

/***/ 1572:
/*!*******************************************************************!*\
  !*** ./src/app/editprofile/editprofile.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <ion-grid *ngIf=\"userLogged | async as DB\">\n    <ion-row>\n      <ion-col size-md=\"8\" offset-md=\"2\">\n        <ion-card>\n          <ion-card-header>\n            <ion-toolbar class=\"toolbar-trans\" style=\"align-items: center;\">\n              <ion-buttons slot=\"start\">\n                  <ion-button href=\"/profile\" color=\"dark\" ><ion-icon name=\"chevron-back-outline\"></ion-icon></ion-button>\n              </ion-buttons>\n              <ion-title color=\"dark\">Editar Perfil</ion-title>\n          </ion-toolbar>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-grid>\n              <ion-row style=\"text-align: left; align-content: center; align-items: center; justify-content: center;\">\n                <ion-col size=\"0\" style=\"margin-right: 100px;\">\n                  \n                  <ion-avatar style=\"height: 100px; width: 100px;\" *ngIf=\"imgUploaded else original\">\n                    <ion-img [src]=\"imgUploaded\"></ion-img>\n                  </ion-avatar>\n                  <ng-template #original>\n                    <ion-avatar style=\"height: 100px; width: 100px;\">\n                      <ion-img [src]=\"DB.photoURL\"></ion-img>\n                    </ion-avatar>\n                  </ng-template>\n                  \n                </ion-col>\n              </ion-row>\n              <ion-row style=\"height: 10px;\"></ion-row>\n              <ion-row style=\"text-align: center;\">\n                <ion-col>\n                  <input style=\"display: none;\"  type=\"file\" accept=\".png,.jpg,.jpeg\"  (change)=\"cargarImagen($event)\" id=\"inputFile\">\n                  <label  for=\"inputFile\"><ion-icon  size=\"large\" name=\"image-outline\"></ion-icon></label>\n                </ion-col>\n              </ion-row>\n              <ion-row style=\"height: 10px;\"></ion-row>\n              <ion-row style=\"border: solid 1px; border-radius: 10px; height: 60px;\">\n                <ion-col >\n                  <ion-textarea class=\"ion-text-warp\" style=\"font-size: 20px; height: 50px; padding-left: 10px; margin-right: 10px;\" type=\"text\" [(ngModel)]=\"user.name\" placeholder=\"Escribe tu nuevo Usuario\" rows=\"1\"></ion-textarea>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-button expand=\"block\" (click)=\"Update()\">Actualizar Información</ion-button> \n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";

/***/ }),

/***/ 807:
/*!*****************************************************!*\
  !*** ./src/app/feed/feed.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content *ngIf=\"userLogged|async as user; else elseBlock\" mode=\"ios\">\n  <!--historias-->\n  <ion-grid style=\"margin-bottom: 0 !important; padding-bottom: 0 !important;\">\n      <ion-row style=\"margin-bottom: 0 !important; padding-bottom: 0 !important;\">\n          <ion-col size-md=\"8\" offset-md=\"2\" style=\"margin-bottom: 0 !important; padding-bottom: 0 !important;\">\n              <app-historias></app-historias>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n  <!--posts-->\n  <ion-grid style=\"margin-top: 0 !important; padding-top: 0 !important;\">\n      <ion-row *ngFor=\"let post of posts; let id = index;\">\n          <ion-col  size-md=\"8\" offset-md=\"2\">\n              <ion-card >\n\n                  <ion-card-header>\n                      <ion-grid>\n                          <ion-row>\n                              <ion-col size=\"9\">\n                                  <div style=\"display: flex;\">\n\n                                      <ion-avatar>\n\n                                          <img *ngIf=\"post.uImg else imgFail\" src=\"{{post.uImg}}\" width=\"50px\">\n                                          <ng-template #imgFail>\n                                            <img  src=\"https://cdn.pixabay.com/photo/2018/06/26/01/20/connection-lost-3498366_960_720.png\" width=\"50px\">\n                                          </ng-template> \n\n                                      </ion-avatar>\n\n                                      <ion-label *ngIf=\"post.user else userFail\" class=\"label\">{{post.user}}</ion-label>\n                                      <ng-template #userFail>\n                                        <ion-label  class=\"label\">Error</ion-label>\n                                      </ng-template> \n                                      \n                                  </div>\n                                  </ion-col>\n                                  \n                          </ion-row>\n                      </ion-grid>\n                  </ion-card-header>\n                  <ion-img  [src]=\"post.pImg\" (click)=\"redirect(post.id)\"></ion-img>\n                  <ion-card-content>\n                        <ion-toolbar class=\"toolbar-trans\" translucent>\n                            <ion-buttons slot=\"start\">\n                                <ion-button color=\"{{colorheart}}\" (click)=\"heart()\"><ion-icon name=\"heart-outline\"></ion-icon><ion-label>14k</ion-label></ion-button>\n                            </ion-buttons>\n                            <ion-buttons slot=\"start\">\n                                <ion-button color=\"{{colorcoment}}\" (click)=\"coment()\"><ion-icon name=\"chatbubble-outline\"></ion-icon><ion-label>1k</ion-label></ion-button>\n                            </ion-buttons>\n                            <ion-buttons slot=\"start\">\n                                <ion-button color=\"{{colorplane}}\" (click)=\"plane()\"><ion-icon name=\"paper-plane-outline\"></ion-icon></ion-button>\n                            </ion-buttons>\n                            <ion-buttons slot=\"end\">\n                                <ion-button color=\"{{colorsave}}\" (click)=\"save()\"><ion-icon name=\"bookmark-outline\"></ion-icon></ion-button>\n                            </ion-buttons>\n                        </ion-toolbar>\n                        <ion-grid>\n                            <ion-row style=\"height: 5px\"></ion-row>\n                            <ion-label color=\"dark\" class=\"ion-text-warp\">{{post.caption}}</ion-label>\n                            <ion-row style=\"height: 5px\"></ion-row>\n                            <ion-label>Ver los 1k comentarios</ion-label>\n                            <ion-row style=\"padding-bottom: 0; margin-bottom: 0;\">\n                                <ion-col class=\"columns-pad\" size=\"0\" style=\"margin-right: 15px;\">\n                                    <ion-avatar>\n                                        <ion-img *ngIf=\"user.photoURL else picFail\" [src]=\"user.photoURL\" style=\"width: 20px; height: 20px;\"></ion-img>\n                                        <ng-template #picFail>\n                                        <img  src=\"https://cdn.pixabay.com/photo/2018/06/26/01/20/connection-lost-3498366_960_720.png\" style=\"width: 20px; height: 20px;\">\n                                        </ng-template> \n                                    </ion-avatar>\n                                </ion-col>\n                                <ion-col>\n                                    <ion-label>Añade un comentario</ion-label>\n                                </ion-col>\n                            </ion-row>\n                            <ion-label style=\"font-size: 12px; --padding-top: 0; --margin-top: 0;\">Hace X horas</ion-label>\n                        </ion-grid>\n                      \n                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ng-template #elseBlock>\n  <ion-content>\n    <app-login></app-login>\n  </ion-content>\n  <ion-footer>\n    <ion-grid>\n      <ion-row>\n        <ion-col style=\"text-align: center; margin-bottom: 10px;\">\n         <ion-label>¿No tienes una cuenta? <a href=\"/alta\">Regístrate</a></ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-footer>\n</ng-template>";

/***/ }),

/***/ 181:
/*!*******************************************************************!*\
  !*** ./src/app/histcontent/histcontent.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card style=\"display : block; align-items: center; justify-content: center; text-align: center;\">\n  <ion-card-header>\n      <ion-card-title>Usuario en proceso</ion-card-title>\n      <ion-card-subtitle>Hace X horas</ion-card-subtitle>\n    \n  </ion-card-header>\n\n  <ion-card-content>\n      <img  src=\"https://w0.peakpx.com/wallpaper/562/421/HD-wallpaper-bali-waterfall-flower-iphone-river-scenery-water-waterfalls.jpg\" >\n      <ion-button (click)=\"ngOnDestroy()\" expand=\"block\">Regresar</ion-button>\n  </ion-card-content>\n</ion-card>";

/***/ }),

/***/ 5012:
/*!***************************************************************!*\
  !*** ./src/app/historias/historias.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-grid *ngIf=\"userLogged|async as user\" style=\"margin-bottom: 0 !important; padding-bottom: 0 !important;\">\n  <ion-row class=\"historias-container\">\n      <ion-col size=\"2\">\n          <ion-avatar>\n              <ion-img  src=\"{{user.photoURL}}\" id=\"foto-usuario\"></ion-img>\n              <ion-modal trigger=\"foto-usuario\" fullscreen=\"true\" class=\"fullscreen-modal\">\n                  <ng-template>\n                    <ion-content style=\"align-items: center; justify-content: center; text-align: center;\">\n                      <app-histcontent></app-histcontent>\n                  </ion-content>\n                  </ng-template>\n              </ion-modal>\n          </ion-avatar>\n      </ion-col>\n  </ion-row>\n  <ion-row style=\"margin-bottom: 0 !important; padding-bottom: 0 !important;\">\n    <ion-col size=\"2\" style=\"align-content: center; justify-content: center; margin-bottom: 0 !important; padding-bottom: 0 !important;\">\n        <ion-label class=\"history-font\">{{user.displayName}}</ion-label>\n    </ion-col>\n  </ion-row>\n</ion-grid>";

/***/ }),

/***/ 2010:
/*!*******************************************************!*\
  !*** ./src/app/login/login.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-grid>\n  <ion-row>\n    <ion-col size-md=\"8\" offset-md=\"2\">\n      <ion-card style=\"margin-top: 10%;\">\n        <ion-card-header>\n          <ion-card-title style=\"text-align: center;\">IOgram</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-grid>\n            <ion-row style=\"height: 30px;\"></ion-row>\n            <ion-row style=\"border: solid 1px; border-radius: 10px\">\n              <ion-col>\n                <ion-input type=\"text\" placeholder=\"Correo electrónico\" [(ngModel)]=\"user.email\" style=\"margin-left: 10px\"></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"height: 30px;\"></ion-row>\n            <ion-row style=\"border: solid 1px; border-radius: 10px\">\n              <ion-col>\n                <ion-input type=\"password\" placeholder=\"Contraseña\" [(ngModel)]=\"user.pass\" style=\"margin-left: 10px\" required></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"height: 30px;\"></ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-button expand=\"block\" (click)=\"Ingresar()\">Iniciar Sesión</ion-button>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"height: 15px;\"></ion-row>\n            <ion-row style=\"align-items: center;\"><ion-col style=\"text-align: center;\"><ion-label>―――――― o ――――――</ion-label></ion-col></ion-row>\n            <ion-row style=\"height: 15px;\"></ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-button expand=\"block\" (click)=\"IngresarGoogle()\">Ingresar con Google</ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n     </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n  \n\n  ";

/***/ }),

/***/ 4293:
/*!***************************************************!*\
  !*** ./src/app/nav/nav.component.html?ngResource ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar *ngIf=\"userLogged|async as user\">\n    <ion-title text-left>IOgram</ion-title>\n\n      <ion-buttons slot=\"end\" >\n\n        <ion-button color=\"dark\" id=\"trigger-notificaciones\">\n          <ion-icon name=\"heart-outline\" slot=\"end\"></ion-icon>\n        </ion-button>\n        <ion-popover trigger=\"trigger-notificaciones\" show-backdrop=\"false\">\n          <ng-template>\n            <ion-list>\n              <ion-item>\n                Notificacion\n              </ion-item>\n            </ion-list>\n          </ng-template>\n        </ion-popover>\n\n      </ion-buttons>\n\n      \n\n      <ion-buttons slot=\"end\">\n\n        <ion-button shape=\"round\">\n          <ion-avatar slot=\"end\">\n            <ion-img [src]=\"user.photoURL\" id=\"user-header-pic\"></ion-img>\n          </ion-avatar>\n        </ion-button>\n        <ion-popover trigger=\"user-header-pic\">\n          <ng-template>\n            <ion-list>\n              <ion-item>\n                <ion-label>\n                  <ion-button expand=\"block\" color=\"danger\" (click)=\"logOut()\" id=\"log\">Salir</ion-button>\n                </ion-label>\n              </ion-item>\n            </ion-list>\n          </ng-template>\n        </ion-popover>\n\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>";

/***/ }),

/***/ 136:
/*!*********************************************************!*\
  !*** ./src/app/perfil/perfil.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content *ngIf=\"userLogged|async as user; else elseBlock\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size-md=\"8\" offset-md=\"2\">\n        <ion-card >\n          <ion-grid class=\"profile-intro\">\n            <ion-row>\n              <ion-col col-4>\n                  <ion-avatar class=\"profile-photo\">\n                    <ion-img class=\"profile-photo\" [src]=\"user.photoURL\"></ion-img>\n                  </ion-avatar>\n              </ion-col>\n              <ion-col col-8>\n                <div class=\"profile-info\">\n                  <div class=\"post-count info-square\">\n                    <p>\n                      <strong>50</strong><br>\n                      <em>post</em>\n                    </p>\n                  </div>\n                  <div class=\"follower-count info-square\">\n                    <p>\n                      <strong>1k</strong><br>\n                      <em>followers</em>\n                    </p>\n                  </div>\n                  <div class=\"following-count info-square\">\n                    <p>\n                      <strong>30</strong><br>\n                      <em>following</em>\n                    </p>\n                  </div>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n      \n          <div class=\"more-details\">\n            <p class=\"user-name\"><strong>{{user.displayName}}</strong></p>\n            <p class=\"user-bio\">Mi Bio</p>\n          </div>\n          <ion-row>\n            <ion-col>\n              <strong>LOCALIZACION: </strong> \n            </ion-col>\n            <ion-col>\n              <ion-label> {{latitud}}</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label> {{longitud}}</ion-label>\n            </ion-col>\n          </ion-row>\n      \n          <ion-grid style=\"--ion-grid-column-padding: 1px\">\n              <ion-row>\n                  <ion-col size=\"10\" style=\"--margin-left: 10px\">\n                    <ion-button expand=\"block\" style=\"height: 50px; --border-radius:5px;\" href=\"/editprofile\">Editar perfil</ion-button>\n                  </ion-col>\n                  <ion-col size=\"1\" no-padding>\n                    <ion-button style=\"height: 50px; width: 50px; --border-radius:5px;\">\n                        <ion-icon name=\"person-add\" size=\"large\"></ion-icon>\n                    </ion-button>\n                  </ion-col>\n              </ion-row>\n          </ion-grid>\n          \n          <ion-grid>\n              <app-publicaciones></app-publicaciones>\n          </ion-grid>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n\n<ng-template #elseBlock>\n  <app-login></app-login>\n</ng-template>";

/***/ }),

/***/ 7110:
/*!*******************************************************************!*\
  !*** ./src/app/pop-content/pop-content.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-list>\n  <ion-item>\n      <ion-label color=\"danger\">Reportar</ion-label>\n  </ion-item>\n  <ion-item>\n      <ion-label color=\"danger\">Dejar de Seguir</ion-label>\n  </ion-item>\n  <ion-item>\n      <ion-label>Compartir</ion-label>\n  </ion-item>\n  <ion-item>\n      <ion-label>Cancelar</ion-label>\n  </ion-item>\n</ion-list>";

/***/ }),

/***/ 730:
/*!***********************************************************!*\
  !*** ./src/app/popover/popover.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-list>\n  <ion-item>\n      <ion-label color=\"danger\">Bloquear usuario</ion-label>\n  </ion-item>\n  <ion-item>\n      <ion-label color=\"danger\">Ocultar Publicacion</ion-label>\n  </ion-item>\n  <ion-item>\n      <ion-label color=\"danger\">Reportar Publicacion</ion-label>\n  </ion-item>\n</ion-list>";

/***/ }),

/***/ 3386:
/*!*****************************************************!*\
  !*** ./src/app/post/post.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content mode=\"ios\" *ngIf=\"userLogged|async; else elseBlock\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size-md=\"8\" offset-md=\"2\">\n        <ion-card >\n            <ion-card-header>\n              <ion-card-title style=\"text-align: center;\">Nueva Publicación</ion-card-title>\n            </ion-card-header>\n\n            <ion-input style=\"display: none;\"  type=\"file\" accept=\".png,.jpg,.jpeg\"  (change)=\"cargarImagen($event)\" id=\"inputFile\"></ion-input>\n                <ion-row>\n                  <ion-col>\n                    <ion-button expand=\"block\" (click)=\"TomarFoto()\"><ion-icon name=\"camera-outline\" size=\"large\" style=\"margin-right: 10px;\"></ion-icon>/<ion-icon  size=\"large\" name=\"folder-outline\" style=\"margin-left: 10px;\"></ion-icon></ion-button>\n                  </ion-col>\n                </ion-row>  \n\n            <ion-img [src]=\"imagenSubida\" *ngIf=\"imagenSubida\"></ion-img>\n\n            <ion-card-content>\n              <ion-grid>\n                <ion-row style=\"height: 30px;\"></ion-row>\n                <ion-row style=\"border: solid 1px; border-radius: 10px;\">\n                  <ion-col>\n                    <ion-input type=\"text\" placeholder=\"Escribe un pie de foto\" [(ngModel)]=\"post.caption\" style=\"margin-left: 10px;\"></ion-input>\n                  </ion-col>\n                </ion-row>\n                <ion-row style=\"height: 30px;\"></ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-button (click)=\"subir()\" *ngIf=\"imagenSubida\" expand=\"block\">Postear</ion-button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              \n              \n            </ion-card-content>\n         </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n<ng-template #elseBlock>\n    <app-login></app-login>\n</ng-template>";

/***/ }),

/***/ 1476:
/*!*******************************************************************!*\
  !*** ./src/app/publicacion/publicacion.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content *ngIf=\"userLogged|async as user;\">\n    <ion-grid>\n        <ion-row>\n            <ion-col size-md=\"8\" offset-md=\"2\">\n                <ion-card>\n                    <ion-card-header>\n                        <ion-toolbar class=\"toolbar-trans\" style=\"align-items: center;\">\n                            <ion-buttons slot=\"start\">\n                                <ion-button href=\"/feed\" color=\"dark\"><ion-icon name=\"chevron-back-outline\"></ion-icon></ion-button>\n                            </ion-buttons>\n                            <ion-buttons slot=\"start\">\n                                <ion-avatar>\n\n                                    <img *ngIf=\"publicacionImprimir.id else noimagen\"  [src]=\"publicacionImprimir.uImg\" width=\"50px\">\n                                    <ng-template #noimagen>\n                                    <img  src=\"https://cdn.pixabay.com/photo/2018/06/26/01/20/connection-lost-3498366_960_720.png\" width=\"50px\">\n                                    </ng-template>\n    \n                                </ion-avatar>\n                            </ion-buttons>\n                            <ion-buttons style=\"display: flex; text-align: center;\">\n                                <ion-button color=\"dark\" *ngIf=\"publicacionImprimir.user else userFail\">{{publicacionImprimir.user}}</ion-button>\n                                <ng-template #userFail>\n                                    <ion-button  class=\"label\">Error</ion-button>\n                                </ng-template> \n                            </ion-buttons>\n                        </ion-toolbar>\n                        <ion-grid>\n                            \n                            <ion-row style=\"text-align: left; align-content: center; align-items: center; justify-content: center;\">\n                            </ion-row>\n                            <ion-row>\n                                <ion-col *ngIf=\"user.uid==publicacionImprimir.UID\" >\n                                    <ion-button   expand=\"block\" (click)=\"EditAlert(publicacionImprimir)\"><ion-icon size=\"large\" name=\"save-outline\"></ion-icon></ion-button>\n                                </ion-col>\n                                <ion-col *ngIf=\"user.uid==publicacionImprimir.UID\" >\n                                    <ion-button color=\"danger\" (click)=\"EraseAlert()\" expand=\"block\"><ion-icon size=\"large\" name=\"trash-outline\"></ion-icon></ion-button>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-card-header>\n\n                    <ion-img [src]=\"publicacionImprimir.pImg\" alt=\"\" ></ion-img>\n\n                    <ion-card-content>\n                        <ion-toolbar class=\"toolbar-trans\" translucent>\n                            <ion-buttons slot=\"start\">\n                                <ion-button color=\"{{colorheart}}\" (click)=\"heart()\"><ion-icon name=\"heart-outline\"></ion-icon><ion-label>14k</ion-label></ion-button>\n                            </ion-buttons>\n                            <ion-buttons slot=\"start\">\n                                <ion-button color=\"{{colorcoment}}\" (click)=\"coment()\"><ion-icon name=\"chatbubble-outline\"></ion-icon><ion-label>1k</ion-label></ion-button>\n                            </ion-buttons>\n                            <ion-buttons slot=\"start\">\n                                <ion-button color=\"{{colorplane}}\" (click)=\"plane()\"><ion-icon name=\"paper-plane-outline\"></ion-icon></ion-button>\n                            </ion-buttons>\n                            <ion-buttons slot=\"end\">\n                                <ion-button color=\"{{colorsave}}\" (click)=\"save()\"><ion-icon name=\"bookmark-outline\"></ion-icon></ion-button>\n                            </ion-buttons>\n                        </ion-toolbar>\n\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col>\n                                    <div *ngIf=\"user.uid==publicacionImprimir.UID\">\n                                        <ion-label style=\"font-size: 12px;\">Modo edición:</ion-label>\n                                    </div>\n                                    <div *ngIf=\"user.uid==publicacionImprimir.UID else lockedDisplay\">\n                                        <ion-textarea [(ngModel)]=\"publicacionImprimir.caption\" placeholder=\"Ingresar Nueva Caption\" ></ion-textarea>\n                                    </div>\n                                    <ng-template #lockedDisplay>\n                                        <ion-label color=\"dark\" class=\"ion-text-warp\">{{publicacionImprimir.caption}}</ion-label>\n                                    </ng-template> \n                                    \n                                </ion-col>\n                            </ion-row>\n                            <!-- <ion-row>\n                                <ion-col>\n                                    <ion-button href=\"/feed\" expand=\"block\">Regresar</ion-button>\n                                </ion-col>                   \n                            </ion-row> -->\n                        </ion-grid>\n\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n  \n\n</ion-content>";

/***/ }),

/***/ 953:
/*!***********************************************************************!*\
  !*** ./src/app/publicaciones/publicaciones.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-grid *ngIf=\"userLogged|async as user;\"> \n  <ion-segment color=\"primary\" value=\"posts\" (ionChange)=\"toggleActivo($event)\">\n    <ion-segment-button value=\"posts\" cheked>\n      <ion-icon name=\"grid\"></ion-icon>    \n    </ion-segment-button>\n    <ion-segment-button value=\"tagged\">\n        <ion-icon name=\"people-circle-outline\"></ion-icon>\n      </ion-segment-button>\n  </ion-segment>\n  \n  <ion-grid *ngIf=\" activo ==='posts'\">\n    <ion-row > \n        <ion-col size=\"4\" *ngFor=\"let post of posts\"> \n              <ion-img (click)=\"redirect(post.id)\"  [src]=\"post.pImg\" style=\"height: 100%;\"></ion-img>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row style=\"justify-content: center;\" *ngIf=\" activo =='tagged'\"> \n      <ion-label>En construccion</ion-label>\n    </ion-row>\n  </ion-grid>\n  \n</ion-grid>";

/***/ }),

/***/ 4872:
/*!*****************************************************!*\
  !*** ./src/app/tabs/tabs.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-tabs >\n  <ion-tab-bar slot=\"bottom\"  *ngIf=\"userLogged|async as user\">\n    <ion-tab-button  tab=\"feed\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <ion-label>Inicio</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button  tab=\"post\">\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\n      <ion-label>Post</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profile\">\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\n      <ion-label>Perfil</ion-label>\n    </ion-tab-button>\n    \n  </ion-tab-bar>\n</ion-tabs>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map