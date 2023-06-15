<template>
    <section class="bg-gradient-to-b from-neutral-900 to-neutral-800 text-white body-font">
        <div class="container px-5 py-8 mx-auto flex flex-col">
            <div class="lg:w-4/6 mx-auto text-center">
                <div class="flex flex-col sm:flex-row mt-10">
                    <ul class="flex flex-wrap items-center justify-center mb-6 text-emerald-400 dark:text-white">
                        <li v-for="letter in letters" :key="letter" @click="getWordsFromClick(letter)">
                            <RouterLink
                                class="relative inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-2 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800 m-2"
                                :to="'/definitions/' + letter">{{ letter }}</RouterLink>
                        </li>
                    </ul>
                </div>
                <nav aria-label="Page navigation example" class="pt-4 sm:border-t border-gray-200 sm:border-t-0 border-t">
                        <ul class="inline-flex items-center -space-x-px">
                            <li>
                                <a @click="getPrevious()"
                                    class="block text-center px-3 py-1 ml-0 leading-tight text-emerald-500 bg-gray border border-gray-300 rounded-l-lg hover:bg-emerald-700 hover:text-white">
                                    <span class="sr-only">Previous</span>
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </li>
                            <li v-for="page in paginator.pages" :key="paginator.pages">
                                <a @click="getNumber(page, this.letter)"
                                
                                 class=" px-3 py-1 font-bold text-emerald-500 bg-gray rounded-lg border border-gray-300 hover:bg-emerald-700 hover:text-white"
                                 :class="{'ring-2 ring-emerald-300': isActive(page)}"
                                 >{{ page }}
                                </a>
                            </li>
                            <li>
                                <a @click="getNext()"
                                    class="block px-3 py-1 leading-tight text-emerald-500 bg-gray border border-gray-300 rounded-r-lg hover:bg-emerald-700 hover:text-white">
                                    <span class="sr-only">Next</span>
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                <div
                    class=" sm:pl-8  text-center sm:text-left">
                    
                    <ul>
                        <li class="w-full p-2" v-for="word in words" v-bind:key="word.slug">
                            <div class="bg-neutral-700 p-5 rounded-lg">
                                <p class=" text-emerald-400 text-xl mb-3 title-font uppercase">{{ word.word }}</p>
                                <p class=" text-white-400 text-l mb-3 title-font">"{{ word.meaning.slice(0, 30) }}...""
                                    <RouterLink :to="'/' + word.slug"
                                        class="text-bold text-emerald-300 hover:text-emerald-500">kliknij po
                                        więcej</RouterLink>
                                </p>
                            </div>
                        </li>
                    </ul>

                </div>

            </div>

        </div>
    </section>
</template>
  
<script>
import axios from 'axios'
export default {
    name: 'Letters',
    data() {
        return {
            letters: "AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ",
            words: [],
            paginator: {},
            activePage: null,
            letter: null,
        }
    },
    mounted() {
        this.getWords()
    },
    methods: {
        async getWords() {
            await axios
                .get(`/api/v1/definitions/dict/a/`)
                .then(response => {
                    console.log(response.data)
                    this.paginator = response.data
                    this.words = response.data.results
                    this.current = response.data.current
                    document.title = 'Definicje | Ściek'
                })

        },
        async getWordsFromClick(letter) {
            await axios
                .get(`/api/v1/definitions/dict/${letter}/`)
                .then(response => {
                    console.log(response.data)
                    this.paginator = response.data
                    this.words = response.data.results
                    this.current = response.data.current
                    this.letter = letter
                    this.activePage = null
                    document.title = 'Definicje | Ściek'

                })

        },
        async getPrevious() {
            if (this.paginator.previous) {
                await axios
                .get(this.paginator.previous)
                .then(response => {
                    console.log(response.data)
                    this.paginator = response.data
                    this.words = response.data.results
                    this.current = response.data.current

                    document.title = 'Definicje | Ściek'
                })
            }
            

        },
        async getNext() {
            if (this.paginator.next) {
                await axios
                .get(this.paginator.next)
                .then(response => {
                    console.log(response.data)
                    
                    this.paginator = response.data
                    this.words = response.data.results
                    this.pages = response.data.count
                    this.current = response.data.current

                    document.title = 'Definicje | Ściek'
                })
            }
        },
        async getNumber(page, letter) {
            http://127.0.0.1:8000/api/v1/definitions/dict/a/?page=2
            console.log(letter)
            await axios 
            .get(`/api/v1/definitions/dict/${letter}/`, { params: { page: page } })
            .then(response => {
                this.activePage = page
                console.log(response.data)
                this.paginator = response.data
                this.words = response.data.results
                this.pages = response.data.count
                this.current = response.data.current

                document.title = 'Definicje | Ściek'
            })
        },
        isActive(page) {
            return page === this.activePage;
        },
    }
}
</script>