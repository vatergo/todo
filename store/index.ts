import { MutationTree } from "vuex";
import { Task } from "~/components/Task.vue";

export type RootState = {
  tasks: Task[];
};

export const state = (): RootState => ({
  tasks: [],
});

export const mutations: MutationTree<RootState> = {
  ADD_TASK: (state, label: Task["label"]) => {
    const id =
      state.tasks.length === 0 ? 0 : state.tasks[state.tasks.length - 1].id + 1;
    const createDate = new Date().toISOString();

    state.tasks.push({
      id,
      label,
      status: "new",
      created_at: createDate,
    });
  },
  EDIT_TASK: (state, task: Task) => {
    const index = state.tasks.findIndex(({ id }) => id === task.id);
    state.tasks.splice(index, 1, task);
  },
  DELETE_TASK: (state, id: Task["id"]) => {
    state.tasks.splice(
      state.tasks.findIndex((task) => task.id === id),
      1
    );
  },
};
