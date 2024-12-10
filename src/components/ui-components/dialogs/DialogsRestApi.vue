<script setup lang="ts">
import { ref, onMounted } from "vue";

const dialog = ref(false);
import { useApiRest } from "@/composables/useApiRest";

const { data, loading, error, fetchData } = useApiRest();
const openDialog = () => {
  dialog.value = true;
  fetchData();
};
</script>

<template>
  <div class="text-center mt-4 mt-sm-0">
    <v-btn color="primary" class="w-100" flat @click="openDialog">
      Ver
    </v-btn>
    <v-dialog v-model="dialog" class="dialog-mw">
      <v-card>
        <v-card-text>
          Resultado de api "localhost:8080/api/hello"
          <template v-if="loading">Cargando</template>
          <template v-else-if="error">Error: {{ error }}</template>
          <template v-else>{{ data }}</template>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="dialog = false" variant="tonal">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
