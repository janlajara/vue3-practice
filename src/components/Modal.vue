<template>
    <button @click="isOpen = true">{{(buttonLabel)? buttonLabel : 'Show'}}</button>
    <teleport to="body">
        <transition name="fade">
            <div v-if="isOpen" class="modal">
                <div>
                    <slot/><br/>
                    <button @click="isOpen = false">Close</button>
                    <slot name="buttons" :close="()=>{isOpen = false}"></slot>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script>
import {ref} from 'vue'
import {onBeforeRouteLeave} from 'vue-router'

export default {
    props: {
        'button-label': String
    },
    setup(props) {
        const isOpen = ref(false)

        onBeforeRouteLeave(()=> {
            if (isOpen.value){
                let response = window.confirm('Do you want to exit?')
                return response
            } else {
                return true
            }
        })

        return {
            isOpen,
            buttonLabel: props.buttonLabel
        }
    }
}
</script>

<style scoped>
.modal {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  /*flex-direction: column;*/
  align-items: center;
  justify-content: center;
}

.modal div {
    background-color: white;
    width: 400px;
    min-height: 200px;
    padding: 15px
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
