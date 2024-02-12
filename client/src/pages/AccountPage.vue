<template>
  <div class="container-fluid">
    <section class="row justify-content-evenly align-items-center">

      <div class="col-12 col-md-6 mt-5 mt-md-0 text-center text-light">
        <UserCard :profile="account" />
      </div>

      <div class="col-12 col-lg-6 col-xxl-5 py-5 pe-xl-5">
        <EditAccountForm />
      </div>

      <div class="col-12 py-5 pe-xl-5">
        <EditSettingsForm />
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
import UserCard from "../components/Account/UserCard.vue";
import EditAccountForm from "../components/Account/EditAccountForm.vue";
import EditSettingsForm from "../components/Account/EditSettingsForm.vue";

export default {
  setup() {

    return {
      account: computed(() => AppState.account),
      settings: computed(() => AppState.settings),

    };
  },
  components: { UserCard, EditAccountForm, EditSettingsForm }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
