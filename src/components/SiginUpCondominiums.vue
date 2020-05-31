<template>
  <v-container>
    <v-content>
      <v-container
        class="fill-height"
        fluid
        
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12" tile>
              <v-toolbar
              class="elevation-0"
                color="white"
                white
                tile
                prominent
              >
              <v-img height="100%" contain src="../assets/logo-villa-bella.jpg"/>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                  <div class="mb-4">
                      Para cadastrar entre com o email que recebeu o convite.
                  </div>
                <v-form>
                  <v-text-field
                    label="Email ou Telefone"
                    placeholder="Digite o email ou telefone"
                    outlined
                    v-model="email"
                    name="login"
                    prepend-icon="person"
                    type="text"
                  ></v-text-field>
                  <v-alert v-model="alertSenha" type="error">
                      Senha não confere.
                  </v-alert>

                  <v-text-field
                    id="password"
                    label="Senha"
                    placeholder="Digite uma senha"
                    outlined
                    name="password"
                    v-model="senha"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    label="Senhas"
                    v-model="repeteSenha"
                    placeholder="Repita a senha"
                    outlined
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click="verificarEmail" tile block>Entrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-container>
</template>

<script>
import db from '../firebase/firebaseInit'

  export default {
    name: 'Login',

    data: () => ({
        email: '',
        senha: '',
        repeteSenha: '',
        alertSenha: false
    }),
    methods: {
        verificarEmail () {
            if(this.senha !== this.repeteSenha){
                this.alertSenha = true
                return
            }

            db.collection("condominos").where("email", "==", this.email)
            .get()
            .then(function (querySnapshot){
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                });
            })
            this.alertSenha = false
            
        }
    }
  }
</script>
