<template>
    <sui-segment :color="top_color" clearing>
        <h2 is="sui-header" floated="left">
            {{ problem.title }}
        </h2>
    </sui-segment>
</template>

<script>
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
    computed: {
        top_color() {
            const { my_score, problem } = this;
            const now = new Date();
            if(my_score === null) { // 현재 학생이 맞은 점수가 없으면. 즉 안 풀었으면 회색.
                return 'grey';
            } else if(now < problem.reserve_date) {
                return 'blue'; // 시험 종료 이전이면 색상을 공개 하지 않습니다. 대신에 제출을 했으면 파란색으로 표기합니다.
            } else { // 시험이 끝난 이후 점수가 나오면, 절반을 초과하면 초록색, 절반 이하는 빨간색으로 나오게 합니다.
                return my_score / problem.full_score > 0.5 ? 'green' : 'red'; 
            }
        },
        detail_data() {
            const { my_score, problem, type_code } = this;
            const now = new Date();
            const start_time = problem.reserve_date.getTime() - 90 * 60 * 1000;
            
            let detail_data;
            if(now >= problem.reserve_date){
                detail_data = {
                    uploader_props: {
                        icon_name: 'users',
                        description: `${ problem.upload_cnt } 명 제출했습니다.`
                    },
                }
            } else {
                detail_data = {
                    uploader_props: {
                        icon_name: 'clock outline',
                        description: `${ new Date(start_time).toLocaleString() } 부터 진행`
                    }, 
                }
            }

            switch(type_code){
                case 'TRAIN' :
                    return Object.assign(detail_data, { 
                        btn_props : {
                            color: 'grey', context: '실습하기', action: () => alert('실습 페이지 이동')
                        }
                    });
                case 'HOMEWORK' :
                    return Object.assign(detail_data, (now < problem.reserve_date) ? 
                    {
                        btn_props: {
                            color: 'blue', context: '제출하기', action: () => alert('과제 제출 페이지')
                        },
                        score_props: {
                            label: '만점', context: problem.full_score
                        }
                    } :
                    {
                        btn_props: {
                            color: 'red', context: '제출 기한 초과', action: () => alert('과제 제출을 못 합니다.')
                        },
                        score_props: {
                            label: '내 점수 / 만점', context: `${ my_score } / ${ problem.full_score }`
                        }
                    });
                case 'EXAM' :
                    return Object.assign(detail_data, (now < problem.reserve_date) ?
                    {
                        btn_props : (now >= start_time) ? 
                            {
                                color: 'green', context: '시험 접속', action: () => alert('시험 접속 페이지')
                            } :
                            {
                                color: 'yellow', context: '접속 불가', action: () => alert('시험은 90분 이전에 시작 됩니다!')
                            }
                        , 
                        score_props: {
                            label: '만점', context: problem.full_score
                        }
                    } :
                    {
                        btn_props: {
                            color: 'blue', context: '점수 조회', action: () => alert('점수 조회 페이지')
                        }, 
                        score_props: {
                            label: '내 점수 / 만점', context: `${ my_score } / ${ problem.full_score }`
                        }
                    });
            }
        }
    }
}
</script>

<style>
</style>