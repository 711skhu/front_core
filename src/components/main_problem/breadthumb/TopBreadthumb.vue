<template lang="html">
    <div id="main__breadthumb">
        <sui-breadcrumb>
            <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
            <sui-breadcrumb-divider icon="right chevron" />
            <sui-breadcrumb-section link>{{ subject }}</sui-breadcrumb-section>
            <sui-breadcrumb-divider icon="right chevron" />
            <sui-breadcrumb-section active>{{ exam_title }}</sui-breadcrumb-section>
        </sui-breadcrumb>
    </div>
</template>

<script>
export default {
    name: 'top-breadthumb',
    props: {
        subject: {
            type: String,
            required: true
        },
        exam_title: {
            type: String,
            required: true
        }
    }
};
</script>

<style>
#main__breadthumb {
    margin: 30px 0px;
}
</style>