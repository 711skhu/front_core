<template>
    <div id="main__title">
        <sui-grid>
            <sui-grid-column width="eight">
                <h1 is="sui-header">
                    <sui-icon name="archive" />
                    <sui-header-content>
                        {{ title }}
                        <sui-header-subheader>{{ type.label }}</sui-header-subheader>
                    </sui-header-content>
                </h1>
            </sui-grid-column>
            <sui-grid-column width="eight">
                <h1 is="sui-header">
                    <sui-icon name="bell outline" />
                    <sui-header-content>특이사항</sui-header-content>
                </h1>
                <p>{{ context }}</p>
            </sui-grid-column>
        </sui-grid>
    </div>
</template>

<script>
export default {
    name: 'main-title',
    props: [
        'title', 'limit_date', 'context', 'type',
    ]
}
</script>

<style>
#main__title {
    margin: 30px 0px;
}
</style>