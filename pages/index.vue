<template>
  <div class="container">
    <div class="form">
      <h1>TODO List</h1>
      <form class="createBlock" @submit.prevent="addTask">
        <a-input class="input" placeholder="Task name" v-model="taskName" />
        <a-button
          type="primary"
          htmlType="submit"
          v-bind:disabled="taskName.length === 0"
          icon="plus"
        />
      </form>
      <a-space direction="vertical" class="tasksBlock">
        <Task
          class="task"
          v-for="task in $store.state.tasks"
          :key="task.id"
          :task="task"
        />
      </a-space>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Task from "~/components/Task.vue";

export default Vue.extend({
  name: "IndexPage",
  data: () => ({
    taskName: "",
  }),
  methods: {
    addTask() {
      this.$store.dispatch("addTask", this.taskName);
      this.taskName = "";
    },
  },
});
</script>

<style>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 36px;
}
.form {
  width: 100%;
  max-width: 400px;
  padding: 24px;
  border: 1px solid lightblue;
  border-radius: 16px;
  max-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.createBlock {
  display: flex;
  gap: 8px;
  width: 100%;
  justify-content: space-between;
}
.createBlock button {
  flex-shrink: 0;
}
.input {
  width: 100%;
}
.tasksBlock {
  margin-top: 32px;
  overflow: auto;
  height: 100%;
}
</style>
