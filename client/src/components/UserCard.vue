<template>
  <div class="bgColor rounded p-3">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded-circle mt-2 mb-3" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
    <div class="d-flex justify-content-center">
      <div class="timestamps">
        <span class="d-flex justify-content-between">
          <p class="mb-0 courier"> Created: </p>
          <p class="mb-0 courier">
            {{ account.createdAt.toLocaleDateString() + ' @ ' + account.createdAt.toLocaleTimeString() }}</p>
        </span>
        <span class="d-flex justify-content-between">
          <p class="mb-0 courier">Updated: </p>
          <p class="mb-0 courier">
            {{ account.updatedAt.toLocaleDateString() + ' @ ' + account.updatedAt.toLocaleTimeString() }} </p>
        </span>
      </div>
    </div>
    <div class="fs-1 socials d-flex justify-content-center px-3 pt-5">
      <a :href="account.github" target="_blank"><i class="p-3 mdi mdi-github" title="icon for github"></i></a>
      <a :href="account.linkedin" target="_blank"><i class="p-3 mdi mdi-linkedin" title="icon for linked"></i></a>
      <a :href="account.resume" target="_blank"><i class="p-3 mdi mdi-file-account"
          title="icon for the user's resume"></i></a>
      <a :href="account.website" target="_blank"><i class="p-3 mdi mdi-web" title="icon for the user's website"></i></a>
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, onMounted } from 'vue';

export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
};
</script>


<style lang="scss" scoped>
img {
  max-width: 10rem;
}

.bgColor {
  background-color: #12345678;
}

.courier {
  font-family: 'Courier New', Courier, monospace;
}

.timestamps {
  width: 24rem;
}
</style>