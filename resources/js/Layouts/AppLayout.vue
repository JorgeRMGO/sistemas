<script setup>
import { onMounted, ref } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import ApplicationMark from '@/Components/ApplicationMark.vue';
import Banner from '@/Components/Banner.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import Aside from '@/Components/Aside.vue';

defineProps({
    title: String,
});

const showingNavigationDropdown = ref(false);

const switchToTeam = (team) => {
    router.put(route('current-team.update'), {
        team_id: team.id,
    }, {
        preserveState: false,
    });
};

const logout = () => {
    router.post(route('logout'));
};

onMounted(() => {
    if (typeof KTMenu !== 'undefined') {
        KTMenu.init();
    }
    if (typeof KTScroll !== 'undefined') {
        KTScroll.init();
    }

    if (typeof KTLayoutAside !== 'undefined' && KTLayoutAside.init) {
        KTLayoutAside.init();
    }

    if (typeof KTToggle !== 'undefined' && KTToggle.init) {
        KTToggle.init()
    }

    if (typeof KTDrawer !== 'undefined') {
        KTDrawer.init();
    }

});

</script>

<template>
    <div>

        <Head :title="title" />

        <Aside />

        <main>
            <slot />
        </main>
    </div>
</template>
