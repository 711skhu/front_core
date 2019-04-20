<template>
    <sui-segment :color="top_color" clearing>
        <h2 is="sui-header" floated="left">
            {{ problem.title }}
            <detail-unit
                :checked="time_confirm.checked"
                :upload_cnt="problem.upload_cnt"
                :reserve_date="problem.reserve_date"
            ></detail-unit>
        </h2>
        <score-unit 
            :my_score="my_score"
            :full_score="problem.full_score"
            :time_confirm="time_confirm"
        ></score-unit>
    </sui-segment>
</template>

<script>
import ScoreUnit from './ScoreUnit';
import DetailUnit from './DetailUnit';

export default {
    name: 'main-element',
    props: ['problem', 'type', ],
    data() {
        return {
            my_score: 10, // 각 개인의 점수는 AJAX 를 사용해서 불러온다고 가정합니다.
        }
    },
    components: {
        ScoreUnit, DetailUnit
    },
    computed: {
        top_color() {
            const { my_score, problem } = this;
            const now = new Date();
            if(my_score === null || now < problem.reserve_date) { // 현재 학생이 맞은 점수가 없으면 회색을 반환합니다.
                return 'grey';
            }

            return my_score / problem.full_score > 0.5 ? 'green' : 'red'; // 점수가 절반을 넘기면 초록색, 안 넘기면 빨간색으로 나오게 합니다.
        },
        time_confirm() {
            const { problem, type } = this;
            const now = new Date();
            const dist = problem.reserve_date.getTime() - now.getTime();
            const checked = new Date() >= problem.reserve_date;
            switch(type.value){
                case 'TRAIN' :
                    return {
                        color: 'grey',
                        context: '실습하기',
                        action: () => alert('실습 페이지'),
                        checked
                    };
                case 'HOMEWORK' :
                    return {
                        color: now < problem.reserve_date ? 'blue' : 'red',
                        context: now < problem.reserve_date ? '제출하기' : '제출 기한 초과',
                        action: now < problem.reserve_date ? () => alert('과제 제출 페이지') : () => alert('과제 제출을 못 합니다.'),
                        checked
                    };
                case 'EXAM' :
                    return {
                        color: 
                            (now < problem.reserve_date) ?
                                (dist < 90 * 60 * 1000) ? 'green' : 'yellow' // 시험 종료 90분 전에 접속 가능하게 합니다. 아니면 노란 버튼으로 접속 불가를 표기합니다.
                                : 'blue', // 시험이 끝난 뒤에는 성적 공개 버튼으로 바꿉니다.
                        context: 
                            (now < problem.reserve_date) ?
                                (dist < 90 * 60 * 1000) ? '시험 접속' : '접속 불가'
                                : '점수 조회',
                        action: 
                            (now < problem.reserve_date) ?
                                (dist < 90 * 60 * 1000) ? () => alert('시험 접속 페이지') : () => alert('시험은 90분 이전에 시작 됩니다!')
                                : () => alert('점수 조회 Collapse!'),
                        checked
                    }
            }
        }
    }
}
</script>

<style>
</style>