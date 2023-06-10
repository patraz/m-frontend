<template>
  <section class="bg-gradient-to-b from-neutral-900 to-neutral-800 text-white body-font">
    <div class="container px-5 py-8 md:py-24 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-auto">

        <div class="flex flex-col sm:flex-row mt-10">
          <WordList />
          <div
            class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p class="leading-relaxed text-xl mb-4">
              <span class="font-bold text-3xl pr-2">Ściek -</span>zbiór wyrazów, wyrażeń i skrótów używanych głównie w
              młodzieżowym i miejskim środowisku. Ten kolorowy język jest często używany w rapie, hip-hopie i kulturze
              ulicznej. Słownik slangu ulicznego pomaga zrozumieć i porozumieć się z ludźmi, którzy posługują się tym
              nieformalnym stylem komunikacji. Od skrótów typu "YOLO" (You Only Live Once) po unikalne wyrazy jak
              "chillować" (odpoczywać), ten słownik odzwierciedla dynamiczną i nieustannie ewoluującą naturę języka ulicy.
            </p>
            <RouterLink :to="'/about'" class="text-emerald-500 inline-flex items-center">Napędzane przez chatGPT<svg
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
              </svg>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<script>
import axios from 'axios'
import WordList from '@/components/WordList.vue'

export default {
  data() {
    return {
      words: []
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    WordList,
  }
}
</script>

