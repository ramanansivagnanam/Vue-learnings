import { ref } from "vue";

export const useToggle = () => {

    const show = ref(true);
    const makeToggle = () =>{
        return show.value = ! show.value;
    }
    return { show , makeToggle };
}