<template>
    <b-form @submit="onSubmit" class="col-md-4">
        <b-form-group>
            <b-form-input v-model="username" type="text" placeholder="Username" required/>
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
    export default {
        data() {
            return {
                username: '',
                password: '',
                invalidFeedback: ''
            }
        },
        methods: {
            onSubmit(evt) {

            }
        }
    }
</script>