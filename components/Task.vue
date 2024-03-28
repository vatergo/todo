<template>
  <div class="content">
    <div v-if="!editMode">
      <span>{{ task.label }}</span>
      <span>{{ task.status }}</span>
      <button @click="enableEditMode">edit</button>
    </div>
    <form v-else @submit.prevent="saveTask">
      <input v-model="innerLabel" />
      <select v-model="innerStatus">
        <option value="done">Done</option>
        <option value="cancel">Cancel</option>
        <option value="new">New</option>
      </select>
      <button type="submit">save</button>
      <button @click="deleteTask">delete</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

export interface Task {
  id: number;
  label: string;
  status: "new" | "cancel" | "done";
  created_at: string;
}

export default Vue.extend({
  name: "Task",
  data: () => ({
    editMode: false,
  }),
  props: {
    task: {
      type: Object,
      required: true,
    } as PropOptions<Task>,
  },
  setup(props) {
    return {
      innerLabel: props.task.label,
      innerStatus: props.task.status,
    };
  },

  methods: {
    enableEditMode() {
      this.editMode = true;
    },
    deleteTask() {
      this.$store.commit("DELETE_TASK", this.task.id);
    },
    saveTask() {
      this.editMode = false;
      this.$store.commit("EDIT_TASK", {
        ...this.task,
        label: this.innerLabel,
        status: this.innerStatus,
      });
    },
  },
});
</script>
