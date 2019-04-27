<template>
    <sui-statistic size="tiny" floated="right">
        <sui-statistic-label>
            {{ checked ? '내 점수 / 만점' : '만점' }}
        </sui-statistic-label>
        <sui-statistic-value>
            {{ checked ? `${ my_score }/${ full_score }` : full_score }}
        </sui-statistic-value>
        <div class="button__margin">
            <sui-button :content="btn_data.context" :color="btn_data.color" @click="btn_data.action" />
        </div>
    </sui-statistic>
</template>

<script>
export default {
    name: 'score-unit',
    props: {
        my_score: {
            type: Number,
            required: false
        },
        full_score: {
            type: Number,
            required: true
        },
        checked: {
            type: Boolean,
            required: true
        },
        btn_data: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
.button__margin {
    margin-top: 5px;
}
</style>