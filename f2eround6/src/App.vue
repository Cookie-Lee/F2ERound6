<template>
  <!--<v-app id="app">
    <router-view />
  </v-app>-->
  <div>
    <ul class="pa-16 ma-16">
      <li
        v-for="item in myTodo"
        :key="item.id"
        @click="todoDone(item.id, !item.done)"
      >
        {{ item.todo }} - {{ item.done ? "已完成" : "未完成" }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "App",
  computed: {
    myTodo() {
      return this.$store.state.TodoListModules.todolist;
    },
  },
  methods: {
    todoDone(id, done) {
      this.$store.dispatch("TodoListModules/todoDone", { id, done });
    },
  },
};
</script>
<style>
@import "./assets/font/font.css";
</style>
