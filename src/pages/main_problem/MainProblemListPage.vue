<template>
    <div is="sui-container">
        <main-title 
            :title="examination.title"
            :limit_date="examination.limit_date"
            :context="examination.context"
        ></main-title>
    </div>
</template>

<script>
import MainTitle from '@/components/main_problem/problem/MainTitle'
export default {
    name: 'main-problem-list-page',
    components: {
        MainTitle
    },
    data() {
        return {
            examination: {
                title: '1차 구현시험',
                limit_date: new Date().toLocaleString(),
                context: '실습, 과제, 시험에 대한 특이 사항을 기재합니다.',
                problems: []
            }
        }
    }
}
</script>

<style>
</style>