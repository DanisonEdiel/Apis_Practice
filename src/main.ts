import { createApp, h, provide } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import apolloClient from './apollo'; // Archivo de configuración de Apollo Client

import { createPinia } from 'pinia';
import App from './App.vue';
import { router } from './router';
import vuetify from './plugins/vuetify';
import '@/scss/style.scss';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import VueApexCharts from 'vue3-apexcharts';
import VueTablerIcons from 'vue-tabler-icons';
import { fakeBackend } from '@/utils/helpers/fake-backend';
import 'vue3-carousel/dist/carousel.css';
//Mock Api data
import './_mockApis';

import Maska from 'maska';

//i18n
import { createI18n } from 'vue-i18n';
import messages from '@/utils/locales/messages';

//ScrollTop
import VueScrollTo from 'vue-scrollto';

//LightBox
import VueEasyLightbox from 'vue-easy-lightbox';

const i18n = createI18n({
    locale: 'en',
    messages: messages,
    silentTranslationWarn: true,
    silentFallbackWarn: true
});

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient); // Proveer Apollo Client
    },
    render: () => h(App),
});

fakeBackend();
app.use(router);
app.use(PerfectScrollbar);
app.use(createPinia());
app.use(VueTablerIcons);
app.use(i18n);
app.use(Maska);
app.use(VueApexCharts);
app.use(vuetify);
app.use(VueEasyLightbox);
app.use(VueScrollTo, {
    duration: 1000,
    easing: "ease",
});

// Montar la aplicación
app.mount('#app');
