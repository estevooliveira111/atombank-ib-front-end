<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-primary text-white" height-hint="64">
      <q-toolbar style="height: 64px">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold"> ATOMBANK </q-toolbar-title>

        <div class="q-px-md">
          <q-btn flat round dense icon="notifications" class="q-mr-sm" />
          <q-avatar size="32px">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :width="240" class="bg-surface">
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item-label header class="text-caption text-uppercase text-weight-bold q-pb-sm">
            Menu Principal
          </q-item-label>

          <q-item clickable v-ripple exact to="/" class="q-mx-sm q-mb-xs rounded-borders">
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Dashboard</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/transactions" class="q-mx-sm q-mb-xs rounded-borders">
            <q-item-section avatar>
              <q-icon name="account_balance_wallet" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Transações</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/settings" class="q-mx-sm q-mb-xs rounded-borders">
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Configurações</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <div class="q-pa-lg">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style lang="scss" scoped>
.rounded-borders {
  border-radius: 8px;
}

.q-item.q-router-link--active {
  background: rgba($primary, 0.1);
  color: $primary;
  font-weight: 600;
}
</style>
