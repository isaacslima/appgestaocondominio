<template>
<v-container>
    <v-content>
      <v-data-table
      :headers="headers"
      :items="condominos"
      locale="pt-BR"
      :items-per-page="5"
      group-by="bloco"
      class="elevation-1"
    ></v-data-table>
    </v-content>
</v-container>

</template>

<script>
import firestore from 'vue-firestore'
require('firebase/firestore')

  export default {
    name: 'Login',

    data: () => ({
      headers: [
        {
          text: 'Nome',
          align: 'start',
          value: 'nome',
        },
        { text: 'Email', value: 'email' },
        { text: 'BLOCO', value: 'bloco' },
        { text: 'APTO', value: 'apartamento' },
        { text: 'Telefone', value: 'telefone' },
      ],
      condominos: [
      ],
    }),
    mounted () {
      // Binding Collections
      this.$binding("condominos", firestore.collection("Condomino"))
      .then((users) => {
        console.log(users) // => __ob__: Observer
      })
    }
  }
</script>


