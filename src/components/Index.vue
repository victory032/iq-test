<template>
    <v-container>
        <v-row>
            <v-col cols="8">
                 <div class="content-area">
           <v-text>Kindly attempt all questions! Goodluck...</v-text>
           <v-card class="mx-auto mt-5" v-for="(question, index) in questions" v-bind:key="question.id">
               <div v-show="index ===  indexValue">
                        <v-card-title :style="qtnFont + ';' + checkFont">
                            QUESTION {{ indexValue+1 }}:  {{ question.question }}
                        </v-card-title>
                        <v-card-text>
                                <v-btn id="qtnBtn" :disabled="isDisabled" :style="optionFont" @click="checkAnswer(question.option_1)">{{ question.option_1 }}</v-btn>
                                <v-btn id="qtnBtn"  :disabled="isDisabled" :style="optionFont" @click="checkAnswer(question.option_2)">{{ question.option_2 }}</v-btn>
                        </v-card-text>
                        <v-card-text>
                                <v-btn id="qtnBtn"  :disabled="isDisabled" :style="optionFont" @click="checkAnswer(question.option_3)">{{ question.option_3 }}</v-btn>
                                <v-btn id="qtnBtn"  :disabled="isDisabled" :style="optionFont" @click="checkAnswer(question.option_4)">{{ question.option_4 }}</v-btn>
                        </v-card-text>
                        <v-spacer></v-spacer>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                                <!-- <v-btn class="warning" v-if="indexValue > 0" @click="getPrevQtn">
                                    Prev
                                </v-btn> -->
                                <v-btn class="primary" @click="getNextQtn">
                                        Next
                                </v-btn>
                        </v-card-actions>
               </div>
           </v-card>
           <div v-show="indexValue === questions.length">
                   <h1 id="score-board">You scored {{ score }} marks in total</h1>
            </div>
       </div>
            </v-col>
            <v-col cls="4">
                <div class="content-area2">
                    <appSettings />
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import appSettings from '../components/Settings'
export default {
    components: {
        appSettings
    },
    data() {
        return {
           indexValue: 0,
           isDisabled: false,
           demo: ''
        }
    },
    computed: {
        questions () {
            return this.$store.getters.questions
        },
        score () {
            return this.$store.getters.score
        },
        styles() {
            return{
                background: this.$store.getters.color
            } 
        },
        qtnFont() {
            return{
                fontFamily: this.$store.getters.qtnFont
            }
        },
        optionFont() {
            return{
                fontFamily: this.$store.getters.optionFont
            }
        },
        checkFont() {
            return {
                color: this.$store.getters.checkFont
            }
        }
    },
    beforeMount() {
        if (localStorage.getItem('draftedQuestion')) {
            this.demo = 'ok'
        } else {
            const __question = [
                {
                    id: 0,
                    question: ' What relation is your niece brother to you?',
                    option_1: 'Son',
                    option_2: 'Uncle',
                    option_3: 'Cousin',
                    option_4: 'Nephew',
                    correct_answer: 'Nephew'
                },
                {
                    id: 1,
                    question: ' How many birthdays does the average man have',
                    option_1: '1',
                    option_2: '10',
                    option_3: '65',
                    option_4: '70',
                    correct_answer: '1'
                },
                {
                    id: 2,
                    question: ' Some months have 31 days; how many have 28',
                    option_1: '1',
                    option_2: '12',
                    option_3: '2',
                    option_4: '9',
                    correct_answer: '12'
                },
                {
                    id: 3,
                    question: ' Divide 30 by 1/2 and add 10. what is the answer?',
                    option_1: '70',
                    option_2: '45',
                    option_3: '22',
                    option_4: '90',
                    correct_answer: '70'
                },
                {
                    id: 4,
                    question: 'If there are 3 apples and you take 2 away, how many do you have?',
                    option_1: '1',
                    option_2: '2',
                    option_3: '3',
                    option_4: '5',
                    correct_answer: '2'
                },
                {
                    id: 5,
                    question: 'A doctor gives you 3 pills telling you to take one every half hour. How many minutes will the pill last?',
                    option_1: '20',
                    option_2: '40',
                    option_3: '60',
                    option_4: '80',
                    correct_answer: '60'
                },
                {
                    id: 6,
                    question: ' A farmer has 17 sheep, and all but 9 die. How many are left',
                    option_1: '1',
                    option_2: '3',
                    option_3: '9',
                    option_4: '8',
                    correct_answer: '9'
                },
                {
                    id: 7,
                    question: ' How many 2 cent stamps are there in a dozen?',
                    option_1: '1',
                    option_2: '3',
                    option_3: '6',
                    option_4: '12',
                    correct_answer: '12'
                },
                {
                    id: 8,
                    question: ' How many animals of each sex did moses take in an ark?',
                    option_1: '3',
                    option_2: '2',
                    option_3: '1',
                    option_4: '0',
                    correct_answer: '0'
                },
                {
                    id: 9,
                    question: ' Take 1000 and add 40 to it. Now add another 1000. Now add 30. Add another 1000. Now add 20. Now add another 1000. Now add 10. What is tht total?',
                    option_1: '5000',
                    option_2: '4100',
                    option_3: '4000',
                    option_4: '6000',
                    correct_answer: '4100'
                },
                {
                    id: 10,
                    question: 'You are participating in a race. You overtake the 2nd person. What position are you in?',
                    option_1: '1st',
                    option_2: '2nd',
                    option_3: '3rd',
                    option_4: '4th',
                    correct_answer: '2nd'
                }
                ]
                const pasteQtn = JSON.stringify(__question)
            localStorage.setItem('draftedQuestion',pasteQtn)
        }
    },
    mounted() {
        this.$store.dispatch('getQuestion')
    },
    methods: {
        checkAnswer(params) {
            const details = {
                params: params,
                index: this.indexValue + 1
            }
            this.$store.dispatch('checkAnswer',details)
            this.isDisabled = true;
        },
        getNextQtn() {
            this.indexValue++
             this.isDisabled = false;
        }
    }
}
</script>

<style scoped>
    .content-area {
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 30px;
        box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.10);
    }

    .content-area2 {
        box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.10);
    }

    #qtnBtn {
        width: 50%;
    }

    #score-board{
        text-align: center;
    }

    @media screen and (max-device-width: 480px) and (orientation: portrait){
        #qtnBtn {
            font-size: 10px;
            width: 100%;
        }

         .content-area {
            width: 100%;
        }

        #textt {
            font-size: 15px;
        }
    }
</style>