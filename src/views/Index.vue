<template>
  <div class="homepage-container">
    <a-layout :style="{ background: '#fff' }">
      <a-layout-header class="header">
        <div class="page-title">
          <router-link to="/">Ultra-Hand</router-link>
        </div>
        <user-profile :user="user"></user-profile>
      </a-layout-header>
      <a-layout-content class="home-layout">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
    <a-layout-footer>
      © Pony Wei 版权所有 | 皖ICP备2022012261号-2
    </a-layout-footer>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "../store/index";
import UserProfile from "../components/UserProfile.vue";
export default defineComponent({
  name: "Index",
  components: {
    UserProfile,
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    const user = computed(() => store.state.user);
    return {
      user,
    };
  },
});
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.page-title {
  color: #fff;
}
</style>
