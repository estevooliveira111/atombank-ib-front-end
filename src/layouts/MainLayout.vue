<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Topbar (Barra Superior) -->
    <q-header class="bg-white text-dark" style="height: 64px; border-bottom: 1px solid #E5E7EB;">
      <q-toolbar class="fit px-md">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" class="q-mr-md" />

        <q-toolbar-title class="text-weight-bold tracking-tight text-primary">
          ATOMBANK
        </q-toolbar-title>

        <q-space />

        <!-- Saldo da conta -->
        <div class="row items-center q-mr-lg gt-xs balance-section">
          <div class="column items-end q-mr-sm">
            <span class="text-caption text-grey-7 line-height-1">Saldo disponível</span>
            <div class="text-subtitle1 text-weight-bold line-height-1">
              <span v-if="showBalance">R$ 24.500,00</span>
              <span v-else>••••••••</span>
            </div>
          </div>
          <q-btn
            flat
            round
            dense
            :icon="showBalance ? 'visibility' : 'visibility_off'"
            color="grey-7"
            @click="showBalance = !showBalance"
          />
        </div>

        <!-- Ícone de Ajuda (Help) -->
        <q-btn flat round dense icon="help_outline" color="grey-7" class="q-mr-sm">
          <q-tooltip>Ajuda e Suporte</q-tooltip>
        </q-btn>

        <!-- Menu do Usuário -->
        <q-btn-dropdown flat no-caps stretch class="user-menu">
          <template v-slot:label>
            <div class="row items-center no-wrap">
              <q-avatar size="32px" class="q-mr-sm">
                <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
              </q-avatar>
              <div class="gt-sm text-body2 text-weight-bold">Estevão Nascimento</div>
            </div>
          </template>

          <q-list style="min-width: 180px" class="p-sm">
            <q-item clickable v-ripple v-close-popup class="rounded-borders q-mb-xs">
              <q-item-section avatar>
                <q-icon name="person_outline" />
              </q-item-section>
              <q-item-section>Perfil</q-item-section>
            </q-item>
            <q-item clickable v-ripple v-close-popup class="rounded-borders q-mb-xs">
              <q-item-section avatar>
                <q-icon name="account_circle" />
              </q-item-section>
              <q-item-section>Minha conta</q-item-section>
            </q-item>
            <q-item clickable v-ripple v-close-popup class="rounded-borders q-mb-xs">
              <q-item-section avatar>
                <q-icon name="security" />
              </q-item-section>
              <q-item-section>Segurança</q-item-section>
            </q-item>
            <q-item clickable v-ripple v-close-popup class="rounded-borders q-mb-sm">
              <q-item-section avatar>
                <q-icon name="key" />
              </q-item-section>
              <q-item-section>Chaves Pix</q-item-section>
            </q-item>

            <q-separator class="q-my-sm" />

            <q-item clickable v-ripple v-close-popup class="rounded-borders text-negative" to="/auth/login">
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>
              <q-item-section>Logout</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <!-- Sidebar (Menu Lateral) -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :width="240" class="bg-white">
      <q-scroll-area class="fit">
        <div class="q-pa-md q-mb-md">
          <div class="text-caption text-uppercase text-weight-bold text-grey-5 letter-spacing-1">Menu Principal</div>
        </div>

        <q-list padding class="menu-list q-gutter-y-xs q-px-sm">
          <q-item clickable v-ripple exact to="/" class="rounded-borders">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section>Início</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/transactions" class="rounded-borders">
            <q-item-section avatar>
              <q-icon name="list_alt" />
            </q-item-section>
            <q-item-section>Saldo e Extrato</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/activity" class="rounded-borders">
            <q-item-section avatar>
              <q-icon name="history" />
            </q-item-section>
            <q-item-section>Atividade</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/pix" class="rounded-borders">
            <q-item-section avatar>
              <q-icon name="pix" />
            </q-item-section>
            <q-item-section>Pix</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/loans" class="rounded-borders">
            <q-item-section avatar>
              <q-icon name="request_quote" />
            </q-item-section>
            <q-item-section>Empréstimo</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/cards" class="rounded-borders">
            <q-item-section avatar>
              <q-icon name="credit_card" />
            </q-item-section>
            <q-item-section>Cartões</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <!-- Área de Conteúdo -->
    <q-page-container class="bg-grey-1">
      <div class="q-pa-lg">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
const showBalance = ref(true)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style lang="scss" scoped>
.rounded-borders {
  border-radius: 8px !important;
}

.menu-list {
  .q-item {
    color: #6B7280;
    font-weight: 500;
    transition: all 0.2s ease;

    &.q-router-link--exact-active,
    &.q-router-link--active {
      background: rgba($primary, 0.08) !important;
      color: $primary !important;
      font-weight: 600;

      .q-icon {
        color: $primary !important;
      }
    }

    &:hover:not(.q-router-link--active) {
      background: rgba(0, 0, 0, 0.03);
      color: $text-primary;
    }
  }
}

.letter-spacing-1 {
  letter-spacing: 1px;
}

.line-height-1 {
  line-height: 1;
}

.balance-section {
  border-right: 1px solid #E5E7EB;
  padding-right: 16px;
  height: 32px;
}
</style>
