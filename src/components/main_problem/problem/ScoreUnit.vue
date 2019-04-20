<template>
    <sui-statistic size="tiny" floated="right">
        <sui-statistic-label>
            {{ time_confirm.checked ? '내 점수 / 만점' : '만점' }}
        </sui-statistic-label>
        <sui-statistic-value>
            {{ time_confirm.checked ? `${ my_score }/${ full_score }` : full_score }}
        </sui-statistic-value>
        <div class="button__margin">
            <sui-button :content="time_confirm.context" :color="time_confirm.color" @click="time_confirm.action" />
        </div>
    </sui-statistic>
</template>

<script>
export default {
    name: 'score-unit',
    props: ['my_score', 'full_score', 'time_confirm']
}
</script>

<style>
.button__margin {
    margin-top: 5px;
}
</style>