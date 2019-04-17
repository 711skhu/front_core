<template>
    <sui-segment :color="top_color" clearing>
        <h2 is="sui-header" floated="left">
            {{ problem.title }}
            <sui-header-subheader>
                {{ problem.upload_cnt }} 명 제출 했습니다.
            </sui-header-subheader>
        </h2>
        <h2 is="sui-header" floated="right">
            {{ my_score }} / {{ problem.full_score }}
        </h2>
    </sui-segment>
</template>

<script>
export default {
    name: 'main-element',
    props: ['problem', ],
    data() {
        return {
            my_score: 10, // 각 개인의 점수는 AJAX 를 사용해서 불러온다고 가정합니다.
        }
    },
    computed: {
        top_color() {
            const { my_score, problem } = this;
            if(my_score === null) { // 현재 학생이 맞은 점수가 없으면 회색을 반환합니다.
                return 'grey';
            }

            return my_score / problem.full_score > 0.5 ? 'green' : 'red'; // 점수가 절반을 넘기면 초록색, 안 넘기면 빨간색으로 나오게 합니다.
        }
    }
}
</script>

<style>
</style>