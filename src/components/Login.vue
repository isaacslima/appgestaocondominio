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
                <v-form>
                  <v-text-field
                    label="Email ou Telefone"
                    placeholder="Digite o email ou telefone"
                    outlined
                    name="login"
                    prepend-icon="person"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Senha"
                    placeholder="Digite a senha"
                    outlined
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" tile block>Entrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-container>
</template>

<script>
  export default {
    name: 'Login',

    data: () => ({
    }),
  }
</script>
