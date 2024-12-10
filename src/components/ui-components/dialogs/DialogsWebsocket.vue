<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useWebSocket } from "@/composables/useWebSocket"; // Importamos el composable de WebSocket

const dialog = ref(false); // Controla la apertura/cierre del diálogo
const { sendMessage,connect } = useWebSocket(); // WebSocket hooks
const newMessage = ref(""); // Para enviar nuevos mensajes


</script>

<template>
  <div class="text-center mt-4 mt-sm-0">
    <v-btn color="primary" class="w-100" flat @click="dialog = true">
      Open WebSocket Dialog
    </v-btn>
    <v-dialog v-model="dialog" class="dialog-mw">
      <v-card>
        <v-card-title>WebSocket Messages</v-card-title>
        <v-card-text>
          <ul>
            <!-- <li v-for="(message, index) in messages" :key="index">
              {{ message }}
            </li> -->
          </ul>
          <input
            v-model="newMessage"
            type="text"
            placeholder="Type your message"
            class="mt-4 w-100"
          />
          <v-btn
            color="primary"
            class="mt-2 w-100"
            flat
            @click="sendMessage(newMessage); newMessage = ''"
          >
            Send Message
          </v-btn>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="dialog = false" variant="tonal">
            Close Dialog
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
