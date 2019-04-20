<template>
    <sui-header-subheader>
        <sui-icon :name="output_context.icon" /> 
        <sui-header-content>
            {{ output_context.context }}
        </sui-header-content>
    </sui-header-subheader>
</template>

<script>
export default {
    name: 'detail-unit',
    props: ['checked', 'upload_cnt', 'reserve_date'],
    computed: {
        output_context() {
            const { checked, upload_cnt, reserve_date } = this;
            const start_time = reserve_date.getTime() - 90 * 60 * 1000;
            if(checked){
                return {
                    icon: 'users',
                    context: `${ upload_cnt } 명 제출했습니다.`
                };
            } else {
                return {
                    icon: 'clock outline',
                    context: `${ new Date(start_time).toLocaleString() } 부터 진행`
                }
            }
        }
    }
}
</script>