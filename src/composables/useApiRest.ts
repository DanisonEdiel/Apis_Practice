import {apiRest} from "@/api/axios";
import { ref } from "vue";

export function useApiRest() {
  const data = ref<string | null>(null); 
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchData = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await apiRest.get('/hello');
      data.value = response.data;
    } catch (err: any) {
      error.value = err.message || "Error al obtener los datos";
    } finally {
      loading.value = false;
    }
  };

  return {
    data,
    loading,
    error,
    fetchData,
  };
}
