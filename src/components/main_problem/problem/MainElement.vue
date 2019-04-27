<template>
    <sui-segment :color="top_color" clearing>
        <h2 is="sui-header" floated="left">
            {{ problem.title }}
            <time-uploader-unit
                :checked="detail_data.checked"
                :upload_cnt="problem.upload_cnt"
                :reserve_date="problem.reserve_date"
            ></time-uploader-unit>
        </h2>
        <score-unit 
            :my_score="my_score"
            :full_score="problem.full_score"
            :checked="detail_data.checked"
            :btn_data="detail_data.btn_data"
        ></score-unit>
    </sui-segment>
</template>

<script>
import ScoreUnit from './ScoreUnit';
import TimeUploaderUnit from './TimeUploaderUnit';

export default {
    name: 'main-element',
    props: {
        problem: {
            type: Object,
            required: true
        },
        type_code: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            my_score: 10, // 각 개인의 점수는 AJAX 를 사용해서 불러온다고 가정합니다. 요청은 문제 ID 와 학생 ID 로 조회하는 것입니다.
        }
    },
    components: {
        ScoreUnit, TimeUploaderUnit
    },
    computed: {
        top_color() {
            const { my_score, problem } = this;
            const now = new Date();
            if(my_score === null) { // 현재 학생이 맞은 점수가 없으면. 즉 안 풀었으면 회색.
                return 'grey';
            } else if(now < problem.reserve_date) {
                return 'yellow'; // 시험 종료 이전이면 색상을 공개 하지 않습니다.
            } else { // 시험이 끝난 이후 점수가 나오면, 절반을 초과하면 초록색, 절반 이하는 빨간색으로 나오게 합니다.
                return my_score / problem.full_score > 0.5 ? 'green' : 'red'; 
            }
        },
        detail_data() {
            const { problem, type_code } = this;
            const now = new Date();
            const dist = problem.reserve_date.getTime() - now.getTime();
            const detail_data = { 
                checked : now >= problem.reserve_date, 
            };
            switch(type_code){
                case 'TRAIN' :
                    return Object.assign(detail_data, { 
                        btn_data : {
                            color: 'grey', context: '실습하기', action: () => alert('실습 페이지 이동')
                        }, 
                    });
                case 'HOMEWORK' :
                    return Object.assign(detail_data, {
                        btn_data : {
                            color: now < problem.reserve_date ? 'blue' : 'red',
                            context: now < problem.reserve_date ? '제출하기' : '제출 기한 초과', 
                            action: now < problem.reserve_date ? () => alert('과제 제출 페이지') : () => alert('과제 제출을 못 합니다.')
                        },
                    });
                case 'EXAM' :
                    return Object.assign(detail_data, {
                        btn_data : {
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
                        },
                    });
            }
        }
    }
}
</script>

<style>
</style>