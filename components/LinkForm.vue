<template>
    <UForm :validate="validate" :state="state" @submit="submit" class="gap-4 flex items-end">
        <UFormGroup label="Long URL" name="url" class="w-5/12 ">
            <UInput placeholder="https://example.com" icon="i-heroicons-globe-alt" />
        </UFormGroup>
        <UFormGroup label="Short Key" name="shortKey" class="w-5/12 ">
            <UInput placeholder="stkcy" />
        </UFormGroup>
        <UFormGroup class="w-2/12">
            <UButton type="submit" :ui="{ rounded: 'rounded-full' }" size="sm" block class="hover:scale-105 duration-500 ">
                Submit
            </UButton>
        </UFormGroup>
    </UForm>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { FormError, FormSubmitEvent } from '@nuxt/ui/dist/runtime/types'
const state = ref({
    email: undefined,
    password: undefined
})
const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.email) errors.push({ path: 'email', message: 'Required' })
    if (!state.password) errors.push({ path: 'password', message: 'Required' })
    return errors
}
async function submit(event: FormSubmitEvent<any>) {
    // Do something with data
    console.log(event.data)
}
</script>