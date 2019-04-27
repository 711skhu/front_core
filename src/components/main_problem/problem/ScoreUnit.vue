<template>
    <sui-statistic size="tiny" floated="right">
        <sui-statistic-label>
            {{ score_props.label }}
        </sui-statistic-label>
        <sui-statistic-value>
            {{ score_props.context }}
        </sui-statistic-value>
        <div class="button__margin">
            <sui-button :content="btn_props.context" :color="btn_props.color" @click="btn_props.action" />
        </div>
    </sui-statistic>
</template>

<script>
export default {
    name: 'score-unit',
    props: {
        score_props: {
            type: Object,
            required: false
        },
        btn_props: {
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