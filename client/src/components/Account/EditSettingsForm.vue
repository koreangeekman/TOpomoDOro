<template>
  <form class="container-fluid card bg-light p-3" @submit.prevent="updateSettings()">
    <section class="row justify-content-between">
      <div class="col-12">
        <p class="fs-3 text-center">Edit Settings</p>
        <hr> <!--  --- ---  -->
      </div>

      <div class="col-12 col-md-6">
        <section class="viewSettings">
          <h4 class="ms-3 mb-3">View Mode</h4>
          <div class="m-3 mt-0 form-check form-switch">
            <input v-model="settings.viewMode.saveLastView" class="form-check-input" type="checkbox" id="saveLastView"
              checked>
            <label for="saveLastView" class="form-check-label">Save Last View Mode?</label>
            <p class="fs-6 text-secondary m-0"><small>Disable to configure a default view mode on refresh</small></p>
          </div>
          <div class="m-3 mt-0">
            <label v-if="settings.viewMode.saveLastView" for="viewMode">Active View Mode</label>
            <label v-else for="viewMode">Default View Mode</label>
            <select v-model="settings.viewMode.name" class="ms-2 form-select" id="viewMode">
              <option value="defaultPoDo">Pomodoro + ToDo</option>
              <option value="singleToDo">Single ToDo</option>
              <option value="multiToDo">Multiple ToDo</option>
            </select>
          </div>
          <div class="m-3 mt-0">
            <label for="hAlign">Horizontal Alignment</label>
            <select v-model="settings.viewMode.hAlign" class="ms-2 form-select" type="text" id="hAlign">
              <option value="justify-content-start">Left</option>
              <option value="justify-content-center">Center</option>
              <option value="justify-content-end">Right</option>
              <option value="justify-content-between">Between</option>
              <option value="justify-content-around">Around</option>
              <option value="justify-content-evenly">Evenly</option>
            </select>
          </div>
          <div class="m-3 mt-0">
            <label for="vAlign">Vertical Alignment</label>
            <select v-model="settings.viewMode.vAlign" class="ms-2 form-select" id="vAlign">
              <option value="align-items-start">Top</option>
              <option value="align-items-center">Middle</option>
              <option value="align-items-end">Bottom</option>
            </select>
          </div>
          <div class="m-3 mt-0">
            <label for="pomoColWidth">Pomodoro Max Column Width</label>
            <input v-model="settings.viewMode.pomoColWidth" class="ms-2 form-control" type="number" id="pomoColWidth"
              min="1" max="11">
          </div>
          <div class="m-3 mt-0">
            <label for="todoColWidth">To-Do Max Column Width</label>
            <input v-model="settings.viewMode.todoColWidth" class="ms-2 form-control" type="number" id="todoColWidth"
              min="1" max="11">
          </div>
        </section>

        <hr> <!--  --- ---  -->
        <section class="pomoSettings">
          <h4 class="ms-3 mb-3">Pomodoro Settings</h4>
          <div class="m-3 mt-0 form-check form-switch">
            <input v-model="settings.pomodoro.lockRatio" class="form-check-input" type="checkbox" id="lockRatio">
            <label for="lockRatio" class="form-check-label">Lock Work to Break Time Ratio?</label>
            <p class="fs-6 text-secondary m-0"><small>Disable to configure a default view mode on refresh</small></p>
          </div>
          <div class="m-3 mt-0">
            <label for="workTime">Work Time</label>
            <input v-model="settings.pomodoro.workTime" class="ms-2 form-control" type="number" id="workTime" min="1"
              max="1440">
          </div>
          <div class="m-3 mt-0">
            <label for="breakTime">Break Time</label>
            <input v-model="settings.pomodoro.breakTime" class="ms-2 form-control" type="number" id="breakTime" min="1"
              max="288">
          </div>
          <div class="m-3 mt-0">
            <label for="cycles">Cycle Count</label>
            <input v-model="settings.pomodoro.cycles" class="ms-2 form-control" type="number" id="cycles" min="1"
              max="48">
          </div>
          <div class="m-3 mt-0">
            <label for="pomoColWidth">Max Column Width (Pomodoro Only Views)</label>
            <input v-model="settings.pomodoro.pomoColWidth" class="ms-2 form-control" type="number" id="pomoColWidth"
              min="1" max="12">
          </div>
        </section>

        <hr> <!--  --- ---  -->
        <section class="todoSettings">
          <h4 class="ms-3 mb-3">To Do Settings</h4>
          <div class="m-3 mt-0">
            <label for="github">Active Project</label>
            <input v-model="settings.todo.project" class="ms-2 form-control" type="url" id="github" maxlength="64">
          </div>
          <div class="m-3 mt-0">
            <label for="todoColWidth">Max Column Width (To-Do Only Views)</label>
            <input v-model="settings.todoColWidth" class="ms-2 form-control" type="number" id="todoColWidth" min="1"
              max="12">
          </div>
        </section>
      </div>

      <div class="col-12 col-md-6">
        <section class="quoteSettings">
          <hr class="d-block d-md-none"> <!--  --- ---  -->
          <h4 class="ms-3 mb-3">Quote Settings</h4>
          <div class="m-3 mt-0 form-check form-switch">
            <input v-model="settings.quote.enabled" class="form-check-input" type="checkbox" id="enableQuotes">
            <label for="enableQuotes" class="form-check-label">Enable Quotes?</label>
          </div>
          <div class="m-3 mt-0 form-check form-switch">
            <input v-model="settings.quote.autoChange" class="form-check-input" type="checkbox" id="enableQuoteAutoChange"
              :disabled="!settings.bgImg.enable">
            <label for="enableQuoteAutoChange" class="form-check-label">Enable an Auto Refresh Interval?</label>
          </div>
          <div class="m-3 mt-0">
            <label for="todoColWidth">Refresh Cycle (in hours)</label>
            <input v-model="settings.quote.cycle" class="ms-2 form-control" type="number" id="todoColWidth" min="1"
              max="24" :disabled="!settings.bgImg.enable && !settings.quote.autoChange">
          </div>
        </section>

        <section class="clockSettings">
          <hr> <!--  --- ---  -->
          <h4 class="ms-3 mb-3">Clock Settings</h4>
          <div class="m-3 mt-0">
            <label for="timeFormat">Time Format (12 vs 24 hr)</label>
            <select v-model="settings.clock.timeFormat" class="ms-2 form-select" id="timeFormat">
              <option value="12">12 hour</option>
              <option value="24">24 hour</option>
            </select>
          </div>
          <div class="m-3 mt-0">
            <label for="timeZone">Timezone: UTC + #</label>
            <input v-model="settings.clock.timeZone" class="ms-2 form-control" type="number" id="timeZone" min="-12"
              max="14">
          </div>
        </section>

        <section class="bgImgSettings">
          <hr> <!--  --- ---  -->
          <h4 class="ms-3 mb-3">Background Image Settings</h4>
          <div class="m-3 mt-0 form-check form-switch">
            <input v-model="settings.bgImg.enable" class="form-check-input" type="checkbox" id="enableBGImage">
            <label for="enableBGImage" class="form-check-label">Enable Background Images</label>
          </div>
          <div class="m-3 mt-0 form-check form-switch">
            <input v-model="settings.bgImg.autoChange" class="form-check-input" type="checkbox" id="enableBGImgAutoChange"
              :disabled="!settings.bgImg.enable">
            <label for="enableBGImgAutoChange" class="form-check-label">Enable Automated Random Background Image</label>
          </div>
          <div class="m-3 mt-0">
            <label for="customBGImg">Custom Background by URL</label>
            <input v-model="settings.bgImg.customBGImg" class="ms-2 form-control" type="url" id="customBGImg"
              maxlength="256" :disabled="!settings.bgImg.enable && settings.bgImg.enableAutoChange">
          </div>
          <div class="m-3 mt-0">
            <label for="todoColWidth">Refresh Cycle (in hours)</label>
            <input v-model="settings.quote.cycle" class="ms-2 form-control" type="number" id="todoColWidth" min="1"
              max="24" :disabled="!settings.bgImg.enable && !settings.quote.autoChange">
          </div>
        </section>

        <hr> <!--  --- ---  -->
        <section class="weather">
          <h4 class="ms-3 mb-3">Weather Settings</h4>
          <div class="m-3 mt-0">
            <label for="city">City</label>
            <input v-model="settings.weather.city" class="ms-2 form-control" type="text" id="city" maxlength="64">
          </div>
          <div class="m-3 mt-0">
            <label for="locationLon">Longitude:</label>
            <input v-model="settings.weather.location.lon" class="ms-2 form-control" type="text" id="locationLon"
              maxlength="10">
            <label for="locationLat">Latitude:</label>
            <input v-model="settings.weather.location.lat" class="ms-2 form-control" type="text" id="locationLat"
              maxlength="10">
          </div>
          <div class="m-3 mt-0">
            <label for="format">Temperature Format</label>
            <input v-model="settings.weather.format" class="ms-2 form-control" type="text" id="todoColWidth">
          </div>
        </section>

      </div>

      <div class="col-12">
        <hr> <!--  --- ---  -->
        <hr class="d-block d-md-none"> <!--  --- ---  -->
      </div>

      <div class="d-flex justify-content-center pe-3">
        <button class="btn btn-success">Submit Changes</button>
      </div>
    </section>
  </form>
</template>


<script>
import { ref, watchEffect } from "vue";
import { AppState } from "../../AppState";
import { accountService } from "../../services/AccountService";
import Pop from "../../utils/Pop";

export default {
  setup() {

    const settings = ref({});

    watchEffect(() => {
      if (AppState.settings) {
        settings.value = { ...AppState.settings };
      }
      else {
        settings.value = {};
      }
    });

    return {
      settings,
      async updateSettings() {
        try { await accountService.updateSettings(settings.value); }
        catch (error) { Pop.error(error); }
      }
    }
  }
};
</script>


<style lang="scss" scoped></style>