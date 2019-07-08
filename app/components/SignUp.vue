<template>
  <b-form @submit="onSubmit" class="col-md-4">
    <b-form-group :invalid-feedback="invalidFeedback">
      <b-form-input v-model="userId" type="text" placeholder="Username" required></b-form-input>
    </b-form-group>

    <b-form-group>
      <b-form-input v-model="password" type="password" placeholder="Password" required></b-form-input>
    </b-form-group>

    <div class="text-center">
      <b-button type="submit" variant="primary" block>Sign up</b-button>
      <b-button variant="link" :to="{ path: '/' }">Sign in?</b-button>
    </div>
  </b-form>
</template>

<script>
  import axios from 'axios';
  import {signUp} from '../core/Api';

  const API_URL = 'http://revive-api.hbpz.pw/api';
  export default {
    data() {
      return {
        userId: '',
        password: '',
        invalidFeedback: ''
      }
    },
    methods: {
      async onSubmit(evt) {
        try {
          let login = await signUp(this.userId, this.password);
          console.log(login);
          if (login.status == 200) {
            alert('가입되었습니다. 로그인해주세요.');
            this.$router.push({
              path: '/sign-in'
            });
          } else {
            if (typeof login.response.data !== undefined) {
              alert(login.response.data.message);
            } else {
              console.log(login.response);
            }
          }
        } catch (error) {
          alert(error);
          console.log(error.message);
        }
      }
    }
  }

</script>