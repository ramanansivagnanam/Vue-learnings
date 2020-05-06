<template>
  <div>
    <form @submit="handleSubmit">
      <h1>Employee information</h1>
      <input type="text" placeholder="name" v-model="empInfo.empName" />
      <br />
      <br />
      <input type="text" placeholder="location" v-model="empInfo.empLoc" />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  props: {
    createEmployee: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const empInfo = reactive({
      empName: ref(''),
      empLoc: ref('')
    });

    const handleSubmit = event => {
      event.preventDefault();
      props.createEmployee(empInfo.empName,empInfo.empLoc);
      empInfo.empName = "";
      empInfo.empLoc = "";
    };
    return { empInfo , handleSubmit };
  }

//   old option api implementation

  // data(){
  //     return{
  //         empName:'',
  //         empLoc:'',
  //     }
  // },
  // methods:{
  //      handleSubmit : (event)=>{
  //      event.preventDefault();
  //      this.createEmployee(this.empName,this.empLoc);
  //      this.empName = '';
  //      this.empLoc = '';
  //    },
  // },
};
</script>

<style>
</style>