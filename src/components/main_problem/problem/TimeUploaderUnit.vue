<template>
    <sui-header-subheader>
        <sui-icon :name="uploader_props.icon_name" /> 
        <sui-header-content>
            {{ uploader_props.description }}
        </sui-header-content>
    </sui-header-subheader>
</template>

<script>
export default {
    name: 'time-uploader-unit',
    props: {
        uploader_props: {
            type: Object,
            required: true
        },
    }
}
</script>