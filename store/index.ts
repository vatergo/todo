import { MutationTree, ActionTree } from "vuex";
import { Task } from "~/components/Task.vue";

export type RootState = {
  tasks: Task[];
};

export const state = (): RootState => ({
  tasks: [],
});

export const actions: ActionTree<RootState, RootState> = {
  addTask: ({ commit }, label: Task["label"]) =>
    new Promise((resolve) => resolve(commit("addTask", label))),
  editTask: ({ commit }, task: Task) =>
    new Promise((resolve) => resolve(commit("editTask", task))),
  deleteTask: ({ commit }, id: Task["id"]) =>
    new Promise((resolve) => resolve(commit("deleteTask", id))),
};

export const mutations: MutationTree<RootState> = {
  addTask: (state, label: Task["label"]) => {
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
  editTask: (state, task: Task) => {
    const index = state.tasks.findIndex(({ id }) => id === task.id);
    state.tasks.splice(index, 1, task);
  },
  deleteTask: (state, id: Task["id"]) => {
    state.tasks.splice(
      state.tasks.findIndex((task) => task.id === id),
      1
    );
  },
};
