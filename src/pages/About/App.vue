<template>
  <div id="app">
    <h1 v-if="show">Showing this content</h1>
    <br />
    <br />
    <button @click="toggleShow">Toggle above content</button>
    <EmployeeInfo :createEmployee="createEmployee" />
    <Employess :emplist="employess" :deleteEmp="deleteEmployee" />
  </div>
</template>

<script>
import { ref, getCurrentInstance } from "vue";
import EmployeeInfo from "../../components/EmployeeForm";
import Employess from "../../components/Employess";
import { useToggle } from "../../scripts/useToggle";
export default {
  name: "App",
  components: {
    EmployeeInfo,
    Employess
  },

  setup() {
    const employess = ref([]);
    console.log(show);
    const _contextins = getCurrentInstance();
    console.log(_contextins);
    const createEmployee = (name, location) => {
      const newEmp = {
        id: Math.random(),
        name: name,
        location: location
      };
      employess.value.push(newEmp);
    };
    const deleteEmployee = empid => {
      employess.value = employess.value.filter(emp => emp.id !== empid);
    };

    const { show , makeToggle: toggleShow } = useToggle();
    
    return { employess, show, createEmployee, deleteEmployee, toggleShow };
  }

  //  *** old option API implementation

  // data(){
  //   return{
  //     employess:[{
  //       id:Math.random(),
  //       name:"Ramanan",
  //       location:"Chennai"
  //     }]
  //   }
  // },
  // methods:{
  //   createEmployee:(name,location)=>{
  //     const newEmp = {
  //       id:Math.random(),
  //       name : name,
  //       location : location
  //     }
  //     this.employess.push(newEmp);
  //   },
  //   deleteEmployee:(empid)=>{
  //     this.employess = this.employess.filter(emp => emp.id !== empid)
  //   },
  // }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
