<template>
    <v-container class="main-body">
        <div class="content-area">
            <h2 id="welcome-text">Welcome to IQ-TEST</h2>
            <div class="alert alert-danger" v-if="nameIsEmpty">
                Enter a name to begin
            </div>
            <v-text-field placeholder="Yoo Smart Kid!!! Enter your name to begin test" v-model="name"></v-text-field>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
            <v-btn class="info" @click="startQuiz">Get Started</v-btn>
        </div>
    </v-container>
</template>

<script>
import { Howl } from 'howler'
export default {
    data() {
        return {
            name: '',
            nameIsEmpty: false
        }
    },
    created() {
         // Setup the new Howl.
        const sound = new Howl({
        src: ['sound1.mp3'],
            autoplay: true,
            html5: true,
            format: 'mp3',
            onload: function() { console.log('song loaded!')},
            onloaderror: function(id, error) { console.log('loadError: ' + id +' - ' + error); }
        });
        // Play the sound.
        sound.play();
    },
    methods: {
        startQuiz() {
            if (this.name === '') {
                this.nameIsEmpty = true
            } else {
               this.$store.dispatch('getUserName', this.name)
               this.$router.push('/test')
            }
        }
    }
}
</script>

<style scoped>
    #welcome-text {
        letter-spacing: 0.1em;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-style: italic;
        text-align: center;
    }

    .content-area {
        width: 70%;
        margin-left: 15%;
        margin-right: 15%;
        margin-top: 50px;
    }

    .main-body {
        height: 100%;
    }
</style>