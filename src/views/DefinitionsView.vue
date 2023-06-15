<template>
    <Letters/>
  </template>
  
  <script>

import Letters from '@/components/Letters.vue'
  export default {
    name: 'DefinitionsView',
    data() {
          return {
              letters: "AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ"
          }
    },
    components:{
        Letters,
    },
}
  </script>