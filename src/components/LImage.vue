<template>
  <img
    :style="(styleProps as any)"
    class="l-image-component"
    @click.prevent="handleClick"
    :src="src"
  />
</template>

<script lang="ts" setup>
import useComponentCommon from "../hooks/useComponentCommon";
import {
  transformToComponentProps,
  imageDefaultProps,
  imageStylePropsNames,
} from "../defaultProps";

// array that contains style props

const props = defineProps({
  ...transformToComponentProps(imageDefaultProps),
});

// 重用并且简化
// 抽离并且获得 styleProps
const { styleProps, handleClick } = useComponentCommon(
  props,
  imageStylePropsNames
);
</script>

<style scoped>
.l-image-component {
  max-width: 100%;
  position: relative !important;
}
</style>
