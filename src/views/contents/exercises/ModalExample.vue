<template>
    <div>
        <Modal button-label="Show modal">
            <p>Try navigating away from this page to trigger the dialog box.</p>
            <p>Title: <input type="text"/></p>
            <p>Message: <textarea></textarea></p>
            <template v-slot:buttons="modal">
                <button @click="()=>{onSave(); modal.close()}">Save</button>
            </template>
        </Modal>
        
    </div>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
    components: {
        Modal
    },
    setup() {
        const onSave = ()=> {
            console.log('saved')
        }
        return {
            onSave
        }
    }
}
</script>