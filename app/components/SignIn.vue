<template>
  <b-form @submit="onSubmit" class="col-md-4">
    <b-form-group>
      <b-form-input v-model="userId" type="text" placeholder="User ID" required/>
    </b-form-group>

    <b-form-group :invalid-feedback="invalidFeedback">
      <b-form-input v-model="password" type="password" placeholder="Password" required/>
    </b-form-group>

    <div class="text-center">
      <b-button type="submit" variant="primary" block>Sign In</b-button>
      <b-button variant="link" :to="{ path: '/sign-up' }">Sign Up?</b-button>
    </div>
  </b-form>
</template>

<script>
  import {signIn} from '../core/Api';

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
          let login = await signIn(this.userId, this.password);
          console.log(login);
          if (login.status == 200) {
            console.log(login);
            let game = new Game();
            game.userId = login.id;
            this.$router.push({
              path: '/game'
            });
          } else {
            alert(login.response.data.message);
          }
        } catch (error) {
          alert(error.response.data.message);
          console.log(error.message);
        }
      }
    }
  }
</script>