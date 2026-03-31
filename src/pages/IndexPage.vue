<template>
  <q-page>
    <div class="row q-col-gutter-lg">
      <!-- Welcome Section -->
      <div class="col-12">
        <h1 class="text-h1 q-mb-md">Dashboard</h1>
        <p class="text-body1 text-grey-8">Bem-vindo ao AtomBank. Aqui está o resumo das suas finanças.</p>
      </div>

      <!-- Stats Cards -->
      <div class="col-12 col-md-4">
        <q-card class="p-md">
          <div class="text-caption text-uppercase text-weight-bold text-grey-7 q-mb-xs">Saldo Total</div>
          <div class="text-h2 text-primary">R$ 24.500,00</div>
          <div class="text-body2 text-positive q-mt-sm">
            <q-icon name="trending_up" /> +12% este mês
          </div>
        </q-card>
      </div>

      <div class="col-12 col-md-4">
        <q-card class="p-md">
          <div class="text-caption text-uppercase text-weight-bold text-grey-7 q-mb-xs">Entradas (Mês)</div>
          <div class="text-h2">R$ 8.200,00</div>
          <div class="text-body2 text-grey-6 q-mt-sm">Previsão: R$ 10.000,00</div>
        </q-card>
      </div>

      <div class="col-12 col-md-4">
        <q-card class="p-md">
          <div class="text-caption text-uppercase text-weight-bold text-grey-7 q-mb-xs">Saídas (Mês)</div>
          <div class="text-h2 text-negative">R$ 3.450,00</div>
          <div class="text-body2 text-grey-6 q-mt-sm">45 transações realizadas</div>
        </q-card>
      </div>

      <!-- Recent Transactions Table -->
      <div class="col-12">
        <q-card class="q-mt-lg">
          <div class="q-pa-md row items-center justify-between">
            <div class="text-h3 q-mb-none">Transações Recentes</div>
            <q-btn color="primary" label="Ver Todas" flat class="q-px-md" />
          </div>

          <q-table
            :rows="rows"
            :columns="columns"
            row-key="id"
            flat
            binary-state-sort
            hide-pagination
            :rows-per-page-options="[0]"
          >
            <template v-slot:body-cell-status="props">
              <q-td :props="props">
                <q-chip
                  :color="props.value === 'Concluído' ? 'positive' : 'warning'"
                  text-color="white"
                  size="sm"
                  class="text-weight-bold"
                >
                  {{ props.value }}
                </q-chip>
              </q-td>
            </template>
          </q-table>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
const columns = [
  { name: 'date', label: 'Data', field: 'date', align: 'left' },
  { name: 'description', label: 'Descrição', field: 'description', align: 'left' },
  { name: 'amount', label: 'Valor', field: 'amount', align: 'right' },
  { name: 'status', label: 'Status', field: 'status', align: 'center' },
]

const rows = [
  { id: 1, date: '31/03/2026', description: 'Pagamento de Aluguel', amount: '- R$ 2.500,00', status: 'Concluído' },
  { id: 2, date: '30/03/2026', description: 'Depósito PIX - João Silva', amount: '+ R$ 1.200,00', status: 'Concluído' },
  { id: 3, date: '29/03/2026', description: 'Supermercado Extra', amount: '- R$ 450,20', status: 'Processando' },
  { id: 4, date: '28/03/2026', description: 'Venda de Produto A', amount: '+ R$ 3.500,00', status: 'Concluído' },
]
</script>
