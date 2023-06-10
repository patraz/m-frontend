<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <a href="/" class="flex items-center">
                <img src="https://i.imgur.com/qEHbXnv.png" class="w-full md:h-32 md:m-3 " alt="Sciek Logo" />
            </a>
            <div class="flex ml-3 my-3 md:order-2">
                <div class="relative my-3 mx-3">
                    <form v-on:submit.prevent="searchForm()">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <button type="submit">
                                <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="sr-only">Search icon</span>
                            </button>

                        </div>
                        <input type="text" id="search-navbar" v-model="search"
                            class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Szukaj słowa...">
                    </form>
                </div>
                <button @click="toggleMenu()" data-collapse-toggle="navbar-search" type="button"
                    class="ml-12 px-5 justify-self-end  text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-search" aria-expanded="false">
                    <span class="sr-only">Open menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <nav id="nav-menu-options" class="lg:hidden w-full bg-neutral-900 z-20 top-12 hidden">
                <a @click="random()"
                    class="block text-center text-emerald-400  text-l border-b-2 border-emerald-700 py-3 hover:text-emerald-900">Losuj słowo</a>
                <RouterLink :to="'/about'" class="block text-emerald-400 text-center hover:text-emerald-900 text-l border-b-2 border-emerald-700 py-3">O
                            nas</RouterLink>
            </nav>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                <div class="relative mt-3 md:hidden">
                    <div  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>

                    </div>
                    <input type="text" id="search-navbar"
                        class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Szukaj słowa...">
                </div>
                <ul
                    class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <button @click="random()"
                            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-emerald-500 md:p-0 dark:text-white md:dark:text-emerald-500"
                            aria-current="page">Losuj słowo</button>
                    </li>
                    <li>
                        <RouterLink :to="'/about'"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-700 md:p-0 md:dark:hover:text-emerald-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            O
                            nas</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<script>
import axios from 'axios';

export default {
    name: 'Nav',
    data() {
        return {
            search: '',
            isMobileMenuOpen: false,
        }
    },
    methods: {
        async random() {
            await axios
                .get(`/api/v1/definitions/random/`)
                .then(response => {
                    response.data.slug
                    window.location.href = `/${response.data.slug}/`
                })

        },
        async searchForm() {

            if (!this.search) {
                this.$router.push({ name: 'Search', params: { q: ' ' } });
            }
            else {
                this.$router.push({ name: 'Search', params: { q: this.search } });
            }
        },
        toggleMenu() {
            console.log('hejo')
            let menu = document.getElementById('nav-menu-options')
            menu.classList.toggle("hidden")
        }
    }
}
</script>