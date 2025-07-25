import './bootstrap'; // Tus scripts de Bootstrap (si los tienes)
import '../css/app.css'; // Tu CSS global

// Importaciones de Vue e Inertia
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) });

        app.use(plugin);
        app.use(ZiggyVue);

        app.mount(el);

        if (typeof KTApp !== 'undefined' && KTApp.init) {
            KTApp.init();
            console.log('Metronic: KTApp.init() ejecutado en la carga inicial.');
        } else {
            console.warn('Metronic: KTApp no está definido o init no es una función en la carga inicial.');
        }
        

        return app; 
    },
    progress: {
        color: '#4B5563',
    },
    
    onSuccess: () => {
        if (typeof KTApp !== 'undefined' && KTApp.init) {
            KTApp.init();
            console.log('Metronic: KTApp.init() re-ejecutado después de una visita de Inertia.');
        } else {
            console.warn('Metronic: KTApp no está definido o init no es una función después de una visita de Inertia.');
        }
    },
    onError: (errors) => {
        
        if (typeof KTApp !== 'undefined' && KTApp.init) {
            KTApp.init();
            console.log('Metronic: KTApp.init() re-ejecutado después de un error de Inertia.');
        }
        console.error('Inertia Error:', errors);
    }
    
});