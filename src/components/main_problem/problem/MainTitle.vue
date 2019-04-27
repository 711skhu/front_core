<template>
    <div id="main__title">
        <sui-grid>
            <sui-grid-column width="eight">
                <h1 is="sui-header">
                    <sui-icon name="archive" />
                    <sui-header-content>
                        {{ title }}
                        <sui-header-subheader>{{ unit_type.label }}</sui-header-subheader>
                    </sui-header-content>
                </h1>
            </sui-grid-column>
            <sui-grid-column width="eight">
                <h1 is="sui-header">
                    <sui-icon name="bell outline" />
                    <sui-header-content>특이사항</sui-header-content>
                </h1>
                <p>{{ description }}</p>
            </sui-grid-column>
        </sui-grid>
    </div>
</template>

<script>
export default {
    name: 'main-title',
    props: {
        title: {
            type: String,
            required: true
        }, 
        description: {
            type: String,
            required: false
        },
        unit_type: {
            type: Object,
            required: true
        }
    },
}
</script>

<style>
#main__title {
    margin: 30px 0px;
}
</style>