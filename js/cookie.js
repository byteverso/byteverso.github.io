var cc = initCookieConsent();

console.log("vai porra")

function loadScriptAsync(scriptSrc, callback) {
    if (typeof callback !== 'function') {
        throw new Error('Not a valid callback for async script load');
    }
    var script = document.createElement('script');
    script.onload = callback;
    script.src = scriptSrc;
    document.head.appendChild(script);
}
// run plugin with your configuration
cc.run({
    current_lang: 'en',
    autoclear_cookies: true,                   // default: false
    page_scripts: true,                        // default: false

    // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    // delay: 0,                               // default: 0
    // auto_language: null                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    // force_consent: false,                   // default: false
    // hide_from_bots: false,                  // default: false
    // remove_cookie_tables: false             // default: false
    // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    // cookie_domain: location.hostname,       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    // revision: 0,                            // default: 0

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
    },

    onAccept: function (cookie) {
        console.log("nunca veio")
        // if(cookie.categories.length === 1 && cookie.categories[0] === "necessary" ){
        //     return;
        // }

        loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=G-68ZDB9CLY9', function () {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-68ZDB9CLY9', { 'anonymize_ip': true}); //REPLACE WITH YOUR GA TAG!
        });
    },

    onChange: function (cookie, changed_preferences) {
        //
    },

    languages: {
        'en': {
            consent_modal: {
                title: 'Nós utilizamos Cookies!',
                description: 'Olá, este site usa cookies essenciais para garantir seu funcionamento adequado e cookies de rastreamento para entender como você interage com ele. Este último será definido somente após consentimento. <button type="button" data-cc="c-settings" class="cc-link">Revisar</button>',
                primary_btn: {
                    text: 'Aceitar tudo',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Rejeitar tudo',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Preferência de Cookies',
                save_settings_btn: 'Salvar',
                accept_all_btn: 'Aceitar tudo',
                reject_all_btn: 'Rejeitar tudo',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'},
                    {col4: 'Description'}
                ],
                blocks: [
                    {
                        title: 'Uso de Cookies 📢',
                        description: 'Eu uso cookies para garantir as funcionalidades básicas do site e para aprimorar sua experiência online. Você pode escolher cada categoria para entrar/sair sempre que quiser. Para obter mais detalhes relativos a cookies e outros dados confidenciais, leia a <a class="cc-link" href="/politica-de-privacidade/">politica de privacidade</a>.'
                    }, {
                        title: 'Cookies estritamente necessários',
                        description: 'Esses cookies são essenciais para o bom funcionamento do meu site. Sem esses cookies, o site não funcionaria corretamente',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Performance e Analytics cookies',
                        description: 'Esses cookies permitem que o site se lembre das escolhas que você fez no passado',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: '^_ga',       // match all cookies starting with "_ga"
                                col2: 'google.com',
                                col3: '2 anos',
                                col4: 'Usado para configurar google analytics',
                                is_regex: true
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '1 dia',
                                col4: 'Usado para configurar google analytics',
                            }
                        ]
                    }, {
                        title: 'Cookies de publicidade e direcionamento',
                        description: 'Esses cookies coletam informações sobre como você usa o site, quais páginas você visitou e em quais links você clicou. Todos os dados são anonimizados e não podem ser usados para identificá-lo',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        }
                    }, {
                        title: 'Mais informações',
                        description: 'Para qualquer dúvida em relação à nossa política de cookies e suas escolhas, por favor <a class="cc-link" href="https://instagram.com/byteverso">entre em contato</a> ou leia a <a class="cc-link" href="/politica-de-privacidade/">politica de privacidade</a>.',
                    }
                ]
            }
        }
    }
});

console.log("passou ja")


//if (!cookieconsent.validCookie('_gid')) {
//        loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=G-68ZDB9CLY9', function () {
//            window.dataLayer = window.dataLayer || [];
//            function gtag() { dataLayer.push(arguments); }
//            gtag('js', new Date());
//            gtag('config', 'G-68ZDB9CLY9', { 'anonymize_ip': true }); //REPLACE WITH YOUR GA TAG!
//        });
//};