<template>
    <v-container>
         <!-- <v-text>Background and theme settings</v-text> -->
         <v-card>
            <perfect-scrollbar class="container">
                <v-card-title :style="headerStyle">Restructure Design to your own taste...</v-card-title>
                    <!-- design for users ability to Change font of question and title -->
                    <div class="font-area">
                        <v-text :style="divTitles">Fonts</v-text>
                        <v-divider />
                        <v-select
                            @change="changeQtnFont"
                            item-value="fonts"
                            item-text="fonts"
                            :items="fonts"
                            menu-props="auto"
                            label="Change question font"
                        ></v-select>
                        <v-select 
                            label="Change Options font" 
                            @change="changeOptionFont"
                            item-value="fonts"
                            item-text="fonts"
                            :items="fonts"
                            menu-props="auto"
                        ></v-select>
                    </div>
                    <!-- design for users ability to Change background colors and effects -->
                    <div class="bg-area">
                        <v-text :style="divTitles">Background</v-text>
                        <v-divider />
                        <v-select 
                            label="Change Text Color" 
                            @change="changeTextColor"
                            item-value="colorCode"
                            item-text="colorName"
                            :items="colors"
                            menu-props="auto"
                        ></v-select>
                        <v-select 
                            label="Change Background Color" 
                            @change="changeBgColor"
                            item-value="colorCode"
                            item-text="colorName"
                            :items="colors"
                            menu-props="auto"
                        ></v-select>
                    </div>
              </perfect-scrollbar>
         </v-card>
    </v-container>
</template>

<script>
    import {setFontSize}  from "../../utilities"
    import { colors } from "../../utilities/colors"
    import { fonts } from "../../utilities/fonts"
export default {
    data() {
        return {
            fonts,
            colors
        }
    },
    computed: {
        headerStyle() {
            return{
                fontSize: setFontSize(12)
            }
        },
        qtnAreaText() {
            return {
                fontSize: setFontSize(12)
            }
        },
        divTitles() {
            return {
                fontSize: setFontSize(15)
            }
        }
    },
    methods: {
        changeQtnFont(params) {
            this.$store.dispatch('updateQtnFont', params)
        },
        changeOptionFont(params) {
            this.$store.dispatch('updateOptionFont', params)
        },
        changeTextColor(data) {
            this.$store.dispatch('updateTextColor', data)
        },
        changeBgColor(data) {
             this.$store.dispatch('updateBgColor', data)
        }
    }
}
</script>

<style scoped>
    #pageTitle {
        padding-top: 50px;
    }

    .font-area, .bg-area{
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
    }

    .qtn-area {
         width: 80%;
        margin-left: 10%;
        margin-right: 10%;
        margin-bottom: 50px;
    }

    .container {
        position: relative;
        max-height: 350px;
        overflow: hidden;
    }
</style>