'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountTypeModule.html" data-type="entity-link">AccountTypeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AccountTypeModule-a61ea941ff4abd95b92238b528fd0fee"' : 'data-target="#xs-controllers-links-module-AccountTypeModule-a61ea941ff4abd95b92238b528fd0fee"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AccountTypeModule-a61ea941ff4abd95b92238b528fd0fee"' :
                                            'id="xs-controllers-links-module-AccountTypeModule-a61ea941ff4abd95b92238b528fd0fee"' }>
                                            <li class="link">
                                                <a href="controllers/AccountTypeController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountTypeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AccountTypeModule-a61ea941ff4abd95b92238b528fd0fee"' : 'data-target="#xs-injectables-links-module-AccountTypeModule-a61ea941ff4abd95b92238b528fd0fee"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccountTypeModule-a61ea941ff4abd95b92238b528fd0fee"' :
                                        'id="xs-injectables-links-module-AccountTypeModule-a61ea941ff4abd95b92238b528fd0fee"' }>
                                        <li class="link">
                                            <a href="injectables/AccountTypeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AccountTypeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountTypeModule.html" data-type="entity-link">AccountTypeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AccountTypeModule-a61ea941ff4abd95b92238b528fd0fee-1"' : 'data-target="#xs-controllers-links-module-AccountTypeModule-a61ea941ff4abd95b92238b528fd0fee-1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AccountTypeModule-a61ea941ff4abd95b92238b528fd0fee-1"' :
                                            'id="xs-controllers-links-module-AccountTypeModule-a61ea941ff4abd95b92238b528fd0fee-1"' }>
                                            <li class="link">
                                                <a href="controllers/AccountTypeController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountTypeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AccountTypeModule-a61ea941ff4abd95b92238b528fd0fee-1"' : 'data-target="#xs-injectables-links-module-AccountTypeModule-a61ea941ff4abd95b92238b528fd0fee-1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccountTypeModule-a61ea941ff4abd95b92238b528fd0fee-1"' :
                                        'id="xs-injectables-links-module-AccountTypeModule-a61ea941ff4abd95b92238b528fd0fee-1"' }>
                                        <li class="link">
                                            <a href="injectables/AccountTypeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AccountTypeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-b294a27db9c8797a57fe8c48e01b1c5d"' : 'data-target="#xs-controllers-links-module-AuthModule-b294a27db9c8797a57fe8c48e01b1c5d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-b294a27db9c8797a57fe8c48e01b1c5d"' :
                                            'id="xs-controllers-links-module-AuthModule-b294a27db9c8797a57fe8c48e01b1c5d"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-b294a27db9c8797a57fe8c48e01b1c5d"' : 'data-target="#xs-injectables-links-module-AuthModule-b294a27db9c8797a57fe8c48e01b1c5d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-b294a27db9c8797a57fe8c48e01b1c5d"' :
                                        'id="xs-injectables-links-module-AuthModule-b294a27db9c8797a57fe8c48e01b1c5d"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link">DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GlobalAdminModule.html" data-type="entity-link">GlobalAdminModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GlobalTraderModule.html" data-type="entity-link">GlobalTraderModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LanguageAdminModule.html" data-type="entity-link">LanguageAdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-LanguageAdminModule-ef7c13336b6e4b643d92e63929e5e5f5"' : 'data-target="#xs-controllers-links-module-LanguageAdminModule-ef7c13336b6e4b643d92e63929e5e5f5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LanguageAdminModule-ef7c13336b6e4b643d92e63929e5e5f5"' :
                                            'id="xs-controllers-links-module-LanguageAdminModule-ef7c13336b6e4b643d92e63929e5e5f5"' }>
                                            <li class="link">
                                                <a href="controllers/LanguageAdminController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LanguageAdminController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LanguageAdminModule-ef7c13336b6e4b643d92e63929e5e5f5"' : 'data-target="#xs-injectables-links-module-LanguageAdminModule-ef7c13336b6e4b643d92e63929e5e5f5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LanguageAdminModule-ef7c13336b6e4b643d92e63929e5e5f5"' :
                                        'id="xs-injectables-links-module-LanguageAdminModule-ef7c13336b6e4b643d92e63929e5e5f5"' }>
                                        <li class="link">
                                            <a href="injectables/LanguageService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LanguageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LanguageTraderModule.html" data-type="entity-link">LanguageTraderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-LanguageTraderModule-ef7c13336b6e4b643d92e63929e5e5f5"' : 'data-target="#xs-controllers-links-module-LanguageTraderModule-ef7c13336b6e4b643d92e63929e5e5f5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LanguageTraderModule-ef7c13336b6e4b643d92e63929e5e5f5"' :
                                            'id="xs-controllers-links-module-LanguageTraderModule-ef7c13336b6e4b643d92e63929e5e5f5"' }>
                                            <li class="link">
                                                <a href="controllers/LanguageTraderController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LanguageTraderController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LanguageTraderModule-ef7c13336b6e4b643d92e63929e5e5f5"' : 'data-target="#xs-injectables-links-module-LanguageTraderModule-ef7c13336b6e4b643d92e63929e5e5f5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LanguageTraderModule-ef7c13336b6e4b643d92e63929e5e5f5"' :
                                        'id="xs-injectables-links-module-LanguageTraderModule-ef7c13336b6e4b643d92e63929e5e5f5"' }>
                                        <li class="link">
                                            <a href="injectables/LanguageService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LanguageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OpenAccountModule.html" data-type="entity-link">OpenAccountModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-OpenAccountModule-d86498cfc56c750a2dc78ff66c4a4676"' : 'data-target="#xs-controllers-links-module-OpenAccountModule-d86498cfc56c750a2dc78ff66c4a4676"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OpenAccountModule-d86498cfc56c750a2dc78ff66c4a4676"' :
                                            'id="xs-controllers-links-module-OpenAccountModule-d86498cfc56c750a2dc78ff66c4a4676"' }>
                                            <li class="link">
                                                <a href="controllers/TraderOpenAccountController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TraderOpenAccountController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OpenAccountModule-d86498cfc56c750a2dc78ff66c4a4676"' : 'data-target="#xs-injectables-links-module-OpenAccountModule-d86498cfc56c750a2dc78ff66c4a4676"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OpenAccountModule-d86498cfc56c750a2dc78ff66c4a4676"' :
                                        'id="xs-injectables-links-module-OpenAccountModule-d86498cfc56c750a2dc78ff66c4a4676"' }>
                                        <li class="link">
                                            <a href="injectables/IsExist.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>IsExist</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/IsUnique.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>IsUnique</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OpenAccountService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>OpenAccountService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskModule.html" data-type="entity-link">TaskModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TaskModule-ff0e59b636f6b149d5fddb95da123d2c"' : 'data-target="#xs-controllers-links-module-TaskModule-ff0e59b636f6b149d5fddb95da123d2c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TaskModule-ff0e59b636f6b149d5fddb95da123d2c"' :
                                            'id="xs-controllers-links-module-TaskModule-ff0e59b636f6b149d5fddb95da123d2c"' }>
                                            <li class="link">
                                                <a href="controllers/TaskController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TaskController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TaskModule-ff0e59b636f6b149d5fddb95da123d2c"' : 'data-target="#xs-injectables-links-module-TaskModule-ff0e59b636f6b149d5fddb95da123d2c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TaskModule-ff0e59b636f6b149d5fddb95da123d2c"' :
                                        'id="xs-injectables-links-module-TaskModule-ff0e59b636f6b149d5fddb95da123d2c"' }>
                                        <li class="link">
                                            <a href="injectables/TaskService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TaskService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TraderModule.html" data-type="entity-link">TraderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TraderModule-e8369df203091fcbcae5afcc187fd72f"' : 'data-target="#xs-controllers-links-module-TraderModule-e8369df203091fcbcae5afcc187fd72f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TraderModule-e8369df203091fcbcae5afcc187fd72f"' :
                                            'id="xs-controllers-links-module-TraderModule-e8369df203091fcbcae5afcc187fd72f"' }>
                                            <li class="link">
                                                <a href="controllers/TraderController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TraderController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TraderModule-e8369df203091fcbcae5afcc187fd72f"' : 'data-target="#xs-injectables-links-module-TraderModule-e8369df203091fcbcae5afcc187fd72f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TraderModule-e8369df203091fcbcae5afcc187fd72f"' :
                                        'id="xs-injectables-links-module-TraderModule-e8369df203091fcbcae5afcc187fd72f"' }>
                                        <li class="link">
                                            <a href="injectables/TraderService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TraderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TranslationAdminModule.html" data-type="entity-link">TranslationAdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TranslationAdminModule-c1a99b05e04b370918403de912d0c6a1"' : 'data-target="#xs-controllers-links-module-TranslationAdminModule-c1a99b05e04b370918403de912d0c6a1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TranslationAdminModule-c1a99b05e04b370918403de912d0c6a1"' :
                                            'id="xs-controllers-links-module-TranslationAdminModule-c1a99b05e04b370918403de912d0c6a1"' }>
                                            <li class="link">
                                                <a href="controllers/TranslationAdminController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TranslationAdminController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TranslationAdminModule-c1a99b05e04b370918403de912d0c6a1"' : 'data-target="#xs-injectables-links-module-TranslationAdminModule-c1a99b05e04b370918403de912d0c6a1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TranslationAdminModule-c1a99b05e04b370918403de912d0c6a1"' :
                                        'id="xs-injectables-links-module-TranslationAdminModule-c1a99b05e04b370918403de912d0c6a1"' }>
                                        <li class="link">
                                            <a href="injectables/TranslationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TranslationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TranslationTraderModule.html" data-type="entity-link">TranslationTraderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TranslationTraderModule-c1a99b05e04b370918403de912d0c6a1"' : 'data-target="#xs-controllers-links-module-TranslationTraderModule-c1a99b05e04b370918403de912d0c6a1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TranslationTraderModule-c1a99b05e04b370918403de912d0c6a1"' :
                                            'id="xs-controllers-links-module-TranslationTraderModule-c1a99b05e04b370918403de912d0c6a1"' }>
                                            <li class="link">
                                                <a href="controllers/TranslationTraderController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TranslationTraderController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TranslationTraderModule-c1a99b05e04b370918403de912d0c6a1"' : 'data-target="#xs-injectables-links-module-TranslationTraderModule-c1a99b05e04b370918403de912d0c6a1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TranslationTraderModule-c1a99b05e04b370918403de912d0c6a1"' :
                                        'id="xs-injectables-links-module-TranslationTraderModule-c1a99b05e04b370918403de912d0c6a1"' }>
                                        <li class="link">
                                            <a href="injectables/TranslationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TranslationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AuthController-1.html" data-type="entity-link">AuthController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AccountType.html" data-type="entity-link">AccountType</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountType-1.html" data-type="entity-link">AccountType</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountTypeController.html" data-type="entity-link">AccountTypeController</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountTypeController-1.html" data-type="entity-link">AccountTypeController</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountTypeDTO.html" data-type="entity-link">AccountTypeDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountTypeService.html" data-type="entity-link">AccountTypeService</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountTypeService-1.html" data-type="entity-link">AccountTypeService</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExistValidator.html" data-type="entity-link">ExistValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/Language.html" data-type="entity-link">Language</a>
                            </li>
                            <li class="link">
                                <a href="classes/Language-1.html" data-type="entity-link">Language</a>
                            </li>
                            <li class="link">
                                <a href="classes/LanguageAdminController.html" data-type="entity-link">LanguageAdminController</a>
                            </li>
                            <li class="link">
                                <a href="classes/LanguageDTO.html" data-type="entity-link">LanguageDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/LanguageService.html" data-type="entity-link">LanguageService</a>
                            </li>
                            <li class="link">
                                <a href="classes/LanguageTraderController.html" data-type="entity-link">LanguageTraderController</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoggerMiddleware.html" data-type="entity-link">LoggerMiddleware</a>
                            </li>
                            <li class="link">
                                <a href="classes/OpenAccountController.html" data-type="entity-link">OpenAccountController</a>
                            </li>
                            <li class="link">
                                <a href="classes/OpenAccountService.html" data-type="entity-link">OpenAccountService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Task.html" data-type="entity-link">Task</a>
                            </li>
                            <li class="link">
                                <a href="classes/Task-1.html" data-type="entity-link">Task</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskController.html" data-type="entity-link">TaskController</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskDTO.html" data-type="entity-link">TaskDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskDTO-1.html" data-type="entity-link">TaskDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskService.html" data-type="entity-link">TaskService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Trader.html" data-type="entity-link">Trader</a>
                            </li>
                            <li class="link">
                                <a href="classes/Trader-1.html" data-type="entity-link">Trader</a>
                            </li>
                            <li class="link">
                                <a href="classes/TraderController.html" data-type="entity-link">TraderController</a>
                            </li>
                            <li class="link">
                                <a href="classes/TraderMessengersDTO.html" data-type="entity-link">TraderMessengersDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/TraderOpenBaseAccountDTO.html" data-type="entity-link">TraderOpenBaseAccountDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/TraderOpenDemoAccountDTO.html" data-type="entity-link">TraderOpenDemoAccountDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/TraderOpenDemoAccountDTO-1.html" data-type="entity-link">TraderOpenDemoAccountDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/TraderOpenTradingAccountDTO.html" data-type="entity-link">TraderOpenTradingAccountDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/TraderOpenTradingAccountDTO-1.html" data-type="entity-link">TraderOpenTradingAccountDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/TraderService.html" data-type="entity-link">TraderService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Translation.html" data-type="entity-link">Translation</a>
                            </li>
                            <li class="link">
                                <a href="classes/TranslationAdmin.html" data-type="entity-link">TranslationAdmin</a>
                            </li>
                            <li class="link">
                                <a href="classes/TranslationAdmin-1.html" data-type="entity-link">TranslationAdmin</a>
                            </li>
                            <li class="link">
                                <a href="classes/TranslationAdminController.html" data-type="entity-link">TranslationAdminController</a>
                            </li>
                            <li class="link">
                                <a href="classes/TranslationDTO.html" data-type="entity-link">TranslationDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/TranslationEmail.html" data-type="entity-link">TranslationEmail</a>
                            </li>
                            <li class="link">
                                <a href="classes/TranslationEmail-1.html" data-type="entity-link">TranslationEmail</a>
                            </li>
                            <li class="link">
                                <a href="classes/TranslationService.html" data-type="entity-link">TranslationService</a>
                            </li>
                            <li class="link">
                                <a href="classes/TranslationTrader.html" data-type="entity-link">TranslationTrader</a>
                            </li>
                            <li class="link">
                                <a href="classes/TranslationTrader-1.html" data-type="entity-link">TranslationTrader</a>
                            </li>
                            <li class="link">
                                <a href="classes/TranslationTraderController.html" data-type="entity-link">TranslationTraderController</a>
                            </li>
                            <li class="link">
                                <a href="classes/UniqueValidator.html" data-type="entity-link">UniqueValidator</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService-1.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IsExist.html" data-type="entity-link">IsExist</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IsTimezone.html" data-type="entity-link">IsTimezone</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IsUnique.html" data-type="entity-link">IsUnique</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link">LoggerMiddleware</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/UniqueValidationArguments.html" data-type="entity-link">UniqueValidationArguments</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});