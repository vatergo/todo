<template>
  <main>
    <h1>TODO List</h1>
    <form class="createBlock" @submit.prevent="addTask">
      <input placeholder="Task name" v-model="taskName" />
      <button type="submit">Add</button>
    </form>
    <div class="tasksBlock">
      <Task
        class="task"
        v-for="task in $store.state.tasks"
        :key="task.id"
        :task="task"
      />
    </div>
  </main>
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
      this.$store.commit("ADD_TASK", this.taskName);
      this.taskName = "";
    },
  },
});
</script>
