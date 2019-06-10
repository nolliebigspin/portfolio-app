import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const HomePage = () => import('@/components/HomePage/HomePage');
const PostPage = () => import('@/components/PostPage/PostPage');

export const router = new VueRouter({
    routes: [
        {
            name: 'home',
            path: '/',
            component: HomePage
        },
        {
            name: 'post',
            path: '/post/:postId',
            component: PostPage,
            props: true
        }
    ]
});