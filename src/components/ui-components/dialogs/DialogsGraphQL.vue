<script setup lang="ts">
import { ref, computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { gql } from '@apollo/client/core';

const dialog = ref(false);
const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

const { result, loading, error } = useQuery(GET_USERS);
const users = computed(() => result.value?.users ?? []);
</script>

<template>
  <div class="text-center mt-4 mt-sm-0">
    <v-btn color="primary" class="w-100" flat @click="dialog = true">
      Ver lista de usuarios
      <v-dialog v-model="dialog" class="dialog-mw">
        <v-card>
          <v-card-title>Get List Users from GraphQL</v-card-title>
          <v-card-item>
            <v-card-text>
              <div v-if="loading">Loading users...</div>
              <div v-else-if="error">Error: {{ error.message }}</div>
              <div v-else>
                <ul>
                  <li v-for="user in users" :key="user.id">
                    {{ user.name }} ({{ user.email }})
                  </li>
                </ul>
              </div>
            </v-card-text>  
          </v-card-item>
          <v-card-actions>
            <v-btn color="primary" @click="dialog = false" variant="tonal">
              Cerrar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
</template>
