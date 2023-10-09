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

<template>
    <div class="bg-cyan-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div class="md:w-1/2 px-5">
            <h2 class="font-bold text-2xl">Login</h2>
            <p class="text-sm mt-4">If you are already am member, easing sign in here</p>
            <UForm :validate="validate" :state="state" @submit="submit" class="gap-4">
                <UFormGroup label="Email" name="email" class="p-2 mt-3">
                    <UInput v-model="state.email" />
                </UFormGroup>
                <UFormGroup label="Password" name="password" class="p-2">
                    <UInput v-model="state.password" type="password" />
                </UFormGroup>
                <UFormGroup class="p-2">
                    <UButton type="submit" block class="hover:scale-105 duration-500">
                        Submit
                    </UButton>
                </UFormGroup>

                <div class="mt-3 grid grid-cols-3 items-center text-gray-400">
                    <hr class="border-gray-400">
                    <p class="text-center">OR</p>
                    <hr class="border-gray-400">
                </div>
                <UFormGroup class="p-2">
                    <UButton label="Login with Google" color="white" block class="mt-3 hover:scale-105 duration-500">
                        <template #leading>
                            <IconGoogle class="mr-3" />
                        </template>
                    </UButton>
                </UFormGroup>
                <UFormGroup class="p-2">
                    <UButton label="Connect with Github" color="white" block class="mt-3 hover:scale-105 duration-500">
                        <template #leading>
                            <IconGithub class="mr-3" />
                        </template>
                    </UButton>
                </UFormGroup>
                <p class="mt-5 text-xs border-b py-4">Forgot your password?</p>
                <div class="flex justify-between items-center">
                    <p class="text-xs">Don't have an account?</p>
                    <UFormGroup class="p-2">
                        <UButton label="Register" block class="hover:scale-110 duration-500" />
                    </UFormGroup>
                </div>
            </UForm>
        </div>
        <div class="w-1/2 md:block hidden ">
            <img src="/link.jpg" class="rounded-2xl " />
        </div>
    </div>
</template>