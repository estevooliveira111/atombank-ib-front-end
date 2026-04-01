<template>
  <q-page>
    <div class="row q-col-gutter-lg">
      <div class="col-12">
        <h1 class="text-h1 q-mb-sm">{{ title }}</h1>
        <p class="text-body1 text-grey-8">Conteúdo em desenvolvimento para {{ title.toLowerCase() }}.</p>
      </div>

      <div class="col-12">
        <q-card class="p-md text-center q-py-xl border-dashed">
          <q-icon :name="icon" size="64px" color="grey-4" class="q-mb-md" />
          <div class="text-h2 text-grey-5">Em Breve</div>
          <p class="text-grey-6 text-body2">Esta funcionalidade estará disponível na próxima atualização.</p>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const pageData = {
  'activity': { title: 'Atividade', icon: 'history' },
  'pix': { title: 'Pix', icon: 'pix' },
  'loans': { title: 'Empréstimo', icon: 'request_quote' },
  'cards': { title: 'Cartões', icon: 'credit_card' }
}

const key = route.path.split('/').pop() || 'activity'
const title = computed(() => pageData[key]?.title || 'Página')
const icon = computed(() => pageData[key]?.icon || 'help')
</script>

<style lang="scss" scoped>
.border-dashed {
  border: 2px dashed $border-color !important;
  background: transparent !important;
}
</style>
