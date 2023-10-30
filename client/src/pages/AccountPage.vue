<template>
  <div class="container-fluid">
    <section class="row align-items-center">

      <div class="col-12 col-md-6 about text-center p-3 order-1 order-md-1">
        <h1>Welcome {{ account.name }}</h1>
        <img class="rounded-circle mt-2 mb-3" :src="account.picture" alt="" />
        <p>{{ account.email }}</p>
        <p class="mb-0"> Account Created: {{ account.createdAt ? account.createdAt.toLocaleDateString() : '' }}</p>
        <p class="mb-0">Last updated: {{ account.updatedAt ? account.updatedAt.toLocaleDateString() : '' }}</p>
      </div>

      <div class="col-12 col-md-6 text-center p-3 order-2 order-md-3">
        <div class="fs-1 socials d-flex justify-content-center p-3">
          <a :href="account.github" target="_blank"><i class="p-3 mdi mdi-github" title="icon for github"></i></a>
          <a :href="account.linkedin" target="_blank"><i class="p-3 mdi mdi-linkedin" title="icon for linked"></i></a>
          <a :href="account.resume" target="_blank"><i class="p-3 mdi mdi-file-account" title="icon for the user's resume"></i></a>
          <a :href="account.website" target="_blank"><i class="p-3 mdi mdi-web" title="icon for the user's website"></i></a>
        </div>
      </div>

      <div class="col-12 col-md-6 p-3 order-3 order-md-2">
        <form class="d-flex justify-content-center card p-3" @submit.prevent="updateProfile()">
          <div>
            <p class="mb-0 fs-3 p-2 text-center">Edit profile</p>
            <hr>
            <div class="d-flex justify-content-between">
              <section class="user px-3 pb-3">
                <span class="">
                  <label for="name">Name</label>
                  <input v-model="editable.name" class="ms-2 form-control" type="text" id="name" maxlength="100">
                </span>
                <br>
                <span class="">
                  <label for="picture">User Picture URL</label>
                  <input v-model="editable.picture" class="ms-2 form-control" type="url" id="picture" maxlength="200">
                </span>
              </section>

            <section class="socials pe-4">
              <span class="">
                <label for="github">Github</label>
                <input v-model="editable.github" class="ms-2 form-control" type="url" id="github" maxlength="100">
              </span>
              <br>
              <span class="">
                <label for="linkedin">LinkedIn</label>
                <input v-model="editable.linkedin" class="ms-2 form-control" type="url" id="linkedin" maxlength="100">
              </span>
              <br>
              <span class="">
                <label for="resume">Resume</label>
                <input v-model="editable.resume" class="ms-2 form-control" type="text" id="resume" maxlength="100">
              </span>
              <br>
              <span class="">
                <label for="website">Website</label>
                <input v-model="editable.website" class="ms-2 form-control" type="text" id="website" maxlength="100">
              </span>
            </section>
          </div>

            <div class="">
              <div class="mx-3 mb-3 pe-2">
                <label for="bio">Bio</label>
                <textarea v-model="editable.bio" class="ms-2 form-control" name="bio" id="bio" rows="3"
                  maxlength="5000"></textarea>
              </div>
            </div>

            <hr>

            <div class="d-flex justify-content-center pe-3">
              <button class="btn btn-success">Submit Changes</button>
            </div>

          </div>

        </form>

    </div>

  </section>
</div>

</template>

<script>
import { computed, ref, watchEffect } from 'vue';
import { AppState } from '../AppState';
import { accountService } from "../services/AccountService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
export default {
  setup() {
    const editable = ref({});

    watchEffect(() => {
      if (AppState.account) {
        editable.value = { ...AppState.account };
      } else {
        editable.value = {};
      }
    })

    return {
      editable,

      account: computed(() => AppState.account),

      async updateProfile() {
        try {
          await accountService.updateProfile(editable.value);
        } catch (error) {
          logger.error(error);
          Pop.error(error); 
        }
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 10rem;
}

form button {
  width: fit-content;
}
</style>
