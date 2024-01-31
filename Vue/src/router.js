import { createRouter, createWebHistory } from "vue-router"
import BmiComponent from './components/Bmi.vue'
import RegistrationComponent from './components/Registration.vue'

const routes = [
    {
        path: "/",
        component: BmiComponent
    },
    {
        path: "/registration",
        component: RegistrationComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
