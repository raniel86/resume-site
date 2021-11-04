import Cookies from "js-cookie";
import Vue     from 'vue';
import Vuex    from 'vuex';
import i18n    from '../i18n';

Vue.use(Vuex);

// cookie names
const COOKIE_THEME  = 'theme';
const COOKIE_LOCALE = 'locale';

export default new Vuex.Store({
    state:     {
        theme:       Cookies.get(COOKIE_THEME) || 'light',
        locale:      Cookies.get(COOKIE_LOCALE) || i18n.fallbackLocale,
        sidebarOpen: false
    },
    mutations: {
        changeTheme(state, theme) {
            this.state.theme = theme;

            // save theme in cookie
            Cookies.set(COOKIE_THEME, theme, {expires: 7, path: '', secure: true, sameSite: 'strict'});
        },
        changeLocale(state, locale) {
            this.state.locale = locale;

            // save locale in cookie
            Cookies.set(COOKIE_LOCALE, locale, {expires: 7, path: '', secure: true, sameSite: 'strict'});
        }
    },
    actions:   {
        toggleSidebar() {
            this.state.sidebarOpen = !this.state.sidebarOpen;
        },
        closeSidebar() {
            this.state.sidebarOpen = false;
        },
        openSidebar() {
            this.state.sidebarOpen = true;
        }
    },
    modules:   {}
})
