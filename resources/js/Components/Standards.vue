<template>
     <div class="space-y-5 px-6">
        <div class="relative flex items-start" v-for="(standard, index) in standards" :key="index">
            <div class="flex h-6 items-center">
                <input
                    :id="index"
                    name="comments"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    @change="updateStandard(standard, $event)"
                />
            </div>
            <div class="ml-3 text-sm leading-6">
                <label :for="index" class="font-bold text-gray-900 cursor-pointer">{{ standard.code }}</label>
                <p class="text-gray-500">{{ standard.description }}</p>
            </div>
        </div>
     </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        props: ['standards'],
        methods: {
            ...mapActions('standards', ['addItemToStandards', 'removeItemFromStandards']),
            updateStandard (standard, event){
                if(event.target.checked){
                    this.addStandard(standard)
                }else{
                    this.removeStandard(standard)
                }
            },
            addStandard (standard) {
                this.addItemToStandards(standard)

            },
            removeStandard (standard) {
                this.removeItemFromStandards(standard)
            }
        }
    }
</script>
