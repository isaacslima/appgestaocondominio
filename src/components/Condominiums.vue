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
import db from '../firebase/firebaseInit'

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
    created () {
      db.collection('condominos').get().then(querySnapshot => {
        querySnapshot.forEach(doc=> {
          const data = {
            'id': doc.id,
            'nome': doc.data().nome,
            'email': doc.data().email,
            'apartamento': doc.data().apartamento,
            'telefone': doc.data().telefone,
            'bloco': doc.data().bloco
          }
          this.condominos.push(data);
        })
      })
    }
  }
</script>


