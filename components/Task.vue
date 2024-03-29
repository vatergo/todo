<template>
  <div class="content">
    <div v-if="!editMode">
      <span
        ><a-icon
          v-if="task.status === 'new'"
          type="clock-circle"
          style="color: blue" />
        <a-icon
          v-else-if="task.status === 'done'"
          type="check-circle"
          style="color: green" />
        <a-icon v-else type="close-circle" style="color: red"
      /></span>
      <span class="label">{{ task.label }}</span>
      <a-button @click="enableEditMode" icon="edit" />
    </div>
    <form v-else @submit.prevent="saveTask">
      <a-input v-bind:default-value="innerLabel" @change="changeLabel" />
      <a-select v-bind:default-value="innerStatus" @change="changeStatus">
        <a-select-option value="done">Done</a-select-option>
        <a-select-option value="cancel">Cancel</a-select-option>
        <a-select-option value="new">New</a-select-option>
      </a-select>
      <a-button @click="deleteTask" icon="delete" />
      <a-button htmlType="submit" icon="save" />
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
    changeStatus(newStatus: Task["status"]) {
      this.innerStatus = newStatus;
    },
    changeLabel({ target }: InputEvent) {
      if (target instanceof HTMLInputElement) {
        this.innerLabel = target.value;
      }
    },
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

<style>
.content > div,
.content > form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}
.content > div button,
.content > form button {
  flex-shrink: 0;
}
.label {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
