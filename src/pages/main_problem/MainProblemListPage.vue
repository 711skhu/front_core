<template>
    <div is="sui-container">
        <top-breadthumb :subject=" '알고리즘' " :exam_title="examination.title"></top-breadthumb>
        <main-title 
            :type="examination.type"
            :title="examination.title"
            :limit_date="examination.limit_date"
            :context="examination.context"
        ></main-title>
        <main-element 
            :key="problem.id"
            :problem="problem" 
            :type="examination.type" 
            v-for="problem in examination.problems"
        ></main-element>
    </div>
</template>

<script>
import TopBreadthumb from '@/components/main_problem/breadthumb/TopBreadthumb'
import MainTitle from '@/components/main_problem/problem/MainTitle'
import MainElement from '@/components/main_problem/problem/MainElement'

export default {
    name: 'main-problem-list-page',
    components: {
        TopBreadthumb, MainTitle, MainElement
    },
    data() {
        return {
            examination: {
                title: '1차 구현시험',
                limit_date: new Date().toLocaleString(),
                context: '실습, 과제, 시험에 대한 특이 사항을 기재합니다.',
                type: 'EXAM', // TRAIN 은 실습, HOMEWORK 는 과제, EXAM 는 구현 시험입니다.
                problems: [ // problems 는 소단락 문제(일명 새끼 문제)들 목록입니다.
                    {
                        id: 1,
                        title: 'JAVA ArrayList',
                        upload_cnt: 10, // 이는 서버에서 제출한 사람의 수를 카운팅하여 반환하여 목록에서 보여줌을 가정하고 컴포넌트에 렌더링합니다.
                        full_score: 10,
                        reserve_date: new Date(2019, 3, 17, 18, 0, 0),
                    },
                    {
                        id: 2,
                        title: 'JAVA Arrays',
                        upload_cnt: 12,
                        full_score: 10,
                        reserve_date: new Date(2020, 3, 30, 18, 0, 0),
                    },
                    {
                        id: 3,
                        title: 'JS Prototype',
                        upload_cnt: 16,
                        full_score: 20,
                        reserve_date: new Date(2019, 3, 17, 18, 0, 0),
                    },
                    {
                        id: 4,
                        title: 'JS Object',
                        upload_cnt: 19,
                        full_score: 20,
                        reserve_date: new Date(2020, 3, 30, 18, 0, 0),
                    },
                    {
                        id: 5,
                        title: 'Python Dictionary',
                        upload_cnt: 21,
                        full_score: 20,
                        reserve_date: new Date(2019, 3, 17, 18, 0, 0),
                    },
                    {
                        id: 6,
                        title: 'Python Lambda',
                        upload_cnt: 13,
                        full_score: 20,
                        reserve_date: new Date(2019, 3, 21, 0, 0, 0),
                    },
                    {
                        id: 7,
                        title: '시험성적 확인전용 문제',
                        upload_cnt: 18,
                        full_score: 20,
                        reserve_date: new Date(2020, 3, 30, 18, 0, 0),
                    }
                ]
            }
        }
    }
}
</script>

<style>
</style>