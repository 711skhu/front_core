<template>
    <div id="main__title">
        <sui-grid>
            <sui-grid-column width="eight">
                <h1 is="sui-header">
                    <sui-icon name="archive" />
                    <sui-header-content>
                        {{ title }}
                        <sui-header-subheader>{{ unit_type }}</sui-header-subheader>
                    </sui-header-content>
                </h1>
                <p>{{ context }}</p>
            </sui-grid-column>
            <sui-grid-column width="eight">
                <h1 is="sui-header">
                    <sui-icon name="bell outline" />
                    <sui-header-content>제출기한</sui-header-content>
                </h1>
                <p>{{ limit_date }}</p>
            </sui-grid-column>
        </sui-grid>
    </div>
</template>

<script>
export default {
    name: 'main-title',
    props: [
        'title', 'limit_date', 'context', 'type',
    ],
    computed: {
        unit_type() {
            const { type } = this;
            switch(type){
                case 'EXAM' :
                    return '구현 시험';
                case 'HOMEWORK' :
                    return '구현 과제';
                case 'TRAIN' :
                    return '구현 실습';
                default :
                    return '기타 항목';
            }
        }
    }
}
</script>

<style>
#main__title {
    margin: 30px 0px;
}
</style>