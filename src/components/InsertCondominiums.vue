<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="3" hide>
          <v-text-field
            label="Nome Completo"
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
          <v-autocomplete
            v-model="condomino.bloco"
            :items="blocos"
            chips
            small-chips
            placeholder="Digite o bloco"
            outlined
          >
          </v-autocomplete>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-autocomplete
            label="Apartamento"
            v-model="condomino.apartamento"
            :items="aptos"
            chips
            small-chips
            placeholder="Digite o apartamento"
            outlined
          >
          </v-autocomplete>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-checkbox
            v-model="condomino.proprietario"
            :label="`${condomino.proprietario ? 'Proprietário' : 'Inquilino' }`"
          ></v-checkbox>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-alert dense type="error" v-if="camposObrigatorios" dismissible>Todos os campos são obrigatórios</v-alert>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="6" md="3">
           <v-btn color="success" tile large @click="addCondomino()" :disabled="saving">
            GRAVAR
          </v-btn>
        </v-col>
        <v-col cols="6" sm="6" md="3">
          <v-btn tile large @click="returnPage()">
            CANCELAR
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar
      v-model="saved"
    >
      Dados foram salvos com sucesso
      <v-btn
        color="blue"
        text
        @click="returnPage()"
      >
        Voltar
      </v-btn>
    </v-snackbar>
  </v-form>
  
</template>
<script>
import db from '../firebase/firebaseInit'

export default {
  name: 'InserCondominiums',
   data: () => ({ 
     saving: false,
     saved: false,
     blocos: [ 1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24 ],
     aptos: [101, 102, 103, 104, 201,202,203,204],
     condomino: {
      nome: '',
      email: '',
      telefone: '',
      bloco: '',
      apartamento: '',
      proprietario: true,
     },
     camposObrigatorios: false
   }),
   methods: {
     validateFields () {
      if(!this.condomino.nome)
        return true;

      if(!this.condomino.email)
        return true;

      if(!this.condomino.telefone)
        return true;

      if(!this.condomino.bloco)
        return true;

      if(!this.condomino.apartamento)
        return true;

      return false
     },
     returnPage () {
       this.$router.push('/condominos')
     },
     addCondomino () {
       this.saving = true;
       if(this.validateFields()){
         this.camposObrigatorios = true
         this.saving = false;
         return;
       }
       this.camposObrigatorios = false
       db.collection('condominos').add(this.condomino).then(() => {
         this.saved = true
          setTimeout(() => {
            this.$router.push('/condominos')
          }, 3000);
        });
      }
   },
}
</script>