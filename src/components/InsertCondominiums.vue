<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="3" hide>
          <v-text-field
            label="Nome"
            hide-details
            v-model="condomino.nome"
            placeholder="Digite o Nome Completo"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Email"
            hide-details
            v-model="condomino.email"
            placeholder="Digite o email"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Telefone"
            hide-details
            v-model="condomino.telefone"
            placeholder="Digite o telefone"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Bloco"
            hide-details
            v-model="condomino.bloco"
            placeholder="Digite o bloco"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Apartamento"
            hide-details
            v-model="condomino.apartamento"
            placeholder="Digite o apartamento"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-checkbox
            v-model="condomino.proprietario"
            :label="`${condomino.proprietario ? 'Proprietário' : 'Inquilino' }`"
          ></v-checkbox>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-alert >Todos os campos são obrigatórios</v-alert>
          
        </v-col>

        <v-col cols="6" sm="6" md="3">
          <v-btn tile large to="/condominos">
            CANCELAR
          </v-btn>
        </v-col>

        <v-col cols="6" sm="6" md="3">
           <v-btn color="success" tile large>
            GRAVAR
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import db from '../firebase/firebaseInit'

export default {
  name: 'InserCondominiums',
   data: () => ({ 
     condomino: {
      nome: '',
      email: '',
      telefone: '',
      bloco: '',
      apartamento: '',
      proprietario: true
     },
   }),
   methods: {
     addCondomino () {
       let setDoc = db.collection('cities').doc('condominos').set(this.condomino);
       console.log(setDoc);
     }
   },
}
</script>