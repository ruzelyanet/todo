<template>  
  <div class="login">
    <div class="container">
      <div class="w-100">
        <b-row class="justify-content-center">
          <b-col lg="11" sm="10" xs="10">            
            <div class="login-header mb-4">
              <div class="h4 mb-0">
                Welcome <b-spinner label="Loading..." small class="mb-1" v-if="process" />
              </div>
              <div class="login-header-subtext text-muted ml-3">
                to your to-do list
              </div>
            </div>            

            <b-form @submit.prevent="submit">
              <div class="form-group">
                <ext-input placeholder="Email" type="text" id="email" v-model="form.email" :validation="$v.form['email']" class-name="input-liner" />
              </div>

              <div class="form-group">
                <ext-input :type="passwordType" placeholder="password" id="password" v-model="form.password" :validation="$v.form['password']" class-name="input-liner" />

                <div class="password-trigger" @click="passTypeToggle">
                  <span v-if='password'>🙈</span>
                  <span v-else>🐵</span>
                </div>
              </div>

              <div class="text-center">
                <b-button type="submit" variant="outline-primary" pill class="btn-w-md" :disabled="$v.$invalid || process">Login</b-button>
              </div>
            </b-form>
            
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import {getUsers} from '@/service'
import {required, email} from "vuelidate/lib/validators";
import {validationMixin} from "vuelidate";
import jwt from "jsonwebtoken"

import Input from '@/components/form/Input'

export default {
  name: 'Login',
  mixins: [validationMixin],

  components: {
    'ext-input': Input
  },

  validations() {
    return {
      form: {
        email: {
          email,
          required
        },
        password: {
          required
        }
      }
    }
  },

  data() {
    return {
      process: false,
      form: {},

      users: null,

      password: true
    }
  },

  methods: {
    passTypeToggle() {
      this.password = !this.password      
    },    

    async getUsers() {
      const res = await getUsers()
      return res.data
    },

    async submit() {      
      this.$v.form.$touch();
      
      if(!this.$v.form.$invalid) {
        this.process = true
        await this.getUsers().then(res => {
          this.process = false
          const user = this.searchUser(res)

          if(user) {
            this.createToken()
            this.saveUserId(user.id)
            this.$router.replace({name: 'root'})
          } else {
            this.$notify("warning", 'There is no such user', '', {
              duration: 3000,
              permanent: false
            });
          }

        })
      }

    },

    searchUser(users) {      
      const user = users.find((el, i) => {
        return el.email === this.form.email
      })      

      return user
    },

    createToken() {    
      var token = jwt.sign({ foo: 'bar', iat: Math.floor(Date.now() / 1000) + 30 }, 'shhhhh');
      localStorage.setItem('jwt', token)      
    },

    saveUserId(id) {
      localStorage.setItem('user', id)
    }
  },

  computed: {
    passwordType() {      
      return this.password ? 'password' : 'text'
    }
  }
}
</script>
