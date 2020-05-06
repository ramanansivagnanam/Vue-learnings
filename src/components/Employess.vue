<template>
  <div>
    <h1>Listing Employee details</h1>
    <div v-for="emp in emplist" :key="emp.id" @click="handleDelete(emp.id)" class="emplyee-det">
      <h4>{{ emp.name }}</h4>
      <h4>{{ emp.location }}</h4>
    </div>
  </div>
</template>

<script>
export default {
 
  props: {
    emplist: {
      type: Array,
      required: true
    },
    deleteEmp: {
      type: Function,
      required: true
    }
  },
  setup(props){
     const handleDelete = proid => {
        props.deleteEmp(proid);
    }
    return { handleDelete };
  },

  // *** old option api implementation
//   methods: {
//     handleDelete: proid => {
//         this.deleteEmp(proid);
//     }
//   }
};
</script>

<style scoped>
.emplyee-det{
      border: 2px solid rgb(11, 58, 104);
      padding: 5px;
      margin: 5px;
      width: 60%;
      margin-left: 20%;
}
</style>>



